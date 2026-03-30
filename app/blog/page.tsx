"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";


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
              style={{ color: link.href === "/blog" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/blog" ? "#FFD700" : "var(--text-dim)")}
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

const posts = [
  { title: "The 5 AI Agents Every Business Needs in 2026", excerpt: "From email triage to lead generation, these five agents will transform how your business operates — and most can be deployed in under an hour.", category: "Strategy", date: "Mar 27, 2026", featured: true },
  { title: "How We Saved a Client 40 Hours a Week with One AI Agent", excerpt: "A real case study from a 12-person e-commerce brand that automated their entire customer support function.", category: "Case Study", date: "Mar 25, 2026" },
  { title: "OpenClaw vs ChatGPT: Which is Right for Your Business?", excerpt: "Both are powerful. But they solve very different problems. Here's how to choose.", category: "Comparison", date: "Mar 22, 2026" },
  { title: "The Real Cost of Not Automating in 2026", excerpt: "Every hour your team spends on repetitive tasks is an hour not spent on growth. The math is brutal — and it's only getting worse.", category: "Strategy", date: "Mar 20, 2026" },
  { title: "Building in Public: How We Built myaiworkforce.ai in 48 Hours", excerpt: "A behind-the-scenes look at how we went from idea to live product using AI agents to do most of the heavy lifting.", category: "Behind the Scenes", date: "Mar 18, 2026" },
  { title: "Top 10 AI Agents for E-commerce Businesses", excerpt: "From abandoned cart recovery to inventory management — the agents that are generating real ROI for online stores.", category: "Listicle", date: "Mar 15, 2026" },
  { title: "Why Your Customer Support Should Be 80% Automated", excerpt: "Most customer queries are repetitive. Here's why handling them with AI isn't just efficient — it's better for your customers.", category: "Operations", date: "Mar 12, 2026" },
  { title: "The Beginner's Guide to AI Agents", excerpt: "Everything you need to know about AI agents — what they are, how they work, and how to deploy your first one today.", category: "Beginner", date: "Mar 10, 2026" },
  { title: "Case Study: 3x Revenue Growth with AI Automation", excerpt: "How a solo consultant tripled their revenue in 6 months by deploying AI agents across their entire sales and marketing stack.", category: "Case Study", date: "Mar 7, 2026" },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>The <span style={{ color: "var(--yellow)" }}>AI Workforce</span> Blog</h1>
            <p style={{ color: "var(--text-dim)" }}>Practical insights on AI automation for business owners who want results, not theory.</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <div className="rounded-2xl p-10 mb-12" style={{ backgroundColor: "var(--card)", border: "2px solid var(--yellow)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>FEATURED</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)" }}>{featured.category}</span>
                <span className="text-xs" style={{ color: "var(--text-dim)" }}>{featured.date}</span>
              </div>
              <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.02em" }}>{featured.title}</h2>
              <p className="text-lg mb-6" style={{ color: "var(--text-dim)" }}>{featured.excerpt}</p>
              <a href="/blog" className="font-semibold" style={{ color: "var(--yellow)" }}>Read Article →</a>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <div key={i} className="rounded-xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)" }}>{post.category}</span>
                    <span className="text-xs" style={{ color: "var(--text-dim)" }}>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug flex-1">{post.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{post.excerpt}</p>
                  <a href="/blog" className="text-sm font-semibold" style={{ color: "var(--yellow)" }}>Read More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6" style={{ backgroundColor: "var(--bg-section)" }}>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Get Weekly AI Tips</h2>
            <p className="mb-6 text-sm" style={{ color: "var(--text-dim)" }}>One practical AI automation tip every week. No fluff, no hype. Unsubscribe anytime.</p>
            {subscribed ? (
              <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid #22c55e" }}>
                <p className="font-semibold" style={{ color: "#22c55e" }}>🎉 You&apos;re subscribed! Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-3">
                <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />
                <button type="submit" className="px-6 py-3 rounded-lg font-semibold text-sm text-black" style={{ backgroundColor: "var(--yellow)" }}>Subscribe</button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
