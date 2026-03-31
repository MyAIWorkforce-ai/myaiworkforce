"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up Supabase auth
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></Link>
          <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>Sign in to your account</p>
        </div>
        <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-xs" style={{ color: "var(--yellow)" }}>Forgot password?</a>
            </div>
            <button type="submit" disabled={loading}
              className="py-3 rounded-lg font-bold text-sm text-black"
              style={{ backgroundColor: "var(--yellow)", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>
          <div className="mt-6 pt-6 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" style={{ color: "var(--yellow)" }}>Sign up free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
