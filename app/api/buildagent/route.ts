import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { stripe } from '@/lib/stripe';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA');

const PLANS: Record<string, { name: string; amount: number }> = {
  starter: { name: 'Build My Agent — Starter (2 Agents)', amount: 99700 },
  growth:  { name: 'Build My Agent — Growth (5 Agents)',  amount: 149700 },
};

export async function POST(req: NextRequest) {
  try {
    const { name, business, email, phone, description, tools, plan } = await req.json();

    if (!name || !email || !plan) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // If enterprise, skip Stripe — just notify Toby and return a calendar link
    if (plan === 'enterprise') {
      await resend.emails.send({
        from: 'Monty <monty@myaiworkforce.ai>',
        to: 'toby@myaiworkforce.ai',
        subject: `🔥 Enterprise Lead: ${name} — ${business || 'Unknown Business'}`,
        html: buildNotificationEmail({ name, business, email, phone, description, tools, plan: 'Enterprise' }),
      });
      return NextResponse.json({ redirect: 'https://calendar.app.google/cEdmSQvEZ66hj4dy7' });
    }

    const selectedPlan = PLANS[plan];
    if (!selectedPlan) return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });

    // Notify Toby
    await resend.emails.send({
      from: 'Monty <monty@myaiworkforce.ai>',
      to: 'toby@myaiworkforce.ai',
      subject: `🎯 New Build My Agent Lead: ${name} — ${selectedPlan.name}`,
      html: buildNotificationEmail({ name, business, email, phone, description, tools, plan: selectedPlan.name }),
    }).catch(e => console.error('Notification failed:', e));

    // Create Stripe checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'aud',
          product_data: { name: selectedPlan.name },
          unit_amount: selectedPlan.amount,
          recurring: { interval: 'month' },
        },
        quantity: 1,
      }],
      metadata: {
        productName: selectedPlan.name,
        productType: 'done-for-you',
        customerEmail: email,
        clientName: name,
        clientBusiness: business || '',
        clientPhone: phone || '',
        clientTools: tools || '',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myaiworkforce.ai'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myaiworkforce.ai'}/buildagent`,
    });

    return NextResponse.json({ redirect: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function buildNotificationEmail({ name, business, email, phone, description, tools, plan }: {
  name: string; business: string; email: string; phone: string;
  description: string; tools: string; plan: string;
}) {
  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#1a1a2e;padding:24px 40px;border-radius:8px 8px 0 0;">
        <p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p>
        <h1 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0;">🎯 New Build My Agent Enquiry</h1>
      </div>
      <div style="background:#fff;padding:32px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;">
        <div style="background:#f0f2ff;border-radius:8px;padding:20px 24px;margin-bottom:20px;">
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Name:</strong> ${name}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Business:</strong> ${business || '—'}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Email:</strong> ${email}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Phone:</strong> ${phone || '—'}</p>
          <p style="color:#1a1a2e;margin:6px 0;"><strong>Plan:</strong> ${plan}</p>
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
