"use client";
import { useState } from "react";
import Link from "next/link";

const REVIEW_DOMAINS = [
  { name: 'erotica.com.au', current: 14997 },
  { name: 'nakedgirls.com.au', current: 12997 },
  { name: 'dromana.com.au', current: 12997 },
  { name: 'buildingaustralia.com.au', current: 5997 },
  { name: 'premiumpropertiesaustralia.com.au', current: 4997 },
  { name: 'ifuck.com.au', current: 2997 },
  { name: 'lovedating.com.au', current: 2997 },
  { name: 'virtualtaxi.com.au', current: 2497 },
  { name: 'findtradesman.com.au', current: 1997 },
  { name: 'horney.com.au', current: 1997 },
  { name: 'virtualdriver.com.au', current: 1997 },
  { name: 'virtualcar.com.au', current: 1997 },
  { name: 'builderportsea.com.au', current: 1997 },
  { name: 'buildersorrento.com.au', current: 1997 },
  { name: 'mptrades.com.au', current: 1497 },
  { name: 'buildermteliza.com.au', current: 1497 },
  { name: 'buildermtmartha.com.au', current: 1497 },
  { name: 'buildermornington.com.au', current: 1497 },
  { name: 'carpenterstkilda.com', current: 1497 },
  { name: 'thehealthguide.com.au', current: 997 },
  { name: 'showerscreensperth.com.au', current: 997 },
  { name: 'decksnpergolas.com.au', current: 997 },
  { name: 'carpentercanberra.com', current: 997 },
  { name: 'carpentercairns.com', current: 997 },
  { name: 'carpenterdarwin.com', current: 997 },
  { name: 'carpentermcrae.com.au', current: 997 },
  { name: 'carpentersafteybeach.com.au', current: 997 },
  { name: 'carpenterredhill.com.au', current: 997 },
  { name: 'carpenterflinders.com.au', current: 997 },
  { name: 'builderdarwin.com', current: 997 },
  { name: 'builderbendigo.com', current: 997 },
  { name: 'broker4.com', current: 797 },
  { name: 'primebuildingprojects.com.au', current: 797 },
  { name: 'healthydesserts.com.au', current: 797 },
  { name: 'memyselfi.io', current: 597 },
  { name: 'stupidshit.com.au', current: 297 },
  { name: 'builtbybanks.com.au', current: 297 },
  { name: 'brandan.com.au', current: 297 },
];

export default function ReviewPricingPage() {
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const handleConfirm = () => {
    const lines = REVIEW_DOMAINS.map(d => {
      const newPrice = prices[d.name] ? parseInt(prices[d.name]) : null;
      return `${d.name}: $${newPrice ? newPrice.toLocaleString() : d.current.toLocaleString()}`;
    }).join('\n');
    const msg = `⚠️ Review Domains — Updated Prices:\n\n${lines}`;
    navigator.clipboard.writeText(msg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 3000); });
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh", padding: "24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Link href="/internal-domains" style={{ color: "var(--muted)", fontSize: 14 }}>← Back to domains</Link>
        <h1 style={{ color: "#FFD700", fontSize: "2rem", fontWeight: 900, margin: "20px 0 8px" }}>
          ⚠️ Review Domains — Set Prices
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 8 }}>
          {REVIEW_DOMAINS.length} domains need a price increase before going live.
        </p>
        <p style={{ color: "#F97316", fontSize: 13, marginBottom: 32 }}>
          💡 Enter your new Buy It Now price. Leave blank to keep current price. Hit Confirm to copy list to Discord.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {REVIEW_DOMAINS.map(domain => (
            <div key={domain.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
              backgroundColor: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 10, padding: "14px 18px"
            }}>
              <div>
                <div style={{ fontWeight: 700 }}>{domain.name}</div>
                <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 2 }}>
                  Current: <span style={{ color: "#F97316" }}>${domain.current.toLocaleString()}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>$</span>
                <input
                  type="number"
                  placeholder={domain.current.toLocaleString()}
                  value={prices[domain.name] || ''}
                  onChange={e => setPrices(p => ({ ...p, [domain.name]: e.target.value }))}
                  style={{
                    width: 110, padding: "8px 10px", borderRadius: 8, fontSize: 14, fontWeight: 700,
                    backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleConfirm} style={{
          width: "100%", padding: "16px", borderRadius: 12, fontSize: 16, fontWeight: 700,
          backgroundColor: "#FFD700", color: "#0A0A0A", border: "none", cursor: "pointer"
        }}>
          {copied ? "✅ Copied! Paste to Monty in Discord" : "✅ Confirm Prices — Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}
