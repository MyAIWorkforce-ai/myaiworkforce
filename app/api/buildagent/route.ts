import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { stripe } from '@/lib/stripe';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA');

export async function POST(req: NextRequest) {
  try {
    const { name, business, email, phone, description, tools } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Notify Toby
    await resend.emails.send({
      from: 'Monty <monty@myaiworkforce.ai>',
      to: 'toby@myaiworkforce.ai',
      subject: `🎯 New Build My Agent Lead: ${name}${business ? ' — ' + business : ''}`,
      html: buildNotificationEmail({ name, business, email, phone, description, tools }),
    }).catch(e => console.error('Notification failed:', e));

    // Stripe checkout params — subscription $199/mo + $497 one-time setup on first invoice
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const checkoutParams: any = {
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Build My Agent — Setup Fee (one-time)' },
            unit_amount: 49700,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Build My Agent — Monthly Management' },
            unit_amount: 19900,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 30,
        metadata: {
          clientName: name,
          clientBusiness: business || '',
          clientPhone: phone || '',
          clientTools: tools || '',
        },
      },
      metadata: {
        productName: 'Build My Agent',
        productType: 'done-for-you',
        customerEmail: email,
        clientName: name,
        clientBusiness: business || '',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myaiworkforce.ai'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myaiworkforce.ai'}/buildagent`,
    };

    const session = await stripe.checkout.sessions.create(checkoutParams);

    return NextResponse.json({ redirect: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[buildagent] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function buildNotificationEmail({ name, business, email, phone, description, tools }: {
  name: string; business: string; email: string; phone: string;
  description: string; tools: string;
}) {
  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#1a1a2e;padding:24px 40px;border-radius:8px 8px 0 0;">
        <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
        <h1 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0;">🎯 New Build My Agent Lead</h1>
      </div>
      <div style="background:#fff;padding:32px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">
        <div style="background:#f0f2ff;border-radius:8px;padding:20px 24px;margin-bottom:20px;">
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Name:</strong> ${name}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Business:</strong> ${business || '—'}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Email:</strong> ${email}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Phone:</strong> ${phone || '—'}</p>
        </div>
        <div style="background:#fff8e1;border-radius:8px;padding:20px 24px;margin-bottom:20px;">
          <p style="color:#1a1a2e;font-weight:700;margin:0 0 8px;">What they need:</p>
          <p style="color:#333;margin:0;line-height:1.6;">${description || '—'}</p>
        </div>
        <div style="background:#f5f5f5;border-radius:8px;padding:16px 24px;">
          <p style="color:#1a1a2e;font-weight:700;margin:0 0 8px;">Tools they use:</p>
          <p style="color:#333;margin:0;">${tools || '—'}</p>
        </div>
      </div>
    </div>
  `;
}
