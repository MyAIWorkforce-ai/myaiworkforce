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
      <span style="color:#c9a84c;">My </span><span style="color:#ffffff;font-size:1.2em;">AI </span><span style="color:#c9a84c;">Workforce</span>
    </span>
  </div>`;

const footerHtml = `
  <p style="color:#888888;font-size:12px;text-align:center;margin-top:24px;">
    © ${new Date().getFullYear()} My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#c9a84c;">myaiworkforce.ai</a>
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
        <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">📎</span>
          <span style="color:#1a1a2e;font-size:14px;font-weight:600;">Your guide PDF is attached to this email.</span>
        </div>`;
    }
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#f5f5f5;color:#1a1a2e;font-family:Helvetica Neue,Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="background:#1a1a2e;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
          <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
          <h1 style="color:#ffffff;font-size:1.5rem;font-weight:700;margin:0;">🎉 Payment Confirmed!</h1>
          <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:0.9rem;">Thank you for your purchase.</p>
        </div>
        <div style="background:#ffffff;padding:36px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">

          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
            <p style="color:#888;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px;">Your Purchase</p>
            <p style="color:#1a1a2e;font-size:1.1rem;font-weight:700;margin:0 0 4px;">${productName}</p>
            <p style="color:#c9a84c;font-size:1rem;font-weight:600;margin:0;">${price}</p>
          </div>

          ${pdfAttachedNote}

          <a href="${downloadUrl}" style="display:block;background:#c9a84c;color:#1a1a2e;text-align:center;padding:16px 32px;border-radius:8px;font-weight:700;font-size:1rem;text-decoration:none;margin-bottom:24px;">
            ${isGuide ? `Download Your ${label} →` : `Download Your ${label} (ZIP) →`}
          </a>

          <p style="color:#888;font-size:0.85rem;text-align:center;margin:0;">
            Link expires in 7 days. Questions? Reply to this email or contact <a href="mailto:monty@myaiworkforce.ai" style="color:#c9a84c;">monty@myaiworkforce.ai</a>
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
  const firstName = clientName ? clientName.split(' ')[0] : '';
  const greeting = firstName ? `Welcome aboard, ${firstName}! 🚀` : `Welcome aboard! 🚀`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#f5f5f5;color:#1a1a2e;font-family:'Helvetica Neue',Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="background:#1a1a2e;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
          <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
          <h1 style="color:#ffffff;font-size:1.5rem;font-weight:700;margin:0;">${greeting}</h1>
          <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:0.9rem;">Your AI agent is being built. Here's what happens next.</p>
        </div>
        <div style="background:#ffffff;padding:36px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">

          <p style="color:#333;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">Payment received — you're all set. I'm Monty, your AI assistant at My AI Workforce. I'll be handling your setup and keeping you updated every step of the way.</p>

          <!-- Step 1 -->
          <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:14px;text-align:center;line-height:36px;flex-shrink:0;">1</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 4px;font-size:15px;">We get straight to work</p>
              <p style="color:#666;font-size:14px;margin:0;line-height:1.6;">Our team starts building your custom AI agent immediately — tailored to your business, your tools, and your workflows.</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:14px;text-align:center;line-height:36px;flex-shrink:0;">2</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 4px;font-size:15px;">Short setup questionnaire</p>
              <p style="color:#666;font-size:14px;margin:0;line-height:1.6;">I'll follow up shortly with a few quick questions so we can personalise your agent and connect it to your tools. Takes about 5 minutes.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div style="display:flex;gap:16px;margin-bottom:32px;align-items:flex-start;">
            <div style="min-width:36px;height:36px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:14px;text-align:center;line-height:36px;flex-shrink:0;">3</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 4px;font-size:15px;">Your agent goes live — within 24 hours</p>
              <p style="color:#666;font-size:14px;margin:0;line-height:1.6;">Once connected, your agent is live and working for you around the clock — handling emails, bookings, enquiries and more.</p>
            </div>
          </div>

          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:32px;">
            <p style="color:#1a1a2e;font-weight:700;margin:0 0 4px;">🔒 Your data stays private</p>
            <p style="color:#555;font-size:0.9rem;margin:0;line-height:1.6;">Your agent runs on a dedicated private server — your data never touches shared infrastructure.</p>
          </div>

          <p style="color:#333;font-size:0.95rem;margin:0;">Keep an eye on your inbox — I'll be in touch shortly.</p>
          <p style="color:#333;font-size:0.95rem;margin-top:16px;">— <strong>Monty</strong><br><span style="color:#888;font-size:0.85rem;">AI Assistant — My AI Workforce</span></p>

          <div style="border-top:1px solid #e8e8e8;margin-top:32px;padding-top:16px;">
            <p style="color:#aaa;font-size:0.8rem;text-align:center;margin:0;">Questions? Reply to this email or contact <a href="mailto:monty@myaiworkforce.ai" style="color:#c9a84c;">monty@myaiworkforce.ai</a></p>
          </div>
        </div>
        ${footerHtml}
      </div>
    </body>
    </html>
  `;

  return resend.emails.send({
    from: 'Monty <monty@myaiworkforce.ai>',
    replyTo: 'monty@myaiworkforce.ai',
    to,
    subject: firstName
      ? `You're in, ${firstName}! Your AI agent is being built 🚀`
      : `You're in! Your AI agent is being built 🚀`,
    html,
  });
}

// ─── sendOnboardingSetup (Email #2) ──────────────────────────────────────────

export async function sendOnboardingSetup({
  to,
  clientName,
}: {
  to: string;
  clientName: string;
}) {
  const firstName = clientName ? clientName.split(' ')[0] : '';
  const greeting = firstName ? `One more thing, ${firstName}` : `One more thing`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#f5f5f5;color:#1a1a2e;font-family:Helvetica Neue,Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="background:#1a1a2e;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
          <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
          <h1 style="color:#ffffff;font-size:1.4rem;font-weight:700;margin:0;">${greeting} — two quick things 👇</h1>
          <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:0.9rem;">Needed before we can go live</p>
        </div>
        <div style="background:#ffffff;padding:36px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">

          <p style="color:#333;font-size:0.95rem;line-height:1.7;margin:0 0 28px;">We're already working on your agent. Before we go live, we just need two things from you — shouldn't take more than 5 minutes.</p>

          <!-- Thing 1: Telegram -->
          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:20px;">
            <p style="color:#1a1a2e;font-weight:700;font-size:1rem;margin:0 0 8px;">📱 1. Set up Telegram</p>
            <p style="color:#555;font-size:0.9rem;margin:0 0 12px;line-height:1.6;">Telegram is how you'll communicate with your AI agent — send it tasks, ask questions, get updates. It's free and takes 2 minutes to set up.</p>
            <p style="color:#555;font-size:0.9rem;margin:0 0 4px;line-height:1.6;"><strong>Step 1:</strong> Download Telegram — <a href="https://telegram.org" style="color:#c9a84c;">telegram.org</a> (or search "Telegram" in your app store)</p>
            <p style="color:#555;font-size:0.9rem;margin:0 0 4px;line-height:1.6;"><strong>Step 2:</strong> Create a free account with your mobile number</p>
            <p style="color:#555;font-size:0.9rem;margin:0;line-height:1.6;"><strong>Step 3:</strong> Reply to this email with your Telegram username so I can connect your agent to you</p>
          </div>

          <!-- Thing 2: AI Brain -->
          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
            <p style="color:#1a1a2e;font-weight:700;font-size:1rem;margin:0 0 8px;">🤖 2. Choose your AI brain</p>
            <p style="color:#555;font-size:0.9rem;margin:0 0 12px;line-height:1.6;">Your agent can run on either Anthropic or OpenAI — both are excellent. Here's a quick comparison:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-bottom:12px;">
              <tr style="background:#1a1a2e;color:#fff;">
                <th style="padding:8px 12px;text-align:left;border-radius:6px 0 0 0;"></th>
                <th style="padding:8px 12px;text-align:left;">Anthropic — Claude Sonnet ⭐ Recommended</th>
                <th style="padding:8px 12px;text-align:left;border-radius:0 6px 0 0;">OpenAI — ChatGPT</th>
              </tr>
              <tr style="background:#f8f8ff;">
                <td style="padding:8px 12px;color:#555;font-weight:600;">Best for</td>
                <td style="padding:8px 12px;color:#333;">Business tasks, emails, analysis</td>
                <td style="padding:8px 12px;color:#333;">General purpose, coding</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#555;font-weight:600;">Speed</td>
                <td style="padding:8px 12px;color:#333;">Very fast</td>
                <td style="padding:8px 12px;color:#333;">Fast</td>
              </tr>
              <tr style="background:#f8f8ff;">
                <td style="padding:8px 12px;color:#555;font-weight:600;">Our pick</td>
                <td style="padding:8px 12px;color:#c9a84c;font-weight:700;">✓ Yes</td>
                <td style="padding:8px 12px;color:#333;">Also great</td>
              </tr>
            </table>
            <p style="color:#888;font-size:0.85rem;margin:0;">Not sure? Just say "go with your recommendation" and we'll set up Claude Sonnet for you.</p>
          </div>

          <p style="color:#333;font-size:0.95rem;margin:0;">Just reply to this email with your Telegram username and your AI brain choice — and we'll take it from there.</p>
          <p style="color:#333;font-size:0.95rem;margin-top:16px;">— <strong>Monty</strong><br><span style="color:#888;font-size:0.85rem;">AI Assistant — My AI Workforce</span></p>

          <div style="border-top:1px solid #e8e8e8;margin-top:32px;padding-top:16px;">
            <p style="color:#aaa;font-size:0.8rem;text-align:center;margin:0;">Questions? Reply to this email or contact <a href="mailto:monty@myaiworkforce.ai" style="color:#c9a84c;">monty@myaiworkforce.ai</a></p>
          </div>
        </div>
        <p style="color:#888;font-size:12px;text-align:center;margin-top:24px;">© 2026 My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#c9a84c;">myaiworkforce.ai</a></p>
      </div>
    </body>
    </html>
  `;

  const resendClient = new Resend(process.env.RESEND_API_KEY || 're_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA');
  return resendClient.emails.send({
    from: 'Monty <monty@myaiworkforce.ai>',
    replyTo: 'monty@myaiworkforce.ai',
    to,
    subject: firstName
      ? `${firstName}, two quick things before we go live 👇`
      : `Two quick things before we go live 👇`,
    html,
  });
}

// ─── sendAnthropicSetup (Email #2 — before Telegram) ─────────────────────────

export async function sendAnthropicSetup({
  to,
  clientName,
}: {
  to: string;
  clientName: string;
}) {
  const firstName = clientName ? clientName.split(' ')[0] : '';
  const greeting = firstName ? `Hi ${firstName},` : `Hi there,`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#f5f5f5;color:#1a1a2e;font-family:'Helvetica Neue',Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="background:#1a1a2e;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
          <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
          <h1 style="color:#ffffff;font-size:1.4rem;font-weight:700;margin:0;">One quick step — set up your AI credits 🧠</h1>
          <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:0.9rem;">Takes about 5 minutes. No tech knowledge needed.</p>
        </div>
        <div style="background:#ffffff;padding:36px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">

          <p style="color:#333;font-size:0.95rem;line-height:1.7;margin:0 0 20px;">${greeting}</p>
          <p style="color:#333;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">Your agent runs on Anthropic's AI — the same technology behind Claude, one of the most advanced AI assistants in the world. To keep your data 100% private and your costs transparent, you'll have your own Anthropic account with your own credits.</p>

          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
            <p style="color:#1a1a2e;font-weight:700;margin:0 0 6px;">💡 Why your own account?</p>
            <p style="color:#555;font-size:0.9rem;margin:0;line-height:1.6;">Your conversations stay completely private — they never go through our systems. You only pay for what you use (most clients spend around $5–$15/month in AI credits).</p>
          </div>

          <p style="color:#1a1a2e;font-weight:700;font-size:1rem;margin:0 0 16px;">Here's how to set it up — 5 easy steps:</p>

          <!-- Step 1 -->
          <div style="display:flex;gap:16px;margin-bottom:16px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:13px;text-align:center;line-height:32px;flex-shrink:0;">1</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 2px;font-size:14px;">Go to <a href="https://console.anthropic.com" style="color:#c9a84c;">console.anthropic.com</a></p>
              <p style="color:#666;font-size:13px;margin:0;line-height:1.6;">Click <strong>Sign Up</strong> and create a free account using your email address.</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div style="display:flex;gap:16px;margin-bottom:16px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:13px;text-align:center;line-height:32px;flex-shrink:0;">2</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 2px;font-size:14px;">Add a payment method</p>
              <p style="color:#666;font-size:13px;margin:0;line-height:1.6;">Go to <strong>Settings → Billing</strong> and add your credit card. You won't be charged yet — you only pay for what you use.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div style="display:flex;gap:16px;margin-bottom:16px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:13px;text-align:center;line-height:32px;flex-shrink:0;">3</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 2px;font-size:14px;">Add $10–$20 in credits</p>
              <p style="color:#666;font-size:13px;margin:0;line-height:1.6;">Under <strong>Billing → Add Credits</strong>, top up with $10 or $20 USD. This typically lasts 1–3 months depending on how much you use your agent.</p>
            </div>
          </div>

          <!-- Step 4 -->
          <div style="display:flex;gap:16px;margin-bottom:16px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:13px;text-align:center;line-height:32px;flex-shrink:0;">4</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 2px;font-size:14px;">Create your API key</p>
              <p style="color:#666;font-size:13px;margin:0;line-height:1.6;">Go to <strong>Settings → API Keys</strong> → click <strong>Create Key</strong>. Give it any name (e.g. "My Agent"). A long code will appear — copy it straight away as it only shows once.</p>
            </div>
          </div>

          <!-- Step 5 -->
          <div style="display:flex;gap:16px;margin-bottom:28px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#c9a84c;border-radius:50%;font-weight:900;color:#1a1a2e;font-size:13px;text-align:center;line-height:32px;flex-shrink:0;">5</div>
            <div>
              <p style="color:#1a1a2e;font-weight:700;margin:0 0 2px;font-size:14px;">Reply to this email with your key</p>
              <p style="color:#666;font-size:13px;margin:0;line-height:1.6;">Just paste the key in your reply — it looks like this: <code style="background:#f0f2ff;padding:2px 6px;border-radius:4px;font-size:12px;">sk-ant-api03-xxxxxxxxxxxxxxxxxxxx</code></p>
            </div>
          </div>

          <div style="background:#f0f2ff;border-left:4px solid #c9a84c;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:32px;">
            <p style="color:#1a1a2e;font-weight:700;margin:0 0 4px;">🔒 Is this safe?</p>
            <p style="color:#555;font-size:0.9rem;margin:0;line-height:1.6;">Yes — your API key is stored securely on your private server and is never shared with anyone. Only your agent uses it.</p>
          </div>

          <p style="color:#333;font-size:0.95rem;line-height:1.7;margin:0;">Once you send me your key, I'll connect it to your agent and you'll be ready for the next step — setting up Telegram so you can chat with your agent anytime.</p>
          <p style="color:#333;font-size:0.95rem;margin-top:16px;">— <strong>Monty</strong><br><span style="color:#888;font-size:0.85rem;">AI Assistant — My AI Workforce</span></p>

          <div style="border-top:1px solid #e8e8e8;margin-top:32px;padding-top:16px;">
            <p style="color:#aaa;font-size:0.8rem;text-align:center;margin:0;">Questions? Just reply to this email — I'm here to help.</p>
          </div>
        </div>
        <p style="color:#888;font-size:12px;text-align:center;margin-top:24px;">© ${new Date().getFullYear()} My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#c9a84c;">myaiworkforce.ai</a></p>
      </div>
    </body>
    </html>
  `;

  const resendClient = new Resend(process.env.RESEND_API_KEY || 're_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA');
  return resendClient.emails.send({
    from: 'Monty <monty@myaiworkforce.ai>',
    replyTo: 'monty@myaiworkforce.ai',
    to,
    subject: firstName
      ? `${firstName}, one quick step — set up your AI credits 🧠`
      : `One quick step — set up your AI credits 🧠`,
    html,
  });
}
