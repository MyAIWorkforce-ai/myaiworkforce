"use client";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; content: string }[];
  cta: string;
}> = {
  "why-your-business-needs-an-ai-workforce-in-2025": {
    title: "Why Your Business Needs an AI Workforce in 2025",
    category: "Operations",
    date: "Mar 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "AI workforce automation concept",
    intro: "The businesses pulling ahead right now aren't bigger or better funded — they're more automated. While competitors are still hiring for roles that AI can handle in minutes, the smart operators are building AI workforces that run 24/7 without sick days, holidays, or salary reviews.",
    sections: [
      { heading: "The automation gap is widening fast", content: "In 2024, early adopters gained a 30–40% operational efficiency advantage over peers who waited. In 2025, that gap is compounding. Every month you delay is another month your competitors are reclaiming hours, cutting costs, and reinvesting that time into growth." },
      { heading: "What an AI workforce actually does", content: "An AI workforce handles the repetitive, high-volume tasks that drain your team: email triage, lead qualification, invoice processing, customer support, data entry, social media scheduling, market research. These aren't futuristic capabilities — they're available today, off the shelf." },
      { heading: "The ROI is immediate and measurable", content: "The average Done-For-You client saves 15–25 hours per week in the first month. At an average hourly cost of $50 (salary + overhead), that's $750–$1,250 in recovered capacity every week. The agents pay for themselves within the first billing cycle." },
      { heading: "The window is closing", content: "First-mover advantage in AI automation is real. Once your competitors have agents handling their operations, the gap becomes structural — not just tactical. The time to build is now, before it becomes a catching-up exercise." },
    ],
    cta: "Ready to build your AI workforce? Book a free consultation and we'll identify your highest-impact automation opportunities in 30 minutes.",
  },
  "the-hidden-cost-of-manual-data-entry": {
    title: "The Hidden Cost of Manual Data Entry (And How AI Fixes It)",
    category: "Finance",
    date: "Mar 25, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Data entry and finance automation",
    intro: "You think data entry costs you an hour a day. It actually costs you 30% of your team's cognitive capacity. Every form filled, every invoice logged, every CRM field updated is a tiny drain on the mental energy your team could be spending on work that actually matters.",
    sections: [
      { heading: "The real cost isn't just time", content: "Research consistently shows that knowledge workers lose up to 2 hours per day to administrative tasks. But the hidden cost is worse: context switching. Every time someone stops a meaningful task to enter data, it takes 23 minutes on average to fully re-engage. The interruption cost dwarfs the task cost." },
      { heading: "Where data entry hides in your business", content: "It shows up as: copying invoice details into accounting software, updating CRM records after calls, logging support tickets, transferring data between systems, filling spreadsheets from email attachments. Most businesses don't realise how much of this exists until they map it." },
      { heading: "How AI eliminates it", content: "AI agents can read invoices via OCR, parse email content, listen to call recordings, and extract structured data automatically — then write it directly to your CRM, accounting tool, or spreadsheet. Zero manual steps. Zero errors from typos. Zero context switching." },
      { heading: "What your team does instead", content: "When data entry disappears, your team gets back the cognitive space to do the work only humans can do: building relationships, solving complex problems, making judgment calls. That's where the real value sits — and AI clears the path to get there." },
    ],
    cta: "Want to eliminate data entry from your business? Our Invoice Processor and CRM Updater agents are ready to deploy. Book a call to see them in action.",
  },
  "openclaw-vs-n8n-vs-make": {
    title: "OpenClaw vs n8n vs Make: Which AI Agent Platform Is Right for You?",
    category: "Technology",
    date: "Mar 22, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Technology platform comparison",
    intro: "Three platforms, three very different philosophies. If you're building serious AI automation infrastructure, the choice you make here will shape your entire stack for the next few years. This comparison will save you months of wrong turns.",
    sections: [
      { heading: "OpenClaw: the autonomous agent platform", content: "OpenClaw is built around persistent, memory-enabled AI agents that run 24/7. It's designed for agents that learn your context over time, manage complex multi-step workflows, and operate through messaging interfaces like Discord or Telegram. Best for: done-for-you AI workforce deployments, personal AI assistants, complex ongoing automation." },
      { heading: "n8n: the developer-friendly workflow builder", content: "n8n is a powerful open-source workflow automation tool with a visual builder. It excels at connecting APIs, transforming data, and building complex trigger-based workflows. Best for: technical teams, data pipeline automation, integrating legacy systems, developers who want full control." },
      { heading: "Make (formerly Integromat): the no-code connector", content: "Make is the most accessible of the three — visual, drag-and-drop, with 1,000+ pre-built integrations. It's ideal for connecting SaaS tools without writing code. Best for: marketing automation, simple multi-app workflows, non-technical teams who need quick wins." },
      { heading: "The verdict", content: "For most business owners building a serious AI workforce, OpenClaw is the right foundation — it's the only platform designed around persistent, context-aware agents. Use n8n for complex data workflows alongside it. Use Make for quick SaaS integrations. They're not mutually exclusive." },
    ],
    cta: "We build on OpenClaw because it's the most powerful platform for real AI workforce deployments. See what we've built in the marketplace.",
  },
  "how-we-cut-support-volume-by-70-percent": {
    title: "How We Cut a Client's Support Volume by 70% in 30 Days",
    category: "Case Study",
    date: "Mar 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Business case study team results",
    intro: "A real breakdown of how we deployed a customer support AI agent for a 40-person SaaS company, the hurdles we hit, and the exact results by week.",
    sections: [
      { heading: "The client's problem", content: "A SaaS company with 3,000 active users was receiving 200+ support tickets per week. Their two-person support team was drowning. Response times had crept to 48 hours. NPS was declining. They needed relief fast — but couldn't justify hiring a third support person for what was largely repetitive Tier-1 volume." },
      { heading: "The solution we built", content: "We deployed an Inbound Triage Agent connected to their Zendesk account. The agent read every incoming ticket, classified it by type and urgency, and resolved the 60% that matched known patterns automatically using their documentation. Complex or sensitive tickets were flagged and routed to the human team with a suggested response draft." },
      { heading: "Week by week results", content: "Week 1: Agent live, handling 40% of volume. Week 2: Confidence threshold tuned — handling 58%. Week 3: Documentation expanded based on gaps — 67%. Week 4: Full month result — 71% deflection rate. Human team response time dropped from 48 hours to under 4 hours on the remaining tickets." },
      { heading: "What we learned", content: "The biggest surprise was how quickly the documentation gaps became visible. The agent's uncertainty flags showed exactly where the knowledge base was missing. Within two weeks, the client had a more complete support knowledge base than they'd had in three years — as a side effect of the deployment." },
    ],
    cta: "Want results like this? Our Inbound Triage Agent is available in the marketplace, or we can build a custom version as part of a Done-For-You deployment.",
  },
  "security-first-why-we-deploy-on-private-vps": {
    title: "Security First: Why We Deploy AI Agents on Private VPS",
    category: "Security",
    date: "Mar 16, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Cybersecurity and data protection",
    intro: "Most AI tools process your data on shared servers. Here's why we think that's a serious risk — and why every client gets their own dedicated, private deployment.",
    sections: [
      { heading: "The shared infrastructure problem", content: "When you use a SaaS AI tool, your data — emails, invoices, customer records, internal documents — passes through servers shared with thousands of other businesses. Most providers have solid security practices. But shared infrastructure means shared risk: a breach affecting another tenant can expose your data." },
      { heading: "What private VPS deployment means", content: "Every My AI Workforce client gets their own dedicated Virtual Private Server. Your agents run exclusively on your infrastructure. Your data never touches shared servers. Your credentials, documents, and business intelligence stay in an environment that only you and your agents can access." },
      { heading: "The compliance angle", content: "For businesses handling customer data, financial records, or healthcare information, private deployment isn't just a preference — it's often a compliance requirement. GDPR, HIPAA, and SOC2 frameworks all have provisions around data residency and shared infrastructure that private VPS deployment helps satisfy." },
      { heading: "Our security stack", content: "Each deployment includes: end-to-end encrypted communications, SSH key-only server access, automated security patching, regular audit logging, and optional human oversight gates for sensitive actions. Security isn't an add-on — it's the foundation." },
    ],
    cta: "Security is non-negotiable for us. Every Done-For-You client gets a private VPS deployment as standard. Book a call to learn more about our security architecture.",
  },
  "the-complete-guide-to-ai-agent-roi": {
    title: "The Complete Guide to AI Agent ROI",
    category: "Strategy",
    date: "Mar 13, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "ROI and financial returns chart",
    intro: "How do you actually measure the return on your AI investment? Most businesses either over-promise (\"this will save us millions\") or under-measure (\"it saves some time, I think\"). Here's the framework we use with every client.",
    sections: [
      { heading: "Step 1: Baseline your current cost", content: "Before deployment, measure the time your team spends on the target task. Be precise: hours per week, hourly cost (salary + overhead), error rate, and any downstream costs of errors (rework, customer complaints, delayed payments). This is your baseline." },
      { heading: "Step 2: Define your success metrics", content: "Pick 2-3 concrete metrics: hours reclaimed per week, error rate reduction, response time improvement, tickets deflected. Make them measurable before you start. Vague goals produce vague results." },
      { heading: "Step 3: Measure at 30, 60, and 90 days", content: "AI agents improve over time as they learn your patterns. Day 1 performance is never peak performance. We measure at 30, 60, and 90 days and report the trajectory — not just the snapshot. Clients are often surprised how much improvement happens in weeks 4–8." },
      { heading: "Step 4: Calculate fully-loaded ROI", content: "ROI = (Value of time reclaimed + Error cost reduction + Revenue impact) ÷ Total agent cost. For most clients, the ratio is 5:1 to 15:1 within the first quarter. The agents that handle revenue-adjacent tasks (lead gen, follow-up) often show the highest returns." },
    ],
    cta: "Want us to run this analysis for your business? Our discovery call includes a free ROI estimate based on your current workflows. Book a call.",
  },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Operations:   { bg: "rgba(99,179,237,0.12)", text: "#63B3ED" },
  Finance:      { bg: "rgba(246,173,85,0.12)", text: "#F6AD55" },
  Technology:   { bg: "rgba(183,148,246,0.12)", text: "#B794F6" },
  "Case Study": { bg: "rgba(104,211,145,0.12)", text: "#68D391" },
  Security:     { bg: "rgba(230,57,70,0.12)", text: "#E63946" },
  Strategy:     { bg: "rgba(255,215,0,0.12)", text: "#FFD700" },
};

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Guides", href: "/guides" },
    { label: "Done-For-You", href: "/done-for-you" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link"
            >{link.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: "var(--text-dim)", border: "1px solid var(--border)" }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} style={{ color: "var(--text-dim)" }}>☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)" }}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: "var(--text-dim)" }} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }} onClick={() => setOpen(false)}>Book a Free Call</Link>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  const colors = categoryColors[post.category] || { bg: "rgba(255,215,0,0.12)", text: "#FFD700" };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="pt-16">
        {/* Hero image */}
        <div className="relative w-full" style={{ height: 360, overflow: "hidden" }}>
          <img src={post.image} alt={post.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, var(--bg) 100%)" }} />
        </div>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 pb-24 -mt-20 relative">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: colors.bg, color: colors.text }}>{post.category}</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>{post.date}</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>· {post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-8" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>{post.title}</h1>

          {/* Intro pull-quote */}
          <p className="text-xl mb-10 leading-relaxed" style={{ color: "var(--text-dim)", borderLeft: "4px solid #FFD700", paddingLeft: "1.5rem", fontStyle: "italic", fontSize: "1.15rem", lineHeight: "1.8" }}>{post.intro}</p>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#FFD700" }}>{section.heading}</h2>
                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{section.content}</p>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl text-center" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
            <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>{post.cta}</p>
            <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" className="px-8 py-4 rounded-xl font-bold inline-block glow-yellow" style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}>Book a Free Call →</Link>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-medium" style={{ color: "var(--muted)" }}>← Back to Blog</Link>
          </div>
        </article>
      </main>
    </div>
  );
}
