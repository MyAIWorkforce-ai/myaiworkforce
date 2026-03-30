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
              style={{ color: link.href === "/done-for-you" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/done-for-you" ? "#FFD700" : "var(--text-dim)")}
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

const included = [
  "Custom AI agents built for your business", "24/7 automated monitoring", "Monthly performance reporting",
  "Continuous optimisation", "Dedicated support team", "Integration with your existing tools",
  "Enterprise-grade security", "Regular updates & improvements",
];

const plans = [
  { name: "Starter", price: "$997", period: "/mo", color: "var(--border)", agents: "2 Custom Agents", features: ["Discovery & setup", "2 fully managed agents", "Monthly reporting", "Email support"], cta: "Get Started" },
  { name: "Growth", price: "$2,497", period: "/mo", color: "var(--yellow)", agents: "5 Custom Agents", features: ["Everything in Starter", "5 fully managed agents", "Priority support", "Monthly strategy call", "Quarterly business review"], cta: "Most Popular", featured: true },
  { name: "Enterprise", price: "Custom", period: "", color: "var(--border)", agents: "Unlimited Agents", features: ["Everything in Growth", "Unlimited agents", "Dedicated account manager", "SLA guarantee", "Custom integrations", "On-site training"], cta: "Contact Us" },
];

const faqs = [
  { q: "How long does setup take?", a: "Most clients are up and running within 2 weeks. Complex enterprise setups may take 4-6 weeks." },
  { q: "Do I need any technical knowledge?", a: "None at all. We handle everything technical. You just tell us your goals." },
  { q: "Can I cancel anytime?", a: "Yes. Our plans are month-to-month with 30 days notice to cancel." },
  { q: "What tools and platforms do you integrate with?", a: "We integrate with virtually any tool, with deep expertise in the OpenClaw framework and its ecosystem." },
  { q: "What if I'm not happy with the results?", a: "We offer a 30-day satisfaction guarantee. If we don't deliver, we'll refund your first month." },
];

export default function DoneForYouPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,215,0,0.3)" }}>Done-For-You Service</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>Your AI Workforce,<br /><span style={{ color: "var(--yellow)" }}>Built & Managed For You</span></h1>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "var(--text-dim)" }}>Stop learning. Start growing. We build, deploy, and run your entire AI workforce, specializing in secure and scalable OpenClaw solutions.</p>
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block text-lg" style={{ backgroundColor: "var(--yellow)" }}>Book Your Free Discovery Call →</Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Discovery Call", desc: "We spend 30 minutes learning your business, goals, and where automation will have the biggest impact." },
                { step: "02", title: "We Build", desc: "Our team of AI engineers builds, tests, and refines your custom agents. You get updates every step of the way." },
                { step: "03", title: "We Run It", desc: "We manage, monitor, and optimise everything. You get monthly reports and results — not headaches." },
              ].map((s, i) => (
                <div key={i} className="text-center p-8 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="text-4xl font-extrabold mb-4" style={{ color: "var(--yellow)" }}>{s.step}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p style={{ color: "var(--text-dim)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {included.map((item, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--yellow)" }}>✓</span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-center mb-12" style={{ color: "var(--text-dim)" }}>All plans include setup, management, and ongoing support.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <div key={i} className="rounded-xl p-8 flex flex-col gap-6" style={{ backgroundColor: plan.featured ? "rgba(255,215,0,0.05)" : "var(--card)", border: `2px solid ${plan.color}` }}>
                  {plan.featured && <div className="text-xs font-bold px-3 py-1 rounded-full self-start" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>MOST POPULAR</div>}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span style={{ color: "var(--text-dim)" }}>{plan.period}</span>
                    </div>
                    <p className="text-sm mt-1" style={{ color: "var(--yellow)" }}>{plan.agents}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span style={{ color: "var(--yellow)" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="py-3 rounded-lg font-semibold text-center text-sm transition-all" style={{ backgroundColor: plan.featured ? "var(--yellow)" : "transparent", color: plan.featured ? "#0A0A0A" : "var(--yellow)", border: plan.featured ? "none" : "1px solid var(--yellow)" }}>{plan.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Workforce?</h2>
            <p className="mb-8" style={{ color: "var(--text-dim)" }}>Book a free 30-minute discovery call. No commitment, no sales pitch — just a conversation about what's possible for your business.</p>
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block text-lg" style={{ backgroundColor: "var(--yellow)" }}>Book Your Free Discovery Call →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
