"use client";
import { useState } from "react";
import Link from "next/link";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Guides", href: "/guides" },
    { label: "Done-For-You", href: "/done-for-you" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium nav-link">{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} style={{ color: "var(--text-dim)" }}>☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default function SellAgentsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "agent",
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value,
      category: (form.querySelector('[name="category"]') as HTMLSelectElement)?.value,
      description: (form.querySelector('[name="description"]') as HTMLTextAreaElement)?.value,
      price: (form.querySelector('[name="price"]') as HTMLInputElement)?.value,
      whats_included: (form.querySelector('[name="whats_included"]') as HTMLTextAreaElement)?.value,
      openclaw_compatible: (form.querySelector('[name="openclaw_compatible"]') as HTMLInputElement)?.checked,
      platforms: (form.querySelector('[name="platforms"]') as HTMLInputElement)?.value,
      tags: (form.querySelector('[name="tags"]') as HTMLInputElement)?.value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
      paypal_email: (form.querySelector('[name="paypal_email"]') as HTMLInputElement)?.value,
    };
    try {
      await fetch('/api/creator/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
        <Nav />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold mb-4" style={{ color: "#FFD700" }}>Agent Submitted!</h1>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>Thanks for submitting your AI agent. We'll review it within 48 hours and email you when it's approved and live on the marketplace.</p>
          <Link href="/marketplace" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Browse the Marketplace →</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>🤖 Sell Your AI Agents</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>List Your <span style={{ color: "#FFD700" }}>AI Agent</span></h1>
          <p style={{ color: "var(--muted)" }}>Submit a fully built AI agent — OpenClaw configs, SOUL.md, AGENTS.md, deployment scripts. You earn <strong style={{ color: "#FFD700" }}>75%</strong> of every sale.</p>
          <div className="flex justify-center gap-4 mt-4 text-sm" style={{ color: "var(--muted)" }}>
            <span>🤖 Agents &amp; configs</span>
            <span>⚙️ OpenClaw compatible</span>
            <span>💰 75% payout</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#FFD700" }}>Agent Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Agent Name *</label>
                <input name="name" required placeholder="e.g. Email Triage Pro" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Category *</label>
                <select name="category" required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}>
                  <option value="">Select category</option>
                  {["Sales", "Marketing", "Operations", "Customer Support", "Finance", "HR", "Content", "Research", "Executive"].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Description *</label>
                <textarea name="description" required rows={4} placeholder="What does your agent do? What problem does it solve?" className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Price (USD) *</label>
                  <input name="price" type="number" min="5" required placeholder="29" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Platforms</label>
                  <input name="platforms" placeholder="OpenClaw, n8n, Make..." className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input name="openclaw_compatible" type="checkbox" id="openclaw" className="w-4 h-4" />
                <label htmlFor="openclaw" className="text-sm" style={{ color: "var(--muted)" }}>✅ OpenClaw compatible (SOUL.md, AGENTS.md included)</label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>What&apos;s Included *</label>
                <textarea name="whats_included" required rows={3} placeholder="List all files: SOUL.md, AGENTS.md, SKILL.md, config.json, SETUP.md..." className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Tags (comma separated)</label>
                <input name="tags" placeholder="Gmail, Lead Gen, OpenClaw, Automation" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#FFD700" }}>Payout Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Your Email *</label>
                <input name="email" type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>PayPal Email (for 75% payouts)</label>
                <input name="paypal_email" type="email" placeholder="paypal@example.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.3)" }}>
                <p className="text-sm" style={{ color: "#F97316" }}>💰 You earn <strong>75%</strong> of every sale. My AI Workforce retains 25% as a platform fee. Payouts processed within 7 days of each sale.</p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4" />
                <span className="text-sm" style={{ color: "var(--muted)" }}>I agree to the 75/25 revenue split and <Link href="/terms" style={{ color: "#FFD700" }}>marketplace terms</Link>. I confirm this agent is my original work.</span>
              </label>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 rounded-xl font-bold text-lg glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
            {loading ? "Submitting..." : "Submit Agent for Review →"}
          </button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: "var(--muted)" }}>
          Want to sell skills instead? <Link href="/creator/skills" style={{ color: "#FFD700" }}>Submit a skill →</Link>
        </p>
      </main>
    </div>
  );
}
