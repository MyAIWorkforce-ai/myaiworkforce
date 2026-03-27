"use client";
import { useState } from "react";
import Link from "next/link";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>My AI Workforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--text-dim)" }}>Guides</Link>
          <Link href="/done-for-you" style={{ color: "var(--text-dim)" }}>Done-For-You</Link>
          <Link href="/pricing" style={{ color: "var(--yellow)" }}>Pricing</Link>
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
