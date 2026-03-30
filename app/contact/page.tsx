"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";


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

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold" style={{ color: "#FFD700", letterSpacing: "-0.02em" }}>
          MyAIWorkforce
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Marketplace", href: "/marketplace" },
            { label: "Guides", href: "/guides" },
            { label: "Done-For-You", href: "/done-for-you" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: link.href === "/contact" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/contact" ? "#FFD700" : "var(--text-dim)")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Book a Free Call
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="transition-colors"
            style={{ color: "var(--text-dim)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="md:hidden border-t mobile-menu"
          style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--mobile-menu-bg)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Guides", href: "/guides" },
              { label: "Done-For-You", href: "/done-for-you" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-dim)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
              onClick={() => setOpen(false)}
            >
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 mt-20" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-bold" style={{ color: "var(--yellow)" }}>My AI Workforce</span>
        <p className="text-sm" style={{ color: "var(--text-dim)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
          <Link href="/contact" style={{ color: "var(--text-dim)" }}>Contact</Link>
          <Link href="/invest" style={{ color: "var(--yellow)", fontWeight: "600" }}>Invest with Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Let&apos;s <span style={{ color: "var(--yellow)" }}>Talk</span></h1>
            <p style={{ color: "var(--text-dim)" }}>Book a free discovery call or send us a message. We respond within 24 hours.</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Book a Call */}
            <div className="rounded-xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-2xl font-bold mb-3">Book a Free Discovery Call</h2>
              <p className="mb-6 text-sm" style={{ color: "var(--text-dim)" }}>30 minutes, no commitment, no sales pitch. We&apos;ll talk about your business, identify automation opportunities, and tell you exactly how we can help.</p>
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 text-sm"><span style={{ color: "var(--yellow)" }}>✓</span> Free, no obligation</div>
                <div className="flex items-center gap-3 text-sm"><span style={{ color: "var(--yellow)" }}>✓</span> 30-minute video or phone call</div>
                <div className="flex items-center gap-3 text-sm"><span style={{ color: "var(--yellow)" }}>✓</span> Get a free automation audit</div>
                <div className="flex items-center gap-3 text-sm"><span style={{ color: "var(--yellow)" }}>✓</span> No technical knowledge required</div>
              </div>
              <a href="/contact" className="py-4 rounded-xl font-bold text-center text-black block w-full" style={{ backgroundColor: "var(--yellow)" }}>Book My Free Call →</a>
              <p className="text-xs text-center mt-3" style={{ color: "var(--text-dim)" }}>Usually responds within a few hours</p>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl p-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-4xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold mb-3">Send a Message</h2>
              <p className="mb-6 text-sm" style={{ color: "var(--text-dim)" }}>Prefer to write it out? Send us a message and we&apos;ll get back to you within 24 hours.</p>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                  <p style={{ color: "var(--text-dim)" }}>We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "John Smith" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "john@company.com" },
                    { label: "Business Name", key: "business", type: "text", placeholder: "Acme Corp (optional)" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea rows={4} placeholder="Tell us about your business and what you&apos;re looking to automate..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                      style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
                  </div>
                  <button type="submit" className="py-3 rounded-lg font-semibold text-black" style={{ backgroundColor: "var(--yellow)" }}>Send Message →</button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-10 px-6 text-center">
          <p className="text-sm" style={{ color: "var(--text-dim)" }}>Or email us directly at <a href="mailto:monty@myaiworkforce.ai" style={{ color: "var(--yellow)" }}>monty@myaiworkforce.ai</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
