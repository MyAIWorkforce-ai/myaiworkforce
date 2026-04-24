import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      businessName, industry, ownerName, email, phone, website,
      agentName, tasks, package: pkg, hasTelegram, hasGmail, hasXero, notes
    } = data;

    // Send email to Monty via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error('RESEND_API_KEY not set');
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const body = `
New Get Started submission 🚀

--- BUSINESS ---
Business name: ${businessName}
Industry: ${industry}
Owner: ${ownerName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Website: ${website || 'Not provided'}

--- AGENT ---
Agent name: ${agentName}
Tasks: ${tasks}

--- PACKAGE ---
Package: ${pkg}

--- CONNECTIONS ---
Has Telegram: ${hasTelegram}
Has Gmail: ${hasGmail}
Has Xero: ${hasXero}

--- NOTES ---
${notes || 'None'}
    `.trim();

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'My AI Workforce <monty@myaiworkforce.ai>',
        to: 'monty@myaiworkforce.ai',
        reply_to: email,
        subject: `🚀 New Get Started — ${businessName} (${ownerName})`,
        text: body,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Get started error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
