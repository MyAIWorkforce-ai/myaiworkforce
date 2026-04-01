"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// ─── Icons ────────────────────────────────────────────────────────────────────

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

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

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

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--nav-border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
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
              className="text-sm font-medium transition-colors duration-200 nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://calendar.app.google/cEdmSQvEZ66hj4dy7"
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

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 px-6 section-divider" style={{ backgroundColor: "var(--bg)" }}>
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
              { label: "Dashboard", href: "/dashboard" },
              { label: "Sell Your Agents", href: "/creator/agents" },
              { label: "Sell Your Skills", href: "/creator/skills" },
              { label: "Contact", href: "/contact" },
              { label: "Invest with Us", href: "/invest" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "var(--yellow)" : "var(--muted)", fontWeight: ["Invest with Us", "Sell Your Agents"].includes(link.label) ? "600" : "normal" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--footer-border)" }}>
          <p className="text-sm" style={{ color: "var(--text-dimmer)" }}>
            © {new Date().getFullYear()} My AI Workforce. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Security", href: "/security" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "var(--text-dimmer)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Agent Data ───────────────────────────────────────────────────────────────

type Category = "All" | "Sales" | "Marketing" | "Operations" | "Customer Support" | "Finance" | "HR" | "Content" | "Research";

interface Agent {
  id: number;
  name: string;
  slug: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: string;
}

const CATEGORY_COLORS: Record<Exclude<Category, "All">, { bg: string; text: string }> = {
  Sales:            { bg: "rgba(230,57,70,0.12)",   text: "#E63946" },
  Marketing:        { bg: "rgba(255,215,0,0.12)",   text: "#FFD700" },
  Operations:       { bg: "rgba(99,179,237,0.12)",  text: "#63B3ED" },
  "Customer Support": { bg: "rgba(104,211,145,0.12)", text: "#68D391" },
  Finance:          { bg: "rgba(246,173,85,0.12)",  text: "#F6AD55" },
  HR:               { bg: "rgba(183,148,246,0.12)", text: "#B794F6" },
  Content:          { bg: "rgba(237,137,54,0.12)",  text: "#ED8936" },
  Research:         { bg: "rgba(118,169,250,0.12)", text: "#76A9FA" },
};

const AGENTS: Agent[] = [
  // Sales
  {
    id: 1,
    name: "Lead Qualifier",
    slug: "lead-qualifier",
    category: "Sales",
    description: "Automatically scores and qualifies inbound leads based on your ICP criteria, so your sales team focuses only on high-value prospects.",
    tags: ["HubSpot", "Salesforce", "Lead Scoring"],
    rating: 5,
    reviews: 214,
    price: "$29/mo",
  },
  {
    id: 2,
    name: "Cold Outreach Agent",
    slug: "cold-outreach-agent",
    category: "Sales",
    description: "Researches prospects and drafts hyper-personalised cold emails at scale. Integrates with your outbox for one-click send.",
    tags: ["Gmail", "LinkedIn", "Personalization"],
    rating: 4,
    reviews: 187,
    price: "$49/mo",
  },
  {
    id: 3,
    name: "CRM Updater",
    slug: "crm-updater",
    category: "Sales",
    description: "Listens to call recordings and emails, then automatically updates your CRM with deal stage, notes, and next actions — no manual entry.",
    tags: ["Salesforce", "Pipedrive", "Automation"],
    rating: 5,
    reviews: 302,
    price: "$39/mo",
  },
  {
    id: 4,
    name: "Follow-up Agent",
    slug: "follow-up-agent",
    category: "Sales",
    description: "Tracks open deals and sends timely, context-aware follow-up messages to keep prospects warm without clogging your calendar.",
    tags: ["Gmail", "Sequences", "24/7"],
    rating: 4,
    reviews: 156,
    price: "$19/mo",
  },
  // Marketing
  {
    id: 5,
    name: "Social Media Scheduler",
    slug: "social-media-scheduler",
    category: "Marketing",
    description: "Plans, writes, and schedules posts across LinkedIn, Twitter, and Instagram using your brand voice and content calendar.",
    tags: ["LinkedIn", "Twitter", "Instagram"],
    rating: 5,
    reviews: 389,
    price: "$29/mo",
  },
  {
    id: 6,
    name: "SEO Audit Agent",
    slug: "seo-audit-agent",
    category: "Marketing",
    description: "Crawls your site weekly, identifies SEO gaps, and delivers a prioritised action list with suggested fixes and content ideas.",
    tags: ["SEO", "Content", "Weekly Reports"],
    rating: 4,
    reviews: 143,
    price: "$39/mo",
  },
  {
    id: 7,
    name: "Content Repurposer",
    slug: "content-repurposer",
    category: "Marketing",
    description: "Takes one long-form piece — blog, podcast, or video — and repurposes it into threads, shorts, newsletters, and social snippets.",
    tags: ["Blog", "Podcast", "Multi-channel"],
    rating: 5,
    reviews: 271,
    price: "$25/mo",
  },
  {
    id: 8,
    name: "Email Campaign Agent",
    slug: "email-campaign-agent",
    category: "Marketing",
    description: "Designs, writes, and sends segmented email campaigns. Monitors open rates and auto-adjusts subject lines using A/B logic.",
    tags: ["Mailchimp", "Klaviyo", "A/B Testing"],
    rating: 4,
    reviews: 198,
    price: "$45/mo",
  },
  // Operations
  {
    id: 9,
    name: "Invoice Processor",
    slug: "invoice-processor",
    category: "Operations",
    description: "Reads incoming invoices from email or Drive, extracts line items, matches to POs, and queues for approval — all hands-free.",
    tags: ["Google Drive", "Xero", "QuickBooks"],
    rating: 5,
    reviews: 412,
    price: "Free",
  },
  {
    id: 10,
    name: "Expense Reporter",
    slug: "expense-reporter",
    category: "Operations",
    description: "Employees snap receipts, the agent categorises, codes, and compiles expense reports ready for manager approval in minutes.",
    tags: ["Receipts", "Slack", "Automation"],
    rating: 4,
    reviews: 176,
    price: "$19/mo",
  },
  {
    id: 11,
    name: "Meeting Summariser",
    slug: "meeting-summariser",
    category: "Operations",
    description: "Joins your Zoom or Teams calls, transcribes the discussion, and delivers structured summaries with action items to every attendee.",
    tags: ["Zoom", "Teams", "Action Items"],
    rating: 5,
    reviews: 634,
    price: "$29/mo",
  },
  {
    id: 12,
    name: "Data Entry Agent",
    slug: "data-entry-agent",
    category: "Operations",
    description: "Extracts structured data from PDFs, forms, and emails and populates your spreadsheets or databases with zero copy-paste errors.",
    tags: ["Google Sheets", "Airtable", "PDF"],
    rating: 4,
    reviews: 229,
    price: "From $15",
  },
  // Customer Support
  {
    id: 13,
    name: "Inbound Triage Agent",
    slug: "inbound-triage-agent",
    category: "Customer Support",
    description: "Reads every incoming support ticket, classifies by urgency and topic, and routes to the right team member instantly — 24/7.",
    tags: ["Zendesk", "Intercom", "24/7"],
    rating: 5,
    reviews: 508,
    price: "$49/mo",
  },
  {
    id: 14,
    name: "Review Responder",
    slug: "review-responder",
    category: "Customer Support",
    description: "Monitors Google, Trustpilot, and G2 for new reviews and drafts on-brand, personalised responses for your approval queue.",
    tags: ["Google", "Trustpilot", "Brand Voice"],
    rating: 4,
    reviews: 184,
    price: "$25/mo",
  },
  {
    id: 15,
    name: "Support Ticket Router",
    slug: "support-ticket-router",
    category: "Customer Support",
    description: "Intelligently classifies and routes support tickets to the correct team or agent based on topic, sentiment, and SLA requirements.",
    tags: ["Zendesk", "Freshdesk", "SLA"],
    rating: 5,
    reviews: 321,
    price: "$35/mo",
  },
  {
    id: 16,
    name: "FAQ Bot",
    slug: "faq-bot",
    category: "Customer Support",
    description: "Trains on your documentation and instantly answers customer questions via chat, deflecting up to 70% of tier-1 support volume.",
    tags: ["Chat", "Docs", "Deflection"],
    rating: 4,
    reviews: 453,
    price: "Free",
  },
  // Finance
  {
    id: 17,
    name: "Receipt Scanner",
    slug: "receipt-scanner",
    category: "Finance",
    description: "Scans and parses receipts from email or photos, extracts merchant, amount, and date, and logs to your accounting software automatically.",
    tags: ["Xero", "QuickBooks", "OCR"],
    rating: 5,
    reviews: 267,
    price: "Free",
  },
  {
    id: 18,
    name: "Financial Reporter",
    slug: "financial-reporter",
    category: "Finance",
    description: "Pulls data from your accounting tool and generates clear P&L, cash flow, and runway reports on a schedule you define.",
    tags: ["Xero", "Reports", "Weekly"],
    rating: 4,
    reviews: 139,
    price: "$45/mo",
  },
  {
    id: 19,
    name: "Quote Comparator",
    slug: "quote-comparator",
    category: "Finance",
    description: "Receives supplier quotes, normalises line items across formats, and produces a side-by-side comparison to support purchase decisions.",
    tags: ["Email", "Procurement", "Analysis"],
    rating: 4,
    reviews: 92,
    price: "$29/mo",
  },
  // HR
  {
    id: 20,
    name: "Onboarding Assistant",
    slug: "onboarding-assistant",
    category: "HR",
    description: "Guides new hires through their first 30 days — sends documents, books intros, tracks tasks, and answers HR questions on-demand.",
    tags: ["Slack", "Notion", "Onboarding"],
    rating: 5,
    reviews: 203,
    price: "$39/mo",
  },
  {
    id: 21,
    name: "Job Description Writer",
    slug: "job-description-writer",
    category: "HR",
    description: "Turns a brief role summary into a polished, inclusive job description optimised for search and aligned to your employer brand.",
    tags: ["LinkedIn", "Indeed", "Inclusive Language"],
    rating: 4,
    reviews: 118,
    price: "From $10",
  },
  // Content
  {
    id: 22,
    name: "Blog Writer Agent",
    slug: "blog-writer-agent",
    category: "Content",
    description: "Researches topics, outlines, and writes SEO-optimised blog posts in your brand voice. Delivers drafts ready for a quick human review.",
    tags: ["SEO", "WordPress", "Brand Voice"],
    rating: 5,
    reviews: 347,
    price: "$59/mo",
  },
  {
    id: 23,
    name: "Video Script Agent",
    slug: "video-script-agent",
    category: "Content",
    description: "Writes engaging YouTube and short-form video scripts complete with hooks, talking points, and calls to action tailored to your niche.",
    tags: ["YouTube", "TikTok", "Shorts"],
    rating: 4,
    reviews: 164,
    price: "$35/mo",
  },
  // Research
  {
    id: 24,
    name: "Competitor Monitor",
    slug: "competitor-monitor",
    category: "Research",
    description: "Tracks competitor websites, social channels, and pricing pages for changes and delivers a weekly intelligence digest to your inbox.",
    tags: ["Monitoring", "Weekly", "Intelligence"],
    rating: 5,
    reviews: 221,
    price: "$49/mo",
  },
  {
    id: 25,
    name: "Market Research Agent",
    slug: "market-research-agent",
    category: "Research",
    description: "Scours the web for industry trends, news, and data points on a topic of your choice, then produces a structured research brief.",
    tags: ["Trends", "Reports", "Industry"],
    rating: 4,
    reviews: 97,
    price: "$39/mo",
  },
];

const CATEGORIES: Category[] = [
  "All", "Sales", "Marketing", "Operations", "Customer Support",
  "Finance", "HR", "Content", "Research",
];

const SORT_OPTIONS = ["Featured", "Newest", "Popular"] as const;
type SortOption = typeof SORT_OPTIONS[number];

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= rating ? "#FFD700" : "var(--border)", fontSize: "14px" }}>★</span>
      ))}
    </span>
  );
}

// ─── Agent Card ───────────────────────────────────────────────────────────────

function AgentCard({ agent }: { agent: Agent }) {
  const colors = CATEGORY_COLORS[agent.category];
  return (
    <div
      className="flex flex-col p-6 rounded-2xl border card-hover"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      {/* Category badge */}
      <div className="mb-4">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {agent.category}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: "var(--text)" }}>
        {agent.name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
        {agent.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md font-medium"
            style={{ backgroundColor: "var(--bg)", color: "var(--text-dim)", border: "1px solid var(--border)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rating + reviews */}
      <div className="flex items-center gap-2 mb-4">
        <StarRating rating={agent.rating} />
        <span className="text-xs" style={{ color: "var(--muted)" }}>({agent.reviews})</span>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        <span className="text-base font-bold" style={{ color: "var(--text)" }}>{agent.price}</span>
        <a
          href={`/marketplace/${agent.slug}`}
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 glow-yellow whitespace-nowrap"
          style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
        >
          Get Agent →
        </a>
      </div>
    </div>
  );
}

// ─── Marketplace Page ─────────────────────────────────────────────────────────

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sort, setSort] = useState<SortOption>("Featured");

  const filtered = AGENTS.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sort === "Popular") return b.reviews - a.reviews;
    if (sort === "Newest") return b.id - a.id;
    return a.id - b.id; // Featured = original order
  });

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />

      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--hero-gradient)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.03,
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium border"
            style={{ borderColor: "#FFD700", color: "#FFD700", backgroundColor: "rgba(255,215,0,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#FFD700" }} />
            500+ Ready-made AI Agents
          </div>
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            style={{ letterSpacing: "-0.04em", lineHeight: "1.05", color: "var(--text)" }}
          >
            AI Agent <span style={{ color: "#FFD700" }}>Marketplace</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Browse skill files, workflows, and ready-made agents for OpenClaw, n8n, and more.
          </p>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto">
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--muted)" }}
            >
              <IconSearch />
            </div>
            <input
              type="text"
              placeholder="Search agents, categories, tools…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#FFD700")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>
        </div>
      </section>

      {/* ── Filter Bar (sticky) ── */}
      <div
        className="sticky z-40 px-6 py-3 section-divider"
        style={{ top: 64, backgroundColor: "var(--nav-bg)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--nav-border)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? "#FFD700" : "var(--card)",
                  color: activeCategory === cat ? "#0A0A0A" : "var(--text-dim)",
                  border: `1px solid ${activeCategory === cat ? "#FFD700" : "var(--border)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>Sort:</span>
            <div className="flex gap-1">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSort(opt)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: sort === opt ? "rgba(255,215,0,0.1)" : "transparent",
                    color: sort === opt ? "#FFD700" : "var(--text-dim)",
                    border: `1px solid ${sort === opt ? "#FFD700" : "transparent"}`,
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Agent Grid ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {filtered.length} agent{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl mb-2" style={{ color: "var(--muted)" }}>🤖</p>
              <p className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>No agents found</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-20 px-6 section-divider"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium border"
            style={{ borderColor: "var(--border)", color: "var(--muted)", backgroundColor: "transparent" }}
          >
            Custom Builds Available
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ letterSpacing: "-0.03em", color: "var(--text)" }}
          >
            Can&apos;t find what you need?<br />
            <span style={{ color: "#FFD700" }}>We&apos;ll build it for you.</span>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            Tell us what you want to automate and we&apos;ll scope, build, and run a custom AI agent for your exact workflow.
          </p>
          <a
            href="https://calendar.app.google/cEdmSQvEZ66hj4dy7"
            className="inline-block px-10 py-4 rounded-xl text-base font-bold transition-all duration-200 glow-yellow"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Sell on Marketplace CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}>💰 Earn 75% per sale</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
            Built something great? <span style={{ color: "#FFD700" }}>Sell it here.</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            List your AI agents, SKILL.md files, prompt packs, or workflows. You earn 75% of every sale — we handle payments, hosting, and delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/creator/agents" className="px-8 py-3 rounded-xl font-bold text-sm glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>
              🤖 List Your Agent →
            </a>
            <a href="/creator/skills" className="px-8 py-3 rounded-xl font-bold text-sm" style={{ border: "2px solid #F97316", color: "#F97316" }}>
              🧠 List Your Skill →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
