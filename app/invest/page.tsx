"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "investnow") {
      onUnlock();
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-sm w-full text-center">
        <Link href="/" className="text-2xl font-extrabold mb-8 block" style={{ color: "var(--yellow)" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></Link>
        <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="text-xl font-bold mb-2">Investor Access</h1>
          <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>This page is password protected.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
              className="w-full px-4 py-3 rounded-lg text-center text-sm outline-none"
              style={{ backgroundColor: "var(--bg)", border: `1px solid ${error ? "#E63946" : "var(--border)"}`, color: "var(--text)" }}
            />
            {error && <p className="text-sm" style={{ color: "#E63946" }}>Incorrect password. Please try again.</p>}
            <button type="submit" className="py-3 rounded-lg font-bold text-sm" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>
              Access Investor Brief →
            </button>
          </form>
        </div>
        <p className="text-xs mt-6" style={{ color: "var(--text-dim)" }}>
          Need access? Email <a href="mailto:toby@myaiworkforce.ai" style={{ color: "var(--yellow)" }}>toby@myaiworkforce.ai</a>
        </p>
      </div>
    </div>
  );
}


function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 36, height: 36 }} />;
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold" style={{ color: "#FFD700", letterSpacing: "-0.02em" }}>
          MyAIWorkforce
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Marketplace", href: "/marketplace" },
            { label: "Guides", href: "/guides" },
            { label: "Done-For-You", href: "/done-for-you" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: link.href === "/invest" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/invest" ? "#FFD700" : "var(--text-dim)")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Book a Free Call
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="transition-colors"
            style={{ color: "var(--text-dim)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="md:hidden border-t mobile-menu"
          style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--mobile-menu-bg)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Guides", href: "/guides" },
              { label: "Done-For-You", href: "/done-for-you" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-dim)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
              onClick={() => setOpen(false)}
            >
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

const stats = [
  { value: "$184B", label: "Global AI Software Market" },
  { value: "75%", label: "Creator Revenue Share — Industry Best" },
  { value: "95%+", label: "Gross Margin on Done-For-You" },
  { value: "$10M+", label: "12-Month ARR Target" },
];

const revenues = [
  { name: "Marketplace Commissions", desc: "25% of all transactions on the platform", icon: "🛒" },
  { name: "Pro Subscriptions", desc: "$49/mo for premium buyers — unlimited access", icon: "⭐" },
  { name: "Agency Subscriptions", desc: "$197/mo for creators — sell & earn 75%", icon: "🏪" },
  { name: "Done-For-You Retainers", desc: "$997–$2,497/mo — 95%+ gross margin", icon: "🤝" },
  { name: "Featured Listings", desc: "Sellers pay for promoted placement", icon: "📌" },
  { name: "White Label", desc: "Agencies license the platform at $500–$2k/mo", icon: "🏷️" },
];

const roadmap = [
  { month: "Month 1", items: ["Launch live marketplace with payments", "10 real listings", "First 3 Done-For-You clients", "$3k MRR"] },
  { month: "Month 2", items: ["100 marketplace listings", "10 DFY clients", "$15k MRR", "Newsletter: 1,000 subscribers"] },
  { month: "Month 3", items: ["500 listings", "25 DFY clients", "$40k MRR", "Creator program launched"] },
  { month: "Month 12", items: ["$500k+ ARR", "2,000+ listings", "100+ DFY clients", "250+ active creators"] },
];

const competitors = [
  { name: "ShopClawMart", focus: "OpenClaw skills only", cut: "30% platform", limit: "Single platform, dev-focused" },
  { name: "ClawHub", focus: "OpenClaw skills", cut: "Free", limit: "No commerce layer" },
  { name: "Fiverr", focus: "Generic freelancers", cut: "20–30%", limit: "Not AI-specific" },
  { name: "Zapier Marketplace", focus: "Zap templates", cut: "Proprietary", limit: "Platform-locked" },
  { name: "My AI Workforce", focus: "Everything AI", cut: "25% platform", limit: "—", isUs: true },
];

export default function InvestPage() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>

        {/* Hero */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,215,0,0.3)" }}>Investor Brief — Confidential</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.04em" }}>The <span style={{ color: "var(--yellow)" }}>Shopify App Store</span><br />for AI Agents</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--text-dim)" }}>My AI Workforce is a two-sided marketplace where businesses buy and deploy AI agents, and creators earn 75% selling their AI skills, workflows, and tools.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block" style={{ backgroundColor: "var(--yellow)" }}>Request a Meeting →</Link>
              <a href="mailto:toby@myaiworkforce.ai" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ border: "2px solid var(--yellow)", color: "var(--yellow)" }}>toby@myaiworkforce.ai</a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-3xl font-extrabold mb-2" style={{ color: "var(--yellow)" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "var(--text-dim)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Problem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🧱", title: "Developers can build AI agents", desc: "but have no marketplace to sell them at scale." },
                { icon: "😕", title: "Businesses want automation", desc: "but lack the technical knowledge to deploy it." },
                { icon: "🏚️", title: "Existing platforms are too narrow", desc: "Single-tool focus. Developer-only. No commerce layer." },
              ].map((p, i) => (
                <div key={i} className="p-6 rounded-xl text-center" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">The Solution</h2>
            <p className="text-center mb-12 text-lg" style={{ color: "var(--text-dim)" }}>My AI Workforce is a three-lane platform — the infrastructure layer for the AI economy.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "The Marketplace", desc: "Buy and sell AI skill files, agents, workflows, prompt packs, courses, and services. Platform-agnostic — works with OpenClaw, n8n, Make, ChatGPT, Claude, and more." },
                { num: "02", title: "DIY Guides", desc: "Step-by-step tutorials for business owners who want to build their own AI workforce. Freemium model drives top-of-funnel traffic." },
                { num: "03", title: "Done-For-You Agency", desc: "We build, deploy, and manage complete AI workforces for businesses. $997–$2,497/mo retainers. 95%+ gross margin. Scales via automation." },
              ].map((s, i) => (
                <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="text-3xl font-extrabold mb-4" style={{ color: "var(--yellow)" }}>{s.num}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-dim)", lineHeight: "1.7" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">6 Revenue Streams</h2>
            <p className="text-center mb-12" style={{ color: "var(--text-dim)" }}>Diversified from day one. Not dependent on a single revenue source.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {revenues.map((r, i) => (
                <div key={i} className="p-6 rounded-xl flex gap-4" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1">{r.name}</h3>
                    <p className="text-sm" style={{ color: "var(--text-dim)" }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unit Economics */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Unit Economics</h2>
            <p className="text-center mb-12" style={{ color: "var(--text-dim)" }}>Done-For-You client economics — the highest margin business model in the portfolio.</p>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              {[
                { label: "Client retainer (average)", value: "$1,500/mo", highlight: false },
                { label: "Infrastructure cost (VPS)", value: "~$10/mo", highlight: false },
                { label: "AI API costs", value: "~$20/mo", highlight: false },
                { label: "Gross margin", value: "~98%", highlight: true },
                { label: "Onboarding time (automated)", value: "~30 minutes", highlight: false },
                { label: "MRR at 50 clients", value: "$75,000/mo", highlight: true },
              ].map((row, i) => (
                <div key={i} className="flex justify-between px-8 py-4" style={{ backgroundColor: row.highlight ? "rgba(255,215,0,0.05)" : "transparent", borderBottom: i < 5 ? "1px solid var(--border)" : "none" }}>
                  <span style={{ color: "var(--text-dim)" }}>{row.label}</span>
                  <span className="font-bold" style={{ color: row.highlight ? "var(--yellow)" : "var(--text)" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitors */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Competitive Landscape</h2>
            <p className="text-center mb-12" style={{ color: "var(--text-dim)" }}>We are the only platform-agnostic, business-focused AI marketplace with a done-for-you tier.</p>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="grid grid-cols-4 px-6 py-3 text-sm font-bold" style={{ backgroundColor: "var(--bg-section)", borderBottom: "1px solid var(--border)" }}>
                <span>Platform</span><span>Focus</span><span>Commission</span><span>Limitation</span>
              </div>
              {competitors.map((c, i) => (
                <div key={i} className="grid grid-cols-4 px-6 py-4 text-sm" style={{ backgroundColor: c.isUs ? "rgba(255,215,0,0.05)" : "transparent", borderBottom: i < competitors.length - 1 ? "1px solid var(--border)" : "none", color: c.isUs ? "var(--text)" : "var(--text-dim)", fontWeight: c.isUs ? "600" : "normal" }}>
                  <span style={{ color: c.isUs ? "var(--yellow)" : "inherit" }}>{c.name}</span>
                  <span>{c.focus}</span>
                  <span>{c.cut}</span>
                  <span style={{ color: c.limit === "—" ? "var(--yellow)" : "inherit" }}>{c.limit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">90-Day Roadmap & 12-Month Vision</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {roadmap.map((r, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: `1px solid ${i === 3 ? "var(--yellow)" : "var(--border)"}` }}>
                  <div className="font-extrabold mb-4 text-lg" style={{ color: "var(--yellow)" }}>{r.month}</div>
                  <ul className="flex flex-col gap-2">
                    {r.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span style={{ color: "var(--yellow)" }}>✓</span>
                        <span style={{ color: "var(--text-dim)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Now</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "The timing is perfect", desc: "The AI agent economy is 18 months old. The App Store moment for AI agents hasn't happened yet. We are first movers." },
                { title: "The gap is real", desc: "Businesses want AI. They don't know how to deploy it. We are the bridge between AI's potential and business reality." },
                { title: "The model is proven", desc: "ShopClawMart has done $100k+ in creator earnings on one narrow platform. We're building the same model 10x broader." },
                { title: "We move fast", desc: "The entire platform was built and deployed in days, not months. We ship. We iterate. We don't overthink." },
              ].map((w, i) => (
                <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--yellow)" }}>{w.title}</h3>
                  <p style={{ color: "var(--text-dim)", lineHeight: "1.7" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Investing?</h2>
            <p className="mb-8 text-lg" style={{ color: "var(--text-dim)" }}>We're raising a seed round to complete the marketplace payment infrastructure, hire engineers, and scale the Done-For-You client base.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block" style={{ backgroundColor: "var(--yellow)" }}>Request a Meeting →</Link>
              <a href="mailto:toby@myaiworkforce.ai" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ border: "2px solid var(--yellow)", color: "var(--yellow)" }}>toby@myaiworkforce.ai</a>
            </div>
            <p className="mt-8 text-sm" style={{ color: "var(--text-dim)" }}>This document is confidential and intended solely for prospective investors.</p>
          </div>
        </section>

      </main>
    </div>
  );
}
