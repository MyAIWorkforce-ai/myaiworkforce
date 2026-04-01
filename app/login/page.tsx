"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhkfooojytjesnvqrtxx.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2Zvb29qeXRqZXNudnFydHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTcxNjUsImV4cCI6MjA5MDQ5MzE2NX0.4encvmPhZ1uL2EIT4BEYu0LBjGYxJvUW4KfKHsjGhLQ'
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
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
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            </div>
            {error && <p className="text-sm text-center py-2 px-3 rounded-lg" style={{ color: "#E63946", backgroundColor: "rgba(230,57,70,0.08)" }}>{error}</p>}
            <button type="submit" disabled={loading}
              className="py-3 rounded-lg font-bold text-sm text-black mt-1 glow-yellow"
              style={{ backgroundColor: "#FFD700", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>
          <div className="mt-6 pt-6 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" style={{ color: "var(--yellow)" }}>Sign up free</Link>
          </div>
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "var(--text-dim)" }}>
          <Link href="/" style={{ color: "var(--text-dim)" }}>← Back to MyAIWorkforce.ai</Link>
        </p>
      </div>
    </div>
  );
}
