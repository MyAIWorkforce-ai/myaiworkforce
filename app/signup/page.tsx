"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", type: "buyer" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up Supabase auth
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></Link>
          <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>Create your free account</p>
        </div>
        <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          {/* Account type toggle */}
          <div className="flex gap-2 mb-6 p-1 rounded-xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
            <button onClick={() => setForm({ ...form, type: "buyer" })}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{ backgroundColor: form.type === "buyer" ? "var(--yellow)" : "transparent", color: form.type === "buyer" ? "#0A0A0A" : "var(--text-dim)" }}>
              Buy Agents
            </button>
            <button onClick={() => setForm({ ...form, type: "seller" })}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{ backgroundColor: form.type === "seller" ? "var(--yellow)" : "transparent", color: form.type === "seller" ? "#0A0A0A" : "var(--text-dim)" }}>
              Sell Agents
            </button>
          </div>
          {form.type === "seller" && (
            <div className="mb-4 p-3 rounded-lg text-xs" style={{ backgroundColor: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", color: "var(--yellow)" }}>
              ✦ Sellers earn 75% on every sale — the best rate in the industry
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "John Smith" },
              { label: "Email Address", key: "email", type: "email", placeholder: "you@example.com" },
              { label: "Password", key: "password", type: "password", placeholder: "Min. 8 characters" },
            ].map(field => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                <input type={field.type} required placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>
            ))}
            <button type="submit" disabled={loading}
              className="py-3 rounded-lg font-bold text-sm text-black mt-2"
              style={{ backgroundColor: "var(--yellow)", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Creating account..." : "Create Account →"}
            </button>
          </form>
          <p className="text-xs text-center mt-4" style={{ color: "var(--text-dim)" }}>
            By signing up you agree to our{" "}
            <Link href="/terms" style={{ color: "var(--yellow)" }}>Terms</Link> and{" "}
            <Link href="/privacy" style={{ color: "var(--yellow)" }}>Privacy Policy</Link>
          </p>
          <div className="mt-6 pt-6 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--yellow)" }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
