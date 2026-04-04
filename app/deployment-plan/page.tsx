"use client";
import { useState } from "react";
import Link from "next/link";

type DomainStatus =
  | 'deployed-sale'
  | 'deployed-funnel-va'
  | 'deployed-funnel-builder'
  | 'pending-sale'
  | 'pending-funnel'
  | 'skip'
  | 'review-needed';

type DomainPlan = {
  domain: string;
  status: DomainStatus;
  price?: number;
  funnelTo?: string;
  note?: string;
};

const ALL_PLANS: DomainPlan[] = [
  // ✅ DEPLOYED - FOR SALE (already live on marketplace)
  { domain: 'sales.net.au', status: 'deployed-sale' },
  { domain: 'virtualcalendar.ai', status: 'deployed-sale' },
  { domain: 'builderbondi.com', status: 'deployed-sale' },
  { domain: 'tailoredva.ai', status: 'deployed-sale' },
  { domain: 'customva.ai', status: 'deployed-sale' },
  { domain: 'virtualcalendar.com.au', status: 'deployed-sale' },
  { domain: 'darlingharbourrealestate.com', status: 'deployed-sale' },
  { domain: 'darlingharbourrealestate.com.au', status: 'deployed-sale' },
  { domain: 'bondihomes.com', status: 'deployed-sale' },
  { domain: 'darlingpointrealestate.com', status: 'deployed-sale' },
  { domain: 'darlingpointhomes.com.au', status: 'deployed-sale' },
  { domain: 'pointpiperhomes.com.au', status: 'deployed-sale' },
  { domain: 'darlingharbourhomes.com.au', status: 'deployed-sale' },
  { domain: 'morningtonpeninsulatrades.com.au', status: 'deployed-sale' },
  { domain: 'morningtonwineries.com.au', status: 'deployed-sale' },
  { domain: 'buildertoorak.com.au', status: 'deployed-sale' },
  { domain: 'virtualbooking.com.au', status: 'deployed-sale' },
  { domain: 'customva.com.au', status: 'deployed-sale' },
  { domain: 'physioadmin.com.au', status: 'deployed-sale' },
  { domain: 'physioreception.com.au', status: 'deployed-sale' },
  { domain: 'psychreception.com.au', status: 'deployed-sale' },
  { domain: 'accountantreception.com.au', status: 'deployed-sale' },
  { domain: 'accountantadmin.com.au', status: 'deployed-sale' },
  { domain: 'linleypointhomes.com.au', status: 'deployed-sale' },
  { domain: 'watsonsbayhomes.com.au', status: 'deployed-sale' },
  { domain: 'dalkeithhomes.com.au', status: 'deployed-sale' },
  { domain: 'dalkeithrelestate.com.au', status: 'deployed-sale' },
  { domain: 'bellevuehillrealesate.com.au', status: 'deployed-sale' },
  { domain: 'portseahomes.com', status: 'deployed-sale' },
  { domain: 'lavenderbayhomes.com.au', status: 'deployed-sale' },
  { domain: 'cremornepointhomes.com.au', status: 'deployed-sale' },
  { domain: 'peppermintgrovehomes.com.au', status: 'deployed-sale' },
  { domain: 'longuevillehomes.com.au', status: 'deployed-sale' },
  { domain: 'kooyonghomes.com.au', status: 'deployed-sale' },
  { domain: 'woolwichhomes.com.au', status: 'deployed-sale' },
  { domain: 'centennialparkhomes.com.au', status: 'deployed-sale' },
  { domain: 'carpenterbondi.com.au', status: 'deployed-sale' },
  { domain: 'carpenterbondi.com', status: 'deployed-sale' },
  { domain: 'builderbeaumaris.com', status: 'deployed-sale' },
  { domain: 'pizzabondi.com', status: 'deployed-sale' },
  { domain: 'beautytherapistassistant.com.au', status: 'deployed-sale' },
  { domain: 'virtualdiary.com.au', status: 'deployed-sale' },
  { domain: 'phillipislandrealestate.com.au', status: 'deployed-sale' },
  { domain: 'eaglebayhomes.com.au', status: 'deployed-sale' },
  { domain: 'tamaramahomes.com.au', status: 'deployed-sale' },
  { domain: 'orangegrovehomes.com.au', status: 'deployed-sale' },
  { domain: 'psychologistmornington.com.au', status: 'deployed-sale' },
  { domain: 'psychologistfrankston.com.au', status: 'deployed-sale' },
  { domain: 'carpenterbrighton.com.au', status: 'deployed-sale' },
  { domain: 'plumbermorningtonpeninsula.com', status: 'deployed-sale' },
  { domain: 'carpenterelwood.com.au', status: 'deployed-sale' },
  { domain: 'carpenterelwood.com', status: 'deployed-sale' },
  { domain: 'carpenterbayside.com', status: 'deployed-sale' },
  { domain: 'carpenterbayside.com.au', status: 'deployed-sale' },
  { domain: 'builderbentleigh.com', status: 'deployed-sale' },
  { domain: 'builderbentleigh.com.au', status: 'deployed-sale' },
  { domain: 'accountantbayside.com.au', status: 'deployed-sale' },
  { domain: 'accountantbayside.com', status: 'deployed-sale' },
  { domain: 'accountantbrighton.com.au', status: 'deployed-sale' },
  { domain: 'pizzalygon.com', status: 'deployed-sale' },
  { domain: 'pizzastkilda.com', status: 'deployed-sale' },
  { domain: 'pizzastkilda.com.au', status: 'deployed-sale' },
  { domain: 'charityaustralia.com.au', status: 'deployed-sale' },
  { domain: 'accountantmornington.com.au', status: 'deployed-sale' },
  { domain: 'accountantmteliza.com.au', status: 'deployed-sale' },
  { domain: 'clouddiary.com.au', status: 'deployed-sale' },
  { domain: 'cloudcalendar.com.au', status: 'deployed-sale' },
  { domain: 'doublebayhomes.com.au', status: 'deployed-sale' },
  { domain: 'doverheightshomes.com.au', status: 'deployed-sale' },
  { domain: 'buildermordialloc.com', status: 'deployed-sale', note: 'Price raise → $3,455' },
  { domain: 'carpentersheparton.com.au', status: 'deployed-sale' },
  { domain: 'rosebudrealestate.com.au', status: 'deployed-sale' },
  { domain: 'realestateparkdale.com.au', status: 'deployed-sale' },
  { domain: 'carpentertoorak.com.au', status: 'deployed-sale' },
  { domain: 'carpentersomerville.com.au', status: 'deployed-sale' },
  { domain: 'carpenterhighett.com.au', status: 'deployed-sale' },
  { domain: 'carpenterhampton.com.au', status: 'deployed-sale' },
  { domain: 'carpenterbeaumaris.com.au', status: 'deployed-sale' },
  { domain: 'carpentermentone.com.au', status: 'deployed-sale' },
  { domain: 'carpentermentone.com', status: 'deployed-sale' },
  { domain: 'carpenterlangwarrin.com.au', status: 'deployed-sale' },
  { domain: 'carpenterlangwarrin.com', status: 'deployed-sale' },
  { domain: 'carpenterspringvale.com.au', status: 'deployed-sale' },
  { domain: 'carpenterspringvale.com', status: 'deployed-sale' },
  { domain: 'carpenterdandenong.com.au', status: 'deployed-sale' },
  { domain: 'carpertermordialloc.com.au', status: 'deployed-sale' },
  { domain: 'cartrades.com.au', status: 'deployed-sale', note: 'Price raise → $14,566' },
  { domain: 'pizzabrighton.com.au', status: 'deployed-sale' },
  { domain: 'pizzacarlton.com', status: 'deployed-sale' },
  { domain: 'pizzasurfersparadise.com', status: 'deployed-sale' },
  { domain: 'pizzasurfersparadise.com.au', status: 'deployed-sale' },
  { domain: 'pizzageelong.com.au', status: 'deployed-sale' },
  { domain: 'pizzadromana.com', status: 'deployed-sale' },
  { domain: 'pizzadromana.com.au', status: 'deployed-sale' },
  { domain: 'pizzadarwin.com.au', status: 'deployed-sale' },
  { domain: 'primebuildinggroup.com.au', status: 'deployed-sale' },

  // 🤖 DEPLOYED - VA FUNNEL → virtualassistant.com.au
  { domain: 'aivirtualreceptionist.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'aivirtualreceptionist.ai', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'ai-virtualassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'ai-virtualassistant.ai', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'ai-virtualassistant.com', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'lawyerassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'dentistassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'doctorassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'accountantassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'pysioadmin.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'psychologistassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'psychassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'psychologistmorningtonpeninsula.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'chiropractorassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'chiroassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'personaltrainerassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'ptassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'myotherapistassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'myoassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'beautyassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'massageassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'hairdresserassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'consultantassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'mechanicassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'osteoassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'podiatristassistant.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'tradieassistant.ai', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'virtualsolutions.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'accountantfremantle.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },
  { domain: 'accountantsurfersparadise.com.au', status: 'deployed-funnel-va', funnelTo: 'virtualassistant.com.au' },

  // 🏗️ DEPLOYED - BUILDER FUNNEL → primeprojects.com.au
  { domain: 'buildersorrento.com.au', status: 'deployed-funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'mptrades.com.au', status: 'deployed-funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermteliza.com.au', status: 'deployed-funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermtmartha.com.au', status: 'deployed-funnel-builder', funnelTo: 'primeprojects.com.au' },
  { domain: 'buildermornington.com.au', status: 'deployed-funnel-builder', funnelTo: 'primeprojects.com.au' },

  // 💰 PENDING - FOR SALE (ready to deploy, prices set)
  { domain: 'dromana.com.au', status: 'pending-sale', price: 25433 },
  { domain: 'erotica.com.au', status: 'pending-sale', price: 23977 },
  { domain: 'nakedgirls.com.au', status: 'pending-sale', price: 19744 },
  { domain: 'findtradesman.com.au', status: 'pending-sale', price: 12344 },
  { domain: 'decksnpergolas.com.au', status: 'pending-sale', price: 9820 },
  { domain: 'virtualtaxi.com.au', status: 'pending-sale', price: 9777 },
  { domain: 'horney.com.au', status: 'pending-sale', price: 9721 },
  { domain: 'premiumpropertiesaustralia.com.au', status: 'pending-sale', price: 9444 },
  { domain: 'ifuck.com.au', status: 'pending-sale', price: 9322 },
  { domain: 'thehealthguide.com.au', status: 'pending-sale', price: 8953 },
  { domain: 'virtualdriver.com.au', status: 'pending-sale', price: 8933 },
  { domain: 'virtualcar.com.au', status: 'pending-sale', price: 8930 },
  { domain: 'lovedating.com.au', status: 'pending-sale', price: 8751 },
  { domain: 'healthydesserts.com.au', status: 'pending-sale', price: 7655 },
  { domain: 'brandan.com.au', status: 'pending-sale', price: 5677 },
  { domain: 'showerscreensperth.com.au', status: 'pending-sale', price: 3984 },
  { domain: 'carpentercanberra.com', status: 'pending-sale', price: 3966 },
  { domain: 'carpentercairns.com', status: 'pending-sale', price: 3966 },
  { domain: 'carpenterdarwin.com', status: 'pending-sale', price: 3964 },
  { domain: 'stupidshit.com.au', status: 'pending-sale', price: 3455 },
  { domain: 'builderdarwin.com', status: 'pending-sale', price: 2977 },
  { domain: 'builderbendigo.com', status: 'pending-sale', price: 2344 },
  { domain: 'carpenterstkilda.com', status: 'pending-sale', price: 1497 },

  // 🏗️ PENDING - FUNNEL (ready to deploy as redirects)
  { domain: 'builderportsea.com.au', status: 'pending-funnel', funnelTo: 'primeprojects.com.au' },
  { domain: 'builderfrankston.com.au', status: 'pending-funnel', funnelTo: 'primeprojects.com.au' },
  { domain: 'primebuildingprojects.com.au', status: 'pending-funnel', funnelTo: 'primeprojects.com.au' },

  // ❌ SKIP (do nothing)
  { domain: 'cheapwebsite.com.au', status: 'skip' },
  { domain: 'memyselfi.ai', status: 'skip' },
  { domain: 'memyselfi.io', status: 'skip' },
  { domain: 'virtualassistant.com.au', status: 'skip' },
  { domain: 'tobybanks.com', status: 'skip' },
  { domain: 'juliabanks.com.au', status: 'skip' },
  { domain: 'tobiasbanks.com.au', status: 'skip' },
  { domain: 'cohenbanks.com.au', status: 'skip' },
  { domain: 'cohenbanks.com', status: 'skip' },
  { domain: 'florencebanks.com.au', status: 'skip' },
  { domain: 'noahatkins.com.au', status: 'skip' },
  { domain: 'builtbybanks.com.au', status: 'skip' },
  { domain: 'broker4.com', status: 'skip' },
  { domain: 'buildingaustralia.com.au', status: 'skip' },
  { domain: 'carpentermccrae.com.au', status: 'skip' },
  { domain: 'carpentersafteybeach.com.au', status: 'skip' },
  { domain: 'carpenterredhill.com.au', status: 'skip' },
  { domain: 'carpenterflinders.com.au', status: 'skip' },

  // ⚠️ REVIEW NEEDED (Toby needs to decide)
  { domain: 'physioassistant.com.au', status: 'review-needed' },
  { domain: 'swanst.com.au', status: 'review-needed' },
  { domain: 'fitzroyst.com.au', status: 'review-needed' },
  { domain: 'brunswickst.com.au', status: 'review-needed' },
  { domain: 'carpentermorningtonpeninsula.com.au', status: 'review-needed' },
  { domain: 'concretermorningtonpeninsula.com.au', status: 'review-needed' },
  { domain: 'carpenterblairgowrie.com.au', status: 'review-needed' },
  { domain: 'builderelwood.com', status: 'review-needed' },
  { domain: 'builderdandenong.com.au', status: 'review-needed' },
  { domain: 'builderbondi.com.au', status: 'review-needed' },
  { domain: 'carpentersurfersparadise.com.au', status: 'review-needed' },
  { domain: 'carpentersmorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'botoxbrisbane.com.au', status: 'review-needed' },
  { domain: 'builderbayside.com', status: 'review-needed' },
  { domain: 'carpenterz.com.au', status: 'review-needed' },
  { domain: 'carpenterfrankston.com.au', status: 'review-needed' },
  { domain: 'carpentermteliza.com.au', status: 'review-needed' },
  { domain: 'carpentermornington.com.au', status: 'review-needed' },
  { domain: 'carpentermtmartha.com.au', status: 'review-needed' },
  { domain: 'carpenterdromana.com', status: 'review-needed' },
  { domain: 'carpenterdromana.com.au', status: 'review-needed' },
  { domain: 'carpenterrosebud.com.au', status: 'review-needed' },
  { domain: 'carpenterrye.com.au', status: 'review-needed' },
  { domain: 'carpentersorrento.com.au', status: 'review-needed' },
  { domain: 'carpenterportsea.com.au', status: 'review-needed' },
  { domain: 'builderflinders.com.au', status: 'review-needed' },
  { domain: 'buildermarthacove.com.au', status: 'review-needed' },
  { domain: 'builderdromana.com.au', status: 'review-needed' },
  { domain: 'builderrosebud.com.au', status: 'review-needed' },
  { domain: 'builderrye.com.au', status: 'review-needed' },
  { domain: 'buildermorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'buildersmorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'electricianmorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'electriciansmorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'carpentermorningtonpeninsula.com', status: 'review-needed' },
  { domain: 'electricianmarthacove.com', status: 'review-needed' },
  { domain: 'electricianmarthacove.com.au', status: 'review-needed' },
  { domain: 'electriciansomerville.com', status: 'review-needed' },
  { domain: 'electricianmentone.com', status: 'review-needed' },
  { domain: 'electriciancranbourne.com', status: 'review-needed' },
  { domain: 'electricianflinders.com', status: 'review-needed' },
  { domain: 'electricianflinders.com.au', status: 'review-needed' },
  { domain: 'electricianfrankston.com', status: 'review-needed' },
  { domain: 'electricianmteliza.com', status: 'review-needed' },
  { domain: 'electricianmteliza.com.au', status: 'review-needed' },
  { domain: 'electricianmornington.com', status: 'review-needed' },
  { domain: 'electricianmtmartha.com', status: 'review-needed' },
  { domain: 'electriciandromana.com', status: 'review-needed' },
  { domain: 'electricianmccrae.com', status: 'review-needed' },
  { domain: 'electricianmccrae.com.au', status: 'review-needed' },
  { domain: 'electricianrosebud.com', status: 'review-needed' },
  { domain: 'electricianrye.com', status: 'review-needed' },
  { domain: 'electriciansorrento.com', status: 'review-needed' },
  { domain: 'electricianportsea.com', status: 'review-needed' },
  { domain: 'electricianportsea.com.au', status: 'review-needed' },
];

const statusConfig: Record<DomainStatus, { color: string; bg: string; label: string; emoji: string }> = {
  'deployed-sale':          { color: '#22c55e', bg: 'rgba(34,197,94,0.12)',   label: 'Deployed – For Sale',     emoji: '✅' },
  'deployed-funnel-va':     { color: '#a855f7', bg: 'rgba(168,85,247,0.12)', label: 'Deployed – VA Funnel',    emoji: '🤖' },
  'deployed-funnel-builder':{ color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', label: 'Deployed – Builder Funnel',emoji: '🏗️' },
  'pending-sale':           { color: '#84cc16', bg: 'rgba(132,204,22,0.12)', label: 'Pending – For Sale',       emoji: '💰' },
  'pending-funnel':         { color: '#14b8a6', bg: 'rgba(20,184,166,0.12)', label: 'Pending – Funnel',         emoji: '🔀' },
  'skip':                   { color: '#6b7280', bg: 'rgba(107,114,128,0.12)','label': 'Skip',                  emoji: '❌' },
  'review-needed':          { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', label: 'Needs Review',             emoji: '⚠️' },
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

  const filtered = filter === 'all' ? ALL_PLANS : ALL_PLANS.filter(d => d.status === filter);
  const wrongList = ALL_PLANS.filter(d => wrong.has(d.domain));

  const copyWrong = () => {
    const msg = `❌ Wrong domains — please correct:\n\n${wrongList.map(d => `${d.domain} (currently: ${statusConfig[d.status].label})`).join('\n')}`;
    navigator.clipboard.writeText(msg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 3000); });
  };

  const counts: Record<string, number> = { all: ALL_PLANS.length };
  for (const s of Object.keys(statusConfig) as DomainStatus[]) {
    counts[s] = ALL_PLANS.filter(d => d.status === s).length;
  }

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh", padding: "24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link href="/internal-domains" style={{ color: "var(--muted)", fontSize: 14 }}>← Back to domains</Link>
        <h1 style={{ color: "#FFD700", fontSize: "2rem", fontWeight: 900, margin: "20px 0 4px" }}>
          📋 Full Deployment Plan
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 20 }}>
          All {ALL_PLANS.length} domains from Toby&apos;s Dreamscape account. Click ❌ Wrong on any that needs correcting.
        </p>

        {/* Summary filter pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          <div onClick={() => setFilter('all')}
            style={{ padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 12,
              backgroundColor: filter === 'all' ? "#FFD700" : "var(--card)",
              color: filter === 'all' ? "#000" : "#FFD700", border: "1px solid #FFD700" }}>
            ALL: {counts.all}
          </div>
          {(Object.keys(statusConfig) as DomainStatus[]).map(s => {
            const cfg = statusConfig[s];
            const active = filter === s;
            return (
              <div key={s} onClick={() => setFilter(filter === s ? 'all' : s)}
                style={{ padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 12,
                  backgroundColor: active ? cfg.color : "var(--card)",
                  color: active ? "#000" : cfg.color, border: `1px solid ${cfg.color}` }}>
                {cfg.emoji} {cfg.label}: {counts[s]}
              </div>
            );
          })}
        </div>

        {/* Wrong list banner */}
        {wrong.size > 0 && (
          <div style={{ backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid #ef4444", borderRadius: 12, padding: 16, marginBottom: 24 }}>
            <p style={{ color: "#ef4444", fontWeight: 700, margin: "0 0 8px" }}>❌ {wrong.size} domain{wrong.size > 1 ? 's' : ''} flagged as wrong:</p>
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 12px", wordBreak: "break-word" }}>
              {wrongList.map(d => d.domain).join(', ')}
            </p>
            <button onClick={copyWrong} style={{
              padding: "8px 16px", borderRadius: 8, backgroundColor: "#ef4444",
              color: "white", fontWeight: 700, border: "none", cursor: "pointer", fontSize: 13
            }}>
              {copied ? "✅ Copied to clipboard!" : "📋 Copy Wrong List → Paste to Monty"}
            </button>
          </div>
        )}

        {/* Domain list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtered.map(plan => {
            const cfg = statusConfig[plan.status];
            const isWrong = wrong.has(plan.domain);
            return (
              <div key={plan.domain} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                backgroundColor: isWrong ? "rgba(239,68,68,0.08)" : cfg.bg,
                border: `1px solid ${isWrong ? "#ef4444" : cfg.color}`,
                borderRadius: 10, padding: "10px 14px"
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", wordBreak: "break-word" }}>{plan.domain}</div>
                  <div style={{ display: "flex", gap: 10, marginTop: 3, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: cfg.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {cfg.emoji} {cfg.label}
                    </span>
                    {plan.price && (
                      <span style={{ fontSize: 11, color: "#84cc16", fontWeight: 700 }}>
                        ${plan.price.toLocaleString()}
                      </span>
                    )}
                    {plan.funnelTo && (
                      <span style={{ fontSize: 11, color: "var(--muted)" }}>→ {plan.funnelTo}</span>
                    )}
                    {plan.note && (
                      <span style={{ fontSize: 11, color: "#f59e0b" }}>{plan.note}</span>
                    )}
                  </div>
                </div>
                <button onClick={() => toggleWrong(plan.domain)} style={{
                  padding: "5px 10px", borderRadius: 6,
                  border: `1px solid ${isWrong ? "#ef4444" : "var(--border)"}`,
                  backgroundColor: isWrong ? "#ef4444" : "transparent",
                  color: isWrong ? "white" : "var(--muted)",
                  cursor: "pointer", fontSize: 12, fontWeight: 700, flexShrink: 0, whiteSpace: "nowrap"
                }}>
                  {isWrong ? "✓ Flagged" : "❌ Wrong"}
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 32, padding: 16, backgroundColor: "var(--card)", borderRadius: 12, border: "1px solid var(--border)" }}>
          <p style={{ color: "var(--muted)", fontSize: 13, margin: 0 }}>
            Total: <strong style={{ color: "var(--text)" }}>{ALL_PLANS.length} domains</strong> —
            {' '}<span style={{ color: '#22c55e' }}>✅ {counts['deployed-sale']} for sale</span> ·
            {' '}<span style={{ color: '#a855f7' }}>🤖 {counts['deployed-funnel-va']} VA funnel</span> ·
            {' '}<span style={{ color: '#3b82f6' }}>🏗️ {counts['deployed-funnel-builder']} builder funnel</span> ·
            {' '}<span style={{ color: '#84cc16' }}>💰 {counts['pending-sale']} pending sale</span> ·
            {' '}<span style={{ color: '#14b8a6' }}>🔀 {counts['pending-funnel']} pending funnel</span> ·
            {' '}<span style={{ color: '#6b7280' }}>❌ {counts['skip']} skip</span> ·
            {' '}<span style={{ color: '#f59e0b' }}>⚠️ {counts['review-needed']} needs review</span>
          </p>
        </div>
      </div>
    </div>
  );
}
