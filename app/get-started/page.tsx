"use client";
import { useState, useRef } from "react";
import Link from "next/link";

function IconMenu() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}
function IconX() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
}

const NAV_LINKS = [
  { label: "Build My Agent", href: "/buildmyagent" },
  { label: "Marketplace", href: "https://skillzy.ai/marketplace" },
  { label: "Integrations", href: "/integrations" },
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
          {NAV_LINKS.map(link => <Link key={link.label} href={link.href} className="text-sm font-medium nav-link">{link.label}</Link>)}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <button className="md:hidden" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "#1a1a2e" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.88)" }} onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-bold"><span style={{ color: "#c9a84c" }}>My AI Workforce</span></div>
        <div className="flex gap-6">
          {[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Contact", href: "/contact" }].map(l => (
            <Link key={l.label} href={l.href} className="text-sm" style={{ color: "var(--muted)" }}>{l.label}</Link>
          ))}
        </div>
        <p className="text-sm" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} My AI Workforce</p>
      </div>
    </footer>
  );
}

const TOOLS_LIST = ["Gmail", "Outlook", "Google Calendar", "Calendly", "Xero", "MYOB", "QuickBooks", "Stripe", "HubSpot", "Salesforce", "Slack", "Teams", "Shopify", "WooCommerce", "eBay", "Meta / Facebook", "Instagram", "LinkedIn", "GitHub", "Vercel", "Notion", "Trello", "Airtable", "Zapier", "Has an API", "Other"];

export default function BuildAgentPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", website: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleTool = (tool: string) => setSelectedTools(prev => prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]);

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
      if (data.redirect) { window.location.href = data.redirect; }
      else { setError(data.error || "Something went wrong. Please try again."); setLoading(false); }
    } catch { setError("Something went wrong. Please try again."); setLoading(false); }
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Nav />

      <div className="max-w-xl mx-auto px-6 pt-32 pb-20">

        {/* HERO */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9a84c", textTransform: "uppercase", letterSpacing: "3px" }}>MY AI WORKFORCE</p>
          <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Get Your Own AI Agent —{" "}
            <span style={{ color: "#c9a84c" }}>Live Within 24 Hours.</span>
          </h1>
          <div className="flex flex-col gap-1.5 mb-6 text-left max-w-sm mx-auto">
            {[
              "An AI agent that actually does things — not just answers questions",
              "Replies to clients & handles enquiries",
              "Books appointments & manages your calendar",
              "Researches, sets tasks & takes action",
              "It takes action, not just advice — tell it what you need, it handles it",
            ].map(line => (
              <p key={line} className="text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "#c9a84c" }}>✓</span> {line}
              </p>
            ))}
          </div>
          <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
            $497 setup · First month free · then $99/mo USD · Cancel anytime
          </p>
        </div>

        {/* FORM */}
        <div ref={formRef}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Your name *</label>
                <input type="text" required placeholder="Jane Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Business name</label>
                <input type="text" placeholder="Acme Pty Ltd" value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Email *</label>
                <input type="email" required placeholder="jane@acme.com.au" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Phone</label>
                <input type="tel" placeholder="0400 000 000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Website</label>
              <input type="text" placeholder="yourbusiness.com.au" value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">What do you want your agent to handle?</label>
              <textarea rows={3} placeholder="e.g. Reply to customer enquiries, follow up on invoices, manage my inbox, book appointments..."
                value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", outline: "none" }} />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Tools you use</label>
              <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>Tap any you use — we connect via API to thousands of apps &amp; tools. If yours isn&apos;t listed, no worries.</p>
              <div className="flex flex-wrap gap-2">
                {TOOLS_LIST.map(tool => (
                  <button key={tool} type="button" onClick={() => toggleTool(tool)} className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ backgroundColor: selectedTools.includes(tool) ? "rgba(201,168,76,0.15)" : "var(--card)", border: selectedTools.includes(tool) ? "1px solid #c9a84c" : "1px solid var(--border)", color: selectedTools.includes(tool) ? "#c9a84c" : "var(--muted)", cursor: "pointer" }}>
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            {error && <div className="px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", color: "#f87171" }}>{error}</div>}

            <button type="submit" disabled={loading} className="w-full py-4 rounded-xl font-bold text-base mt-2"
              style={{ backgroundColor: loading ? "rgba(201,168,76,0.5)" : "#c9a84c", color: "#1a1a2e", cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "Taking you to payment..." : "Build My Agent →"}
            </button>

            <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
              🔒 Secure payment via Stripe · Cancel anytime · No lock-in contracts
            </p>
          </form>
        </div>

        {/* FALLBACK */}
        <div className="text-center mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Rather talk first?</p>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl text-sm font-bold" style={{ border: "1px solid #c9a84c", color: "#c9a84c" }}>
            Book a Free Call →
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}
