// app/api/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // TODO: Verify user auth
    // TODO: Get skill price from Supabase
    // TODO: Create Stripe Checkout Session
    // For now, return a mock checkout URL

    const { skillId } = await request.json();

    if (!skillId) {
        return NextResponse.json({ error: 'Skill ID is required' }, { status: 400 });
    }

    const mockCheckoutUrl = `https://checkout.stripe.com/mock-session-for-skill-${skillId}`;

    return NextResponse.json({ url: mockCheckoutUrl });
}
