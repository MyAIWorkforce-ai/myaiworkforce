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
        <Link href="/" className="text-xl font-bold" style={{ color: "#FFD700", letterSpacing: "-0.02em" }}>My AI Workforce</Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200"
              style={{ color: link.label === active ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = link.label === active ? "#FFD700" : "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.label === active ? "#FFD700" : "var(--text-dim)")}
            >{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call</Link>
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
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: link.label === active ? "#FFD700" : "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
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
            <div className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}>My AI Workforce</div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Guides", href: "/guides" },
              { label: "Done-For-You", href: "/done-for-you" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
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
          </div>
        </div>
      </div>
    </footer>
  );
}

const included = [
  { icon: "🔧", item: "Custom AI agents built specifically for your business" },
  { icon: "🚀", item: "Full setup and deployment on your private VPS" },
  { icon: "📊", item: "Monthly performance reporting and analytics" },
  { icon: "🔄", item: "Continuous monitoring and optimisation" },
  { icon: "🛡️", item: "Enterprise-grade security — your data stays yours" },
  { icon: "🔗", item: "Integration with your existing tools and workflows" },
  { icon: "👥", item: "Dedicated support team available via email + chat" },
  { icon: "📈", item: "Quarterly business reviews and strategy sessions" },
  { icon: "🔁", item: "Regular agent updates as AI models improve" },
  { icon: "📋", item: "Full documentation and training for your team" },
  { icon: "⚡", item: "Priority access to new agents and features" },
  { icon: "✅", item: "30-day satisfaction guarantee on all plans" },
];

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/mo",
    agents: "2 Custom Agents",
    highlight: false,
    features: [
      "Discovery & strategy session",
      "2 fully custom AI agents",
      "Private VPS deployment",
      "Monthly performance report",
      "Email support (48hr response)",
      "30-day satisfaction guarantee",
    ],
    cta: "Get Started",
    note: "Best for: Small businesses automating 1-2 core processes",
  },
  {
    name: "Growth",
    price: "$1,497",
    period: "/mo",
    agents: "5 Custom Agents",
    highlight: true,
    features: [
      "Everything in Starter",
      "5 fully custom AI agents",
      "Priority support (12hr response)",
      "Monthly strategy call",
      "Advanced integrations",
      "Quarterly business review",
      "Early access to new agents",
    ],
    cta: "Most Popular",
    note: "Best for: Growing businesses ready to automate across departments",
  },
  {
    name: "Enterprise",
    price: "$2,497",
    period: "/mo",
    agents: "Unlimited Agents",
    highlight: false,
    features: [
      "Everything in Growth",
      "Unlimited custom agents",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "Custom integrations",
      "On-site training available",
      "White-label options",
    ],
    cta: "Contact Us",
    note: "Best for: Enterprises automating entire departments",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute free consultation to understand your business, identify automation opportunities, and determine the highest-ROI starting point.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "We document your workflows, map your existing tools, and design an AI architecture tailored specifically to your operations.",
  },
  {
    step: "03",
    title: "Build & Test",
    desc: "Our team builds your custom agents, tests them against real scenarios, and refines until performance meets our quality bar.",
  },
  {
    step: "04",
    title: "Deploy & Train",
    desc: "We deploy to your private VPS, integrate with your tools, and run your team through a handover session so everyone knows what to expect.",
  },
  {
    step: "05",
    title: "Manage & Optimise",
    desc: "We monitor everything 24/7, send monthly performance reports, and continuously improve your agents as your business evolves.",
  },
];

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most clients are live within 2 weeks. Complex enterprise setups with many integrations may take 4–6 weeks. We'll give you a clear timeline after the discovery call.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None whatsoever. We handle everything — servers, configuration, integrations, and ongoing management. You just tell us your goals.",
  },
  {
    q: "What does 'private VPS' mean for my business?",
    a: "It means your agents run on a dedicated server that only you access. Your data never mingles with other clients' data. No shared infrastructure, no data exposure risk. It's the same approach used by enterprise companies worth billions.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month with 30 days notice to cancel. No lock-in contracts, no cancellation fees.",
  },
  {
    q: "What tools and platforms do you integrate with?",
    a: "We integrate with virtually any tool via APIs. Deep expertise in Gmail, Outlook, Slack, HubSpot, Salesforce, Xero, Shopify, Zendesk, and hundreds more. If it has an API, we can connect to it.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "Every plan comes with a 30-day satisfaction guarantee. If we don't deliver the results we promised in month one, we'll refund your subscription in full. No questions asked.",
  },
];

const caseStudies = [
  {
    company: "Brightfield Logistics",
    industry: "Logistics & Transport",
    result: "15 hours/week saved",
    stat: "15 hrs/wk",
    desc: "Deployed 3 agents handling invoice processing, shipment status updates, and customer query resolution. The team reclaimed 15 hours a week within the first month.",
    quote: "We were drowning in admin. Now it just... handles itself.",
    person: "Sarah Chen, COO",
  },
  {
    company: "Webb Legal Group",
    industry: "Professional Services",
    result: "70% support volume automated",
    stat: "70%",
    desc: "Built a client intake agent, document request handler, and appointment scheduler. 70% of incoming client queries now resolved without human involvement.",
    quote: "I thought AI was only for tech companies. This changed everything.",
    person: "Marcus Webb, Founder",
  },
  {
    company: "Indigo Health",
    industry: "Healthcare Services",
    result: "$8,400/mo in saved labour",
    stat: "$8.4K/mo",
    desc: "Automated patient appointment reminders, prescription refill requests, and billing queries. Equivalent to 1.5 full-time admin staff — without the overhead.",
    quote: "The ROI was obvious in week three. We haven't looked back.",
    person: "Priya Nair, CEO",
  },
];

export default function DoneForYouPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav active="Done-For-You" />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto relative">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              Done-For-You Service
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}>
              We Build. We Deploy.<br />We Manage.<br /><span style={{ color: "#FFD700" }}>You Just Get Results.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              Stop spending time learning AI tools. Hand us your business challenges and we&apos;ll build a custom AI workforce that runs 24/7 — all on your own private, secure infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block text-lg glow-yellow" style={{ backgroundColor: "#FFD700" }}>
                Book Your Free Discovery Call →
              </Link>
              <Link href="#pricing" className="px-8 py-4 rounded-xl font-bold inline-block text-lg" style={{ border: "2px solid var(--border)", color: "var(--text-dim)" }}>
                See Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">What You Get</p>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>Everything Included. Nothing Hidden.</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>Every Done-For-You plan includes full-service delivery from discovery through to ongoing management.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-sm font-medium">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-4">Security First</p>
                <h2 className="text-3xl font-extrabold mb-6" style={{ letterSpacing: "-0.02em" }}>
                  Your Data Stays Yours.<br /><span style={{ color: "#FFD700" }}>Always.</span>
                </h2>
                <p className="mb-6" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  We know that handing your business data to an AI system requires enormous trust. That&apos;s why every Done-For-You deployment is built on a private infrastructure model that keeps your data completely isolated.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "🔒", text: "Private VPS per client — no shared infrastructure" },
                    { icon: "🔐", text: "End-to-end encrypted communications" },
                    { icon: "🏗️", text: "Dedicated environment only you can access" },
                    { icon: "🔍", text: "Regular security audits and penetration testing" },
                    { icon: "👁️", text: "Human oversight and full audit logs at every step" },
                    { icon: "✅", text: "SOC2-ready architecture for compliance-conscious businesses" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,215,0,0.04)", border: "2px solid rgba(255,215,0,0.2)" }}>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-4">The Private VPS Promise</h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  Unlike SaaS AI tools that process your data on shared servers, we deploy every client on their own dedicated Virtual Private Server. This means:
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Your customer data never leaves your server",
                    "No risk of data leaking to other tenants",
                    "You own the server and the data",
                    "Audit who accessed what and when",
                    "Meets strict data residency requirements",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span style={{ color: "#FFD700" }}>✓</span>
                      <span style={{ color: "var(--muted)" }}>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(255,215,0,0.2)" }}>
                  <p className="text-xs font-semibold" style={{ color: "#FFD700" }}>
                    🛡️ Every plan includes a dedicated private VPS at no extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">The Process</p>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>From Discovery to Results in 5 Steps</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>A clear, structured process that gets you results fast — without the confusion.</p>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((s, i) => (
                <div key={i} className="p-6 rounded-xl flex flex-col" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="text-3xl font-extrabold mb-3" style={{ color: "rgba(255,215,0,0.25)", letterSpacing: "-0.04em" }}>{s.step}</div>
                  <h3 className="font-bold mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">Pricing</p>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>Simple, Transparent Pricing</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>All plans include full setup, ongoing management, and private VPS deployment.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <div key={i} className="rounded-xl p-8 flex flex-col gap-6" style={{ backgroundColor: plan.highlight ? "rgba(255,215,0,0.05)" : "var(--card)", border: `2px solid ${plan.highlight ? "#FFD700" : "var(--border)"}` }}>
                  {plan.highlight && <div className="text-xs font-bold px-3 py-1 rounded-full self-start" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>MOST POPULAR</div>}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span style={{ color: "var(--muted)" }}>{plan.period}</span>
                    </div>
                    <p className="text-sm mt-1 font-medium" style={{ color: "#FFD700" }}>{plan.agents}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>{plan.note}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span style={{ color: "#FFD700" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="py-3 rounded-lg font-semibold text-center text-sm transition-all" style={{ backgroundColor: plan.highlight ? "#FFD700" : "transparent", color: plan.highlight ? "#0A0A0A" : "#FFD700", border: plan.highlight ? "none" : "1px solid #FFD700" }}>
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center p-6 rounded-xl" style={{ backgroundColor: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.2)" }}>
              <p className="font-semibold" style={{ color: "#FFD700" }}>🛡️ 30-Day Satisfaction Guarantee — if we don&apos;t deliver results in month one, we&apos;ll refund you in full.</p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">Client Results</p>
            <h2 className="text-3xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>Real Businesses. Real Results.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <div key={i} className="p-8 rounded-xl flex flex-col" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="mb-4">
                    <div className="text-4xl font-extrabold mb-1" style={{ color: "#FFD700", letterSpacing: "-0.04em" }}>{cs.stat}</div>
                    <div className="text-sm font-semibold">{cs.result}</div>
                    <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{cs.industry}</div>
                  </div>
                  <p className="text-sm mb-4 flex-1" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{cs.desc}</p>
                  <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm italic mb-2" style={{ color: "var(--text-dim)" }}>&ldquo;{cs.quote}&rdquo;</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(255,215,0,0.15)", color: "#FFD700" }}>
                        {cs.person.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                      <span className="text-xs font-medium">{cs.person}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
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

        {/* Final CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>Ready to Build Your AI Workforce?</h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>
              Book a free 30-minute discovery call. No commitment, no sales pitch — just an honest conversation about what AI can do for your business.
            </p>
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-black inline-block text-lg glow-yellow" style={{ backgroundColor: "#FFD700" }}>
              Book Your Free Discovery Call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
