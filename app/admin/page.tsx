"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://uhkfooojytjesnvqrtxx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2Zvb29qeXRqZXNudnFydHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTcxNjUsImV4cCI6MjA5MDQ5MzE2NX0.4encvmPhZ1uL2EIT4BEYu0LBjGYxJvUW4KfKHsjGhLQ"
);

// ─── Icons ────────────────────────────────────────────────────────────────────
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

// ─── Types ────────────────────────────────────────────────────────────────────
interface Submission {
  id: string;
  created_at?: string;
  submitted_at?: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  email: string;
  paypal_email?: string;
  status?: string;
  tags?: string;
}

interface Purchase {
  id: string;
  created_at: string;
  email?: string;
  product_name?: string;
  amount?: number;
  currency?: string;
  status?: string;
}

const ADMIN_PASSWORD = "admin2026";

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [testEmailStatus, setTestEmailStatus] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "submissions" | "purchases">("overview");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [subResult, purResult] = await Promise.all([
        supabase.from("creator_submissions").select("*").order("submitted_at", { ascending: false }).limit(50),
        supabase.from("purchases").select("*").order("created_at", { ascending: false }).limit(50),
      ]);
      setSubmissions(subResult.data || []);
      setPurchases(purResult.data || []);
    } catch (e) {
      console.error("Load error:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true);
      loadData();
    } else {
      setPasswordError("Incorrect password.");
      setPassword("");
    }
  };

  const handleTestEmail = async () => {
    setTestEmailStatus("Sending…");
    try {
      const res = await fetch("/api/creator/submit", {
        method: "POST",
        body: (() => {
          const fd = new FormData();
          fd.append("name", "Test Agent");
          fd.append("category", "Other");
          fd.append("description", "This is a test submission from the admin panel.");
          fd.append("price", "0");
          fd.append("whats_included", "Test");
          fd.append("email", "test@test.com");
          fd.append("paypal_email", "test@test.com");
          fd.append("terms", "true");
          return fd;
        })(),
      });
      if (res.ok) setTestEmailStatus("✅ Test email sent!");
      else setTestEmailStatus("❌ Failed to send test email.");
    } catch {
      setTestEmailStatus("❌ Error sending test email.");
    }
    setTimeout(() => setTestEmailStatus(""), 4000);
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--border)",
    borderRadius: "1rem",
    padding: "1.25rem",
  };

  // ─── Lock Screen ─────────────────────────────────────────────────────────
  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🔐</div>
            <h1 className="text-2xl font-bold mb-1">Admin Panel</h1>
            <p className="text-sm" style={{ color: "var(--muted)" }}>My AI Workforce · Restricted Access</p>
          </div>
          <form onSubmit={handleUnlock} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="px-4 py-3 rounded-xl text-sm outline-none"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--text)" }}
            />
            {passwordError && <p className="text-sm text-center" style={{ color: "#F87171" }}>{passwordError}</p>}
            <button type="submit" className="py-3 rounded-xl text-sm font-bold" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
              Unlock
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-xs" style={{ color: "var(--muted)" }}>← Back to site</Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Admin Dashboard ──────────────────────────────────────────────────────
  const totalRevenue = purchases.reduce((sum, p) => sum + (p.amount || 0), 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md h-14 flex items-center px-6 justify-between" style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-bold">
            <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
          </Link>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "rgba(249,115,22,0.2)", color: "#F97316" }}>Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setUnlocked(false)} className="text-xs px-3 py-1.5 rounded-lg" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}>
            Lock
          </button>
        </div>
      </header>

      <main className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* Tab Nav */}
          <div className="flex gap-2 mb-8">
            {(["overview", "submissions", "purchases"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all"
                style={{
                  backgroundColor: activeTab === tab ? "#FFD700" : "var(--card-bg)",
                  color: activeTab === tab ? "#0A0A0A" : "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={loadData}
              disabled={loading}
              className="ml-auto px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              {loading ? "Refreshing…" : "↻ Refresh"}
            </button>
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Creator Submissions", value: submissions.length },
                  { label: "Pending Review", value: submissions.filter((s) => s.status === "pending" || !s.status).length },
                  { label: "Total Purchases", value: purchases.length },
                  { label: "Total Revenue", value: `$${(totalRevenue / 100).toFixed(2)}` },
                ].map((stat) => (
                  <div key={stat.label} style={cardStyle}>
                    <div className="text-2xl font-bold" style={{ color: "#FFD700" }}>{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div style={cardStyle}>
                <h2 className="text-base font-semibold mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleTestEmail}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
                    style={{ backgroundColor: "rgba(255,215,0,0.15)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}
                  >
                    📧 Send Test Email
                  </button>
                  <Link href="/marketplace" target="_blank" className="px-4 py-2.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                    🛒 View Marketplace
                  </Link>
                  <Link href="/creator" target="_blank" className="px-4 py-2.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                    🎨 Creator Page
                  </Link>
                  <Link href="/dashboard" target="_blank" className="px-4 py-2.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                    👤 Buyer Dashboard
                  </Link>
                </div>
                {testEmailStatus && (
                  <p className="mt-3 text-sm" style={{ color: testEmailStatus.startsWith("✅") ? "#4ADE80" : testEmailStatus.startsWith("❌") ? "#F87171" : "var(--muted)" }}>
                    {testEmailStatus}
                  </p>
                )}
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Recent Submissions */}
                <div style={cardStyle}>
                  <h2 className="text-base font-semibold mb-4">Recent Submissions</h2>
                  {submissions.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--muted)" }}>No submissions yet.</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {submissions.slice(0, 5).map((s) => (
                        <div key={s.id} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{s.name}</p>
                            <p className="text-xs" style={{ color: "var(--muted)" }}>{s.email}</p>
                          </div>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(251,191,36,0.15)", color: "#FBBF24" }}>
                            {s.status || "pending"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Purchases */}
                <div style={cardStyle}>
                  <h2 className="text-base font-semibold mb-4">Recent Purchases</h2>
                  {purchases.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--muted)" }}>No purchases yet.</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {purchases.slice(0, 5).map((p) => (
                        <div key={p.id} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{p.product_name || "Purchase"}</p>
                            <p className="text-xs" style={{ color: "var(--muted)" }}>{p.email || "—"}</p>
                          </div>
                          {p.amount && (
                            <span className="text-sm font-semibold" style={{ color: "#4ADE80" }}>
                              ${(p.amount / 100).toFixed(2)}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SUBMISSIONS TAB */}
          {activeTab === "submissions" && (
            <div style={cardStyle}>
              <h2 className="text-base font-semibold mb-4">Creator Submissions ({submissions.length})</h2>
              {submissions.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--muted)" }}>No submissions yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        {["Name", "Category", "Price", "Email", "Status", "Submitted"].map((h) => (
                          <th key={h} className="text-left py-2 pr-4 text-xs font-semibold" style={{ color: "var(--muted)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((s) => (
                        <tr key={s.id} style={{ borderBottom: "1px solid var(--border)" }}>
                          <td className="py-3 pr-4 font-medium">{s.name}</td>
                          <td className="py-3 pr-4" style={{ color: "var(--muted)" }}>{s.category}</td>
                          <td className="py-3 pr-4" style={{ color: "#FFD700" }}>${s.price}</td>
                          <td className="py-3 pr-4" style={{ color: "var(--muted)" }}>{s.email}</td>
                          <td className="py-3 pr-4">
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(251,191,36,0.15)", color: "#FBBF24" }}>
                              {s.status || "pending"}
                            </span>
                          </td>
                          <td className="py-3" style={{ color: "var(--muted)" }}>
                            {new Date(s.submitted_at || s.created_at || "").toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* PURCHASES TAB */}
          {activeTab === "purchases" && (
            <div style={cardStyle}>
              <h2 className="text-base font-semibold mb-4">Recent Purchases ({purchases.length})</h2>
              {purchases.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--muted)" }}>No purchases yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        {["Product", "Email", "Amount", "Status", "Date"].map((h) => (
                          <th key={h} className="text-left py-2 pr-4 text-xs font-semibold" style={{ color: "var(--muted)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map((p) => (
                        <tr key={p.id} style={{ borderBottom: "1px solid var(--border)" }}>
                          <td className="py-3 pr-4 font-medium">{p.product_name || "—"}</td>
                          <td className="py-3 pr-4" style={{ color: "var(--muted)" }}>{p.email || "—"}</td>
                          <td className="py-3 pr-4" style={{ color: "#4ADE80" }}>
                            {p.amount ? `${p.currency?.toUpperCase() || "USD"} $${(p.amount / 100).toFixed(2)}` : "—"}
                          </td>
                          <td className="py-3 pr-4">
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(74,222,128,0.15)", color: "#4ADE80" }}>
                              {p.status || "completed"}
                            </span>
                          </td>
                          <td className="py-3" style={{ color: "var(--muted)" }}>
                            {new Date(p.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
