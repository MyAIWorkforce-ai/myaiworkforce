import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  type: 'guide' | 'agent';
}) {
  const subject = type === 'guide'
    ? `Your guide is ready: ${productName}`
    : `Your agent files are ready: ${productName}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#0A0A0A;color:#ffffff;font-family:Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:32px;">
          <span style="font-size:24px;font-weight:900;letter-spacing:-0.02em;">
            <span style="color:#FFD700;">My </span><span style="color:#F97316;font-size:1.2em;">AI </span><span style="color:#FFD700;">Workforce</span>
          </span>
        </div>
        <div style="background:#111111;border:1px solid #222222;border-radius:16px;padding:40px;">
          <h1 style="color:#FFD700;font-size:28px;margin:0 0 8px;">🎉 Payment Confirmed!</h1>
          <p style="color:#888888;margin:0 0 32px;">Thank you for your purchase.</p>

          <div style="background:#0A0A0A;border:1px solid #333333;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#888888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your Purchase</p>
            <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0 0 4px;">${productName}</p>
            <p style="color:#FFD700;font-size:16px;font-weight:600;margin:0;">${price}</p>
          </div>

          <a href="${downloadUrl}" style="display:block;background:#FFD700;color:#0A0A0A;text-align:center;padding:16px 32px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;margin-bottom:24px;">
            Download Your ${type === 'guide' ? 'Guide' : 'Agent Files'} →
          </a>

          <p style="color:#666666;font-size:14px;text-align:center;margin:0;">
            Link expires in 7 days. Questions? Reply to this email or contact <a href="mailto:toby@myaiworkforce.ai" style="color:#FFD700;">toby@myaiworkforce.ai</a>
          </p>
        </div>

        <p style="color:#444444;font-size:12px;text-align:center;margin-top:24px;">
          © ${new Date().getFullYear()} My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#444444;">myaiworkforce.ai</a>
        </p>
      </div>
    </body>
    </html>
  `;

  return resend.emails.send({
    from: 'My AI Workforce <onboarding@resend.dev>',
    reply_to: 'toby@myaiworkforce.ai',
    to,
    subject,
    html,
  });
}

export async function sendOnboardingWelcome({
  to,
  clientName,
  plan,
}: {
  to: string;
  clientName: string;
  plan: string;
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="background:#0A0A0A;color:#ffffff;font-family:Arial,sans-serif;margin:0;padding:40px 20px;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:32px;">
          <span style="font-size:24px;font-weight:900;">
            <span style="color:#FFD700;">My </span><span style="color:#F97316;font-size:1.2em;">AI </span><span style="color:#FFD700;">Workforce</span>
          </span>
        </div>
        <div style="background:#111111;border:1px solid #222222;border-radius:16px;padding:40px;">
          <h1 style="color:#FFD700;font-size:28px;margin:0 0 8px;">Welcome aboard, ${clientName}! 🚀</h1>
          <p style="color:#888888;margin:0 0 32px;">Your AI workforce journey starts now.</p>

          <div style="background:#0A0A0A;border:1px solid #333333;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#888888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your Plan</p>
            <p style="color:#FFD700;font-size:20px;font-weight:700;margin:0;">${plan}</p>
          </div>

          <h2 style="color:#ffffff;font-size:18px;margin:0 0 16px;">What happens next:</h2>
          <div style="margin-bottom:12px;">
            <span style="color:#FFD700;font-weight:700;margin-right:12px;">1.</span>
            <span style="color:#cccccc;">We&apos;ll set up your private server in the next 24 hours</span>
          </div>
          <div style="margin-bottom:12px;">
            <span style="color:#FFD700;font-weight:700;margin-right:12px;">2.</span>
            <span style="color:#cccccc;">Toby will reach out to book your discovery call</span>
          </div>
          <div style="margin-bottom:32px;">
            <span style="color:#FFD700;font-weight:700;margin-right:12px;">3.</span>
            <span style="color:#cccccc;">We build your custom AI agents based on your needs</span>
          </div>

          <div style="background:#0A0A0A;border:1px solid #F97316;border-radius:12px;padding:20px;margin-bottom:32px;">
            <p style="color:#F97316;font-weight:700;margin:0 0 8px;">🔒 A note on security</p>
            <p style="color:#888888;font-size:14px;margin:0;">Your AI agents will run on a private server dedicated entirely to your business. Your data never touches shared infrastructure. Every action is logged and auditable. You can revoke access at any time.</p>
          </div>

          <a href="https://myaiworkforce.ai/contact" style="display:block;background:#FFD700;color:#0A0A0A;text-align:center;padding:16px 32px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;">
            Book Your Discovery Call →
          </a>
        </div>
        <p style="color:#444444;font-size:12px;text-align:center;margin-top:24px;">
          © ${new Date().getFullYear()} My AI Workforce · <a href="https://myaiworkforce.ai" style="color:#444444;">myaiworkforce.ai</a>
        </p>
      </div>
    </body>
    </html>
  `;

  return resend.emails.send({
    from: 'My AI Workforce <onboarding@resend.dev>',
    reply_to: 'toby@myaiworkforce.ai',
    to,
    subject: `Welcome to My AI Workforce, ${clientName}! Your AI workforce is being built 🚀`,
    html,
  });
}
