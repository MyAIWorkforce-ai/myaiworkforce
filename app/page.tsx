"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconStore() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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

  if (!mounted) {
    return <div style={{ width: 36, height: 36 }} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-bold" style={{ color: "#FFD700", letterSpacing: "-0.02em" }}>
          MyAIWorkforce
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Marketplace", "Guides", "Done-For-You", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/-/g, "").replace(/ /g, "")}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA + Theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile controls */}
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

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t mobile-menu"
          style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--mobile-menu-bg)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {["Marketplace", "Guides", "Done-For-You", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/-/g, "").replace(/ /g, "")}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-dim)" }}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const words = [
    "customer support",
    "lead generation",
    "email triage",
    "social media",
    "invoice processing",
    "client onboarding",
    "competitor research",
    "sales outreach",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative pt-32 pb-24 px-6 overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "var(--bg)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--hero-gradient)" }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: "var(--grid-opacity, 0.05)",
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium border"
          style={{ borderColor: "#FFD700", color: "#FFD700", backgroundColor: "rgba(255,215,0,0.05)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#FFD700" }} />
          AI-powered workforce automation
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ letterSpacing: "-0.04em", lineHeight: "1.05", color: "var(--text)" }}>
          Build Your<br />
          <span style={{ color: "#FFD700" }}>AI Workforce.</span>
        </h1>

        {/* Animated rotating subtext */}
        <div className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: "var(--text-dim)", letterSpacing: "-0.02em", minHeight: "2.5em" }}>
          Automate your{" "}
          <span
            style={{
              color: "#FFD700",
              display: "inline-block",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            {words[index]}
          </span>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Browse ready-made AI agents, grab step-by-step guides, or let us build
          and run your entire AI workforce for you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#marketplace"
            className="px-8 py-4 rounded-xl text-base font-bold text-center transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Browse the Marketplace →
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-base font-bold text-center border-2 transition-all duration-200 hover:bg-red-950"
            style={{ borderColor: "#E63946", color: "#E63946" }}
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            "500+ Agents Available",
            "No Code Required",
            "24/7 Automation",
            "Trusted by 1,000+ Businesses",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span style={{ color: "#FFD700" }}>✦</span>
              <span className="text-sm font-medium" style={{ color: "var(--muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Three Pillars ────────────────────────────────────────────────────────────

function ThreePillars() {
  const pillars = [
    {
      icon: <IconStore />,
      title: "Browse",
      description: "Ready-made AI agents built for real business tasks. Deploy in minutes, no code required.",
      href: "#marketplace",
    },
    {
      icon: <IconBook />,
      title: "DIY Guides",
      description: "Step-by-step guides to build your own AI agents. Learn, customise, and own your automation.",
      href: "#guides",
    },
    {
      icon: <IconRocket />,
      title: "Done-For-You",
      description: "We build and run your entire AI workforce. From strategy to deployment, fully managed.",
      href: "#doneforyou",
    },
  ];

  return (
    <section className="py-24 px-6 section-divider" id="marketplace" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em", color: "var(--text)" }}>
            Three ways to automate
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Choose the path that fits where you are right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative p-8 rounded-2xl border card-hover group"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(255,215,0,0.08)", color: "#FFD700" }}
              >
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{pillar.title}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                {pillar.description}
              </p>
              <a
                href={pillar.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "#FFD700" }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Who It's For ─────────────────────────────────────────────────────────────

function WhoItsFor() {
  const personas = [
    {
      title: "Founders & CEOs",
      desc: "Stop doing $10/hour work. Delegate repetitive tasks to AI and focus on what actually moves the needle.",
      emoji: "🚀",
    },
    {
      title: "Small Business Owners",
      desc: "Compete like a big company without hiring a big team. Automate ops, support, and marketing on a budget.",
      emoji: "🏢",
    },
    {
      title: "Marketing Teams",
      desc: "Ship more campaigns, faster. AI handles research, drafting, scheduling, and reporting so you don't have to.",
      emoji: "📣",
    },
    {
      title: "Solo Operators",
      desc: "Run a lean, powerful business solo. Your AI workforce handles the grind while you handle the strategy.",
      emoji: "⚡",
    },
  ];

  return (
    <section className="py-24 px-6 section-divider" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FFD700" }}>
            Who It&apos;s For
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em", color: "var(--text)" }}>
            Built for people who&apos;d<br />rather be building.
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Whether you&apos;re a solo founder or leading a team of 50 — we&apos;ve got you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-2xl border card-hover"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Use Cases Grid ───────────────────────────────────────────────────────────

function UseCasesGrid() {
  const cases = [
    { label: "Customer Support", emoji: "💬" },
    { label: "Lead Generation", emoji: "🎯" },
    { label: "Email Triage", emoji: "📥" },
    { label: "Social Media", emoji: "📱" },
    { label: "Invoice Processing", emoji: "🧾" },
    { label: "Client Onboarding", emoji: "🤝" },
    { label: "Competitor Research", emoji: "🔍" },
    { label: "Sales Outreach", emoji: "📤" },
    { label: "Meeting Notes", emoji: "📝" },
    { label: "Market Research", emoji: "📊" },
    { label: "Content Creation", emoji: "✍️" },
    { label: "Data Entry", emoji: "⚙️" },
  ];

  return (
    <section className="py-24 px-6 section-divider" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FFD700" }}>
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em", color: "var(--text)" }}>
            What can your AI workforce do?
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Pretty much anything. Here&apos;s where people start.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cases.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border text-center card-hover cursor-pointer group"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {c.emoji}
              </div>
              <span className="text-sm font-semibold leading-tight" style={{ color: "var(--text)" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-24 px-6 section-divider" id="contact" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "600px",
            height: "200px",
            background: `radial-gradient(ellipse, var(--cta-glow) 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#FFD700" }}>
          Get Started Today
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em", color: "var(--text)" }}>
          Ready to Build Your<br />
          <span style={{ color: "#FFD700" }}>AI Workforce?</span>
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Join 1,000+ businesses already running on AI. Get started free or book a
          call to see what&apos;s possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#marketplace"
            className="px-8 py-4 rounded-xl text-base font-bold text-center transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Browse the Marketplace →
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-base font-bold text-center border-2 transition-all duration-200 hover:bg-red-950"
            style={{ borderColor: "#E63946", color: "#E63946" }}
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 px-6 section-divider" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <div className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}>
              MyAIWorkforce
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              The platform for AI-powered business automation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["Marketplace", "Guides", "Done-For-You", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/-/g, "").replace(/ /g, "")}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--footer-border)" }}>
          <p className="text-sm" style={{ color: "var(--text-dimmer)" }}>
            © {new Date().getFullYear()} MyAIWorkforce. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm transition-colors"
                style={{ color: "var(--text-dimmer)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dimmer)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <Hero />
      <ThreePillars />
      <WhoItsFor />
      <UseCasesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
