import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

// Map a product name or slug to a guide PDF path
function findGuidePdf(productName: string): string | null {
  const pdfsDir = path.join(process.cwd(), 'public', 'guide-pdfs');
  if (!fs.existsSync(pdfsDir)) return null;

  // Convert productName to a slug-like string for matching
  const normalized = productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const files = fs.readdirSync(pdfsDir).filter(f => f.endsWith('.pdf'));

  // Exact match first
  const exact = files.find(f => f.replace('.pdf', '') === normalized);
  if (exact) return path.join(pdfsDir, exact);

  // Fuzzy: longest common prefix or best overlap
  let bestFile: string | null = null;
  let bestScore = 0;
  for (const file of files) {
    const slug = file.replace('.pdf', '');
    // Count matching words
    const slugWords = slug.split('-');
    const normWords = normalized.split('-');
    const overlap = slugWords.filter(w => normWords.includes(w)).length;
    const score = overlap / Math.max(slugWords.length, normWords.length);
    if (score > bestScore) {
      bestScore = score;
      bestFile = file;
    }
  }

  // Only return if reasonably confident (>50% word match)
  if (bestFile && bestScore > 0.5) {
    return path.join(pdfsDir, bestFile);
  }

  return null;
}

// Read PDF and return as base64 for Resend attachment
function pdfToAttachment(pdfPath: string, filename: string) {
  const buffer = fs.readFileSync(pdfPath);
  return {
    filename,
    content: buffer.toString('base64'),
    type: 'application/pdf',
  };
}

// ─── Shared HTML helpers ────────────────────────────────────────────────

const logoHtml = `
  <div style="text-align:center;margin-bottom:32px;">
    <span style="font-size:24px;font-weight:900;letter-spacing:-0.02em;">
      <span style="color:#FFD700;">My </span><span style="color:#F97316;font-size:1.2em;">AI </span><span style="color:#FFD700;">Workforce</span>
    </span>
  </div>`;

const footerHtml = `
  <p style="color:#444444;font-size:12px;text-align:center;margin-top:24px;">
    © ${new Date().getFullYear()} My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#444444;">myaiworkforce.ai</a>
  </p>`;

// ─── sendPurchaseConfirmation ────────────────────────────────────────────────

export async function sendPurchaseConfirmation({
  to,
  productName,
  downloadUrl,
  price,
  type,
}: {
  to: string;
  productName: string;
  downloadUrl: string;
  price: string;
  type: 'guide' | 'agent' | 'done-for-you';
}) {
  // ── Done-For-You: delegate to onboarding welcome ──
  if (type === 'done-for-you') {
    return sendOnboardingWelcome({ to, clientName: '', plan: productName });
  }

  const isGuide = type === 'guide';
  const label = isGuide ? 'Guide' : 'Agent Files';

  const subject = isGuide
    ? `Your guide is ready: ${productName}`
    : `Your agent files are ready: ${productName}`;

  // Try to attach PDF for guides
  const attachments: ReturnType<typeof pdfToAttachment>[] = [];
  let pdfAttachedNote = '';

  if (isGuide) {
    const pdfPath = findGuidePdf(productName);
    if (pdfPath) {
      const filename = path.basename(pdfPath);
      attachments.push(pdfToAttachment(pdfPath, filename));
      pdfAttachedNote = `
        <div style="background:#0f2a0f;border:1px solid #1a5c1a;border-radius:12px;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">📎</span>
          <span style="color:#4ade80;font-size:14px;font-weight:600;">Your guide PDF is attached to this email.</span>
        </div>`;
    }
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#0A0A0A;color:#ffffff;font-family:Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        ${logoHtml}
        <div style="background:#111111;border:1px solid #222222;border-radius:16px;padding:40px;">
          <h1 style="color:#FFD700;font-size:28px;margin:0 0 8px;">🎉 Payment Confirmed!</h1>
          <p style="color:#888888;margin:0 0 32px;">Thank you for your purchase.</p>

          <div style="background:#0A0A0A;border:1px solid #333333;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#888888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your Purchase</p>
            <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0 0 4px;">${productName}</p>
            <p style="color:#FFD700;font-size:16px;font-weight:600;margin:0;">${price}</p>
          </div>

          ${pdfAttachedNote}

          <a href="${downloadUrl}" style="display:block;background:#FFD700;color:#0A0A0A;text-align:center;padding:16px 32px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;margin-bottom:24px;">
            ${isGuide ? `Download Your ${label} →` : `Download Your ${label} (ZIP) →`}
          </a>

          <p style="color:#666666;font-size:14px;text-align:center;margin:0;">
            Link expires in 7 days. Questions? Reply to this email or contact <a href="mailto:hi@myaiworkforce.ai" style="color:#FFD700;">hi@myaiworkforce.ai</a>
          </p>
        </div>
        ${footerHtml}
      </div>
    </body>
    </html>
  `;

  return resend.emails.send({
    from: 'My AI Workforce <monty@myaiworkforce.ai>',
    replyTo: 'hi@myaiworkforce.ai',
    to,
    subject,
    html,
    attachments: attachments.length > 0 ? attachments : undefined,
  });
}

// ─── sendOnboardingWelcome ────────────────────────────────────────────────────

export async function sendOnboardingWelcome({
  to,
  clientName,
  plan,
}: {
  to: string;
  clientName: string;
  plan: string;
}) {
  const greeting = clientName ? `Welcome aboard, ${clientName}! 🚀` : `Welcome to My AI Workforce! 🚀`;
  const subtext = clientName
    ? 'Your AI workforce journey starts now.'
    : "You&apos;ve taken the first step toward automating your business with AI.";

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#0A0A0A;color:#ffffff;font-family:Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        ${logoHtml}
        <div style="background:#111111;border:1px solid #222222;border-radius:16px;padding:40px;">
          <h1 style="color:#FFD700;font-size:28px;margin:0 0 8px;">${greeting}</h1>
          <p style="color:#888888;margin:0 0 32px;">${subtext}</p>

          ${plan ? `
          <div style="background:#0A0A0A;border:1px solid #333333;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#888888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your Plan</p>
            <p style="color:#FFD700;font-size:20px;font-weight:700;margin:0;">${plan}</p>
          </div>` : ''}

          <h2 style="color:#ffffff;font-size:18px;margin:0 0 20px;">What happens next:</h2>

          <!-- Step 1 -->
          <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0A0A0A;font-size:14px;text-align:center;line-height:36px;">1</div>
            <div>
              <p style="color:#ffffff;font-weight:700;margin:0 0 4px;font-size:15px;">Private Server Setup</p>
              <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">We&apos;ll provision your dedicated AI server within the next 24 hours. Your data never touches shared infrastructure.</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0A0A0A;font-size:14px;text-align:center;line-height:36px;">2</div>
            <div>
              <p style="color:#ffffff;font-weight:700;margin:0 0 4px;font-size:15px;">Discovery Call with Toby</p>
              <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">Book a call below so we can understand your business, workflows, and exactly where AI can save you the most time.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div style="display:flex;gap:16px;margin-bottom:36px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0A0A0A;font-size:14px;text-align:center;line-height:36px;">3</div>
            <div>
              <p style="color:#ffffff;font-weight:700;margin:0 0 4px;font-size:15px;">We Build Your Custom AI Agents</p>
              <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">Toby and the team build, configure, and deploy your AI agents — tailored specifically to your business and tools.</p>
            </div>
          </div>

          <a href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" style="display:block;background:#FFD700;color:#0A0A0A;text-align:center;padding:16px 32px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;margin-bottom:32px;">
            📅 Book Your Discovery Call →
          </a>

          <div style="background:#0A0A0A;border:1px solid #F97316;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#F97316;font-weight:700;margin:0 0 8px;">🔒 Your data stays private</p>
            <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">Your AI agents run on a private server dedicated entirely to your business. Every action is logged and auditable. You can revoke access at any time.</p>
          </div>

          <p style="color:#666666;font-size:14px;text-align:center;margin:0;">
            Questions? Reach out directly to Toby at <a href="mailto:toby@myaiworkforce.ai" style="color:#FFD700;">toby@myaiworkforce.ai</a>
          </p>
        </div>
        ${footerHtml}
      </div>
    </body>
    </html>
  `;

  return resend.emails.send({
    from: 'My AI Workforce <monty@myaiworkforce.ai>',
    replyTo: 'toby@myaiworkforce.ai',
    to,
    subject: clientName
      ? `Welcome to My AI Workforce, ${clientName}! Your AI workforce is being built 🚀`
      : `Welcome to My AI Workforce! Your AI workforce is being built 🚀`,
    html,
  });
}
