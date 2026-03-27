"use client";
import Link from "next/link";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>My AI Workforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--text-dim)" }}>Guides</Link>
          <Link href="/done-for-you" style={{ color: "var(--yellow)" }}>Done-For-You</Link>
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
  { q: "What tools and platforms do you integrate with?", a: "We integrate with virtually any tool — Gmail, Slack, HubSpot, Salesforce, Notion, Zapier, and hundreds more." },
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
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "var(--text-dim)" }}>Stop learning. Start growing. We build, deploy, and run your entire AI workforce while you focus on what you do best.</p>
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
