import { NextRequest, NextResponse } from 'next/server';

// Google OAuth credentials (my-ai-workforce project)
// IMPORTANT: Add https://myaiworkforce.ai/api/connect/callback to authorised redirect URIs
// in Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client IDs
const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID || '';
const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/connect/callback`
  : 'https://myaiworkforce.ai/api/connect/callback';

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/calendar',
].join(' ');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const clientId = searchParams.get('client') || '';

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
    state: clientId, // pass client ID through OAuth flow
  });

  const authUrl = `https://accounts.google.com/o/oauth2/auth?${params.toString()}`;
  return NextResponse.redirect(authUrl);
}
