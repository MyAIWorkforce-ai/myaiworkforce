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
              style={{ color: link.href === "/pricing" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/pricing" ? "#FFD700" : "var(--text-dim)")}
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

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. All plans are billed monthly and can be cancelled at any time with no penalty." },
  { q: "What happens to my listings if I downgrade?", a: "Your listings remain live but you won't be able to create new ones until you upgrade again." },
  { q: "How does the 75% revenue share work?", a: "When someone buys your listing, you receive 75% of the sale price directly to your connected account. We retain 25%." },
  { q: "Is there a free trial?", a: "The Free plan is free forever. Pro and Agency plans include a 14-day free trial." },
  { q: "Do you offer refunds?", a: "Yes. If you're not happy in your first 30 days, we'll refund your subscription in full." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Browse, explore, and get started at no cost.",
      features: ["Browse entire marketplace", "Access all free listings", "Basic guides library", "Community access"],
      cta: "Get Started Free",
      href: "/marketplace",
      featured: false,
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      annualPrice: 39,
      description: "For individuals and small teams ready to automate.",
      features: ["Everything in Free", "All premium agents & skills", "Full guides library", "10 downloads per month", "Priority support", "Early access to new listings"],
      cta: "Start Free Trial",
      href: "/contact",
      featured: true,
    },
    {
      name: "Agency",
      monthlyPrice: 197,
      annualPrice: 157,
      description: "For creators and agencies who want to sell and scale.",
      features: ["Everything in Pro", "Unlimited downloads", "Sell your own listings", "75% revenue share — industry best", "Featured placement", "Creator profile & analytics", "Dedicated support"],
      cta: "Start Selling",
      href: "/contact",
      featured: false,
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Simple, Transparent<br /><span style={{ color: "var(--yellow)" }}>Pricing</span></h1>
            <p className="text-lg mb-8" style={{ color: "var(--text-dim)" }}>Start free. Scale when you&apos;re ready. No hidden fees, no surprises.</p>
            <div className="inline-flex items-center gap-3 p-1 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <button onClick={() => setAnnual(false)} className="px-5 py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: !annual ? "var(--yellow)" : "transparent", color: !annual ? "#0A0A0A" : "var(--text-dim)" }}>Monthly</button>
              <button onClick={() => setAnnual(true)} className="px-5 py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: annual ? "var(--yellow)" : "transparent", color: annual ? "#0A0A0A" : "var(--text-dim)" }}>Annual <span className="text-xs ml-1" style={{ color: annual ? "#0A0A0A" : "#22c55e" }}>Save 20%</span></button>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => {
              const price = annual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div key={i} className="rounded-xl p-8 flex flex-col gap-6" style={{ backgroundColor: plan.featured ? "rgba(255,215,0,0.05)" : "var(--card)", border: `2px solid ${plan.featured ? "var(--yellow)" : "var(--border)"}` }}>
                  {plan.featured && <div className="text-xs font-bold px-3 py-1 rounded-full self-start" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>MOST POPULAR</div>}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-extrabold">{price === 0 ? "Free" : `$${price}`}</span>
                      {price > 0 && <span style={{ color: "var(--text-dim)" }}>/mo{annual ? " billed annually" : ""}</span>}
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-dim)" }}>{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span style={{ color: "var(--yellow)" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.href} className="py-3 rounded-lg font-semibold text-center text-sm" style={{ backgroundColor: plan.featured ? "var(--yellow)" : "transparent", color: plan.featured ? "#0A0A0A" : "var(--yellow)", border: plan.featured ? "none" : "1px solid var(--yellow)" }}>{plan.cta}</Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Done-For-You CTA */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto text-center rounded-xl p-12" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-bold mb-3">Need Us to Build It?</h2>
            <p className="mb-6" style={{ color: "var(--text-dim)" }}>Our Done-For-You plans include custom agent builds, full management, and dedicated support — starting from $997/mo.</p>
            <Link href="/done-for-you" className="px-6 py-3 rounded-lg font-semibold inline-block" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>See Done-For-You Plans →</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
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
      </main>
      <Footer />
    </div>
  );
}
