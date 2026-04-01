"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium",
  "Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria", "Cambodia",
  "Canada", "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Cyprus",
  "Czech Republic", "Denmark", "Ecuador", "Egypt", "Estonia", "Ethiopia",
  "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Guatemala",
  "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lebanon", "Lithuania",
  "Luxembourg", "Malaysia", "Malta", "Mexico", "Morocco", "Myanmar",
  "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman",
  "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Serbia",
  "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea",
  "Spain", "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Thailand",
  "Tunisia", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
  "Zimbabwe",
];

export default function SignupPage() {
  const [step, setStep] = useState<'signup' | 'choose'>('signup');
  const [form, setForm] = useState({ name: "", email: "", password: "", country: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password, name: form.name, country: form.country }),
      });
      const data = await res.json();
      if (res.ok && data.user) {
        setSuccess(true);
        setTimeout(() => setStep('choose'), 800);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  if (step === 'choose') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}>
              <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
            </Link>
            <p className="mt-2 text-sm font-semibold" style={{ color: "#22c55e" }}>✅ Account created! Welcome aboard.</p>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-extrabold text-center mb-2">What would you like to do?</h2>
            <p className="text-sm text-center mb-6" style={{ color: "var(--muted)" }}>You can do both — this just gets you started.</p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => router.push('/marketplace')}
                className="w-full p-5 rounded-xl text-left transition-all card-hover"
                style={{ backgroundColor: "var(--bg)", border: "2px solid var(--yellow)" }}
              >
                <div className="text-2xl mb-2">🛒</div>
                <div className="font-bold mb-1" style={{ color: "#FFD700" }}>Buy Agents & Skills</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>Browse 500+ ready-made AI agents and skill files for your business.</div>
              </button>
              <button
                onClick={() => router.push('/creator')}
                className="w-full p-5 rounded-xl text-left transition-all card-hover"
                style={{ backgroundColor: "var(--bg)", border: "2px solid #F97316" }}
              >
                <div className="text-2xl mb-2">💰</div>
                <div className="font-bold mb-1" style={{ color: "#F97316" }}>Sell Agents & Skills</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>List your AI agents, skills, prompt packs and earn 75% on every sale.</div>
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="text-sm text-center mt-2"
                style={{ color: "var(--muted)" }}
              >
                Go to my dashboard →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
          </Link>
          <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>Create your free account to buy and sell AI agents and skills</p>
        </div>
        <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
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
            <div>
              <label className="block text-sm font-medium mb-1.5">Country</label>
              <select
                required
                value={form.country}
                onChange={e => setForm({ ...form, country: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: form.country ? "var(--text)" : "var(--text-dim)" }}
              >
                <option value="" disabled>Select your country</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {error && <p className="text-sm text-center" style={{ color: "#E63946" }}>{error}</p>}
            {success && <p className="text-sm text-center font-semibold" style={{ color: "#22c55e" }}>✅ Account created!</p>}
            <button type="submit" disabled={loading || success}
              className="py-3 rounded-lg font-bold text-sm text-black mt-2"
              style={{ backgroundColor: "var(--yellow)", opacity: loading || success ? 0.7 : 1 }}>
              {loading ? "Creating account..." : success ? "Success! ✅" : "Create Free Account →"}
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
