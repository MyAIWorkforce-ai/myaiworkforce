"use client";

import { useState, useEffect, useRef } from "react";
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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 36, height: 36 }} />;
  const isDark = theme === "dark";
  return (
    <button className="theme-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
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

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link">{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
            Book a Free Call
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="transition-colors" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
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
            <div className="text-xl font-bold mb-2"><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Guides", href: "/guides" },
              { label: "Done-For-You", href: "/done-for-you" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Sell Your Agents", href: "/creator" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200"
                style={{ color: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "var(--yellow)" : "var(--muted)", fontWeight: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "600" : "normal" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
          <div className="flex gap-4">
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Security", href: "/security" }].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm transition-colors" style={{ color: "var(--muted)" }}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────
const CATEGORIES = [
  "Sales & Lead Generation",
  "Customer Support",
  "Content & Copywriting",
  "Social Media",
  "Email Marketing",
  "Research & Analysis",
  "Finance & Accounting",
  "HR & Recruitment",
  "Project Management",
  "Developer Tools",
  "E-commerce",
  "Other",
];

// ─── Input style helper ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--card-bg)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CreatorPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    whats_included: "",
    tags: "",
    email: "",
    paypal_email: "",
    terms: false,
  });
  const [file, setFile] = useState<File | null>(null);

  const set = (field: string, value: string | boolean) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) { setError("Please accept the terms to continue."); return; }
    setLoading(true);
    setError("");

    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, String(v)));
      if (file) body.append("file", file);

      const res = await fetch("/api/creator/submit", { method: "POST", body });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Submission failed");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#F97316" }}>
              Seller Program
            </div>
            <h1 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
              Sell Your AI Agents.<br />
              <span style={{ color: "#FFD700" }}>Earn 75%.</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              Submit your AI agent, workflow, or automation — we handle the marketplace, payments, and delivery. You keep 75% of every sale.
            </p>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: "75%", label: "Revenue share" },
              { value: "0%", label: "Listing fee" },
              { value: "24h", label: "Review time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
                <div className="text-2xl font-bold" style={{ color: "#FFD700" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2">Submission Received!</h2>
              <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                Thanks for submitting your AI agent. We&apos;ll review it within 24 hours and reach out to <strong style={{ color: "var(--text)" }}>{form.email}</strong>.
              </p>
              <Link href="/marketplace" className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
                Browse Marketplace
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Agent Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Agent / Product Name *</label>
                <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. LinkedIn Lead Gen Bot" style={inputStyle} />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select required value={form.category} onChange={(e) => set("category", e.target.value)} style={inputStyle}>
                  <option value="">Select a category…</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea required rows={4} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Describe what your AI agent does, the problem it solves, and who it's for…" style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-2">Suggested Price (USD) *</label>
                <input type="number" required min="1" step="0.01" value={form.price} onChange={(e) => set("price", e.target.value)} placeholder="e.g. 49" style={inputStyle} />
              </div>

              {/* What's Included */}
              <div>
                <label className="block text-sm font-medium mb-2">What&apos;s Included *</label>
                <textarea required rows={3} value={form.whats_included} onChange={(e) => set("whats_included", e.target.value)} placeholder="List what buyers receive (e.g. prompt file, video tutorial, setup guide, 30-day support)…" style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="e.g. linkedin, lead-gen, outreach, B2B" style={inputStyle} />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Email *</label>
                <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" style={inputStyle} />
              </div>

              {/* PayPal Email */}
              <div>
                <label className="block text-sm font-medium mb-2">PayPal Email (for payouts) *</label>
                <input type="email" required value={form.paypal_email} onChange={(e) => set("paypal_email", e.target.value)} placeholder="paypal@example.com" style={inputStyle} />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Your File (.zip, .pdf, or .md)</label>
                <div
                  className="rounded-xl p-6 text-center cursor-pointer transition-colors"
                  style={{ border: "2px dashed var(--border)", backgroundColor: "var(--card-bg)" }}
                  onClick={() => fileRef.current?.click()}
                >
                  {file ? (
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{(file.size / 1024).toFixed(0)} KB</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>Click to upload or drag & drop</p>
                      <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>.zip, .pdf, .md — max 20MB</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".zip,.pdf,.md"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={form.terms}
                  onChange={(e) => set("terms", e.target.checked)}
                  className="mt-0.5"
                  style={{ accentColor: "#FFD700", width: 16, height: 16 }}
                />
                <label htmlFor="terms" className="text-sm" style={{ color: "var(--muted)" }}>
                  I agree to the{" "}
                  <Link href="/terms" className="underline" style={{ color: "#FFD700" }}>Terms of Service</Link>
                  {" "}and confirm this is my original work. I understand My AI Workforce takes a 25% platform fee.
                </label>
              </div>

              {error && <p className="text-sm" style={{ color: "#F87171" }}>{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-base font-bold transition-all duration-200 disabled:opacity-50"
                style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
              >
                {loading ? "Submitting…" : "Submit My AI Agent →"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
