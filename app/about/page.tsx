"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

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
              style={{ color: link.href === "/about" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/about" ? "#FFD700" : "var(--text-dim)")}
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

function Footer() {
  return (
    <footer className="border-t py-10 mt-20" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-bold" style={{ color: "var(--yellow)" }}>My AI Workforce</span>
        <p className="text-sm" style={{ color: "var(--text-dim)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
          <Link href="/contact" style={{ color: "var(--text-dim)" }}>Contact</Link>
          <Link href="/invest" style={{ color: "var(--yellow)", fontWeight: "600" }}>Invest with Us</Link>
        </div>
      </div>
    </footer>
  );
}

const stats = [
  { value: "500+", label: "Agents Available" },
  { value: "1,000+", label: "Businesses Served" },
  { value: "50+", label: "Countries" },
  { value: "$10M+", label: "Saved for Clients" },
];

const values = [
  { title: "Accessibility", desc: "AI automation should be available to every business — not just those with technical teams and unlimited budgets. We make it possible for anyone to deploy an AI workforce." },
  { title: "Transparency", desc: "No black boxes. We explain what your agents are doing, why, and how they can be improved. You own your data, your agents, and your outcomes." },
  { title: "Results", desc: "We measure success in hours saved, revenue generated, and problems solved — not demos delivered or features shipped. If it doesn't work in the real world, it doesn't count." },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>We&apos;re Building the<br /><span style={{ color: "var(--yellow)" }}>Future of Work</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-dim)" }}>Our mission is to make AI automation accessible to every business — not just the ones with technical teams and unlimited budgets.</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: "var(--yellow)" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "var(--text-dim)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="flex flex-col gap-4 text-base" style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              <p>We started myaiworkforce.ai because we saw a gap that frustrated us every day. AI was advancing at an extraordinary pace — but most businesses had no idea how to actually use it. The tools existed. The potential was obvious. But the bridge between AI&apos;s capabilities and real business outcomes simply wasn&apos;t there.</p>
              <p>We built that bridge. A marketplace where you can find and deploy battle-tested AI agents in minutes. A library of guides so you can build your own. And a done-for-you service for businesses that just want results without the learning curve.</p>
              <p>Our goal is simple: make every business 10x more productive with AI. We&apos;re not interested in demos, hype, or theoretical use cases. We build things that work in the real world — and we hold ourselves accountable to the results.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What We Believe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--yellow)" }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-dim)", lineHeight: "1.7" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Team</h2>
            <p className="text-lg mb-12" style={{ color: "var(--text-dim)" }}>A small, focused team of AI engineers, business operators, and product thinkers building the infrastructure for the AI economy.</p>
            <div className="inline-block px-8 py-4 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <p className="font-semibold mb-1">We&apos;re Hiring</p>
              <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>Join us and help build the future of AI automation.</p>
              <Link href="/contact" className="px-6 py-2 rounded-lg text-sm font-semibold inline-block" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>Get in Touch →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Workforce?</h2>
            <p className="mb-8" style={{ color: "var(--text-dim)" }}>Browse the marketplace, read the guides, or book a free discovery call.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace" className="px-8 py-4 rounded-xl font-bold text-black inline-block" style={{ backgroundColor: "var(--yellow)" }}>Browse Marketplace</Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ border: "2px solid var(--yellow)", color: "var(--yellow)" }}>Book a Free Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
