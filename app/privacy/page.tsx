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
              style={{ color: link.href === "/privacy" ? "#FFD700" : "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.href === "/privacy" ? "#FFD700" : "var(--text-dim)")}
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

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-dim)" }}>Last updated: March 2026</p>

        {[
          { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes your name, email address, payment information, and any other information you choose to provide. We also collect information automatically when you use our platform, including usage data, log data, and cookies." },
          { title: "2. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and send you marketing communications (with your consent)." },
          { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you — provided they agree to keep this information confidential." },
          { title: "4. Data Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." },
          { title: "5. Cookies", content: "We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
          { title: "6. Your Rights", content: "You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, please contact us at monty@myaiworkforce.ai." },
          { title: "7. Children's Privacy", content: "Our platform is not directed to children under 13. We do not knowingly collect personal information from children under 13." },
          { title: "8. Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the date above." },
          { title: "9. Contact Us", content: "If you have any questions about this privacy policy, please contact us at monty@myaiworkforce.ai." },
        ].map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>{section.content}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--nav-border)" }}>
          <Link href="/terms" style={{ color: "var(--yellow)" }}>View Terms of Service →</Link>
        </div>
      </main>
    </div>
  );
}
