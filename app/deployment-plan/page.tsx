"use client";
import { useState } from "react";
import Link from "next/link";

type DomainPlan = {
  domain: string;
  action: 'for-sale' | 'funnel-va' | 'funnel-builder' | 'skip' | 'keep-pending';
  buy?: number;
  rent?: number;
  rentLanding?: number;
  funnelTo?: string;
  note?: string;
};

const ALL_PLANS: DomainPlan[] = [
  // FOR SALE - List It (97 from confirmed list)
  { domain: 'sales.net.au', action: 'for-sale', buy: 24997, rent: 497, rentLanding: 697 },
  { domain: 'virtualcalendar.ai', action: 'for-sale', buy: 4997, rent: 147, rentLanding: 247 },
  { domain: 'builderbondi.com', action: 'for-sale', buy: 4497, rent: 137, rentLanding: 237, note: '✅ Already live' },
  { domain: 'tailoredva.ai', action: 'for-sale', buy: 3497, rent: 97, rentLanding: 197 },
  { domain: 'customva.ai', action: 'for-sale', buy: 3497, rent: 97, rentLanding: 197 },
  { domain: 'virtualcalendar.com.au', action: 'for-sale', buy: 2997, rent: 97, rentLanding: 197 },
  { domain: 'darlingharbourrealestate.com', action: 'for-sale', buy: 2997, rent: 97, rentLanding: 197 },
  { domain: 'darlingharbourrealestate.com.au', action: 'for-sale', buy: 2997, rent: 97, rentLanding: 197 },
  { domain: 'bondihomes.com', action: 'for-sale', buy: 2997, rent: 97, rentLanding: 197 },
  { domain: 'darlingpointrealestate.com', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 187 },
  { domain: 'darlingpointhomes.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 187 },
  { domain: 'pointpiperhomes.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 187 },
  { domain: 'darlingharbourhomes.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 187 },
  { domain: 'morningtonpeninsulatrades.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 147 },
  { domain: 'morningtonwineries.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 147 },
  { domain: 'buildertoorak.com.au', action: 'for-sale', buy: 2497, rent: 87, rentLanding: 147 },
  { domain: 'virtualbooking.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'customva.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'physioadmin.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'physioreception.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'psychreception.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'accountantreception.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'accountantadmin.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'linleypointhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'watsonsbayhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'dalkeithhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'dalkeithrelestate.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'bellevuehillrealesate.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'portseahomes.com', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'lavenderbayhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'cremornepointhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'peppermintgrovehomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'longuevillehomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'kooyonghomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'woolwichhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'centennialparkhomes.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterbondi.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'carpenterbondi.com', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'builderbeaumaris.com', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'pizzabondi.com', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'beautytherapistassistant.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'virtualdiary.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'phillipislandrealestate.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'eaglebayhomes.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'tamaramahomes.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'orangegrovehomes.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'psychologistmornington.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'psychologistfrankston.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterbrighton.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'plumbermorningtonpeninsula.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterelwood.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterelwood.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'builderfrankston.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterbayside.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpenterbayside.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'builderbentleigh.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'builderbentleigh.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'accountantbayside.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'accountantbayside.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'accountantbrighton.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'pizzalygon.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'pizzastkilda.com', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'pizzastkilda.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'charityaustralia.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'accountantmornington.com.au', action: 'for-sale', buy: 1297, rent: 37, rentLanding: 77 },
  { domain: 'accountantmteliza.com.au', action: 'for-sale', buy: 1297, rent: 37, rentLanding: 77 },
  { domain: 'clouddiary.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'cloudcalendar.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'doublebayhomes.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 147 },
  { domain: 'doverheightshomes.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'buildermordialloc.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpentersheparton.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'rosebudrealestate.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'realestateparkdale.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpentertoorak.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpentersomerville.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterhighett.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterhampton.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterbeaumaris.com.au', action: 'for-sale', buy: 1497, rent: 47, rentLanding: 97 },
  { domain: 'carpentermentone.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpentermentone.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterlangwarrin.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterlangwarrin.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterspringvale.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterspringvale.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpenterdandenong.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'carpertermordialloc.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'cartrades.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzabrighton.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzacarlton.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzasurfersparadise.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzasurfersparadise.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzageelong.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzadromana.com', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzadromana.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'pizzadarwin.com.au', action: 'for-sale', buy: 997, rent: 37, rentLanding: 77 },
  { domain: 'primebuildinggroup.com.au', action: 'for-sale', buy: 797, rent: 27, rentLanding: 57 },
  // REVIEW domains with updated prices
  { domain: 'dromana.com.au', action: 'for-sale', buy: 25433, rent: 848, rentLanding: 1272 },
  { domain: 'erotica.com.au', action: 'for-sale', buy: 23977, rent: 799, rentLanding: 1199 },
  { domain: 'nakedgirls.com.au', action: 'for-sale', buy: 19744, rent: 658, rentLanding: 987 },
  { domain: 'findtradesman.com.au', action: 'for-sale', buy: 12344, rent: 411, rentLanding: 617 },
  { domain: 'buildingaustralia.com.au', action: 'for-sale', buy: 15488, rent: 516, rentLanding: 774 },
  { domain: 'premiumpropertiesaustralia.com.au', action: 'for-sale', buy: 9444, rent: 315, rentLanding: 472 },
  { domain: 'virtualtaxi.com.au', action: 'for-sale', buy: 9777, rent: 326, rentLanding: 489 },
  { domain: 'decksnpergolas.com.au', action: 'for-sale', buy: 9820, rent: 327, rentLanding: 491 },
  { domain: 'thehealthguide.com.au', action: 'for-sale', buy: 8953, rent: 298, rentLanding: 448 },
  { domain: 'horney.com.au', action: 'for-sale', buy: 9721, rent: 324, rentLanding: 486 },
  { domain: 'ifuck.com.au', action: 'for-sale', buy: 9322, rent: 311, rentLanding: 466 },
  { domain: 'lovedating.com.au', action: 'for-sale', buy: 8751, rent: 292, rentLanding: 438 },
  { domain: 'virtualdriver.com.au', action: 'for-sale', buy: 8933, rent: 298, rentLanding: 447 },
  { domain: 'virtualcar.com.au', action: 'for-sale', buy: 8930, rent: 298, rentLanding: 447 },
  { domain: 'healthydesserts.com.au', action: 'for-sale', buy: 7655, rent: 255, rentLanding: 383 },
  { domain: 'brandan.com.au', action: 'for-sale', buy: 5677, rent: 189, rentLanding: 284 },
  { domain: 'showerscreensperth.com.au', action: 'for-sale', buy: 3984, rent: 133, rentLanding: 199 },
  { domain: 'stupidshit.com.au', action: 'for-sale', buy: 3455, rent: 115, rentLanding: 173 },
  { domain: 'carpentercanberra.com', action: 'for-sale', buy: 3966, rent: 132, rentLanding: 198 },
  { domain: 'carpentercairns.com', action: 'for-sale', buy: 3966, rent: 132, rentLanding: 198 },
  { domain: 'carpenterdarwin.com', action: 'for-sale', buy: 3964, rent: 132, rentLanding: 198 },
  { domain: 'builderdarwin.com', action: 'for-sale', buy: 2977, rent: 99, rentLanding: 149 },
  { domain: 'builderbendigo.com', action: 'for-sale', buy: 2344, rent: 78, rentLanding: 117 },
  { domain: 'builderportsea.com.au', action: 'for-sale', buy: 1997, rent: 67, rentLanding: 100 },
  { domain: 'carpenterstkilda.com', action: 'for-sale', buy: 1497, rent: 50, rentLanding: 75 },
  { domain: 'primebuildingprojects.com.au', action: 'for-sale', buy: 797, rent: 27, rentLanding: 40 },
  // FUNNELS
  { domain: 'buildersorrento.com.au', action: 'funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'mptrades.com.au', action: 'funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermteliza.com.au', action: 'funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermtmartha.com.au', action: 'funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermornington.com.au', action: 'funnel-builder', funnelTo: 'primeprojects.com.au' },
  // VA FUNNELS (54 already deployed)
  { domain: 'lawyerassistant.com.au', action: 'funnel-va', funnelTo: 'virtualassistant.com.au', note: '✅ Already deployed' },
  { domain: 'dentistassistant.com.au', action: 'funnel-va', funnelTo: 'virtualassistant.com.au', note: '✅ Already deployed' },
  // SKIP
  { domain: 'memyselfi.io', action: 'skip' },
  { domain: 'builtbybanks.com.au', action: 'skip' },
  { domain: 'broker4.com', action: 'skip' },
  { domain: 'carpentermcrae.com.au', action: 'skip' },
  { domain: 'carpentersafteybeach.com.au', action: 'skip' },
  { domain: 'carpenterredhill.com.au', action: 'skip' },
  { domain: 'carpenterflinders.com.au', action: 'skip' },
];

const actionColors: Record<string, string> = {
  'for-sale': '#22c55e',
  'funnel-builder': '#3b82f6',
  'funnel-va': '#8b5cf6',
  'skip': '#6b7280',
  'keep-pending': '#f59e0b',
};

const actionLabels: Record<string, string> = {
  'for-sale': '💰 For Sale',
  'funnel-builder': '🏗️ Funnel → Prime',
  'funnel-va': '🤖 Funnel → VA',
  'skip': '❌ Skip',
  'keep-pending': '⏳ Pending',
};

export default function DeploymentPlanPage() {
  const [wrong, setWrong] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const toggleWrong = (domain: string) => {
    setWrong(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain);
      else next.add(domain);
      return next;
    });
  };

  const filtered = filter === 'all' ? ALL_PLANS : ALL_PLANS.filter(d => d.action === filter);
  const wrongList = ALL_PLANS.filter(d => wrong.has(d.domain));

  const copyWrong = () => {
    const msg = `❌ Wrong domains — please correct:\n\n${wrongList.map(d => `${d.domain} (currently: ${actionLabels[d.action]})`).join('\n')}`;
    navigator.clipboard.writeText(msg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 3000); });
  };

  const counts = {
    'for-sale': ALL_PLANS.filter(d => d.action === 'for-sale').length,
    'funnel-builder': ALL_PLANS.filter(d => d.action === 'funnel-builder').length,
    'funnel-va': ALL_PLANS.filter(d => d.action === 'funnel-va').length,
    'skip': ALL_PLANS.filter(d => d.action === 'skip').length,
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh", padding: "24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link href="/internal-domains" style={{ color: "var(--muted)", fontSize: 14 }}>← Back to domains</Link>
        <h1 style={{ color: "#FFD700", fontSize: "2rem", fontWeight: 900, margin: "20px 0 8px" }}>📋 Full Deployment Plan</h1>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>Click ❌ on any domain that's wrong. Then copy the list to Discord.</p>

        {/* Summary */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
          {Object.entries(counts).map(([action, count]) => (
            <div key={action} onClick={() => setFilter(filter === action ? 'all' : action)}
              style={{ padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 13,
                backgroundColor: filter === action ? actionColors[action] : "var(--card)",
                color: filter === action ? "#000" : actionColors[action],
                border: `1px solid ${actionColors[action]}` }}>
              {actionLabels[action]}: {count}
            </div>
          ))}
          <div onClick={() => setFilter('all')} style={{ padding: "8px 16px", borderRadius: 8, cursor: "pointer",
            fontWeight: 700, fontSize: 13, backgroundColor: filter === 'all' ? "#FFD700" : "var(--card)",
            color: filter === 'all' ? "#000" : "#FFD700", border: "1px solid #FFD700" }}>
            All: {ALL_PLANS.length}
          </div>
        </div>

        {wrong.size > 0 && (
          <div style={{ backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid #ef4444", borderRadius: 12, padding: 16, marginBottom: 24 }}>
            <p style={{ color: "#ef4444", fontWeight: 700, margin: "0 0 8px" }}>❌ {wrong.size} wrong domains flagged:</p>
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 12px" }}>{wrongList.map(d => d.domain).join(', ')}</p>
            <button onClick={copyWrong} style={{ padding: "8px 16px", borderRadius: 8, backgroundColor: "#ef4444", color: "white", fontWeight: 700, border: "none", cursor: "pointer" }}>
              {copied ? "✅ Copied!" : "Copy Wrong List → Paste to Monty"}
            </button>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map(plan => (
            <div key={plan.domain} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
              backgroundColor: wrong.has(plan.domain) ? "rgba(239,68,68,0.08)" : "var(--card)",
              border: `1px solid ${wrong.has(plan.domain) ? "#ef4444" : "var(--border)"}`,
              borderRadius: 10, padding: "12px 16px"
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{plan.domain}</div>
                <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: actionColors[plan.action], fontWeight: 700 }}>
                    {actionLabels[plan.action]}
                  </span>
                  {plan.buy && <span style={{ fontSize: 12, color: "var(--muted)" }}>Buy: ${plan.buy.toLocaleString()}</span>}
                  {plan.rent && <span style={{ fontSize: 12, color: "var(--muted)" }}>Rent: ${plan.rent}/mo</span>}
                  {plan.funnelTo && <span style={{ fontSize: 12, color: "var(--muted)" }}>→ {plan.funnelTo}</span>}
                  {plan.note && <span style={{ fontSize: 12, color: "#22c55e" }}>{plan.note}</span>}
                </div>
              </div>
              <button onClick={() => toggleWrong(plan.domain)} style={{
                padding: "6px 12px", borderRadius: 6, border: `1px solid ${wrong.has(plan.domain) ? "#ef4444" : "var(--border)"}`,
                backgroundColor: wrong.has(plan.domain) ? "#ef4444" : "transparent",
                color: wrong.has(plan.domain) ? "white" : "var(--muted)",
                cursor: "pointer", fontSize: 13, fontWeight: 700, flexShrink: 0
              }}>
                {wrong.has(plan.domain) ? "✓ Flagged" : "❌ Wrong"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
