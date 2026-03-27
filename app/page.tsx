"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// ─── Icons ────────────────────────────────────────────────────────────────────
// NOTE: Icons are simplified for brevity. You'd typically use a library like react-icons.

function IconStore() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>); }
function IconBook() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>); }
function IconRocket() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>); }
function IconMenu() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>); }
function IconX() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>); }
function IconSun() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>); }
function IconMoon() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>); }

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

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
  const links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Guides", href: "#guides" },
    { label: "Done-For-You", href: "#doneforyou" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-[--yellow] tracking-tighter">
          MyAIWorkforce
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[--yellow] text-black">
            Book a Free Call
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-zinc-600 dark:text-zinc-400">
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2 bg-[--yellow] text-black">
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const words = ["customer support", "lead generation", "email triage", "social media", "invoice processing", "client onboarding", "competitor research", "sales outreach"];

  return (
    <section className="pt-40 pb-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
          Build Your <span className="text-[--yellow]">AI Workforce.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
          Automate your business with our marketplace of ready-made AI agents,
          or let us build and run your entire AI workforce for you. Your team for {" "}
          <span className="rotating-word">
            {words.map(word => <span key={word}>{word}</span>)}
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/marketplace" className="px-8 py-4 rounded-xl text-base font-bold bg-[--yellow] text-black">
            Browse the Marketplace →
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl text-base font-bold border-2 border-[--red] text-[--red] hover:bg-[--red] hover:text-white transition-colors">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 border-t border-gray-200 dark:border-zinc-800 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, pretitle }: { title: string, subtitle: string, pretitle: string }) {
  return (
    <div className="text-center mb-16 max-w-2xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-[--yellow] mb-4">
        {pretitle}
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
        {title}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}


// ─── Three Pillars ────────────────────────────────────────────────────────────

function ThreePillars() {
  const pillars = [
    { icon: <IconStore />, title: "Browse", description: "Ready-made AI agents built for real business tasks. Deploy in minutes, no code required.", href: "/marketplace" },
    { icon: <IconBook />, title: "DIY Guides", description: "Step-by-step guides to build your own AI agents. Learn, customise, and own your automation.", href: "#guides" },
    { icon: <IconRocket />, title: "Done-For-You", description: "We build and run your entire AI workforce. From strategy to deployment, fully managed.", href: "#doneforyou" },
  ];

  return (
    <Section id="guides" className="bg-zinc-50 dark:bg-zinc-900/50">
      <SectionHeader
        pretitle="How it works"
        title="Three ways to automate"
        subtitle="Choose the path that fits where you are right now."
      />
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {pillars.map((pillar) => (
          <a key={pillar.title} href={pillar.href} className="block p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center mb-6 bg-[--yellow]/10 text-[--yellow]">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">{pillar.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}


// ─── Who It's For ─────────────────────────────────────────────────────────────

function WhoItsFor() {
  const personas = [
    { title: "Founders & CEOs", desc: "Delegate repetitive tasks to AI and focus on what actually moves the needle.", emoji: "🚀" },
    { title: "Small Business Owners", desc: "Compete like a big company without hiring a big team. Automate ops, support, and marketing.", emoji: "🏢" },
    { title: "Marketing Teams", desc: "Ship more campaigns, faster. AI handles research, drafting, scheduling, and reporting.", emoji: "📣" },
    { title: "Solo Operators", desc: "Your AI workforce handles the grind while you handle the strategy.", emoji: "⚡" },
  ];

  return (
    <Section id="about">
       <SectionHeader
        pretitle="Who It's For"
        title="Built for people who'd rather be building"
        subtitle="Whether you're a solo founder or leading a team of 50 — we've got you."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((p) => (
          <div key={p.title} className="p-7 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="text-3xl mb-4">{p.emoji}</div>
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Use Cases Grid ───────────────────────────────────────────────────────────

function UseCasesGrid() {
  const cases = [
    "Customer Support", "Lead Generation", "Email Triage", "Social Media", "Invoice Processing", "Client Onboarding", 
    "Competitor Research", "Sales Outreach", "Meeting Notes", "Market Research", "Content Creation", "Data Entry",
  ];

  return (
    <Section className="bg-zinc-50 dark:bg-zinc-900/50">
      <SectionHeader
        pretitle="Use Cases"
        title="What can your AI workforce do?"
        subtitle="Pretty much anything. Here's where people start."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {cases.map((c, i) => (
          <div key={c} className="p-4 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <span className="text-sm font-semibold">{c}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}


// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center bg-zinc-50 dark:bg-zinc-900/50 p-12 rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">
          Ready to Build Your<br />
          <span className="text-[--yellow]">AI Workforce?</span>
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto text-zinc-600 dark:text-zinc-400">
          Join 1,000+ businesses already running on AI. Get started free or book a
          call to see what's possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/marketplace" className="px-8 py-4 rounded-xl text-base font-bold bg-[--yellow] text-black">
            Browse the Marketplace →
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl text-base font-bold border-2 border-[--red] text-[--red] hover:bg-[--red] hover:text-white transition-colors">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Guides", href: "#guides" },
    { label: "Done-For-You", href: "#doneforyou" },
    { label: "Contact", href: "#contact" },
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
              <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                {link.label}
              </a>
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Nav />
      <Hero />
      <ThreePillars />
      <WhoItsFor />
      <UseCasesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
