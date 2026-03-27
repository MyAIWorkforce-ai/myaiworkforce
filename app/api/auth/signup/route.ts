// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Wire up Supabase Auth for user creation
  // For now, return a mock user object
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  const mockUser = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    email: email,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(mockUser);
}
