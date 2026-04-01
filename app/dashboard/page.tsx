"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://uhkfooojytjesnvqrtxx.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2Zvb29qeXRqZXNudnFydHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTcxNjUsImV4cCI6MjA5MDQ5MzE2NX0.4encvmPhZ1uL2EIT4BEYu0LBjGYxJvUW4KfKHsjGhLQ"
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
            href="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            Login
          </Link>
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
            <Link href="/login" className="text-sm font-medium transition-colors" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }} onClick={() => setOpen(false)}>
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
              { label: "Sell Your Agents", href: "/creator/agents" },
              { label: "Sell Your Skills", href: "/creator/skills" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
              { label: "Website Refresh", href: "https://cheapwebsite-j1k0zcvlh-me-myself-i.vercel.app" },
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
  product_slug?: string;
  amount?: number;
  currency?: string;
  status?: string;
  download_url?: string;
  email?: string;
}

interface Submission {
  id: string;
  created_at: string;
  name?: string;
  type?: string;
  category?: string;
  price?: number;
  status?: string;
  email?: string;
}

// ─── Not Logged In View ───────────────────────────────────────────────────────
function NotLoggedIn() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-xl mx-auto text-center py-20">
          <div className="text-6xl mb-6">🔒</div>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#FFD700" }}>
            Please Log In
          </h1>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
            You need to be logged in to view your dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"purchases" | "listings">("purchases");
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const email = session.user.email || "";
          const name = session.user.user_metadata?.full_name || session.user.user_metadata?.name || email.split("@")[0] || "there";
          setUser({ email, name });
          // Load data
          setDataLoading(true);
          const [purchaseRes, submissionRes] = await Promise.all([
            supabase.from("purchases").select("*").eq("email", email.toLowerCase()).order("created_at", { ascending: false }),
            supabase.from("creator_submissions").select("*").eq("email", email.toLowerCase()).order("created_at", { ascending: false }),
          ]);
          setPurchases(purchaseRes.data || []);
          setSubmissions(submissionRes.data || []);
          setDataLoading(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg)" }}>
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">⚡</div>
          <p style={{ color: "var(--muted)" }}>Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <NotLoggedIn />;
  }

  const statusColor = (status?: string) => {
    if (status === "approved") return { bg: "rgba(74,222,128,0.15)", text: "#4ADE80" };
    if (status === "rejected") return { bg: "rgba(248,113,113,0.15)", text: "#F87171" };
    return { bg: "rgba(251,191,36,0.15)", text: "#FBBF24" };
  };

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Nav />
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Welcome header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
                Welcome back, <span style={{ color: "#FFD700" }}>{user.name}</span>! 👋
              </h1>
              <p className="text-base" style={{ color: "var(--muted)" }}>
                Here&apos;s everything in your account.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
              {(["purchases", "listings"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-6 py-3 text-sm font-semibold transition-all duration-200 capitalize"
                  style={{
                    borderBottom: activeTab === tab ? "2px solid #FFD700" : "2px solid transparent",
                    color: activeTab === tab ? "#FFD700" : "var(--muted)",
                    marginBottom: "-1px",
                    background: "none",
                  }}
                >
                  {tab === "purchases" ? "My Purchases" : "My Listings"}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {dataLoading ? (
              <div className="text-center py-16" style={{ color: "var(--muted)" }}>Loading…</div>
            ) : activeTab === "purchases" ? (
              <div>
                {purchases.length === 0 ? (
                  <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
                    <div className="text-5xl mb-4">🛒</div>
                    <h2 className="text-xl font-semibold mb-2">No purchases yet</h2>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      You haven&apos;t bought anything yet.
                    </p>
                    <Link
                      href="/marketplace"
                      className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 inline-block"
                      style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                    >
                      Browse the marketplace →
                    </Link>
                  </div>
                ) : (
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
                                year: "numeric", month: "long", day: "numeric",
                              })}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            {purchase.amount != null && (
                              <span className="text-sm font-semibold" style={{ color: "#FFD700" }}>
                                AUD ${Number(purchase.amount).toFixed(2)}
                              </span>
                            )}
                            <span
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: purchase.status === "completed" || purchase.status === "paid" ? "rgba(74,222,128,0.15)" : "rgba(251,191,36,0.15)",
                                color: purchase.status === "completed" || purchase.status === "paid" ? "#4ADE80" : "#FBBF24",
                              }}
                            >
                              {purchase.status || "Completed"}
                            </span>
                            <a
                              href={`/api/download?email=${encodeURIComponent(user.email)}&slug=${encodeURIComponent(purchase.product_slug || purchase.id)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                              style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {submissions.length === 0 ? (
                  <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
                    <div className="text-5xl mb-4">📦</div>
                    <h2 className="text-xl font-semibold mb-2">No listings yet</h2>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      You haven&apos;t listed anything yet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/creator/agents"
                        className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                      >
                        List an Agent →
                      </Link>
                      <Link
                        href="/creator/skills"
                        className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                      >
                        List a Skill →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {submissions.map((sub) => {
                      const colors = statusColor(sub.status);
                      return (
                        <div
                          key={sub.id}
                          className="p-5 rounded-2xl"
                          style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="font-semibold text-base mb-1">
                                {sub.name || "Untitled Listing"}
                              </h3>
                              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--muted)" }}>
                                {sub.type && <span className="capitalize">{sub.type}</span>}
                                {sub.category && <span>· {sub.category}</span>}
                                {sub.price != null && (
                                  <span style={{ color: "#F97316" }}>· ${sub.price}</span>
                                )}
                              </div>
                            </div>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold capitalize self-start sm:self-center"
                              style={{ backgroundColor: colors.bg, color: colors.text }}
                            >
                              {sub.status || "pending"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Account section */}
            <div
              className="mt-16 p-6 rounded-2xl"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}
            >
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#FFD700" }}>Account</h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 self-start sm:self-auto"
                  style={{ backgroundColor: "rgba(248,113,113,0.15)", color: "#F87171", border: "1px solid rgba(248,113,113,0.3)" }}
                >
                  Log out
                </button>
              </div>
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
