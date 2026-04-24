import { redirect } from 'next/navigation';

interface ConnectPageProps {
  searchParams: { client?: string };
}

export default function ConnectPage({ searchParams }: ConnectPageProps) {
  const clientId = searchParams.client || '';

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      padding: '20px',
    }}>
      <div style={{ maxWidth: '520px', width: '100%' }}>
        {/* Header */}
        <div style={{
          background: '#1a1a2e',
          padding: '32px 40px',
          borderRadius: '8px 8px 0 0',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#c9a84c',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0',
          }}>MY AI WORKFORCE</p>
          <h1 style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
          }}>Connect Your Gmail & Calendar 🔗</h1>
        </div>

        {/* Body */}
        <div style={{
          background: '#ffffff',
          padding: '36px 40px',
          border: '1px solid #e8e8e8',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
        }}>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px' }}>
            Click the button below to give your AI agent access to your Gmail and Google Calendar.
          </p>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 24px' }}>
            This is a one-time step. Once connected, your agent can read emails, respond to enquiries, and manage your calendar — all on your behalf.
          </p>

          {/* Security box */}
          <div style={{
            background: '#f8f8f8',
            borderLeft: '4px solid #c9a84c',
            padding: '16px 20px',
            margin: '0 0 28px',
            borderRadius: '0 4px 4px 0',
          }}>
            <p style={{ color: '#1a1a2e', fontSize: '0.9rem', margin: 0 }}>
              🔒 <strong>Safe &amp; secure:</strong> You'll be taken to Google's official login page. We never see your password. You can revoke access at any time.
            </p>
          </div>

          {/* Connect Button */}
          <a
            href={`/api/connect/auth?client=${clientId}`}
            style={{
              display: 'block',
              background: '#c9a84c',
              color: '#1a1a2e',
              textAlign: 'center',
              padding: '16px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              marginBottom: '20px',
            }}
          >
            Connect Gmail &amp; Calendar →
          </a>

          <p style={{ color: '#888', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
            Questions? Email us at <a href="mailto:monty@myaiworkforce.ai" style={{ color: '#c9a84c' }}>monty@myaiworkforce.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}
