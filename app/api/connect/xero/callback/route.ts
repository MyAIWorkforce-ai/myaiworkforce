import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const CLIENT_ID = process.env.XERO_CLIENT_ID || '';
const CLIENT_SECRET = process.env.XERO_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/connect/xero/callback`
  : 'https://myaiworkforce.ai/api/connect/xero/callback';

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
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const tokenRes = await fetch('https://identity.xero.com/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    if (!tokenRes.ok) {
      console.error('Xero token exchange failed:', await tokenRes.text());
      return NextResponse.redirect(new URL('/connect/error', request.url));
    }

    const tokens = await tokenRes.json();

    const clientDir = join(CLIENTS_DIR, clientId);
    mkdirSync(clientDir, { recursive: true });
    writeFileSync(
      join(clientDir, 'xero-token.json'),
      JSON.stringify({ ...tokens, saved_at: new Date().toISOString() }, null, 2)
    );

    console.log(`✅ Xero token saved for client: ${clientId}`);

    return NextResponse.redirect(new URL('/connect/success', request.url));
  } catch (err) {
    console.error('Xero callback error:', err);
    return NextResponse.redirect(new URL('/connect/error', request.url));
  }
}
