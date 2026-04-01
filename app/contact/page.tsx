"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link"
            >{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
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
            <div className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></div>
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
                style={{ color: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "var(--yellow)" : "var(--muted)", fontWeight: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "600" : "normal" }}
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    helpType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-6 text-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-section)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />
          <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
              Let&apos;s <span style={{ color: "#FFD700" }}>Talk</span>
            </h1>
            <p style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              Book a free discovery call, send us a message, or just say hello. We respond within 24 hours — usually much faster.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
            {/* Left: Book a Call + Details */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Book a Call Card */}
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "rgba(255,215,0,0.05)", border: "2px solid rgba(255,215,0,0.3)" }}>
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop"
                    alt="Book a discovery call"
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6))" }} />
                </div>
                <div className="p-8">
                <div className="text-3xl mb-4">📞</div>
                <h2 className="text-xl font-bold mb-3">Book a Free Discovery Call</h2>
                <p className="mb-4 text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  30 minutes. No commitment. No sales pitch. We&apos;ll learn about your business and tell you exactly how AI can help.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {[
                    "Free, no obligation",
                    "30-minute video or phone call",
                    "Get a free automation audit",
                    "No technical knowledge required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span style={{ color: "#FFD700" }}>✓</span>
                      <span style={{ color: "var(--muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:toby@myaiworkforce.ai?subject=Book a Free Discovery Call" className="py-3 rounded-xl font-bold text-center text-black block w-full glow-yellow" style={{ backgroundColor: "#FFD700" }}>
                  Book My Free Call →
                </a>
                <p className="text-xs text-center mt-3" style={{ color: "var(--muted)" }}>Usually responds within a few hours</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-bold mb-4">Contact Details</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-lg">✉️</span>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:toby@myaiworkforce.ai" style={{ color: "#FFD700" }}>toby@myaiworkforce.ai</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-lg">📍</span>
                    <div>
                      <div className="font-medium">Location</div>
                      <span style={{ color: "var(--muted)" }}>Melbourne, Australia (Remote-first)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-lg">⏱️</span>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <span style={{ color: "var(--muted)" }}>Within 24 hours, usually faster</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-lg">🌏</span>
                    <div>
                      <div className="font-medium">Serving</div>
                      <span style={{ color: "var(--muted)" }}>Clients in 25+ countries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-3 rounded-xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-3xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
              <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>Prefer to write it out? Fill in the form and we&apos;ll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-bold text-2xl mb-3">Message Sent!</h3>
                  <p className="mb-6" style={{ color: "var(--muted)" }}>Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
                  <Link href="/" className="px-6 py-3 rounded-lg font-semibold text-black inline-block" style={{ backgroundColor: "#FFD700" }}>Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Your Name *</label>
                      <input
                        type="text" required placeholder="Jane Smith"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "#FFD700"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                      <input
                        type="email" required placeholder="jane@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "#FFD700"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company Name</label>
                    <input
                      type="text" placeholder="Acme Corp (optional)"
                      value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = "#FFD700"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">What can we help you with? *</label>
                    <select
                      required
                      value={form.helpType} onChange={e => setForm({ ...form, helpType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: form.helpType ? "var(--text)" : "var(--muted)", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={e => (e.target as HTMLSelectElement).style.borderColor = "#FFD700"}
                      onBlur={e => (e.target as HTMLSelectElement).style.borderColor = "var(--border)"}
                    >
                      <option value="">Select an option...</option>
                      <option value="done-for-you">Done-For-You AI Workforce</option>
                      <option value="marketplace">Marketplace — Buying an Agent</option>
                      <option value="selling">Selling on the Marketplace</option>
                      <option value="guides">Guides & DIY Help</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="invest">Investment Opportunities</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      rows={5} required
                      placeholder="Tell us about your business and what you're looking to automate..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                      style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = "#FFD700"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl font-bold text-black text-base glow-yellow" style={{ backgroundColor: "#FFD700" }}>
                    Send Message →
                  </button>
                  <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
                    We respond within 24 hours. Your data is never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
