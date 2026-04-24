export default function ConnectErrorPage() {
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
          }}>Something went wrong 😕</h1>
        </div>
        <div style={{
          background: '#ffffff',
          padding: '36px 40px',
          border: '1px solid #e8e8e8',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          textAlign: 'center',
        }}>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px' }}>
            We weren't able to connect your account. This sometimes happens if the page timed out or the link was used more than once.
          </p>
          <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 24px' }}>
            Please contact us and we'll sort it out straight away.
          </p>
          <a
            href="mailto:monty@myaiworkforce.ai"
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
            }}
          >
            Email monty@myaiworkforce.ai
          </a>
        </div>
      </div>
    </div>
  );
}
