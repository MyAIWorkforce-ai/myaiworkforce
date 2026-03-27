"use client";
import Link from "next/link";
import { notFound } from "next/navigation";

// Agent data — will be replaced by Supabase DB once connected
const agents: Record<string, {
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  seller: string;
  description: string;
  features: string[];
  tags: string[];
  longDescription: string;
  includes: string[];
}> = {
  "email-triage-pro": {
    title: "Email Triage Pro",
    category: "Operations",
    price: "$29",
    rating: 5,
    reviews: 214,
    seller: "My AI Workforce",
    description: "A battle-tested email triage system that processes your inbox every morning and delivers a structured briefing — prioritised by urgency, categorised by type, and ready for action.",
    features: ["Morning inbox briefing", "5 category system", "Auto-archive noise", "Draft replies", "24h follow-up nudge", "Works with Gmail & Outlook"],
    tags: ["Gmail", "Inbox", "Productivity", "Operations", "24/7"],
    longDescription: `Stop starting your day overwhelmed by email. Email Triage Pro processes your entire inbox and delivers a clean, prioritised briefing — so you know exactly what needs your attention and what can wait.\n\nBuilt from real-world usage across dozens of inboxes. Every categorisation rule has been refined to minimise false positives. Urgent things stay urgent. Noise gets archived automatically.`,
    includes: ["SKILL.md", "SOUL.md", "AGENTS.md", "config.json", "3 triage prompt files", "Morning briefing template", "SETUP.md"],
  },
  "lead-generation-agent": {
    title: "Lead Generation Agent",
    category: "Sales",
    price: "$49",
    rating: 4,
    reviews: 187,
    seller: "My AI Workforce",
    description: "An autonomous lead generation agent that finds, qualifies, and warms up prospects — so your sales pipeline is always full without you lifting a finger.",
    features: ["ICP-based prospect finding", "Automated qualification", "Personalised outreach", "3-touch follow-up sequence", "Pipeline tracking", "Weekly report"],
    tags: ["Sales", "LinkedIn", "Outreach", "Pipeline", "Automation"],
    longDescription: `Your sales pipeline should never run dry. Lead Generation Agent works around the clock to find prospects that match your exact ideal customer profile, research them properly, and draft personalised outreach that actually gets replies.\n\nUnlike generic cold email tools, this agent thinks — it finds the right angle for each prospect based on their recent activity, company news, and likely pain points.`,
    includes: ["SKILL.md", "SOUL.md", "AGENTS.md", "config.json", "3 email templates", "Qualification framework", "Pipeline tracker", "SETUP.md"],
  },
  "ai-ceo-persona": {
    title: "AI CEO Persona",
    category: "Executive",
    price: "$99",
    rating: 5,
    reviews: 312,
    seller: "My AI Workforce",
    description: "The complete configuration to turn your OpenClaw agent into a strategic business operator. For founders and CEOs who want an AI that thinks like a business partner.",
    features: ["Daily morning briefing", "Calendar management", "OKR tracking", "Meeting intelligence", "Weekly business review", "Strategic thinking"],
    tags: ["CEO", "Founder", "Executive", "Strategy", "Calendar", "OKR"],
    longDescription: `This is the configuration that makes the difference between an AI assistant and an AI operator.\n\nThe AI CEO Persona is a complete operational framework — SOUL.md, AGENTS.md, memory system, heartbeat schedule, OKR tracking, meeting intelligence, and morning briefing. Everything configured and ready to deploy.\n\nBuilt by people who run businesses with AI. Every component tested in the real world.`,
    includes: ["SOUL.md (complete executive persona)", "AGENTS.md", "USER.md template", "MEMORY.md framework", "HEARTBEAT.md", "OKR framework", "Meeting intelligence prompts", "Weekly review system", "SETUP.md"],
  },
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>My AI Workforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--yellow)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--text-dim)" }}>Guides</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
        </nav>
        <Link href="/contact" className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>Book a Call</Link>
      </div>
    </header>
  );
}

export default function AgentPage({ params }: { params: { slug: string } }) {
  const agent = agents[params.slug];
  if (!agent) notFound();

  const stars = Array.from({ length: 5 }, (_, i) => i < agent.rating);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b" style={{ borderColor: "var(--nav-border)" }}>
          <div className="max-w-6xl mx-auto text-sm" style={{ color: "var(--text-dim)" }}>
            <Link href="/marketplace" style={{ color: "var(--yellow)" }}>Marketplace</Link> → <span>{agent.category}</span> → <span>{agent.title}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)" }}>{agent.category}</span>
            </div>
            <h1 className="text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>{agent.title}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {stars.map((filled, i) => (
                  <span key={i} style={{ color: filled ? "#FFD700" : "var(--border)", fontSize: "18px" }}>★</span>
                ))}
              </div>
              <span className="text-sm" style={{ color: "var(--text-dim)" }}>({agent.reviews} reviews)</span>
              <span className="text-sm" style={{ color: "var(--text-dim)" }}>by <span style={{ color: "var(--yellow)" }}>{agent.seller}</span></span>
            </div>

            <p className="text-lg mb-8" style={{ color: "var(--text-dim)", lineHeight: "1.7" }}>{agent.description}</p>

            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <h2 className="font-bold text-lg mb-4">What&apos;s Included</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {agent.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span style={{ color: "var(--yellow)" }}>✓</span>
                    <span style={{ color: "var(--text-dim)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-lg mb-4">Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {agent.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--yellow)" }}>✦</span>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-4">About This Agent</h2>
              <div className="prose" style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
                {agent.longDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "2px solid var(--yellow)" }}>
              <div className="text-4xl font-extrabold mb-1" style={{ color: "var(--yellow)" }}>{agent.price}</div>
              <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>One-time purchase. Use forever.</p>
              <Link href="/contact" className="w-full py-4 rounded-xl font-bold text-center text-black block mb-3" style={{ backgroundColor: "var(--yellow)" }}>
                Get This Agent →
              </Link>
              <p className="text-xs text-center mb-6" style={{ color: "var(--text-dim)" }}>Instant download after purchase</p>
              <div className="flex flex-col gap-2 text-sm">
                {["Instant download", "Full documentation", "Setup guide included", "Email support"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--yellow)" }}>✓</span>
                    <span style={{ color: "var(--text-dim)" }}>{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs font-semibold mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {agent.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md" style={{ backgroundColor: "var(--bg)", color: "var(--text-dim)", border: "1px solid var(--border)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
