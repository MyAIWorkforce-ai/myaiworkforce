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

export default function SellSkillsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "skill",
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value,
      skill_type: (form.querySelector('[name="skill_type"]') as HTMLSelectElement)?.value,
      category: (form.querySelector('[name="category"]') as HTMLSelectElement)?.value,
      description: (form.querySelector('[name="description"]') as HTMLTextAreaElement)?.value,
      price: (form.querySelector('[name="price"]') as HTMLInputElement)?.value,
      whats_included: (form.querySelector('[name="whats_included"]') as HTMLTextAreaElement)?.value,
      compatible_with: (form.querySelector('[name="compatible_with"]') as HTMLInputElement)?.value,
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
          <h1 className="text-3xl font-extrabold mb-4" style={{ color: "#FFD700" }}>Skill Submitted!</h1>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>Thanks for submitting your AI skill. We&apos;ll review it within 48 hours and email you when it&apos;s approved and live on the marketplace.</p>
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
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>🧠 Sell Your AI Skills</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>List Your <span style={{ color: "#F97316" }}>AI Skill</span></h1>
          <p style={{ color: "var(--muted)" }}>Submit SKILL.md files, prompt packs, workflows, templates, or guides. You earn <strong style={{ color: "#FFD700" }}>75%</strong> of every sale.</p>
          <div className="flex justify-center gap-4 mt-4 text-sm flex-wrap" style={{ color: "var(--muted)" }}>
            <span>📄 SKILL.md files</span>
            <span>💬 Prompt packs</span>
            <span>🔄 Workflows</span>
            <span>📋 Templates</span>
          </div>
        </div>

        {/* What can I sell */}
        <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="font-bold mb-3" style={{ color: "#FFD700" }}>What counts as a &quot;skill&quot;?</h3>
          <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: "var(--muted)" }}>
            {["SKILL.md files for OpenClaw", "Prompt packs & templates", "n8n / Make workflow exports", "ChatGPT custom instructions", "System prompt collections", "API integration templates", "Data processing scripts", "Training datasets"].map(item => (
              <div key={item} className="flex items-center gap-2"><span style={{ color: "#FFD700" }}>✓</span>{item}</div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#FFD700" }}>Skill Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Skill Name *</label>
                <input name="name" required placeholder="e.g. Cold Email Prompt Pack Pro" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Skill Type *</label>
                  <select name="skill_type" required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    <option value="">Select type</option>
                    {["SKILL.md file", "Prompt pack", "Workflow (n8n/Make)", "Template pack", "System prompt", "Integration config", "Script / Tool", "Other"].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Category *</label>
                  <select name="category" required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    <option value="">Select category</option>
                    {["Sales", "Marketing", "Operations", "Customer Support", "Finance", "HR", "Content", "Research", "Executive"].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Description *</label>
                <textarea name="description" required rows={4} placeholder="What does this skill do? Who is it for? What results can buyers expect?" className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Price (USD) *</label>
                  <input name="price" type="number" min="5" required placeholder="19" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Compatible With</label>
                  <input name="compatible_with" placeholder="OpenClaw, ChatGPT, n8n..." className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>What&apos;s Included *</label>
                <textarea name="whats_included" required rows={3} placeholder="List all files and what buyers receive..." className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>Tags (comma separated)</label>
                <input name="tags" placeholder="prompts, email, cold outreach, GPT-4" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
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
                <span className="text-sm" style={{ color: "var(--muted)" }}>I agree to the 75/25 revenue split and <Link href="/terms" style={{ color: "#FFD700" }}>marketplace terms</Link>. I confirm this skill is my original work.</span>
              </label>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 rounded-xl font-bold text-lg glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
            {loading ? "Submitting..." : "Submit Skill for Review →"}
          </button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: "var(--muted)" }}>
          Want to sell a full agent instead? <Link href="/creator/agents" style={{ color: "#FFD700" }}>Submit an agent →</Link>
        </p>
      </main>
    </div>
  );
}
