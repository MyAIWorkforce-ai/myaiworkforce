import saleData from './saleData.json'
import funnelData from './funnelData.json'
import syrahostData from './syrahostData.json'

export default function DomainStatusPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>🌐 Domain Portfolio — What Has Been Done</h1>
      <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.9rem' }}>All 230 domains — pages deployed, nameservers updated, funnel destinations.</p>

      {/* Summary */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#d1fae5', borderRadius: '12px', padding: '1rem 1.5rem', flex: 1, minWidth: '150px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#065f46' }}>{saleData.length}</div>
          <div style={{ color: '#065f46', fontWeight: 500, fontSize: '0.9rem' }}>💰 For-Sale Pages</div>
        </div>
        <div style={{ background: '#dbeafe', borderRadius: '12px', padding: '1rem 1.5rem', flex: 1, minWidth: '150px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e40af' }}>{funnelData.length}</div>
          <div style={{ color: '#1e40af', fontWeight: 500, fontSize: '0.9rem' }}>🔀 Funnel Pages</div>
        </div>
        <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1rem 1.5rem', flex: 1, minWidth: '150px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#991b1b' }}>{syrahostData.length}</div>
          <div style={{ color: '#991b1b', fontWeight: 500, fontSize: '0.9rem' }}>🔒 Existing Sites (untouched)</div>
        </div>
      </div>

      {/* FOR SALE */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#065f46' }}>💰 For-Sale Pages ({saleData.length} domains)</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>Buy price as set. Rent $147/mo and Rent+SEO $247/mo on every page. DNS propagating 24-72hrs.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '3rem', fontSize: '0.85rem' }}>
        <thead>
          <tr style={{ background: '#f3f4f6' }}>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>#</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Domain</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Buy Price</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Rent/mo</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Rent+SEO/mo</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>View</th>
          </tr>
        </thead>
        <tbody>
          {(saleData as any[]).map((d) => (
            <tr key={d.domain} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '7px 12px', color: '#999', fontSize: '0.8rem' }}>{d.i}</td>
              <td style={{ padding: '7px 12px', fontWeight: 500 }}>{d.domain}</td>
              <td style={{ padding: '7px 12px', fontWeight: 700, color: '#065f46' }}>${d.buy.toLocaleString()}</td>
              <td style={{ padding: '7px 12px', color: '#555' }}>${d.rent}</td>
              <td style={{ padding: '7px 12px', color: '#555' }}>${d.rentl}</td>
              <td style={{ padding: '7px 12px' }}>
                <a href={`https://${d.domain}`} target="_blank" rel="noopener" style={{ background: '#2563eb', color: 'white', padding: '2px 8px', borderRadius: '5px', fontSize: '0.78rem', textDecoration: 'none' }}>View ↗</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FUNNELS */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#1e40af' }}>🔀 Funnel Pages ({funnelData.length} domains)</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>No price — redirect visitors to your VA or builder business.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '3rem', fontSize: '0.85rem' }}>
        <thead>
          <tr style={{ background: '#f3f4f6' }}>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Domain</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Funnels To</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>View</th>
          </tr>
        </thead>
        <tbody>
          {(funnelData as any[]).map((d) => (
            <tr key={d.domain} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '7px 12px', fontWeight: 500 }}>{d.domain}</td>
              <td style={{ padding: '7px 12px', color: '#2563eb' }}>{d.target}</td>
              <td style={{ padding: '7px 12px' }}>
                <a href={`https://${d.domain}`} target="_blank" rel="noopener" style={{ background: '#2563eb', color: 'white', padding: '2px 8px', borderRadius: '5px', fontSize: '0.78rem', textDecoration: 'none' }}>View ↗</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* UNTOUCHED */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#991b1b' }}>🔒 Existing Sites — Not Touched ({syrahostData.length} domains)</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>These had existing websites on Syrahost. Nameservers left unchanged.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
        {(syrahostData as string[]).map((d) => (
          <span key={d} style={{ background: '#fee2e2', color: '#991b1b', padding: '3px 10px', borderRadius: '20px', fontSize: '0.82rem' }}>{d}</span>
        ))}
      </div>

      <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.82rem', color: '#666' }}>
        <strong>Note:</strong> DNS propagation takes 24-72hrs after nameserver update. All pages built and ready on Vercel.
        Stripe rent links: <a href="https://buy.stripe.com/7sY6oJ1psefr4FN2rj3F607" style={{ color: '#2563eb' }}>$147/mo</a> | <a href="https://buy.stripe.com/6oU6oJece0oBfkrgi93F608" style={{ color: '#2563eb' }}>$247/mo</a>
      </div>
    </div>
  )
}
