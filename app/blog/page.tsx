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

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Operations:    { bg: "rgba(99,179,237,0.12)", text: "#63B3ED" },
  Finance:       { bg: "rgba(246,173,85,0.12)", text: "#F6AD55" },
  Technology:    { bg: "rgba(183,148,246,0.12)", text: "#B794F6" },
  "Case Study":  { bg: "rgba(104,211,145,0.12)", text: "#68D391" },
  Security:      { bg: "rgba(230,57,70,0.12)", text: "#E63946" },
  Strategy:      { bg: "rgba(255,215,0,0.12)", text: "#FFD700" },
};

const posts = [
  {
    title: "Why Your Business Needs an AI Workforce in 2025",
    slug: "why-your-business-needs-an-ai-workforce-in-2025",
    category: "Operations",
    excerpt: "The businesses pulling ahead right now aren't bigger or better funded — they're more automated. Here's the case for building your AI workforce before your competitors do.",
    readTime: "5 min read",
    date: "Mar 28, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imageAlt: "AI workforce automation concept",
  },
  {
    title: "The Hidden Cost of Manual Data Entry (And How AI Fixes It)",
    slug: "the-hidden-cost-of-manual-data-entry",
    category: "Finance",
    excerpt: "You think data entry costs you an hour a day. It actually costs you 30% of your team's cognitive capacity. Here's what the research says — and how AI eliminates it entirely.",
    readTime: "4 min read",
    date: "Mar 25, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Data entry and finance automation",
  },
  {
    title: "OpenClaw vs n8n vs Make: Which AI Agent Platform Is Right for You?",
    slug: "openclaw-vs-n8n-vs-make",
    category: "Technology",
    excerpt: "Three platforms, three very different philosophies. If you're building serious AI automation infrastructure, this comparison will save you months of wrong turns.",
    readTime: "8 min read",
    date: "Mar 22, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Technology platform comparison",
  },
  {
    title: "How We Cut a Client's Support Volume by 70% in 30 Days",
    slug: "how-we-cut-support-volume-by-70-percent",
    category: "Case Study",
    excerpt: "A real breakdown of how we deployed a customer support AI agent for a 40-person SaaS company, the hurdles we hit, and the exact results by week.",
    readTime: "6 min read",
    date: "Mar 19, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Business case study team results",
  },
  {
    title: "Security First: Why We Deploy AI Agents on Private VPS",
    slug: "security-first-why-we-deploy-on-private-vps",
    category: "Security",
    excerpt: "Most AI tools process your data on shared servers. Here's why we think that's a serious risk — and why every client gets their own dedicated, private deployment.",
    readTime: "5 min read",
    date: "Mar 16, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Cybersecurity and data protection",
  },
  {
    title: "The Complete Guide to AI Agent ROI",
    slug: "the-complete-guide-to-ai-agent-roi",
    category: "Strategy",
    excerpt: "How do you actually measure the return on your AI investment? We break down the framework we use with every client — from hours saved to revenue generated.",
    readTime: "7 min read",
    date: "Mar 13, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop",
    imageAlt: "ROI and financial returns chart",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav active="Blog" />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              The AI Workforce Blog
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
              Insights for the<br /><span style={{ color: "#FFD700" }}>AI-Powered Business</span>
            </h1>
            <p style={{ color: "var(--muted)" }}>
              Practical guides, case studies, and deep dives on AI automation for business owners who want results, not theory.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
            <div className="rounded-2xl mb-12 overflow-hidden" style={{ backgroundColor: "var(--card)", border: "2px solid #FFD700" }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))" }} />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>FEATURED</span>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: CATEGORY_COLORS[featured.category]?.bg, color: CATEGORY_COLORS[featured.category]?.text }}>
                    {featured.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{featured.readTime}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{featured.date}</span>
                </div>
                <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>{featured.title}</h2>
                <p className="text-lg mb-6 max-w-3xl" style={{ color: "var(--muted)" }}>{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="font-semibold" style={{ color: "#FFD700" }}>Read Article →</Link>
              </div>
            </div>

            {/* Latest Posts label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#F97316" }}></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "#F97316" }}></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#F97316" }}>Latest Posts</span>
            </div>
            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => {
                const colors = CATEGORY_COLORS[post.category] ?? { bg: "rgba(255,215,0,0.1)", text: "#FFD700" };
                return (
                  <div key={i} className="rounded-xl flex flex-col card-hover overflow-hidden" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      style={{ width: "100%", height: 200, objectFit: "cover" }}
                    />
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: colors.bg, color: colors.text }}>
                          {post.category}
                        </span>
                        <span className="text-xs" style={{ color: "var(--muted)" }}>{post.readTime}</span>
                        <span className="text-xs" style={{ color: "var(--muted)" }}>{post.date}</span>
                      </div>
                      <h3 className="font-bold text-lg leading-snug flex-1">{post.title}</h3>
                      <p className="text-sm" style={{ color: "var(--muted)", lineHeight: "1.6" }}>{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="text-sm font-semibold" style={{ color: "#FFD700" }}>Read Article →</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-xl mx-auto text-center">
            <div className="text-5xl mb-4">✉️</div>
            <h2 className="text-2xl font-bold mb-3">Get Weekly AI Tips</h2>
            <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>One practical AI automation insight every week. No fluff, no hype. Unsubscribe any time.</p>
            {subscribed ? (
              <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid #22c55e" }}>
                <p className="font-semibold" style={{ color: "#22c55e" }}>🎉 You&apos;re subscribed! Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-3">
                <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />
                <button type="submit" className="px-6 py-3 rounded-lg font-semibold text-sm text-black" style={{ backgroundColor: "#FFD700" }}>Subscribe</button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
