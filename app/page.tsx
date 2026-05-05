"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

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

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Build My Agent", href: "/buildmyagent" },
  { label: "Integrations", href: "/integrations" },
  { label: "Guides", href: "/guides" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#ffffff", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" target="_blank" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}>Login</Link>
          <Link
            href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }}
          >
            Book a Free Call
          </Link>
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
          className="md:hidden border-t"
          style={{ borderColor: "var(--nav-border)", backgroundColor: "#1a1a2e" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.88)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link href="/login" target="_blank" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }} onClick={() => setOpen(false)}>Login</Link>
              <Link href="/signup" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--yellow)", color: "var(--yellow)" }} onClick={() => setOpen(false)}>Sign Up</Link>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }}
              onClick={() => setOpen(false)}
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="text-xl font-bold mb-2"><span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#c9a84c", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span></div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Build My Agent", href: "/buildmyagent" },
  { label: "Guides", href: "/guides" },
  { label: "Marketplace", href: "/marketplace" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Sell Your Agents", href: "/creator/agents" },
              { label: "Sell Your Skills", href: "/creator/skills" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
              { label: "Website Refresh", href: "https://cheapwebsite-j1k0zcvlh-me-myself-i.vercel.app" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: link.label === "Invest with Us" ? "var(--yellow)" : "var(--muted)", fontWeight: link.label === "Invest with Us" ? "600" : "normal" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} My AI Workforce. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Security", href: "/security" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80&auto=format&fit=crop"
        alt="AI technology abstract background"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15, pointerEvents: "none", zIndex: 0 }}
      />
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb-1"></div>
      <div className="hero-orb-2"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          style={{ letterSpacing: "-0.04em", lineHeight: "1.05" }}
        >
          Build Your AI Workforce.<br />
          <span className="gradient-text">Without the Complexity.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
          We build, deploy, and manage AI agent workforces for businesses that want results — not tech headaches. Browse ready-made agents, grab a DIY guide, or let our team do it all for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="px-8 py-4 rounded-xl text-lg font-bold text-center text-white glow-yellow"
            style={{ backgroundColor: "#1a1a2e", border: "2px solid #c9a84c" }}
          >
            Build Your AI Agent Today →
          </Link>
          <Link
            href="/marketplace"
            className="px-8 py-4 rounded-xl text-lg font-bold text-center transition-all"
            style={{ border: "2px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}
          >
            Browse the Marketplace
          </Link>
        </div>
        <div className="mt-8">
          <span style={{ border: "2px dashed #7a5c10", color: "#5a3e08", background: "rgba(201,168,76,0.1)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, display: "inline-block" }}>
            🏷️ First client this month gets 20% off — Book now
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { icon: "🤖", value: "500+", label: "AI Agents" },
    { icon: "📈", value: "95%+", label: "Gross Margin" },
    { icon: "💰", value: "$184B", label: "Market Size" },
    { icon: "⚡", value: "30 Min", label: "Avg. Setup Time" },
  ];
  return (
    <section style={{ backgroundColor: "var(--bg-section)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-6 rounded-xl stat-card" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderTop: "2px solid rgba(201,168,76,0.3)" }}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "#c9a84c", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Three Pillars ────────────────────────────────────────────────────────────

function ThreePillars() {
  const pillars = [
    {
      icon: "🤖",
      title: "Build My Agent",
      subtitle: "We build it. We run it.",
      desc: "Hand us your business problems and we'll build a custom AI workforce to solve them. We handle everything — discovery, build, deployment, and ongoing management. You just get results.",
      cta: "Learn More →",
      href: "/buildmyagent",
      highlight: true,
    },
    {
      icon: "🛒",
      title: "Marketplace",
      subtitle: "Buy ready-made agents.",
      desc: "Browse 500+ pre-built AI agents, skill files, and workflows. Download, configure, and deploy in minutes. No technical expertise required.",
      cta: "Browse Agents →",
      href: "/marketplace",
      highlight: false,
    },
    {
      icon: "📚",
      title: "Guides",
      subtitle: "DIY step-by-step.",
      desc: "Prefer to build it yourself? Our practical guides walk you through building and deploying AI agents from scratch. From beginner to advanced, $9–$19 one-time.",
      cta: "View Guides →",
      href: "/guides",
      highlight: false,
    },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-label justify-center mb-4">How We Work</p>
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          Three Ways to Build Your AI Workforce
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--muted)" }}>
          Whether you want us to do everything, you want ready-made agents, or you want to build from scratch — we've got you covered.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl flex flex-col card-hover"
              style={{
                backgroundColor: p.highlight ? "rgba(201,168,76,0.05)" : "var(--card)",
                border: p.highlight ? "2px solid #c9a84c" : "1px solid var(--border)",
              }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>{p.subtitle}</div>
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm mb-8 flex-1" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{p.desc}</p>
              <Link
                href={p.href}
                className="text-sm font-bold transition-colors"
                style={{ color: p.highlight ? "#c9a84c" : "var(--text-dim)" }}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "🔍",
      title: "Discovery & Strategy",
      desc: "We spend 30 minutes learning your business, identifying your biggest inefficiencies, and mapping out exactly where AI can generate the most ROI.",
    },
    {
      num: "02",
      icon: "🚀",
      title: "Build & Deploy",
      desc: "Our team builds your custom AI agents on a dedicated, private server. You get status updates every step of the way. Typical go-live: 2 weeks.",
    },
    {
      num: "03",
      icon: "📊",
      title: "Manage & Optimise",
      desc: "We monitor your AI workforce 24/7, run monthly performance reviews, and continuously improve your agents. You get results, not homework.",
    },
  ];
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="section-label justify-center mb-4">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.03em" }}>
          How It Works
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16" style={{ color: "var(--muted)" }}>
          No technical knowledge required. No long contracts. Just results.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl card-hover"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full text-2xl mb-4" style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.3)" }}>{s.icon}</div>
              <div className="text-5xl font-extrabold mb-4" style={{ color: "rgba(201,168,76,0.15)", letterSpacing: "-0.04em" }}>{s.num}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-xl" style={{ color: "var(--border)" }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-lg font-bold text-white inline-block"
            style={{ backgroundColor: "#1a1a2e", border: "2px solid #c9a84c" }}
          >
            Start Your Free Discovery Call
          </Link>
          <Link
            href="/get-started"
            className="px-8 py-4 rounded-xl text-lg font-bold text-white inline-block glow-yellow"
            style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}
          >
            Build My Agent Now →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Security Section ─────────────────────────────────────────────────────────

function SecuritySection() {
  const features = [
    {
      icon: "🔒",
      title: "Your Data Never Leaves Your Server",
      desc: "Every client gets their own dedicated private VPS. Your data never touches shared infrastructure. Period.",
    },
    {
      icon: "🔐",
      title: "End-to-End Encrypted",
      desc: "All communications between your AI agents and external services are encrypted in transit and at rest.",
    },
    {
      icon: "🏗️",
      title: "Dedicated Environment Per Client",
      desc: "No multi-tenant architecture. Your agents run in a completely isolated environment that only you control.",
    },
    {
      icon: "🔍",
      title: "Regular Security Audits",
      desc: "We conduct routine security reviews and penetration tests to ensure your deployment stays hardened over time.",
    },
    {
      icon: "👁️",
      title: "Human Oversight at Every Step",
      desc: "Every AI action can be reviewed and overridden by a human. Full audit logs. Full transparency. Always.",
    },
    {
      icon: "✅",
      title: "SOC2-Ready Architecture",
      desc: "Our deployment architecture is designed to meet SOC2 requirements, making compliance reviews straightforward.",
    },
  ];
  return (
    <section className="py-24 px-6" style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />
      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Security First</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
            Enterprise-Grade Security.<br />
            <span style={{ color: "#c9a84c" }}>Built In From Day One.</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            We know you're trusting us with sensitive business data. Security isn't an add-on — it's the foundation every deployment is built on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl card-hover"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-10 p-6 rounded-xl text-center"
          style={{ backgroundColor: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <p className="font-semibold" style={{ color: "#c9a84c" }}>
            🛡️ Every Build My Agent deployment includes a private VPS, encrypted communications, and full audit logging — at no extra cost.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div style={{ height: 2, background: "linear-gradient(to right, transparent, #c9a84c 30%, #c9a84c 50%, #c9a84c 70%, transparent)", opacity: 0.4 }} />
  );
}

// ─── Featured Agents ──────────────────────────────────────────────────────────

function FeaturedAgents() {
  const agents = [
    {
      name: "Lead Qualifier",
      category: "Sales",
      categoryColor: "#E63946",
      categoryBg: "rgba(230,57,70,0.12)",
      desc: "Automatically scores and qualifies inbound leads based on your ICP criteria. Your sales team focuses only on high-value prospects.",
      price: "$29/mo",
      rating: 5,
      reviews: 214,
      slug: "lead-qualifier",
    },
    {
      name: "Social Media Scheduler",
      category: "Marketing",
      categoryColor: "#c9a84c",
      categoryBg: "rgba(201,168,76,0.12)",
      desc: "Plans, writes, and schedules posts across LinkedIn, Twitter, and Instagram using your brand voice and content calendar.",
      price: "$29/mo",
      rating: 5,
      reviews: 389,
      slug: "social-media-scheduler",
    },
    {
      name: "Customer Support Agent",
      category: "Customer Support",
      categoryColor: "#68D391",
      categoryBg: "rgba(104,211,145,0.12)",
      desc: "Handles Tier-1 support queries 24/7 using your knowledge base. Escalates complex issues to your human team instantly.",
      price: "$39/mo",
      rating: 5,
      reviews: 512,
      slug: "inbound-triage-agent",
    },
    {
      name: "Invoice & Expense Tracker",
      category: "Finance",
      categoryColor: "#F6AD55",
      categoryBg: "rgba(246,173,85,0.12)",
      desc: "Reads invoices, reconciles expenses, and keeps your books tidy — automatically. Works with Xero, MYOB, and QuickBooks.",
      price: "$19/mo",
      rating: 4,
      reviews: 178,
      slug: "invoice-processor",
    },
  ];

  return (
    <section className="py-24 px-6 relative" style={{ backgroundColor: "var(--bg-section)", backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <div className="max-w-7xl mx-auto">
        <p className="section-label justify-center mb-4">Marketplace</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.03em" }}>
          Featured Agents
        </h2>
        <p className="text-center max-w-xl mx-auto mb-4" style={{ color: "var(--muted)" }}>
          500+ ready-made AI agents. Deploy in minutes. No technical setup required.
        </p>
        <div className="flex justify-center mb-12">
          <span style={{ border: "2px dashed #c9a84c", color: "#c9a84c", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, display: "inline-block",  }}>
            🏷️ 500+ agents — new ones added weekly
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a, i) => (
            <div
              key={i}
              className="p-6 rounded-xl flex flex-col card-hover"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-md"
                  style={{ backgroundColor: a.categoryBg, color: a.categoryColor }}
                >
                  {a.category}
                </span>
                <span className="text-sm font-bold" style={{ color: "#c9a84c" }}>{a.price}</span>
              </div>
              <h3 className="font-bold mb-2">{a.name}</h3>
              <p className="text-xs mb-4 flex-1" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{a.desc}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: j < a.rating ? "#c9a84c" : "var(--border)", fontSize: "12px" }}>★</span>
                ))}
                <span className="text-xs ml-1" style={{ color: "var(--muted)" }}>({a.reviews})</span>
              </div>
              <Link
                href={`/marketplace/${a.slug}`}
                className="text-center py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ border: "1px solid var(--yellow)", color: "var(--yellow)" }}
              >
                View Agent →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/marketplace"
            className="px-8 py-4 rounded-xl font-bold text-black inline-block"
            style={{ backgroundColor: "#c9a84c" }}
          >
            Browse All 500+ Agents →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote: "We were drowning in manual data entry — invoices, CRM updates, customer emails. Within 3 weeks of the Build My Agent setup, our team had 15 hours a week back. The ROI was obvious in the first month.",
      name: "Sarah Chen",
      role: "COO, Brightfield Logistics",
      initials: "SC",
    },
    {
      quote: "I was skeptical. I'm not technical at all and I thought AI automation was something only big companies could afford. My AI Workforce had us up and running in 24 hours, and I've never had to touch a line of code.",
      name: "Marcus Webb",
      role: "Founder, Webb Legal Group",
      initials: "MW",
    },
    {
      quote: "Our customer support used to take up half my day. Now our AI agent handles 80% of queries automatically, and the ones that reach us are already pre-qualified and categorised. It's genuinely transformed how we operate.",
      name: "Priya Nair",
      role: "CEO, Indigo Health",
      initials: "PN",
    },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-label justify-center mb-4">Client Results</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16" style={{ letterSpacing: "-0.03em" }}>
          Real Businesses. Real Results.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl flex flex-col card-hover testimonial-card"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: "#c9a84c" }}>★</span>
                ))}
              </div>
              <p className="text-sm mb-6 flex-1" style={{ color: "var(--text-dim)", lineHeight: "1.7", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#c9a84c", color: "#0A0A0A", boxShadow: "0 0 0 3px rgba(201,168,76,0.2)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function PricingTeaser() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label justify-center mb-4">Simple Pricing</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
          One Plan. Everything Included.
        </h2>
        <p className="mb-12 max-w-xl mx-auto" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
          No hidden fees. No lock-in contracts. Cancel anytime with 30 days notice.
        </p>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Main pricing card */}
          <div className="p-10 rounded-2xl text-left" style={{ backgroundColor: "#1a1a2e", border: "2px solid #c9a84c" }}>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c", border: "1px solid #c9a84c" }}>MOST POPULAR</div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Build My Agent</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>Your own OpenClaw-powered AI agent — built, deployed and managed for you. Runs 24/7 so you don&apos;t have to.</p>
            <div className="mb-2">
              <span className="text-5xl font-extrabold text-white">$497</span>
              <span className="text-lg font-medium ml-2" style={{ color: "#c9a84c" }}>USD setup</span>
            </div>
            <div className="mb-1" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>≈ $770 AUD one-time</div>
            <div className="mt-3 mb-1 inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c", border: "1px solid #c9a84c" }}>🎁 First month FREE</div>
            <div className="mt-2 mb-1">
              <span className="text-3xl font-extrabold text-white">$199</span>
              <span className="text-base font-medium ml-2" style={{ color: "#c9a84c" }}>USD / month after that</span>
            </div>
            <div className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>≈ $310 AUD / month ongoing</div>
            <ul className="space-y-2 mb-8">
              {[
                "Custom AI agent built for your business",
                "Powered by Claude, GPT or any leading AI model",
                "Runs 24/7 on your own private, secure server",
                "Chat via Telegram — anywhere, anytime",
                "Reads & replies to your emails automatically",
                "Manages your calendar & books appointments",
                "Handles customer enquiries & follow-ups",
                "Processes invoices, receipts & data entry",
                "Researches competitors & market trends",
                "Drafts proposals, contracts & content",
                "Searches the web, books flights & travel",
                "Connects to 10,000+ apps via integrations",
                "Ongoing management, updates & support",
                "Monthly performance reviews",
                "Cancel anytime — 30 days notice",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ color: "#c9a84c", fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/get-started"
              className="block w-full text-center py-4 rounded-xl font-bold text-lg glow-yellow"
              style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}
            >
              Build My Agent Now →
            </Link>
          </div>
          {/* Custom card */}
          <div className="p-10 rounded-2xl text-left" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.08)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>ENTERPRISE</div>
            <h3 className="text-2xl font-extrabold mb-2">Custom Solution</h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>For larger businesses that need a tailored AI workforce across multiple departments or team members.</p>
            <div className="mb-8">
              <span className="text-3xl font-extrabold">Let&apos;s Talk</span>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                "Multiple AI agents across your whole team",
                "Each team member gets their own agent",
                "Custom integrations & complex workflows",
                "CRM, ERP & business system connections",
                "Dedicated account manager",
                "Priority support & guaranteed SLA",
                "Tailored onboarding & staff training",
                "Advanced security & compliance setup",
                "Custom reporting & analytics dashboards",
                "Agent-to-agent automation workflows",
                "White-label options available",
                "Quarterly business reviews",
                "Scalable as your team grows",
                "Custom pricing based on scope",
                "Book a 30-min call to discuss your needs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "#c9a84c", fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
              className="block w-full text-center py-4 rounded-xl font-bold text-lg transition-all"
              style={{ border: "2px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.06)" }}
            >
              Book a 30-Min Call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div
        className="max-w-4xl mx-auto text-center p-16 rounded-3xl relative overflow-hidden"
        style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="hero-glow" style={{ opacity: 0.5 }}></div>
        <div className="relative">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to Build Your AI Workforce?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Book a free 30-minute discovery call. No commitment, no sales pressure — just an honest conversation about what AI can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-lg font-bold text-black glow-yellow"
              style={{ backgroundColor: "#c9a84c" }}
            >
              Book a Free Call →
            </Link>
            <Link
              href="/get-started"
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all"
              style={{ border: "2px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}
            >
              Build My Agent →
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all"
              style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}
            >
              DIY Guides
            </Link>
            <Link
              href="/marketplace"
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all"
              style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <ThreePillars />
        <HowItWorks />
        <SecuritySection />
        <SectionDivider />
        <FeaturedAgents />
        <SectionDivider />
        <Testimonials />
        <PricingTeaser />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
