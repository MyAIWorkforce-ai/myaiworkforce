"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid email or password. Please try again.");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FFD700" }}>My </span>
            <span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span>
            <span style={{ color: "#FFD700" }}>Workforce</span>
          </Link>
          <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>Sign in to your account</p>
        </div>
        <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-xs" style={{ color: "var(--yellow)" }}>Forgot password?</a>
            </div>
            {error && (
              <div
                className="px-4 py-3 rounded-lg text-sm"
                style={{ backgroundColor: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", color: "#F87171" }}
              >
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="py-3 rounded-lg font-bold text-sm text-black transition-opacity"
              style={{ backgroundColor: "var(--yellow)", opacity: loading ? 0.7 : 1 }}
            >
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
