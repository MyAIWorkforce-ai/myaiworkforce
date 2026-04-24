import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/connect/callback`
  : 'https://myaiworkforce.ai/api/connect/callback';

const CLIENTS_DIR = process.env.CLIENTS_DIR ||
  '/Users/myaiwokforce/.openclaw/workspace/client-system/clients';

function resolveToken(token: string): string {
  try {
    const tokensPath = join(CLIENTS_DIR, '..', 'connect-tokens.json');
    const tokensData = JSON.parse(readFileSync(tokensPath, 'utf8'));
    return tokensData.tokens?.[token]?.clientId || token;
  } catch {
    return token;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const token = searchParams.get('state') || '';
  const error = searchParams.get('error');

  if (error || !code) {
    return NextResponse.redirect(new URL('/connect/error', request.url));
  }

  const clientId = resolveToken(token);

  try {
    // Exchange code for tokens
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenRes.ok) {
      console.error('Token exchange failed:', await tokenRes.text());
      return NextResponse.redirect(new URL('/connect/error', request.url));
    }

    const tokens = await tokenRes.json();

    // Save token to client directory
    const clientDir = join(CLIENTS_DIR, clientId);
    mkdirSync(clientDir, { recursive: true });
    writeFileSync(
      join(clientDir, 'google-token.json'),
      JSON.stringify({ ...tokens, saved_at: new Date().toISOString() }, null, 2)
    );

    console.log(`✅ Google token saved for client: ${clientId}`);

    return NextResponse.redirect(new URL('/connect/success', request.url));
  } catch (err) {
    console.error('OAuth callback error:', err);
    return NextResponse.redirect(new URL('/connect/error', request.url));
  }
}
