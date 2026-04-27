import { NextRequest, NextResponse } from 'next/server';

// Xero OAuth2 — requires a Xero App set up at developer.xero.com
// Add https://myaiworkforce.ai/api/connect/xero/callback as the redirect URI
// Set XERO_CLIENT_ID env var in Vercel

const CLIENT_ID = process.env.XERO_CLIENT_ID || '';
const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/connect/xero/callback`
  : 'https://myaiworkforce.ai/api/connect/xero/callback';

const SCOPES = [
  'openid',
  'profile',
  'email',
  'accounting.transactions.read',
  'accounting.transactions',
  'accounting.contacts.read',
  'accounting.contacts',
  'accounting.settings.read',
  'accounting.settings',
  'offline_access',
].join(' ');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token') || '';

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    state: token,
  });

  return NextResponse.redirect(
    `https://login.xero.com/identity/connect/authorize?${params.toString()}`
  );
}
