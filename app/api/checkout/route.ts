import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { priceId, productName, amount, type, productType: rawProductType, customerEmail } = await req.json()

    // productType from frontend (guide/agent) takes priority, fallback to inferring from type
    const productType = rawProductType || (type === 'subscription' ? 'agent' : 'guide')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: type === 'subscription' ? 'subscription' : 'payment',
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: { name: productName },
            unit_amount: amount, // in cents
            ...(type === 'subscription' && { recurring: { interval: 'month' } }),
          },
          quantity: 1,
        },
      ],
      metadata: {
        productName: productName || '',
        productType: productType,
        customerEmail: customerEmail || '',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://MyAIWorkforce.ai'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://MyAIWorkforce.ai'}/marketplace`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
