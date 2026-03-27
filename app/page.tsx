import type { NextPage } from "next";

const pillars = [
  {
    icon: "🛒",
    title: "Browse",
    subtitle: "Ready-Made AI Agents",
    description:
      "Explore our marketplace of pre-built AI agents. Pick one, deploy it, and watch your workflow transform — no coding required.",
    cta: "Browse the Marketplace",
    href: "#marketplace",
    accent: "gold",
  },
  {
    icon: "🛠️",
    title: "DIY",
    subtitle: "Step-by-Step Guides",
    description:
      "Want to build it yourself? Our clear, practical guides walk you through every step — from prompt engineering to full automation pipelines.",
    cta: "Explore Guides",
    href: "#guides",
    accent: "red",
  },
  {
    icon: "🚀",
    title: "Done-for-You",
    subtitle: "We Build & Run It All",
    description:
      "Hand us the wheel. We design, build, and operate your entire AI workforce so you can focus on what matters most — growing your business.",
    cta: "Book a Free Consultation",
    href: "#consultation",
    accent: "gold",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-[#F5C518] font-bold text-xl tracking-tight">
              myaiworkforce<span className="text-white">.ai</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#pillars" className="hover:text-white transition-colors">How It Works</a>
            <a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a>
            <a
              href="#consultation"
              className="bg-[#E63946] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#E63946]/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5C518]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-[#E63946]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-[#F5C518] rounded-full animate-pulse" />
            <span className="text-[#F5C518] text-sm font-medium">AI Workforce Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Build Your AI Workforce.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#FFD700]">
              Without the Complexity.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Browse ready-made AI agents, grab step-by-step guides, or let us build and run your entire AI workforce for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#marketplace"
              className="w-full sm:w-auto bg-[#F5C518] text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#FFD700] transition-all shadow-lg shadow-[#F5C518]/20 hover:shadow-[#F5C518]/40 hover:scale-105 active:scale-100"
            >
              Browse the Marketplace →
            </a>
            <a
              href="#consultation"
              className="w-full sm:w-auto border-2 border-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#E63946]/10 transition-all hover:scale-105 active:scale-100"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#F5C518] font-bold text-lg">500+</span>
              <span>AI Agents Available</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-[#F5C518] font-bold text-lg">No-code</span>
              <span>Deploy in minutes</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-[#F5C518] font-bold text-lg">24/7</span>
              <span>AI-powered workforce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="pillars" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Three Ways to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#FFD700]">
                Get Started
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Whether you want to explore, build, or delegate — we've got the path for you.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#F5C518]/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F5C518]/5"
              >
                {/* Icon */}
                <div className="text-4xl mb-6">{pillar.icon}</div>

                {/* Labels */}
                <div className="mb-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      i === 1 ? "text-[#E63946]" : "text-[#F5C518]"
                    }`}
                  >
                    {pillar.title}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.subtitle}</h3>
                <p className="text-white/60 leading-relaxed mb-8">{pillar.description}</p>

                {/* CTA */}
                <a
                  href={pillar.href}
                  className={`inline-flex items-center gap-2 font-semibold text-sm transition-all ${
                    i === 1
                      ? "text-[#E63946] hover:text-[#E63946]/80"
                      : "text-[#F5C518] hover:text-[#FFD700]"
                  }`}
                >
                  {pillar.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Card number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-white/10 rounded-3xl p-12 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#F5C518]/10 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="relative text-4xl md:text-5xl font-extrabold mb-6">
              Ready to build your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#FFD700]">
                AI workforce?
              </span>
            </h2>
            <p className="relative text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Join hundreds of businesses already saving time and money with intelligent AI automation. Start free today.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#marketplace"
                className="bg-[#F5C518] text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#FFD700] transition-all shadow-lg shadow-[#F5C518]/20 hover:scale-105"
              >
                Browse the Marketplace →
              </a>
              <a
                href="#consultation"
                className="border-2 border-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#E63946]/10 transition-all hover:scale-105"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <a href="/" className="text-[#F5C518] font-bold text-xl tracking-tight">
                myaiworkforce<span className="text-white">.ai</span>
              </a>
              <p className="text-white/40 text-sm mt-1">
                Build Your AI Workforce. Without the Complexity.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#consultation" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            © {new Date().getFullYear()} myaiworkforce.ai — All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
