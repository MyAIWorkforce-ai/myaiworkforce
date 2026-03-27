// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // TODO: Verify Stripe webhook signature
    // TODO: On success, create a Purchase record in Supabase
    // For now, log the received event

    const event = await request.json();

    console.log('Received Stripe webhook event:', event);

    return NextResponse.json({ received: true });
}
