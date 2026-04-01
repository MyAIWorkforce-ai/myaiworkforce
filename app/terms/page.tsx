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
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: link.href === "/terms" ? "#FFD700" : "var(--text-dim)" }}
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

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-dim)" }}>Last updated: March 2026</p>

        {[
          { title: "1. Acceptance of Terms", content: "By accessing and using myaiworkforce.ai, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform." },
          { title: "2. Use of the Platform", content: "You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to use the platform in any way that violates applicable laws, infringes on intellectual property rights, or harms other users." },
          { title: "3. Account Registration", content: "To access certain features, you must register for an account. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account." },
          { title: "4. Marketplace Transactions", content: "When purchasing listings from the marketplace, you agree to pay the listed price. Creator payouts are processed at 75% of the sale price. MyAIWorkforce retains 25% as a platform fee. All sales are final unless otherwise stated." },
          { title: "5. Creator Responsibilities", content: "If you sell listings on our marketplace, you represent that you have the right to sell such content, that it does not infringe on any third-party rights, and that it is accurately described. You are responsible for any taxes applicable to your earnings." },
          { title: "6. Intellectual Property", content: "The MyAIWorkforce platform, including its design, logo, and content, is owned by MyAIWorkforce and protected by intellectual property laws. Listings sold by creators remain the intellectual property of the creator, subject to the licence granted to buyers." },
          { title: "7. Disclaimers", content: "Our platform is provided 'as is' without warranties of any kind. We do not guarantee that AI agents or tools purchased will achieve specific results. Results may vary based on your implementation and use case." },
          { title: "8. Limitation of Liability", content: "To the fullest extent permitted by law, MyAIWorkforce shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform." },
          { title: "9. Termination", content: "We reserve the right to terminate or suspend your account at any time for violations of these Terms. You may also delete your account at any time by contacting us." },
          { title: "10. Changes to Terms", content: "We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new Terms." },
          { title: "11. Governing Law", content: "These Terms are governed by the laws of Australia. Any disputes will be resolved in the courts of Australia." },
          { title: "12. Contact", content: "For questions about these Terms, contact us at monty@myaiworkforce.ai." },
        ].map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>{section.content}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--nav-border)" }}>
          <Link href="/privacy" style={{ color: "var(--yellow)" }}>View Privacy Policy →</Link>
        </div>
      </main>
    </div>
  );
}
