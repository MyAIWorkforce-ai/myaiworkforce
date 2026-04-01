"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

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
    <button className="theme-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label="Toggle theme">
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
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link">{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "var(--text-dim)", border: "1px solid var(--border)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <IconX /> : <IconMenu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
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
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
              { label: "Website Refresh", href: "https://cheapwebsite-j1k0zcvlh-me-myself-i.vercel.app" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200"
                style={{ color: link.label === "Invest with Us" ? "var(--yellow)" : "var(--muted)", fontWeight: link.label === "Invest with Us" ? "600" : "normal" }}
              >{link.label}</Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm" style={{ color: "var(--muted)" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm" style={{ color: "var(--muted)" }}>Terms of Service</Link>
            <Link href="/security" className="text-sm" style={{ color: "var(--muted)" }}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const accessItems = [
  {
    icon: "📧",
    what: "Gmail / Email access",
    why: "So your email triage agent can read and categorise your inbox. Read-only by default. Write access only if you want agents to send or archive on your behalf.",
    risk: "low",
  },
  {
    icon: "📅",
    what: "Calendar access",
    why: "So your scheduling agent can check your availability and book meetings without back-and-forth email chains.",
    risk: "low",
  },
  {
    icon: "📊",
    what: "CRM access",
    why: "So your CRM updater agent can log call notes, update deal stages, and keep your pipeline accurate automatically.",
    risk: "low",
  },
  {
    icon: "💬",
    what: "Slack / communication tools",
    why: "So agents can post summaries, alerts, or updates to relevant channels. Read-only or specific channels only.",
    risk: "low",
  },
];

const neverAccess = [
  "Bank accounts or payment systems",
  "Personal files outside the agreed scope",
  "Social media accounts (unless specifically requested and scoped)",
  "Accounts we haven't been explicitly granted access to",
  "Any system not documented in your onboarding agreement",
];

const canDo = [
  "Read and send emails on your behalf (when configured)",
  "Update your CRM records",
  "Create and accept calendar events",
  "Generate reports from your data",
  "Post to Slack channels you specify",
  "Log call notes and action items",
  "Summarise documents and emails",
  "Trigger workflows in connected tools",
];

const cannotDo = [
  "Transfer or withdraw money",
  "Access accounts we haven't been given explicit access to",
  "Store your data on our systems",
  "Share your data with third parties",
  "Make purchases on your behalf",
  "Access anything outside the agreed scope",
  "Act without audit trails",
  "Override your human approval when required",
];

const faqs = [
  {
    q: "Who can see my data?",
    a: "Only you and the specific team members you authorise. We operate on a strict need-to-know basis. Our team may access logs during a support request — only with your permission and only the relevant data.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "We delete all copies of your data within 30 days of cancellation. You can request immediate deletion at any time. We provide a written confirmation when deletion is complete.",
  },
  {
    q: "Are my credentials stored securely?",
    a: "Yes. API keys and OAuth tokens are stored in encrypted vaults (AES-256) on your private VPS, never on our systems. We never see your passwords — we use OAuth where available.",
  },
  {
    q: "Can an agent accidentally delete something important?",
    a: "No. By default, all agents are configured in read-only mode for destructive operations. Any write, delete, or send action is logged and can be reviewed. High-risk operations require explicit human approval.",
  },
  {
    q: "What if there's a security incident?",
    a: "We have an incident response plan. If your server is ever compromised, we notify you within 24 hours, isolate the environment, and work to restore operations. You're never left in the dark.",
  },
  {
    q: "Do you comply with GDPR / Australian Privacy Act?",
    a: "Yes. Our architecture is designed for data residency compliance. Your data stays in the server region you choose. We're compliant with the Australian Privacy Act 1988 and follow GDPR principles for any EU data.",
  },
];

export default function SecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              🔒 Security & Trust
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}>
              Your Security Is<br /><span style={{ color: "#FFD700" }}>Our Foundation</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              Every Done-For-You deployment is built on principles of privacy, isolation, and transparency. We believe you deserve to know exactly what we can and cannot access — and why.
            </p>
          </div>
        </section>

        {/* Section 1: What We Access */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="section-label justify-center mb-4">Transparency First</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>
              What We Access — And Why
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--muted)" }}>
              We only request access to what&apos;s needed for your specific agents. Nothing more. Here&apos;s exactly what we might ask for:
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {accessItems.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h3 className="font-bold mb-1">{item.what}</h3>
                      <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{item.why}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
                        Scoped
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span>🚫</span> We Never Access
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {neverAccess.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: "#ef4444", flexShrink: 0 }}>✗</span>
                    <span style={{ color: "var(--muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Private Server Architecture */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="section-label justify-center mb-4">Architecture</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>
              Your Private Server
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--muted)" }}>
              Every client gets their own dedicated server. Your data never touches shared infrastructure.
            </p>

            {/* Architecture diagram */}
            <div className="mb-12">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <p className="text-center text-sm font-semibold mb-6" style={{ color: "#FFD700" }}>✅ How YOUR setup works</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(255,215,0,0.1)", border: "2px solid #FFD700", color: "#FFD700", minWidth: 140 }}>
                    Your Business Data<br /><span className="text-xs font-normal opacity-70">(Gmail, CRM, Calendar)</span>
                  </div>
                  <div className="text-2xl" style={{ color: "#FFD700" }}>↔</div>
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid #F97316", color: "#F97316", minWidth: 140 }}>
                    Your Private VPS<br /><span className="text-xs font-normal opacity-70">(dedicated to you only)</span>
                  </div>
                  <div className="text-2xl" style={{ color: "#F97316" }}>↔</div>
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(255,215,0,0.1)", border: "2px solid #FFD700", color: "#FFD700", minWidth: 140 }}>
                    Your AI Agents<br /><span className="text-xs font-normal opacity-70">(running only for you)</span>
                  </div>
                </div>
                <p className="text-center text-xs mt-4" style={{ color: "var(--muted)" }}>
                  All communication is encrypted end-to-end. Nothing leaves your server.
                </p>
              </div>

              <div className="p-8 rounded-2xl mt-4" style={{ backgroundColor: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <p className="text-center text-sm font-semibold mb-6" style={{ color: "#ef4444" }}>❌ How most SaaS AI tools work (NOT us)</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", minWidth: 120 }}>
                    Your Data
                  </div>
                  <div className="text-2xl" style={{ color: "#ef4444" }}>→</div>
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", minWidth: 120 }}>
                    Shared Cloud<br /><span className="text-xs font-normal opacity-70">(thousands of tenants)</span>
                  </div>
                  <div className="text-2xl" style={{ color: "#ef4444" }}>→</div>
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", minWidth: 120 }}>
                    AI Processing<br /><span className="text-xs font-normal opacity-70">(mixed with others)</span>
                  </div>
                  <div className="text-2xl" style={{ color: "#ef4444" }}>→</div>
                  <div className="p-4 rounded-xl font-semibold text-sm" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", minWidth: 120 }}>
                    3rd Party Risk
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: "🔒", title: "Dedicated Environment", desc: "Your server is only accessible by you. No other client data ever touches it." },
                { icon: "📍", title: "Data Residency", desc: "Choose your server region. Your data stays in Australia (or wherever you need it)." },
                { icon: "👁️", title: "Full Audit Logs", desc: "Every action your agents take is logged, timestamped, and reviewable by you." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl text-center" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Can / Cannot */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="section-label justify-center mb-4">Clear Boundaries</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>
              What We Can and Cannot Do
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--muted)" }}>
              Honest and unambiguous. No vague disclaimers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}>
                <h3 className="font-bold mb-4 flex items-center gap-2 text-base" style={{ color: "#22c55e" }}>
                  ✅ We CAN do
                </h3>
                <div className="flex flex-col gap-3">
                  {canDo.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "var(--muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <h3 className="font-bold mb-4 flex items-center gap-2 text-base" style={{ color: "#ef4444" }}>
                  ❌ We CANNOT do
                </h3>
                <div className="flex flex-col gap-3">
                  {cannotDo.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span style={{ color: "#ef4444", flexShrink: 0 }}>✗</span>
                      <span style={{ color: "var(--muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Your Rights */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="section-label justify-center mb-4">You&apos;re in Control</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>
              Your Rights
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--muted)" }}>
              You have complete control over your agents and your data. Always.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">🔌</div>
                <h3 className="font-bold mb-3">Revoke Access Anytime</h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  You can revoke any agent&apos;s access in seconds. Here&apos;s how:
                </p>
                <ol className="flex flex-col gap-2">
                  {[
                    "Go to your Google Account → Security → Third-party apps",
                    "Find 'My AI Workforce' and click Remove Access",
                    "Email us at toby@MyAIWorkforce.ai to confirm shutdown",
                    "We confirm all agent processes are stopped within 1 hour",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--muted)" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">🗑️</div>
                <h3 className="font-bold mb-3">Request Data Deletion</h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  Request full deletion of all your data at any time. We complete it within 30 days and send written confirmation.
                </p>
                <Link href="mailto:toby@MyAIWorkforce.ai?subject=Data Deletion Request"
                  className="text-sm font-semibold"
                  style={{ color: "#FFD700" }}
                >
                  Request deletion → toby@MyAIWorkforce.ai
                </Link>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-bold mb-3">View Audit Logs</h3>
                <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  Every action your agents take is logged with a timestamp, action type, and outcome. You can request a full export of your logs at any time via your dashboard or by emailing us.
                </p>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">📦</div>
                <h3 className="font-bold mb-3">Export Your Data</h3>
                <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  Request a full export of all data associated with your account in JSON or CSV format. We deliver it within 7 days. Your data, your format, your choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>
              Security Questions — Answered Honestly
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <button
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3 className="font-bold text-sm">{faq.q}</h3>
                    <span style={{ color: "#FFD700", fontSize: "20px", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-6">🛡️</div>
            <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>
              Still Have Questions?
            </h2>
            <p className="mb-8" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              Security is too important to leave to FAQs. Book a free 30-minute security briefing call with Toby — no pitch, just honest answers to every question you have about how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendar.app.google/cEdmSQvEZ66hj4dy7"
                className="px-8 py-4 rounded-xl font-bold text-black inline-block text-base glow-yellow"
                style={{ backgroundColor: "#FFD700" }}
              >
                Book a Security Briefing Call →
              </Link>
              <Link
                href="mailto:toby@MyAIWorkforce.ai"
                className="px-8 py-4 rounded-xl font-bold inline-block text-base"
                style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}
              >
                Email Your Questions
              </Link>
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
              Or read our <Link href="/privacy" style={{ color: "#FFD700" }}>Privacy Policy</Link> and <Link href="/terms" style={{ color: "#FFD700" }}>Terms of Service</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
