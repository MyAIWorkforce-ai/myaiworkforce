"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link';

// ─── Icons ────────────────────────────────────────────────────────────────────
// Using basic SVGs for demonstration. In a real app, prefer a library like Lucide.
function IconMenu() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>; }
function IconX() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>; }
function IconSun() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>; }
function IconMoon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }
function IconSearch() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>; }


// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;
  
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

// ─── Shared Nav & Footer ──────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Guides", href: "/#guides" },
    { label: "Done-For-You", href: "/#doneforyou" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-[--yellow] tracking-tighter">MyAIWorkforce</Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[--yellow] text-black">
            Book a Free Call
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-zinc-600 dark:text-zinc-400 p-1">
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2 bg-[--yellow] text-black">
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
    const links = [
        { label: "Marketplace", href: "/marketplace" },
        { label: "Guides", href: "/#guides" },
        { label: "Done-For-You", href: "/#doneforyou" },
        { label: "Contact", href: "/#contact" },
      ];
    
      return (
        <footer className="py-12 px-6 border-t border-gray-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="text-xl font-bold text-[--yellow] mb-1">MyAIWorkforce</div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">AI-powered business automation.</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} MyAIWorkforce. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      );
}

// ─── Agent Data (unchanged) ───────────────────────────────────────────────────
type Category = "All"|"Sales"|"Marketing"|"Operations"|"Customer Support"|"Finance"|"HR"|"Content"|"Research";
interface Agent { id: number; name: string; category: Exclude<Category, "All">; description: string; tags: string[]; rating: number; reviews: number; price: string; }
const CATEGORY_COLORS: Record<Exclude<Category, "All">, string> = {
  Sales: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
  Marketing: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400",
  Operations: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
  "Customer Support": "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
  Finance: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400",
  HR: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
  Content: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
  Research: "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400",
};
const AGENTS: Agent[] = [ { id: 1, name: "Lead Qualifier", category: "Sales", description: "Automatically scores and qualifies inbound leads based on your ICP criteria, so your sales team focuses only on high-value prospects.", tags: ["HubSpot", "Salesforce", "Lead Scoring"], rating: 5, reviews: 214, price: "$29/mo", }, { id: 2, name: "Cold Outreach Agent", category: "Sales", description: "Researches prospects and drafts hyper-personalised cold emails at scale. Integrates with your outbox for one-click send.", tags: ["Gmail", "LinkedIn", "Personalization"], rating: 4, reviews: 187, price: "$49/mo", }, { id: 3, name: "CRM Updater", category: "Sales", description: "Listens to call recordings and emails, then automatically updates your CRM with deal stage, notes, and next actions — no manual entry.", tags: ["Salesforce", "Pipedrive", "Automation"], rating: 5, reviews: 302, price: "$39/mo", }, { id: 4, name: "Follow-up Agent", category: "Sales", description: "Tracks open deals and sends timely, context-aware follow-up messages to keep prospects warm without clogging your calendar.", tags: ["Gmail", "Sequences", "24/7"], rating: 4, reviews: 156, price: "$19/mo", }, { id: 5, name: "Social Media Scheduler", category: "Marketing", description: "Plans, writes, and schedules posts across LinkedIn, Twitter, and Instagram using your brand voice and content calendar.", tags: ["LinkedIn", "Twitter", "Instagram"], rating: 5, reviews: 389, price: "$29/mo", }, { id: 6, name: "SEO Audit Agent", category: "Marketing", description: "Crawls your site weekly, identifies SEO gaps, and delivers a prioritised action list with suggested fixes and content ideas.", tags: ["SEO", "Content", "Weekly Reports"], rating: 4, reviews: 143, price: "$39/mo", }, { id: 7, name: "Content Repurposer", category: "Marketing", description: "Takes one long-form piece — blog, podcast, or video — and repurposes it into threads, shorts, newsletters, and social snippets.", tags: ["Blog", "Podcast", "Multi-channel"], rating: 5, reviews: 271, price: "$25/mo", }, { id: 8, name: "Email Campaign Agent", category: "Marketing", description: "Designs, writes, and sends segmented email campaigns. Monitors open rates and auto-adjusts subject lines using A/B logic.", tags: ["Mailchimp", "Klaviyo", "A/B Testing"], rating: 4, reviews: 198, price: "$45/mo", }, { id: 9, name: "Invoice Processor", category: "Operations", description: "Reads incoming invoices from email or Drive, extracts line items, matches to POs, and queues for approval — all hands-free.", tags: ["Google Drive", "Xero", "QuickBooks"], rating: 5, reviews: 412, price: "Free", }, { id: 10, name: "Expense Reporter", category: "Operations", description: "Employees snap receipts, the agent categorises, codes, and compiles expense reports ready for manager approval in minutes.", tags: ["Receipts", "Slack", "Automation"], rating: 4, reviews: 176, price: "$19/mo", }, { id: 11, name: "Meeting Summariser", category: "Operations", description: "Joins your Zoom or Teams calls, transcribes the discussion, and delivers structured summaries with action items to every attendee.", tags: ["Zoom", "Teams", "Action Items"], rating: 5, reviews: 634, price: "$29/mo", }, { id: 12, name: "Data Entry Agent", category: "Operations", description: "Extracts structured data from PDFs, forms, and emails and populates your spreadsheets or databases with zero copy-paste errors.", tags: ["Google Sheets", "Airtable", "PDF"], rating: 4, reviews: 229, price: "From $15", }, { id: 13, name: "Inbound Triage Agent", category: "Customer Support", description: "Reads every incoming support ticket, classifies by urgency and topic, and routes to the right team member instantly — 24/7.", tags: ["Zendesk", "Intercom", "24/7"], rating: 5, reviews: 508, price: "$49/mo", }, { id: 14, name: "Review Responder", category: "Customer Support", description: "Monitors Google, Trustpilot, and G2 for new reviews and drafts on-brand, personalised responses for your approval queue.", tags: ["Google", "Trustpilot", "Brand Voice"], rating: 4, reviews: 184, price: "$25/mo", }, { id: 15, name: "Support Ticket Router", category: "Customer Support", description: "Intelligently classifies and routes support tickets to the correct team or agent based on topic, sentiment, and SLA requirements.", tags: ["Zendesk", "Freshdesk", "SLA"], rating: 5, reviews: 321, price: "$35/mo", }, { id: 16, name: "FAQ Bot", category: "Customer Support", description: "Trains on your documentation and instantly answers customer questions via chat, deflecting up to 70% of tier-1 support volume.", tags: ["Chat", "Docs", "Deflection"], rating: 4, reviews: 453, price: "Free", }, { id: 17, name: "Receipt Scanner", category: "Finance", description: "Scans and parses receipts from email or photos, extracts merchant, amount, and date, and logs to your accounting software automatically.", tags: ["Xero", "QuickBooks", "OCR"], rating: 5, reviews: 267, price: "Free", }, { id: 18, name: "Financial Reporter", category: "Finance", description: "Pulls data from your accounting tool and generates clear P&L, cash flow, and runway reports on a schedule you define.", tags: ["Xero", "Reports", "Weekly"], rating: 4, reviews: 139, price: "$45/mo", }, { id: 19, name: "Quote Comparator", category: "Finance", description: "Receives supplier quotes, normalises line items across formats, and produces a side-by-side comparison to support purchase decisions.", tags: ["Email", "Procurement", "Analysis"], rating: 4, reviews: 92, price: "$29/mo", }, { id: 20, name: "Onboarding Assistant", category: "HR", description: "Guides new hires through their first 30 days — sends documents, books intros, tracks tasks, and answers HR questions on-demand.", tags: ["Slack", "Notion", "Onboarding"], rating: 5, reviews: 203, price: "$39/mo", }, { id: 21, name: "Job Description Writer", category: "HR", description: "Turns a brief role summary into a polished, inclusive job description optimised for search and aligned to your employer brand.", tags: ["LinkedIn", "Indeed", "Inclusive Language"], rating: 4, reviews: 118, price: "From $10", }, { id: 22, name: "Blog Writer Agent", category: "Content", description: "Researches topics, outlines, and writes SEO-optimised blog posts in your brand voice. Delivers drafts ready for a quick human review.", tags: ["SEO", "WordPress", "Brand Voice"], rating: 5, reviews: 347, price: "$59/mo", }, { id: 23, name: "Video Script Agent", category: "Content", description: "Writes engaging YouTube and short-form video scripts complete with hooks, talking points, and calls to action tailored to your niche.", tags: ["YouTube", "TikTok", "Shorts"], rating: 4, reviews: 164, price: "$35/mo", }, { id: 24, name: "Competitor Monitor", category: "Research", description: "Tracks competitor websites, social channels, and pricing pages for changes and delivers a weekly intelligence digest to your inbox.", tags: ["Monitoring", "Weekly", "Intelligence"], rating: 5, reviews: 221, price: "$49/mo", }, { id: 25, name: "Market Research Agent", category: "Research", description: "Scours the web for industry trends, news, and data points on a topic of your choice, then produces a structured research brief.", tags: ["Trends", "Reports", "Industry"], rating: 4, reviews: 97, price: "$39/mo", },];
const CATEGORIES: Category[] = ["All", "Sales", "Marketing", "Operations", "Customer Support", "Finance", "HR", "Content", "Research"];
const SORT_OPTIONS = ["Featured", "Newest", "Popular"] as const;
type SortOption = typeof SORT_OPTIONS[number];

// ─── Reusable Components ──────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-300 dark:text-zinc-600"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.25 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[agent.category]}`}>{agent.category}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 leading-tight">{agent.name}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-1">{agent.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-md font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">{tag}</span>
        ))}
      </div>
      <div className="flex items-center gap-2 mb-4">
        <StarRating rating={agent.rating} />
        <span className="text-xs text-zinc-500">({agent.reviews})</span>
      </div>
      <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800/50">
        <span className="text-base font-bold">{agent.price}</span>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[--yellow] text-black whitespace-nowrap">
          Get Agent →
        </button>
      </div>
    </div>
  );
}

// ─── Marketplace Page ─────────────────────────────────────────────────────────

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sort, setSort] = useState<SortOption>("Featured");

  const filteredAgents = AGENTS.filter(agent => 
    (activeCategory === "All" || agent.category === activeCategory) &&
    (search === "" || agent.name.toLowerCase().includes(search.toLowerCase()) || agent.description.toLowerCase().includes(search.toLowerCase()))
  ).sort((a, b) => {
    if (sort === "Popular") return b.reviews - a.reviews;
    if (sort === "Newest") return b.id - a.id;
    return 0; // Featured
  });

  return (
    <main className="bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Nav />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter">AI Agent <span className="text-[--yellow]">Marketplace</span></h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-zinc-600 dark:text-zinc-400">Browse {AGENTS.length}+ ready-made AI agents. Deploy in minutes, no code required.</p>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"><IconSearch /></div>
              <input
                type="text"
                placeholder="Search agents, categories, tools…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:bg-white dark:focus:bg-black focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 z-40 px-6 py-3 bg-white/80 dark:bg-black/70 backdrop-blur-lg border-y border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeCategory === cat ? 'bg-[--yellow] text-black' : 'bg-gray-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-medium text-zinc-500">Sort by:</span>
            <div className="flex gap-1 p-1 rounded-lg bg-gray-100 dark:bg-zinc-800">
              {SORT_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setSort(opt)} className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${sort === opt ? 'bg-white dark:bg-zinc-700 shadow text-black dark:text-white' : 'text-zinc-500 hover:text-black dark:hover:text-white'}`}>
                    {opt}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Agent Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
            <p className="text-sm text-zinc-500 mb-6">{filteredAgents.length} agent{filteredAgents.length !== 1 && 's'} found</p>
            {filteredAgents.length === 0 ? (
                <div className="text-center py-24 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl">
                    <p className="text-4xl mb-4">🤖</p>
                    <p className="text-lg font-semibold mb-1">No agents found</p>
                    <p className="text-sm text-zinc-500">Try a different search or filter.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAgents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
                </div>
            )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/50 border-t border-gray-200 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter">Can't find what you need?<br/><span className="text-[--yellow]">We'll build it for you.</span></h2>
              <p className="text-lg mb-10 max-w-lg mx-auto text-zinc-600 dark:text-zinc-400">Tell us what you want to automate and we'll scope, build, and run a custom AI agent for your exact workflow.</p>
              <a href="/#contact" className="inline-block px-10 py-4 rounded-xl text-base font-bold bg-[--yellow] text-black">
                  Book a Free Consultation
              </a>
          </div>
      </section>

      <Footer />
    </main>
  );
}
