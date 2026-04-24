export default function ConnectSuccessPage() {
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
          }}>You're all connected! ✅</h1>
        </div>
        <div style={{
          background: '#ffffff',
          padding: '36px 40px',
          border: '1px solid #e8e8e8',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '3rem', margin: '0 0 16px' }}>🎉</p>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px' }}>
            Your AI agent can now access your <strong>Gmail</strong> and <strong>Google Calendar</strong>.
          </p>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 24px' }}>
            You don't need to do anything else — we'll take it from here. Expect an update from Monty shortly.
          </p>
          <div style={{
            background: '#f8f8f8',
            borderLeft: '4px solid #c9a84c',
            padding: '16px 20px',
            borderRadius: '0 4px 4px 0',
            textAlign: 'left',
          }}>
            <p style={{ color: '#1a1a2e', fontSize: '0.9rem', margin: 0 }}>
              Questions? Email <a href="mailto:monty@myaiworkforce.ai" style={{ color: '#c9a84c' }}>monty@myaiworkforce.ai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
