interface ConnectPageProps {
  searchParams: { token?: string };
}

export default function ConnectPage({ searchParams }: ConnectPageProps) {
  const token = searchParams.token || '';

  const tools = [
    {
      id: 'google',
      icon: '📧',
      name: 'Gmail & Google Calendar',
      description: 'Let your agent read and reply to emails, and manage your calendar appointments — all on your behalf.',
      buttonText: 'Connect Gmail & Calendar',
      href: `/api/connect/auth?token=${token}&service=google`,
    },
    {
      id: 'xero',
      icon: '💼',
      name: 'Xero',
      description: 'Let your agent access your Xero account to help with invoicing, payments, and financial admin.',
      buttonText: 'Connect Xero',
      href: `/api/connect/xero?token=${token}`,
    },
  ];

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
      <div style={{ maxWidth: '580px', width: '100%' }}>

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
            margin: '0 0 8px',
            lineHeight: 1.3,
          }}>Connect Your Tools 🔗</h1>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>
            Connect the apps your agent needs — takes about 1 minute each.
          </p>
        </div>

        {/* Body */}
        <div style={{
          background: '#ffffff',
          padding: '36px 40px',
          border: '1px solid #e8e8e8',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
        }}>

          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 28px' }}>
            Click <strong>Connect</strong> next to each app below. You'll be taken to that app's secure login page — just sign in and click <strong>Allow</strong>. That's it.
          </p>

          {/* Security note */}
          <div style={{
            background: '#f8f8f8',
            borderLeft: '4px solid #c9a84c',
            padding: '14px 18px',
            marginBottom: '28px',
            borderRadius: '0 4px 4px 0',
          }}>
            <p style={{ color: '#1a1a2e', fontSize: '0.88rem', margin: 0 }}>
              🔒 <strong>Safe &amp; secure:</strong> We never see your password. You can revoke access at any time from within each app.
            </p>
          </div>

          {/* Tool cards */}
          {tools.map((tool) => (
            <div key={tool.id} style={{
              border: '1px solid #e8e8e8',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>{tool.icon}</div>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <p style={{ color: '#1a1a2e', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>{tool.name}</p>
                <p style={{ color: '#666', fontSize: '0.87rem', lineHeight: 1.5, margin: 0 }}>{tool.description}</p>
              </div>
              <a
                href={tool.href}
                style={{
                  display: 'inline-block',
                  background: '#1a1a2e',
                  color: '#c9a84c',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {tool.buttonText} →
              </a>
            </div>
          ))}

          <p style={{ color: '#888', fontSize: '0.85rem', textAlign: 'center', margin: '20px 0 0' }}>
            Questions? Email <a href="mailto:monty@myaiworkforce.ai" style={{ color: '#c9a84c' }}>monty@myaiworkforce.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}
