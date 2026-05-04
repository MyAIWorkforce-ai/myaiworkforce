"use client";
import { useState, useRef } from "react";
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

const NAV_LINKS = [
  { label: "Build My Agent", href: "/done-for-you" },
  { label: "Guides", href: "/guides" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#ffffff", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link">{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <button className="md:hidden" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "#1a1a2e" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.88)" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <Link href="/login" className="py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }} onClick={() => setOpen(false)}>Login</Link>
            <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-2"><span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#c9a84c", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span></div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>AI agents built, deployed and managed for you.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Build My Agent", href: "/done-for-you" },
              { label: "Guides", href: "/guides" },
              { label: "Marketplace", href: "/marketplace" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm" style={{ color: "var(--muted)" }}>{link.label}</Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm text-center" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const TOOLS_LIST = [
  "Gmail", "Outlook", "Xero", "MYOB", "HubSpot", "Salesforce",
  "Slack", "Microsoft Teams", "Shopify", "WooCommerce",
  "Notion", "Google Calendar", "Calendly", "Other",
];

export default function BuildAgentPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const toggleTool = (tool: string) =>
    setSelectedTools(prev => prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email) { setError("Please enter your name and email."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/buildagent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tools: selectedTools.join(", "), plan: "standard" }),
      });
      const data = await res.json();
      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 text-center" style={{ background: "linear-gradient(180deg, #0d0d1f 0%, var(--bg) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8" style={{ backgroundColor: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", letterSpacing: "0.05em" }}>
            🤖 WE BUILD IT · WE DEPLOY IT · WE MANAGE IT
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Stop doing the<br />
            <span style={{ color: "#c9a84c" }}>work AI should.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            We build a custom AI agent for your business — it handles your emails, bookings, follow-ups and admin 24/7, while you focus on what actually matters.
          </p>
          <p className="text-lg font-bold mb-10" style={{ color: "#c9a84c" }}>
            $497 setup · $199/mo USD · Live in 24 hours
          </p>
          <button onClick={scrollToForm} className="px-12 py-5 rounded-xl font-black text-xl" style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}>
            Build My Agent Now →
          </button>
          <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>No lock-in contracts · Cancel anytime · 100% done for you</p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.03em" }}>
            Everything handled. Nothing left to you.
          </h2>
          <p className="text-center text-lg mb-14" style={{ color: "var(--muted)" }}>
            Your agent is custom-built for your business — not a template, not a chatbot.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📧", title: "Email on autopilot", desc: "Reads, sorts, replies to and follows up on emails — without you lifting a finger." },
              { icon: "📅", title: "Calendar & bookings", desc: "Manages your schedule, confirms appointments and sends reminders automatically." },
              { icon: "🗣️", title: "Customer follow-ups", desc: "Chases leads, answers common questions and keeps clients warm — around the clock." },
              { icon: "💳", title: "Invoices & admin", desc: "Processes receipts, logs expenses and keeps your admin off your plate." },
              { icon: "🔗", title: "Connects to your tools", desc: "Works with Gmail, Xero, HubSpot, Slack, Shopify and thousands more." },
              { icon: "🛡️", title: "Private & secure", desc: "Your own dedicated server. Your data never touches anyone else's infrastructure." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING BLOCK ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: "var(--card)", border: "2px solid rgba(201,168,76,0.4)" }}>
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>ONE SIMPLE PRICE</div>
            <div className="flex items-end justify-center gap-3 mb-2">
              <span className="text-6xl font-black" style={{ color: "#c9a84c", letterSpacing: "-0.04em" }}>$199</span>
              <span className="text-xl font-bold mb-2" style={{ color: "var(--muted)" }}>/mo USD</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>+ one-time $497 USD setup fee</p>
            <ul className="flex flex-col gap-3 text-left mb-10">
              {[
                "Custom AI agent built specifically for your business",
                "Deployed on your own private server",
                "Chat with your agent via Telegram — anywhere, anytime",
                "Email, calendar and admin automation from day one",
                "Connects to your existing tools (Gmail, Xero, Slack & more)",
                "24/7 monitoring and ongoing management by our team",
                "Monthly performance reports",
                "Priority support — real humans, fast responses",
              ].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: "#c9a84c" }}>✓</span>
                  <span style={{ color: "var(--text)" }}>{f}</span>
                </li>
              ))}
            </ul>
            <button onClick={scrollToForm} className="w-full py-5 rounded-xl font-black text-lg" style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}>
              Build My Agent — Get Started →
            </button>
            <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>Cancel anytime with 30 days notice · Secure payment via Stripe</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.03em" }}>You fill in a form. We do the rest.</h2>
          <div className="flex flex-col gap-6">
            {[
              { step: "01", title: "Fill in the form below", desc: "Tell us about your business and what needs automating. Takes 2 minutes." },
              { step: "02", title: "We build your agent", desc: "Our team designs and builds your custom AI agent — tailored to your tools and workflows." },
              { step: "03", title: "Live in 24 hours", desc: "We deploy to your private server and connect everything. You\'re live the same day." },
              { step: "04", title: "We manage it forever", desc: "Monthly reports, ongoing improvements, 24/7 monitoring. You never think about the tech." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>{step}</div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section ref={formRef} className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-3" style={{ letterSpacing: "-0.04em" }}>Let&apos;s build your agent.</h2>
            <p style={{ color: "var(--muted)" }}>Fill this in and we&apos;ll get straight to work. Payment is at the end.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Your name *</label>
                <input type="text" required placeholder="Jane Smith" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Business name</label>
                <input type="text" placeholder="Acme Pty Ltd" value={form.business}
                  onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" required placeholder="jane@acme.com.au" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone (optional)</label>
                <input type="tel" placeholder="0400 000 000" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">What do you want your agent to handle?</label>
              <textarea rows={4} placeholder="e.g. Reply to customer enquiries, follow up on unpaid invoices, manage my inbox, book appointments..."
                value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Tools &amp; apps you use</label>
              <div className="flex flex-wrap gap-2">
                {TOOLS_LIST.map(tool => (
                  <button key={tool} type="button" onClick={() => toggleTool(tool)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      backgroundColor: selectedTools.includes(tool) ? "rgba(201,168,76,0.15)" : "var(--card)",
                      border: selectedTools.includes(tool) ? "1px solid #c9a84c" : "1px solid var(--border)",
                      color: selectedTools.includes(tool) ? "#c9a84c" : "var(--muted)",
                      cursor: "pointer",
                    }}>{tool}</button>
                ))}
              </div>
            </div>

            {error && (
              <div className="px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", color: "#f87171" }}>{error}</div>
            )}

            <button type="submit" disabled={loading} className="w-full py-5 rounded-xl font-black text-lg"
              style={{ backgroundColor: loading ? "rgba(201,168,76,0.5)" : "#c9a84c", color: "#1a1a2e", cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "Taking you to payment..." : "Build My Agent — $497 setup + $199/mo →"}
            </button>

            <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
              🔒 Secure payment via Stripe · Cancel anytime · No lock-in contracts
            </p>
          </form>
        </div>
      </section>

      {/* ── FALLBACK CTA ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>Rather talk first?</h3>
          <p className="mb-6" style={{ color: "var(--muted)" }}>Book a free 20-minute call with Toby — no pressure, no pitch.</p>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold" style={{ border: "2px solid #c9a84c", color: "#c9a84c" }}>
            Book a Free Call →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
