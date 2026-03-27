"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

// --- ICONS (Self-contained SVGs) ---
const IconMenu = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);

// --- SHARED COMPONENTS ---
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{width: '36px', height: '36px'}}/>;

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ?  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg> : <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>}
    </button>
  );
}

function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold" style={{ color: "var(--yellow)", letterSpacing: "-0.02em" }}>My AI Workforce</Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/done-for-you" className="text-sm font-medium transition-colors" style={{ color: "var(--yellow)" }}>Done-For-You</Link>
                    <Link href="/marketplace" className="text-sm font-medium transition-colors duration-200" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
                    <Link href="/guides" className="text-sm font-medium transition-colors duration-200" style={{ color: "var(--text-dim)" }}>Guides</Link>
                    <Link href="/about" className="text-sm font-medium transition-colors duration-200" style={{ color: "var(--text-dim)" }}>About</Link>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Audit</Link>
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button className="transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu"><IconMenu/></button>
                </div>
            </div>
        </header>
    );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb-1"></div>
      <div className="hero-orb-2"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ letterSpacing: "-0.04em", lineHeight: "1.1" }}>Your AI Workforce,<br /><span className="gradient-text">Built & Managed by Experts</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: "var(--muted)" }}>Specializing in robust, enterprise-ready deployments using frameworks like <span className="font-semibold text-[var(--text)]">OpenClaw</span> and models like <span className="font-semibold text-[var(--text)]">Anthropic's Claude.</span></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 rounded-xl text-lg font-bold text-center text-black glow-yellow" style={{ backgroundColor: "#FFD700" }}>Book Your Free AI Audit →</Link>
          <Link href="/marketplace" className="px-8 py-4 rounded-xl text-lg font-bold text-center border-2 border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--yellow)] hover:text-[var(--yellow)] transition-all">Or Browse the Marketplace</Link>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <p className="section-label justify-center">Our Process</p>
                <h2 className="text-4xl font-bold text-center mb-12">From Zero to Automated in 3 Steps</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[ { num: "1", title: "Discovery & Strategy", desc: "We start with a deep dive into your business to identify the highest-impact automation opportunities." }, { num: "2", title: "Build & Deploy", desc: "Our team builds your custom AI agents on a secure, private server, integrated with your existing tools." }, { num: "3", title: "Manage & Optimize", desc: "We monitor, manage, and continuously optimize your AI workforce, delivering monthly performance reports.", }, ].map((s, i) => (<div key={i} className="relative p-8 rounded-2xl border card-hover" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}><div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center font-bold text-black rounded-full" style={{ backgroundColor: "var(--yellow)" }}>{s.num}</div><h3 className="text-xl font-bold mt-6 mb-3">{s.title}</h3><p className="text-sm text-[var(--muted)]">{s.desc}</p></div>))}
                </div>
            </div>
        </section>
    )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      {/* Other sections will be added here */}
    </main>
  );
}
