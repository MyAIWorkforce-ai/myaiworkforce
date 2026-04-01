"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

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
    <button className="theme-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label="Toggle theme">
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

const NAV_LINKS = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Guides", href: "/guides" },
  { label: "Done-For-You", href: "/done-for-you" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link"
            >{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "var(--text-dim)", border: "1px solid var(--border)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <IconX /> : <IconMenu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <div className="flex gap-2 mt-2"><Link href="/login" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }} onClick={() => setOpen(false)}>Login</Link><Link href="/signup" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--yellow)", color: "var(--yellow)" }} onClick={() => setOpen(false)}>Sign Up</Link></div>
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Guides", href: "/guides" },
              { label: "Done-For-You", href: "/done-for-you" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Sell Your Agents", href: "/creator/agents" },
              { label: "Sell Your Skills", href: "/creator/skills" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200"
                style={{ color: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "var(--yellow)" : "var(--muted)", fontWeight: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "600" : "normal" }}
              >{link.label}</Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm" style={{ color: "var(--muted)" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm" style={{ color: "var(--muted)" }}>Terms of Service</Link>
            <Link href="/security" className="text-sm" style={{ color: "var(--muted)" }}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const stats = [
  { value: "500+", label: "AI Agents Available" },
  { value: "25+", label: "Countries Served" },
  { value: "95%+", label: "Gross Margin" },
  { value: "30 Min", label: "Average Setup Time" },
];

const values = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "We move fast. From discovery call to live deployment in two weeks. When you're losing hours to manual work every day, slow matters.",
  },
  {
    icon: "🔒",
    title: "Security",
    desc: "Every client gets a dedicated private VPS. Your data never touches shared infrastructure. Security isn't an afterthought — it's how we build.",
  },
  {
    icon: "✨",
    title: "Simplicity",
    desc: "AI automation shouldn't require a technical degree. We handle the complexity so you can focus on running your business.",
  },
  {
    icon: "📈",
    title: "Results",
    desc: "We measure success in hours saved, revenue generated, and problems solved. Not features shipped. Not demos delivered. Real outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav active="About" />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-section)" }}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop"
            alt="Team collaboration AI workforce"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.10, pointerEvents: "none", zIndex: 0 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, var(--bg-section))", zIndex: 1 }} />
          <div className="max-w-4xl mx-auto relative" style={{ zIndex: 2 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>
              We Build AI Workforces<br /><span style={{ color: "#FFD700" }}>That Actually Work</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              Our mission is simple: make AI automation accessible to every business — not just the ones with technical teams and unlimited budgets. We&apos;re the bridge between AI&apos;s capabilities and real business outcomes.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, display: "inline-block",  }}>
                🏷️ Australian-owned &amp; operated
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-6 rounded-xl card-hover" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderTop: "2px solid rgba(255,215,0,0.3)", background: "linear-gradient(135deg, rgba(255,215,0,0.07) 0%, var(--card) 60%)" }}>
                  <div className="text-5xl font-extrabold mb-1" style={{ color: "#FFD700", letterSpacing: "-0.03em" }}>{s.value}</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 className="text-3xl font-extrabold mb-6" style={{ letterSpacing: "-0.02em" }}>
                Built by a Business Owner, <span style={{ color: "#FFD700" }}>for Business Owners</span>
              </h2>
              <div className="flex flex-col gap-4 text-base" style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                <p>
                  My AI Workforce was founded by <strong style={{ color: "var(--text)" }}>Toby Banks</strong>, an Australian entrepreneur who got frustrated watching incredible AI technology sit out of reach for most businesses.
                </p>
                <p>
                  The tools existed. The models were extraordinary. But the gap between &ldquo;AI is amazing&rdquo; and &ldquo;AI is working in my business&rdquo; was enormous. Most businesses didn&apos;t have the technical team to bridge it — and consultants were charging enterprise prices for mediocre results.
                </p>
                <p>
                  So Toby built the platform he wished existed: a marketplace of battle-tested agents, practical DIY guides, and a done-for-you service that takes businesses from zero to fully automated in weeks — not months.
                </p>
                <p>
                  Today, My AI Workforce serves businesses across 25+ countries, with 500+ agents in the marketplace and a growing roster of Done-For-You clients who&apos;ve reclaimed thousands of hours from manual work.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold mb-4" style={{ backgroundColor: "rgba(255,215,0,0.15)", color: "#FFD700" }}>TB</div>
              <h3 className="text-xl font-bold mb-1">Toby Banks</h3>
              <p className="text-sm font-medium mb-4" style={{ color: "#FFD700" }}>Founder & CEO</p>
              <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                Australian entrepreneur with a background in business operations and automation. Built My AI Workforce to make enterprise-grade AI accessible to every business owner, regardless of technical background.
              </p>
              <div className="mt-4 pt-4 border-t flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📍 Melbourne, Australia</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>🌏 Serving clients in 25+ countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="section-label justify-center mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>What We Stand For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-8 rounded-xl card-hover flex flex-col" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", minHeight: 240 }}>
                  <div className="text-5xl mb-4" style={{ lineHeight: 1 }}>{v.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#FFD700" }}>{v.title}</h3>
                  <p className="text-sm flex-1" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-5xl mx-auto">
            <p className="section-label justify-center mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>Small Team. Big Results.</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>
              We&apos;re a lean, focused team of AI engineers, business operators, and automation specialists. We keep the team small on purpose — it keeps us fast.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-extrabold flex-shrink-0" style={{ backgroundColor: "#FFD700", color: "#0A0A0A", boxShadow: "0 0 0 4px rgba(255,215,0,0.4), 0 0 0 7px rgba(255,215,0,0.15)" }}>TB</div>
                  <div>
                    <h3 className="font-bold">Toby Banks</h3>
                    <p className="text-sm" style={{ color: "#FFD700" }}>Founder & CEO</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  Leads product strategy, client relationships, and the Done-For-You delivery team. Based in Melbourne, Australia.
                </p>
              </div>
              <div className="p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: "rgba(255,215,0,0.15)" }}>🤖</div>
                  <div>
                    <h3 className="font-bold">Our AI Team</h3>
                    <p className="text-sm" style={{ color: "#FFD700" }}>AI Engineers & Automation Specialists</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  A distributed team of AI engineers and automation specialists who build and maintain the agents that power our clients&apos; businesses. Remote-first, results-focused.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>Ready to Build Your AI Workforce?</h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>Book a free discovery call and let&apos;s talk about what&apos;s possible for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-8 py-4 rounded-xl font-bold text-black inline-block glow-yellow" style={{ backgroundColor: "#FFD700" }}>
                Book a Free Call →
              </Link>
              <Link href="/marketplace" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}>
                Browse Marketplace
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
