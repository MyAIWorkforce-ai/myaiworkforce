// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Wire up Supabase Auth for user login
  // For now, return a mock JWT
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  const mockJwt = 'mock.jwt.token';

  return NextResponse.json({ token: mockJwt });
}
