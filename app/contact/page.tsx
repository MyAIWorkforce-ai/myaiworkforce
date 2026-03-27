"use client";
import { useState } from "react";
import Link from "next/link";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>MyAIWorkforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--text-dim)" }}>Guides</Link>
          <Link href="/done-for-you" style={{ color: "var(--text-dim)" }}>Done-For-You</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
          <Link href="/about" style={{ color: "var(--text-dim)" }}>About</Link>
          <Link href="/blog" style={{ color: "var(--text-dim)" }}>Blog</Link>
        </nav>
        <Link href="/contact" className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>Book a Call</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 mt-20" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-bold" style={{ color: "var(--yellow)" }}>MyAIWorkforce</span>
        <p className="text-sm" style={{ color: "var(--text-dim)" }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
          <Link href="/contact" style={{ color: "var(--text-dim)" }}>Contact</Link>
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
