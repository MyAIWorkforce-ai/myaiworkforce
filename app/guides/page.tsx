"use client";
import { useState } from "react";
import Link from "next/link";

const guides = [
  { title: "How to Set Up Your First AI Email Agent", description: "Learn how to configure an AI agent to triage, respond, and organise your inbox — saving you hours every week.", category: "Operations", difficulty: "Beginner", readTime: "15 min", slug: "#" },
  { title: "Automate Your Customer Support in 3 Steps", description: "Deploy an AI agent that handles inbound queries, resolves common issues, and escalates to humans when needed.", category: "Customer Support", difficulty: "Beginner", readTime: "20 min", slug: "#" },
  { title: "Build a Lead Generation Agent from Scratch", description: "Create an agent that finds, qualifies, and reaches out to potential leads — all on autopilot.", category: "Sales", difficulty: "Intermediate", readTime: "25 min", slug: "#" },
  { title: "Create a Social Media Scheduling Agent", description: "Build a workflow that drafts, schedules, and posts content across all your platforms automatically.", category: "Marketing", difficulty: "Beginner", readTime: "18 min", slug: "#" },
  { title: "Set Up an Invoice Processing Workflow", description: "Automate the extraction, validation, and filing of invoices using AI — no more manual data entry.", category: "Finance", difficulty: "Intermediate", readTime: "22 min", slug: "#" },
  { title: "Build a Market Research Agent", description: "Configure an agent to monitor competitors, track industry trends, and deliver daily intelligence briefs.", category: "Research", difficulty: "Advanced", readTime: "30 min", slug: "#" },
  { title: "The OpenClaw Quick-Start Guide", description: "Get your first OpenClaw agent up and running in under 30 minutes. No code required.", category: "Operations", difficulty: "Beginner", readTime: "12 min", slug: "#" },
  { title: "Build a Sales Outreach Agent with n8n", description: "Use n8n workflows to automate personalised cold outreach at scale.", category: "Sales", difficulty: "Advanced", readTime: "35 min", slug: "#" },
  { title: "Automate Your Hiring Pipeline", description: "From job posting to interview scheduling — let AI handle the repetitive parts of recruitment.", category: "HR", difficulty: "Intermediate", readTime: "28 min", slug: "#" },
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const difficultyColors: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>My AI Workforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--yellow)" }}>Guides</Link>
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
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em" }}>Build Your Own<br /><span style={{ color: "var(--yellow)" }}>AI Workforce</span></h1>
            <p className="text-lg" style={{ color: "var(--text-dim)" }}>Step-by-step guides for business owners who want to automate without needing a technical team.</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 border-b" style={{ borderColor: "var(--nav-border)" }}>
          <div className="max-w-6xl mx-auto flex gap-3 flex-wrap">
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
                  <Link href={guide.slug} className="text-sm font-semibold" style={{ color: "var(--yellow)" }}>Read Guide →</Link>
                </div>
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
