"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";

const supabase = createClient(
  "https://uhkfooojytjesnvqrtxx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2Zvb29qeXRqZXNudnFydHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTcxNjUsImV4cCI6MjA5MDQ5MzE2NX0.4encvmPhZ1uL2EIT4BEYu0LBjGYxJvUW4KfKHsjGhLQ"
);

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
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://calendar.app.google/cEdmSQvEZ66hj4dy7"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
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
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }} onClick={() => setOpen(false)}>
              Book a Free Call
            </Link>
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

// ─── Types ────────────────────────────────────────────────────────────────────
interface Purchase {
  id: string;
  created_at: string;
  product_name?: string;
  amount?: number;
  currency?: string;
  status?: string;
  download_url?: string;
  email?: string;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    setSearched(false);
    setPurchases([]);

    try {
      const { data, error: sbError } = await supabase
        .from("purchases")
        .select("*")
        .eq("email", email.trim().toLowerCase())
        .order("created_at", { ascending: false });

      if (sbError) throw sbError;
      setPurchases(data || []);
      setSearched(true);
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Nav />
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
                Your <span style={{ color: "#FFD700" }}>Purchases</span>
              </h1>
              <p className="text-lg" style={{ color: "var(--muted)" }}>
                Enter your email to view your order history and access your downloads.
              </p>
            </div>

            {/* Email Lookup Form */}
            <form onSubmit={handleLookup} className="mb-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50"
                  style={{ backgroundColor: "#FFD700", color: "#0A0A0A", whiteSpace: "nowrap" }}
                >
                  {loading ? "Looking up…" : "Look Up Purchases"}
                </button>
              </div>
              {error && (
                <p className="mt-3 text-sm" style={{ color: "#F87171" }}>{error}</p>
              )}
            </form>

            {/* Results */}
            {searched && (
              <>
                {purchases.length === 0 ? (
                  <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
                    <div className="text-5xl mb-4">🛒</div>
                    <h2 className="text-xl font-semibold mb-2">No purchases yet</h2>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      We couldn&apos;t find any orders for <strong>{email}</strong>.
                      <br />Double-check your email or explore what we have to offer!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/marketplace"
                        className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                      >
                        Browse Marketplace
                      </Link>
                      <Link
                        href="/guides"
                        className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                      >
                        Free Guides
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                      Found <strong style={{ color: "var(--text)" }}>{purchases.length}</strong> purchase{purchases.length !== 1 ? "s" : ""} for <strong style={{ color: "var(--text)" }}>{email}</strong>
                    </p>
                    <div className="flex flex-col gap-4">
                      {purchases.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="p-5 rounded-2xl"
                          style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="font-semibold text-base mb-1">
                                {purchase.product_name || "AI Agent / Product"}
                              </h3>
                              <p className="text-xs" style={{ color: "var(--muted)" }}>
                                {new Date(purchase.created_at).toLocaleDateString("en-AU", {
                                  year: "numeric", month: "long", day: "numeric"
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              {purchase.amount && (
                                <span className="text-sm font-semibold" style={{ color: "#FFD700" }}>
                                  {purchase.currency?.toUpperCase() || "USD"} ${(purchase.amount / 100).toFixed(2)}
                                </span>
                              )}
                              <span
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: purchase.status === "completed" || purchase.status === "paid" ? "rgba(74, 222, 128, 0.15)" : "rgba(251, 191, 36, 0.15)",
                                  color: purchase.status === "completed" || purchase.status === "paid" ? "#4ADE80" : "#FBB F24",
                                }}
                              >
                                {purchase.status || "Completed"}
                              </span>
                              {purchase.download_url && (
                                <a
                                  href={purchase.download_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                                  style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                                >
                                  Download
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
