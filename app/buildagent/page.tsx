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
  { label: "Build My Agent", href: "/buildmyagent" },
  { label: "Guides", href: "/guides" },
  { label: "Marketplace", href: "/marketplace" },
  
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#ffffff", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span></Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link"
            >{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button style={{ color: "var(--text-dim)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <IconX /> : <IconMenu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--nav-border)", backgroundColor: "#1a1a2e" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.88)" }}
                onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <div className="flex gap-2 mt-2"><Link href="/login" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }} onClick={() => setOpen(false)}>Login</Link><Link href="/signup" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: "1px solid var(--yellow)", color: "var(--yellow)" }} onClick={() => setOpen(false)}>Sign Up</Link></div>
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
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
            <div className="text-xl font-bold mb-2" style={{ color: "#c9a84c" }}><span style={{ color: "#c9a84c" }}>My </span><span style={{ color: "#c9a84c", fontSize: "1.2em" }}>AI </span><span style={{ color: "#c9a84c" }}>Workforce</span></div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Build My Agent", href: "/buildmyagent" },
  { label: "Guides", href: "/guides" },
  { label: "Marketplace", href: "/marketplace" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Sell Your Agents", href: "/creator/agents" },
              { label: "Sell Your Skills", href: "/creator/skills" },
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

const included = [
  { icon: "🔧", item: "Custom OpenClaw AI agent built for your business — powered by Claude, GPT or your chosen AI model" },
  { icon: "🚀", item: "Full setup and deployment on your own private, secure server (VPS)" },
  { icon: "💬", item: "Chat with your agent via Telegram — anywhere, anytime" },
  { icon: "📧", item: "Reads, replies to and manages your emails automatically" },
  { icon: "📅", item: "Manages your calendar, appointments and bookings" },
  { icon: "💳", item: "Processes invoices, receipts and data entry" },
  { icon: "🔗", item: "Connects to 10,000+ apps and tools via integrations" },
  { icon: "🔍", item: "Researches the web, competitors and market trends" },
  { icon: "🗣️", item: "Handles customer enquiries and follow-ups" },
  { icon: "🛡️", item: "Enterprise-grade security — your data never leaves your server" },
  { icon: "📊", item: "Monthly performance reporting and analytics" },
  { icon: "🔄", item: "Ongoing management, monitoring and optimisation" },
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
    title: "Fill In the Form",
    desc: "Tell us about your business, what you want your agent to do, and choose your package. Takes 2 minutes.",
  },
  {
    step: "02",
    title: "We Get to Work",
    desc: "Our team designs and builds your custom AI agent — tailored to your business, your tools, and your workflows.",
  },
  {
    step: "03",
    title: "Build & Test",
    desc: "We test your agent against real scenarios and refine until it performs exactly how you need it to.",
  },
  {
    step: "04",
    title: "Go Live",
    desc: "Your agent is deployed on your own private server and connected to your email, calendar, and other tools. Usually within 24 hours.",
  },
  {
    step: "05",
    title: "We Manage It For You",
    desc: "We monitor everything 24/7, send monthly performance reports, and keep improving your agent as your business grows.",
  },
];

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most clients are live within 24–48 hours. We move fast — once you submit your form, we get straight to work.",
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
  },
];

const caseStudies = [
  {
    company: "Brightfield Logistics",
    industry: "Logistics & Transport",
    result: "15 hours/week saved",
    stat: "15 hrs/wk",
    desc: "Deployed an AI agent handling invoice processing, shipment status updates, and customer query resolution. The team reclaimed 15 hours a week within the first month.",
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
        <section className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: "#f4f6fa" }}>
          <div className="max-w-4xl mx-auto relative">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#5a3e08", border: "2px solid rgba(201,168,76,0.5)" }}>
              Build My Agent
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.05", color: "#1a1a2e" }}>
              We Build. We Deploy.<br />We Manage.<br /><span style={{ color: "#c9a84c" }}>You Just Get Results.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#5a6a8a", lineHeight: "1.7" }}>
              Hand us your business challenges and we&apos;ll build you a custom AI agent that runs 24/7 on your very own private, secure infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="px-8 py-4 rounded-xl font-bold inline-block text-lg glow-yellow" style={{ backgroundColor: "#1a1a2e", color: "#ffffff", border: "2px solid #c9a84c" }}>
                Build My Agent Now →
              </Link>
              <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl font-bold inline-block text-lg" style={{ border: "2px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}>
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">What You Get</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>Everything Included. Nothing Hidden.</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>From the moment you get started, we handle everything — build, deployment, and ongoing management.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderLeft: "2px solid rgba(201,168,76,0.5)" }}>
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
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize: "2rem" }}>🔒</span>
                  <span style={{ fontSize: "2rem" }}>🛡️</span>
                </div>
                <h2 className="text-3xl font-extrabold mb-6" style={{ letterSpacing: "-0.02em" }}>
                  Your Data Stays Yours.<br /><span style={{ color: "#c9a84c" }}>Always.</span>
                </h2>
                <p className="mb-6" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                  We know that handing your business data to an AI system requires enormous trust. That&apos;s why every Build My Agent deployment is built on a private infrastructure model that keeps your data completely isolated.
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
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(201,168,76,0.04)", border: "2px solid rgba(201,168,76,0.2)" }}>
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
                      <span style={{ color: "#c9a84c" }}>✓</span>
                      <span style={{ color: "var(--muted)" }}>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                  <p className="text-xs font-semibold" style={{ color: "#c9a84c" }}>
                    🛡️ Every plan includes a dedicated private VPS at no extra cost.
                  </p>
                  <div className="mt-3">
                    <span style={{ border: "2px dashed #c9a84c", color: "#c9a84c", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, display: "inline-block",  }}>
                      🏷️ Your data never leaves your server
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link href="/security" className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
                      Learn more about our security →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">The Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>Have Your Very Own Live Agent in 5 Steps</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>Simple, fast, and fully managed. You fill in a form — we do the rest.</p>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((s, i) => (
                <div key={i} className="p-6 rounded-xl flex flex-col card-hover" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold mb-4 flex-shrink-0" style={{ backgroundColor: "#c9a84c", color: "#0A0A0A", boxShadow: "0 0 0 3px rgba(201,168,76,0.2)" }}>{s.step}</div>
                  <h3 className="font-bold mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs flex-1" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/get-started" className="px-8 py-4 rounded-xl font-bold text-lg inline-block glow-yellow" style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}>
                Get Started Now →
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="section-label justify-center mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ letterSpacing: "-0.02em" }}>One Plan. Everything Included.</h2>
            <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--muted)" }}>No hidden fees. No lock-in contracts. Get started in minutes — cancel anytime with 30 days notice.</p>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Main card */}
              <div className="p-10 rounded-2xl" style={{ backgroundColor: "#1a1a2e", border: "2px solid #c9a84c" }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c", border: "1px solid #c9a84c" }}>GET STARTED TODAY</div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Build My Agent</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>Your own OpenClaw AI agent — built on Claude, GPT or any leading AI model — deployed and running in as little as 24 hours.</p>
                <div className="mb-1">
                  <span className="text-5xl font-extrabold text-white">$497</span>
                  <span className="text-lg font-medium ml-2" style={{ color: "#c9a84c" }}>USD setup</span>
                </div>
                <div className="mb-1" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>≈ $770 AUD one-time</div>
                <div className="mt-3 mb-1 inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c", border: "1px solid #c9a84c" }}>🎁 First month FREE</div>
                <div className="mt-2 mb-1">
                  <span className="text-3xl font-extrabold text-white">$99</span>
                  <span className="text-base font-medium ml-2" style={{ color: "#c9a84c" }}>USD / month after that</span>
                </div>
                <div className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>≈ $155 AUD / month ongoing</div>
                <ul className="space-y-2 mb-8">
                  {[
                    "Custom AI agent built for your business",
                    "Powered by Claude, GPT or any leading AI",
                    "Runs 24/7 on your own private server",
                    "Chat via Telegram — anywhere, anytime",
                    "Reads & replies to your emails automatically",
                    "Manages your calendar & bookings",
                    "Handles customer enquiries & follow-ups",
                    "Processes invoices, receipts & data entry",
                    "Connects to 10,000+ apps",
                    "Ongoing management & support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <span style={{ color: "#c9a84c", fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/get-started" className="block w-full text-center py-4 rounded-xl font-bold text-lg glow-yellow" style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}>
                  Build My Agent Now →
                </Link>
              </div>
              {/* Custom card */}
              <div className="p-10 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,168,76,0.08)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>ENTERPRISE</div>
                <h3 className="text-2xl font-extrabold mb-2">Custom Solution</h3>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>For larger businesses needing multiple agents across teams.</p>
                <div className="mb-8"><span className="text-3xl font-extrabold">Let&apos;s Talk</span></div>
                <ul className="space-y-2 mb-8">
                  {[
                    "Multiple AI agents across your team",
                    "Each team member gets their own agent",
                    "Custom integrations & workflows",
                    "Dedicated account manager",
                    "Priority support & SLA",
                    "Tailored onboarding & training",
                    "Advanced security & compliance",
                    "Custom reporting & dashboards",
                    "White-label options available",
                    "Scalable as your team grows",
                    "Custom pricing based on scope",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "#c9a84c", fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 rounded-xl font-bold text-lg" style={{ border: "2px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.06)" }}>
                  Book a 30-Min Call →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label justify-center mb-4">Client Results</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.02em" }}>Real Businesses. Real Results.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <div key={i} className="p-8 rounded-xl flex flex-col card-hover" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", minHeight: 320 }}>
                  <div className="text-6xl font-serif leading-none mb-2" style={{ color: "#c9a84c", opacity: 0.5, lineHeight: 0.8 }}>&ldquo;</div>
                  <div className="mb-4">
                    <div className="text-4xl font-extrabold mb-1" style={{ color: "#c9a84c", letterSpacing: "-0.04em" }}>{cs.stat}</div>
                    <div className="text-sm font-semibold">{cs.result}</div>
                    <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{cs.industry}</div>
                  </div>
                  <p className="text-sm mb-4 flex-1" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{cs.desc}</p>
                  <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm italic mb-2" style={{ color: "var(--text-dim)" }}>&ldquo;{cs.quote}&rdquo;</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>
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
                    <span style={{ color: "#c9a84c", fontSize: "20px", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>Ready to Build Your AI Agent?</h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>
              No commitment, no sales pitch — just an honest conversation about what AI can do for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl font-bold inline-block text-lg glow-yellow" style={{ backgroundColor: "#c9a84c", color: "#1a1a2e" }}>
                Book a Free Call →
              </Link>
              <Link href="/get-started" className="px-8 py-4 rounded-xl font-bold inline-block text-lg" style={{ backgroundColor: "#1a1a2e", color: "#ffffff", border: "2px solid #c9a84c" }}>
                Build My Agent Now →
              </Link>
              <Link href="/guides" className="px-8 py-4 rounded-xl font-bold inline-block text-lg" style={{ border: "2px solid var(--border)", color: "var(--muted)" }}>
                DIY Guides
              </Link>
              <Link href="/marketplace" className="px-8 py-4 rounded-xl font-bold inline-block text-lg" style={{ border: "2px solid var(--border)", color: "var(--muted)" }}>
                Browse Marketplace
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Integrations Section */}
      <section style={{ backgroundColor: "var(--bg-section)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>INTEGRATIONS</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>Connects to Everything You Use</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "1rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Your agent works with the tools you already use. No tech knowledge needed — just tell it what to connect and it walks you through the rest.
            </p>
          </div>

          {/* Native */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ background: "#22c55e", color: "white", fontSize: "0.72rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>✅ BUILT IN — INSTANT</span>
              <span style={{ color: "var(--text-dim)", fontSize: "0.875rem" }}>Just ask your agent: "Connect my Gmail" — done in 2 minutes</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { icon: "📧", name: "Gmail" }, { icon: "📅", name: "Calendar" }, { icon: "📁", name: "Google Drive" },
                { icon: "📊", name: "Sheets" }, { icon: "📝", name: "Docs" }, { icon: "👥", name: "Contacts" },
                { icon: "✅", name: "Tasks" }, { icon: "🎤", name: "Voice Commands" }, { icon: "📱", name: "Telegram" },
                { icon: "📧", name: "Outlook" }, { icon: "🔍", name: "Web Research" }, { icon: "🖼️", name: "Image Gen" },
              ].map(a => (
                <div key={a.name} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.1rem" }}>{a.icon}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ background: "#c9a84c", color: "#1a1a2e", fontSize: "0.72rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>⚡ ADVANCED — WE SET IT ALL UP FOR YOU</span>
              <span style={{ color: "var(--text-dim)", fontSize: "0.875rem" }}>We connect these in the background — you just use them</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { icon: "💼", name: "Xero" }, { icon: "📒", name: "MYOB" }, { icon: "💳", name: "Stripe" },
                { icon: "📱", name: "WhatsApp" }, { icon: "📘", name: "Facebook" }, { icon: "📸", name: "Instagram" },
                { icon: "🔧", name: "GitHub" }, { icon: "▲", name: "Vercel" }, { icon: "🔗", name: "HubSpot" },
                { icon: "🛒", name: "Shopify" }, { icon: "📋", name: "Trello" }, { icon: "💬", name: "Slack" },
                { icon: "📆", name: "Calendly" }, { icon: "📊", name: "Google Ads" }, { icon: "⚡", name: "10,000+ more" },
              ].map(a => (
                <div key={a.name} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.1rem" }}>{a.icon}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="/integrations" style={{ display: "inline-block", padding: "12px 32px", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", border: "1px solid var(--border)", color: "var(--text)", background: "var(--bg)", textDecoration: "none" }}>
              See All Integrations →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
