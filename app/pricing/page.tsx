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

function Nav({ active }: { active?: string }) {
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

const marketplacePlans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Browse, explore, and get started at no cost.",
    features: [
      "Browse entire marketplace",
      "Access all free listings",
      "Basic guides library",
      "Community access",
    ],
    cta: "Get Started Free",
    href: "/marketplace",
    featured: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For individuals and small teams ready to automate.",
    features: [
      "Everything in Free",
      "All premium agents & skills",
      "Full guides library",
      "10 downloads per month",
      "Priority support",
      "Early access to new listings",
    ],
    cta: "Start Free Trial",
    href: "/contact",
    featured: true,
  },
  {
    name: "Agency",
    monthlyPrice: 197,
    annualPrice: 157,
    description: "For creators and agencies who want to sell and scale.",
    features: [
      "Everything in Pro",
      "Unlimited downloads",
      "Sell your own listings",
      "75% revenue share — industry best",
      "Featured placement",
      "Creator profile & analytics",
      "Dedicated support",
    ],
    cta: "Start Selling",
    href: "/contact",
    featured: false,
  },
];

const dfy_plans = [
  {
    name: "🚀 Starter",
    price: "$997",
    period: "/mo",
    agents: "2 Custom Agents",
    highlight: false,
    features: [
      "Discovery & strategy session",
      "2 fully custom AI agents",
      "Private VPS deployment",
      "Monthly performance report",
      "Email support",
      "30-day money-back guarantee",
    ],
    cta: "Get Started",
  },
  {
    name: "📈 Growth",
    price: "$1,497",
    period: "/mo",
    agents: "5 Custom Agents",
    highlight: true,
    features: [
      "Everything in Starter",
      "5 fully custom AI agents",
      "Priority support (12hr)",
      "Monthly strategy call",
      "Advanced integrations",
      "Quarterly business review",
    ],
    cta: "Most Popular",
  },
  {
    name: "🏆 Enterprise",
    price: "$2,497",
    period: "/mo",
    agents: "Unlimited Agents",
    highlight: false,
    features: [
      "Everything in Growth",
      "Unlimited custom agents",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "On-site training",
    ],
    cta: "Contact Us",
  },
];

const faqs = [
  {
    q: "What's the difference between Marketplace plans and Done-For-You?",
    a: "Marketplace plans give you access to pre-built agents you deploy yourself. Done-For-You means we custom-build and fully manage your AI workforce for you. Think DIY vs. full-service.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are billed monthly and can be cancelled at any time with 30 days notice. No lock-in contracts, no cancellation penalties.",
  },
  {
    q: "How does the 75% revenue share work?",
    a: "On the Agency plan, when someone buys your listing in the marketplace, you receive 75% of the sale price directly to your connected account. We retain 25% as a platform fee.",
  },
  {
    q: "Is there a free trial for Done-For-You?",
    a: "We offer a free 30-minute discovery call and a 30-day satisfaction guarantee on all DFY plans. If you're not happy with results in month one, you get a full refund.",
  },
  {
    q: "What does 'private VPS' mean?",
    a: "Every Done-For-You client gets their own dedicated Virtual Private Server. Your AI agents and data never run on shared infrastructure. It's the same approach enterprise companies use — included at no extra cost.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. Marketplace plans have a 14-day free trial. Done-For-You plans include a 30-day satisfaction guarantee — full refund if we don't deliver.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav active="Pricing" />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
              Simple, Transparent<br /><span style={{ color: "#FFD700" }}>Pricing</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>Start free. Scale when you&apos;re ready. No hidden fees, no surprises.</p>
            <div>
              <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, display: "inline-block",  }}>
                🏷️ No setup fees — start immediately
              </span>
            </div>
          </div>
        </section>

        {/* Marketplace Plans */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-extrabold" style={{ letterSpacing: "-0.02em" }}>Marketplace Plans</h2>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Browse and deploy pre-built agents yourself</p>
              </div>
              <div className="inline-flex items-center gap-1 p-1 rounded-xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <button onClick={() => setAnnual(false)} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: !annual ? "#FFD700" : "transparent", color: !annual ? "#0A0A0A" : "var(--text-dim)" }}>Monthly</button>
                <button onClick={() => setAnnual(true)} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: annual ? "#FFD700" : "transparent", color: annual ? "#0A0A0A" : "var(--text-dim)" }}>Annual <span className="text-xs ml-1" style={{ color: annual ? "#0A0A0A" : "#22c55e" }}>−20%</span></button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {marketplacePlans.map((plan, i) => {
                const price = annual ? plan.annualPrice : plan.monthlyPrice;
                return (
                  <div key={i} className="rounded-xl p-8 flex flex-col gap-6" style={{ backgroundColor: plan.featured ? "rgba(255,215,0,0.05)" : "var(--card)", border: `2px solid ${plan.featured ? "#FFD700" : "var(--border)"}`, transform: plan.featured ? "scale(1.02)" : "scale(1)", boxShadow: plan.featured ? "0 0 40px rgba(255,215,0,0.1)" : "none" }}>
                    {plan.featured && (
                      <div className="flex flex-wrap gap-2 items-center">
                        <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>MOST POPULAR</div>
                        <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, display: "inline-block",  }}>
                          🏷️ Most Popular — Best Value
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-extrabold">{price === 0 ? "Free" : `$${price}`}</span>
                        {price > 0 && <span style={{ color: "var(--muted)" }}>/mo{annual ? " billed annually" : ""}</span>}
                      </div>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>{plan.description}</p>
                    </div>
                    <ul className="flex flex-col gap-2 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span style={{ color: "#FFD700" }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.href} className="py-3 rounded-lg font-semibold text-center text-sm" style={{ backgroundColor: plan.featured ? "#FFD700" : "transparent", color: plan.featured ? "#0A0A0A" : "#FFD700", border: plan.featured ? "none" : "1px solid #FFD700" }}>{plan.cta}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Done-For-You Plans */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold mb-1" style={{ letterSpacing: "-0.02em" }}>Done-For-You Plans</h2>
              <p className="text-sm" style={{ color: "var(--muted)" }}>We custom-build and fully manage your AI workforce</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {dfy_plans.map((plan, i) => (
                <div key={i} className="rounded-xl p-8 flex flex-col gap-6" style={{ backgroundColor: plan.highlight ? "rgba(255,215,0,0.05)" : "var(--card)", border: `2px solid ${plan.highlight ? "#FFD700" : "var(--border)"}`, transform: plan.highlight ? "scale(1.02)" : "scale(1)", boxShadow: plan.highlight ? "0 0 40px rgba(255,215,0,0.1)" : "none" }}>
                  {plan.highlight && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>MOST POPULAR</div>
                      <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, display: "inline-block",  }}>
                        🏷️ Most Popular — Best Value
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span style={{ color: "var(--muted)" }}>{plan.period}</span>
                    </div>
                    <p className="text-sm mt-1 font-medium" style={{ color: "#FFD700" }}>{plan.agents}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span style={{ color: "#FFD700" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="py-3 rounded-lg font-semibold text-center text-sm" style={{ backgroundColor: plan.highlight ? "#FFD700" : "transparent", color: plan.highlight ? "#0A0A0A" : "#FFD700", border: plan.highlight ? "none" : "1px solid #FFD700" }}>{plan.cta}</Link>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.2)" }}>
              <p className="font-semibold" style={{ color: "#FFD700" }}>
                🛡️ All Done-For-You plans include a private VPS deployment, end-to-end encryption, and a 30-day money-back guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center mb-10" style={{ letterSpacing: "-0.02em" }}>What&apos;s Included</h2>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="grid grid-cols-4 p-4 text-sm font-bold" style={{ backgroundColor: "var(--card)", borderBottom: "1px solid var(--border)" }}>
                <div>Feature</div>
                <div className="text-center">Marketplace</div>
                <div className="text-center">Marketplace Pro</div>
                <div className="text-center" style={{ color: "#FFD700" }}>Done-For-You</div>
              </div>
              {[
                { feature: "Pre-built agents", marketplace: "✓", pro: "✓", dfy: "✓" },
                { feature: "Custom-built agents", marketplace: "−", pro: "−", dfy: "✓" },
                { feature: "Private VPS deployment", marketplace: "−", pro: "−", dfy: "✓" },
                { feature: "Ongoing management", marketplace: "−", pro: "−", dfy: "✓" },
                { feature: "Monthly performance reports", marketplace: "−", pro: "−", dfy: "✓" },
                { feature: "Security audits", marketplace: "−", pro: "−", dfy: "✓" },
                { feature: "Priority support", marketplace: "−", pro: "✓", dfy: "✓" },
                { feature: "Full guides library", marketplace: "−", pro: "✓", dfy: "✓" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 p-4 text-sm" style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--card)", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ color: "var(--text)" }}>{row.feature}</div>
                  <div className="text-center" style={{ color: row.marketplace === "✓" ? "#22c55e" : "var(--muted)" }}>{row.marketplace}</div>
                  <div className="text-center" style={{ color: row.pro === "✓" ? "#22c55e" : "var(--muted)" }}>{row.pro}</div>
                  <div className="text-center" style={{ color: row.dfy === "✓" ? "#FFD700" : "var(--muted)" }}>{row.dfy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money-Back */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ backgroundColor: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <div className="text-3xl mb-3">💚</div>
            <h3 className="text-xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              All Done-For-You plans and Marketplace paid plans come with a 30-day satisfaction guarantee. If you&apos;re not happy in your first 30 days, we&apos;ll refund your subscription in full — no questions asked.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <button className="w-full p-6 text-left flex items-center justify-between gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <h3 className="font-bold text-sm"><span className="mr-2">❓</span>{faq.q}</h3>
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
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>Ready to Get Started?</h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>Browse the marketplace for free, or book a call to discuss a Done-For-You solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-8 py-4 rounded-xl font-bold text-black inline-block glow-yellow" style={{ backgroundColor: "#FFD700" }}>Book a Free Call →</Link>
              <Link href="/marketplace" className="px-8 py-4 rounded-xl font-bold inline-block" style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}>Browse Marketplace</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
