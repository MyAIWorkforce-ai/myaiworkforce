"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const guides = [
  { title: "How to Set Up Your First AI Email Agent", description: "Learn how to configure an AI agent to triage, respond, and organise your inbox — saving you hours every week.", category: "Operations", difficulty: "Beginner", readTime: "15 min", slug: "how-to-set-up-your-first-ai-email-agent", price: 9 },
  { title: "Automate Your Customer Support in 3 Steps", description: "Deploy an AI agent that handles inbound queries, resolves common issues, and escalates to humans when needed.", category: "Customer Support", difficulty: "Beginner", readTime: "20 min", slug: "automate-your-customer-support-in-3-steps", price: 9 },
  { title: "Build a Lead Generation Agent from Scratch", description: "Create an agent that finds, qualifies, and reaches out to potential leads — all on autopilot.", category: "Sales", difficulty: "Intermediate", readTime: "25 min", slug: "build-a-lead-generation-agent-from-scratch", price: 14 },
  { title: "Create a Social Media Scheduling Agent", description: "Build a workflow that drafts, schedules, and posts content across all your platforms automatically.", category: "Marketing", difficulty: "Beginner", readTime: "18 min", slug: "create-a-social-media-scheduling-agent", price: 9 },
  { title: "Set Up an Invoice Processing Workflow", description: "Automate the extraction, validation, and filing of invoices using AI — no more manual data entry.", category: "Finance", difficulty: "Intermediate", readTime: "22 min", slug: "set-up-an-invoice-processing-workflow", price: 14 },
  { title: "Build a Market Research Agent", description: "Configure an agent to monitor competitors, track industry trends, and deliver daily intelligence briefs.", category: "Research", difficulty: "Advanced", readTime: "30 min", slug: "build-a-market-research-agent", price: 19 },
  { title: "The OpenClaw Quick-Start Guide", description: "Get your first OpenClaw agent up and running in under 30 minutes. No code required.", category: "Operations", difficulty: "Beginner", readTime: "12 min", slug: "the-openclaw-quick-start-guide", price: 9 },
  { title: "Build a Sales Outreach Agent with n8n", description: "Use n8n workflows to automate personalised cold outreach at scale.", category: "Sales", difficulty: "Advanced", readTime: "35 min", slug: "build-a-sales-outreach-agent-with-n8n", price: 19 },
  { title: "Automate Your Hiring Pipeline", description: "From job posting to interview scheduling — let AI handle the repetitive parts of recruitment.", category: "HR", difficulty: "Intermediate", readTime: "28 min", slug: "automate-your-hiring-pipeline", price: 14 },
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const difficultyColors: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};


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
              style={{ color: link.href === "/guides" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/guides" ? "#FFD700" : "var(--text-dim)")}
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
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
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
        <span className="font-bold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></span>
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

export default function GuidesPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? guides : guides.filter(g => g.difficulty === filter);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,215,0,0.3)" }}>Free Guides</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>Build Your Own<br /><span style={{ color: "var(--yellow)" }}>OpenClaw Agents</span></h1>
            <p className="text-lg" style={{ color: "var(--text-dim)" }}>Step-by-step guides for business owners who want to build powerful OpenClaw agents without needing a technical team.</p>
            <div className="mt-6">
              <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, display: "inline-block", transform: "rotate(-1deg)" }}>
                🏷️ One-time purchase — yours forever
              </span>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 border-b" style={{ borderColor: "var(--nav-border)" }}>
          <div className="max-w-6xl mx-auto flex items-center gap-3 flex-wrap">
            <span style={{ border: "2px dashed #F97316", color: "#F97316", background: "rgba(249,115,22,0.08)", borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 700, display: "inline-block", transform: "rotate(-1deg)" }}>
              🏷️ New guides added monthly
            </span>
            {difficulties.map(d => (
              <button key={d} onClick={() => setFilter(d)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ backgroundColor: filter === d ? "var(--yellow)" : "var(--card)", color: filter === d ? "#0A0A0A" : "var(--text-dim)", border: "1px solid var(--border)" }}>
                {d}
              </button>
            ))}
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((guide, i) => (
              <div key={i} className="rounded-xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)" }}>{guide.category}</span>
                  <span className="text-xs font-semibold" style={{ color: difficultyColors[guide.difficulty] }}>{guide.difficulty}</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">{guide.title}</h3>
                <p className="text-sm flex-1" style={{ color: "var(--text-dim)" }}>{guide.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs" style={{ color: "var(--text-dim)" }}>📖 {guide.readTime} read</span>
                  <span className="text-sm font-bold" style={{ color: "var(--yellow)" }}>${guide.price} one-time</span>
                </div>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="mt-2 py-2 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200"
                  style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
                >
                  Buy Guide ${guide.price} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Want Us to Do It For You?</h2>
            <p className="mb-8" style={{ color: "var(--text-dim)" }}>Skip the learning curve. Our team builds and runs your entire AI workforce — you just get the results.</p>
            <Link href="/done-for-you" className="px-8 py-4 rounded-xl font-bold text-black inline-block" style={{ backgroundColor: "var(--yellow)" }}>See Done-For-You Plans →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
