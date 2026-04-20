import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import Stripe from 'stripe';
import { sendPurchaseConfirmation } from '@/lib/email';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhkfooojytjesnvqrtxx.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_placeholder', {
  apiVersion: '2026-03-25.dahlia',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret || webhookSecret === 'whsec_placeholder') {
      // During development / before webhook secret is configured, parse raw JSON
      console.log('[Stripe Webhook] No signature verification — using raw JSON parse');
      event = JSON.parse(body) as Stripe.Event;
    } else {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Stripe Webhook] Signature verification failed:', message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  console.log('[Stripe Webhook] Received event:', event.type, event.id);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('[Stripe Webhook] checkout.session.completed:', session.id);

        const customerEmail = session.customer_email
          || (session.customer_details?.email ?? null)
          || (session.metadata?.customerEmail ?? null);

        const productName = session.metadata?.productName || 'Your purchase';
        const productType = (session.metadata?.productType as 'guide' | 'agent' | 'done-for-you') || 'guide';
        const amountTotal = session.amount_total ? `$${(session.amount_total / 100).toFixed(2)} AUD` : '';

        // Save purchase to Supabase
        const productSlug = session.metadata?.productSlug || productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        await supabase.from('purchases').insert({
          email: customerEmail || 'unknown',
          product_name: productName,
          product_type: productType,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          stripe_session_id: session.id,
          product_slug: productSlug,
        });

        // Send notification email to Toby
        const { Resend } = await import('resend');
        const resendClient = new Resend(process.env.RESEND_API_KEY || 're_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA');
        await resendClient.emails.send({
          from: 'Monty <monty@myaiworkforce.ai>',
          to: 'toby@myaiworkforce.ai',
          subject: `🎉 New Purchase: ${productName} — ${amountTotal}`,
          html: `<div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;"><div style="background:#1a1a2e;padding:24px 40px;border-radius:8px 8px 0 0;"><p style="color:#c9a84c;font-size:0.7rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">MY AI WORKFORCE</p><h1 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0;">🎉 New Purchase Received!</h1></div><div style="background:#fff;padding:32px 40px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;"><p style="color:#333;font-size:0.95rem;">A new purchase has been made on myaiworkforce.ai</p><div style="background:#f0f2ff;border-radius:8px;padding:20px 24px;margin:20px 0;"><p style="color:#1a1a2e;margin:6px 0;"><strong>Product:</strong> ${productName}</p><p style="color:#1a1a2e;margin:6px 0;"><strong>Amount:</strong> ${amountTotal}</p><p style="color:#1a1a2e;margin:6px 0;"><strong>Type:</strong> ${productType}</p><p style="color:#1a1a2e;margin:6px 0;"><strong>Buyer email:</strong> ${customerEmail || 'unknown'}</p></div><p style="color:#888;font-size:0.85rem;">My AI Workforce &bull; myaiworkforce.ai</p></div></div>`,
        }).catch(e => console.error('Admin notification failed:', e));

        if (customerEmail) {
          console.log('[Stripe Webhook] Sending purchase confirmation to:', customerEmail);
          await sendPurchaseConfirmation({
            to: customerEmail,
            productName,
            downloadUrl: 'https://MyAIWorkforce.ai/dashboard',
            price: amountTotal,
            type: productType,
          });
          console.log('[Stripe Webhook] Purchase confirmation sent successfully');
        } else {
          console.warn('[Stripe Webhook] No customer email found on session:', session.id);
        }
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('[Stripe Webhook] payment_intent.succeeded:', paymentIntent.id, 'amount:', paymentIntent.amount);
        // Email is sent via checkout.session.completed for checkout flows
        // This event is logged for reference
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.warn('[Stripe Webhook] payment_intent.payment_failed:', paymentIntent.id);
        break;
      }

      default:
        console.log('[Stripe Webhook] Unhandled event type:', event.type);
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Stripe Webhook] Error processing event:', message);
    // Return 200 so Stripe doesn't retry — log the error for investigation
    return NextResponse.json({ received: true, error: message });
  }

  return NextResponse.json({ received: true });
}
