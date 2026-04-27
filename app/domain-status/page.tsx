import saleData from './saleData.json'
import funnelData from './funnelData.json'
import syrahostData from './syrahostData.json'

// VA funnel pages confirmed LIVE
const VA_LIVE = [
  'physioassistant.com.au', 'doctorassistant.com.au', 'dentistassistant.com.au',
  'lawyerassistant.com.au', 'accountantassistant.com.au', 'chiropractorassistant.com.au',
  'chiroassistant.com.au', 'psychologistassistant.com.au', 'psychassistant.com.au',
  'personaltrainerassistant.com.au', 'ptassistant.com.au', 'myotherapistassistant.com.au',
  'myoassistant.com.au', 'osteoassistant.com.au', 'podiatristassistant.com.au',
  'beautyassistant.com.au', 'massageassistant.com.au', 'hairdresserassistant.com.au',
  'consultantassistant.com.au', 'mechanicassistant.com.au', 'tradieassistant.ai'
]

// For-sale pages confirmed LIVE
const SALE_LIVE = ['builderbondi.com.au', 'builderbondi.com']

// Builder funnel pages confirmed LIVE  
const BUILDER_LIVE = ['builderdromana.com.au']

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
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Status</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Domain</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Buy Price</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Rent/mo</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Rent+SEO/mo</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>View</th>
          </tr>
        </thead>
        <tbody>
          {(saleData as any[]).map((d) => {
            const isLive = SALE_LIVE.includes(d.domain)
            return (
              <tr key={d.domain} style={{ borderBottom: '1px solid #f3f4f6', background: isLive ? '#f0fdf4' : 'white' }}>
                <td style={{ padding: '7px 12px', color: '#999', fontSize: '0.8rem' }}>{d.i}</td>
                <td style={{ padding: '7px 12px' }}>
                  {isLive
                    ? <span style={{ background: '#16a34a', color: 'white', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.05em' }}>LIVE</span>
                    : <span style={{ background: '#e5e7eb', color: '#6b7280', padding: '3px 10px', borderRadius: '20px', fontSize: '0.78rem' }}>Pending</span>
                  }
                </td>
                <td style={{ padding: '7px 12px', fontWeight: 500 }}>{d.domain}</td>
                <td style={{ padding: '7px 12px', fontWeight: 700, color: '#065f46' }}>{d.price ? `$${d.price.toLocaleString()}` : 'TBD'}</td>
                <td style={{ padding: '7px 12px', color: '#555' }}>${d.rent}</td>
                <td style={{ padding: '7px 12px', color: '#555' }}>${d.rentl}</td>
                <td style={{ padding: '7px 12px' }}>
                  <a href={`https://${d.domain}`} target="_blank" rel="noopener" style={{ background: '#2563eb', color: 'white', padding: '2px 8px', borderRadius: '5px', fontSize: '0.78rem', textDecoration: 'none' }}>View ↗</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* VA FUNNELS */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#1e40af' }}>🏥 VA Funnel Pages ({VA_LIVE.length} LIVE)</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>Virtual assistant landing pages — drive leads to virtualassistant.com.au.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
        {VA_LIVE.map((d) => (
          <a key={d} href={`https://${d}`} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '6px 12px', textDecoration: 'none', fontSize: '0.85rem' }}>
            <span style={{ background: '#16a34a', color: 'white', padding: '2px 8px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem' }}>LIVE</span>
            <span style={{ color: '#1a1a2e', fontWeight: 500 }}>{d}</span>
          </a>
        ))}
      </div>

      {/* BUILDER FUNNELS */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#92400e' }}>🔨 Builder Funnel Pages</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>Builder/tradie lead pages — drive leads to primeprojects.com.au.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
        {BUILDER_LIVE.map((d) => (
          <a key={d} href={`https://${d}`} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '6px 12px', textDecoration: 'none', fontSize: '0.85rem' }}>
            <span style={{ background: '#16a34a', color: 'white', padding: '2px 8px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem' }}>LIVE</span>
            <span style={{ color: '#1a1a2e', fontWeight: 500 }}>{d}</span>
          </a>
        ))}
      </div>

      {/* OTHER FUNNELS */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.4rem', color: '#1e40af' }}>🔀 Other Funnel Domains ({funnelData.length})</h2>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>Redirect domains — no standalone page, forward to destination.</p>
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
