"use client";

import { useState } from "react";
import Link from "next/link";

type Platform = "LinkedIn" | "X" | "Instagram" | "Facebook";

interface DayContent {
  day: number;
  title: string;
  LinkedIn: string;
  X: string;
  Instagram: string;
  Facebook: string;
}

const contentCalendar: DayContent[] = [
  {
    day: 1,
    title: "Launch / Awareness",
    LinkedIn: `We just launched something I've been building for the past year — and I'm genuinely excited to share it.

myaiworkforce.ai is Australia's AI agent marketplace and done-for-you agency, built specifically for business owners who want to automate the repetitive work that's eating up their team's time — without needing a tech team to do it.

Here's how it works across three pillars:

🛒 Marketplace — Browse and deploy pre-built AI agents for tasks like email triage, lead generation, CRM updates, and meeting summaries. Plug in, turn on, done.

📚 Guides — Step-by-step playbooks so you can implement AI automation yourself, even if you've never touched code.

🤖 Done-For-You — We build and deploy custom AI agents directly into your business. You tell us the problem, we handle the rest.

We built this because most AI tools are built for developers. We built this for founders.

If you're a business owner tired of watching your team do things a $50/month AI agent could handle — this is for you.

👉 Visit myaiworkforce.ai and see what's possible.`,
    X: `We just launched myaiworkforce.ai 🚀

AI agents for Australian business owners. Browse the marketplace, follow the guides, or let us build it for you.

No tech skills needed. Just results.

👉 myaiworkforce.ai`,
    Instagram: `We just launched myaiworkforce.ai — and it's built for business owners who are tired of doing everything manually. 🚀

Think of it as your AI workforce. Agents that handle email triage, lead gen, CRM updates, customer support — running 24/7 without sick days, pay rises, or coffee breaks.

Three ways to get started:
🛒 Marketplace — grab a pre-built agent
📚 Guides — DIY with step-by-step playbooks
🤖 Done-For-You — we build it for you

This isn't the future. It's available right now.

If you're a business owner in Australia who wants to automate the grind — tap the link in bio.

#AIAgents #BusinessAutomation #AustralianBusiness #AIWorkforce #WorkSmarter #Automation #SmallBusiness #AI #DigitalTransformation #Productivity`,
    Facebook: `Big news — we just launched myaiworkforce.ai! 🎉

If you're a business owner who's tired of your team spending hours on repetitive tasks — this one's for you.

We've built an AI agent marketplace and done-for-you service designed for Aussie business owners. No tech skills needed. No developers required.

Here's what we offer:

✅ Marketplace — browse AI agents for email, lead gen, CRM, support and more
✅ Step-by-step guides to implement AI yourself
✅ Done-For-You service — we build and deploy custom agents in your business

It's not about replacing your team. It's about freeing them up for the work that actually matters.

Head to myaiworkforce.ai and take a look. Would love to hear what you think! 👇`,
  },
  {
    day: 2,
    title: "Pain Point — Manual Work",
    LinkedIn: `Your team is wasting 15+ hours a week on tasks AI can do in seconds.

Not an exaggeration. Here's what the data says:

📧 Email triage: The average employee spends 2.5 hours per day in their inbox. Most of it is sorting, forwarding, and flagging — not actually responding.

📋 Data entry: McKinsey estimates 69% of data management tasks can be fully automated. Yet most businesses still pay humans to copy-paste between systems.

🔄 CRM updates: Sales reps spend only 34% of their time actually selling. The rest? Admin. Logging calls, updating records, writing follow-up notes.

That's not a productivity problem. That's a systems problem.

AI agents don't take breaks. They don't make copy-paste errors. They don't forget to log a deal. And they cost a fraction of what you're currently paying in wasted labour hours.

The businesses winning in 2025 aren't working harder. They're working with better systems.

What would your team do with 15 extra hours a week?

👉 See what's available at myaiworkforce.ai`,
    X: `Your team spends 2.5 hrs/day just managing email.

That's 12.5 hours a week. Per person.

An AI agent can triage, sort and flag all of it in seconds.

This isn't the future. It's just a better system.

👉 myaiworkforce.ai`,
    Instagram: `Still doing this manually? 👀

❌ Sorting 200 emails every morning
❌ Copy-pasting data between spreadsheets
❌ Updating your CRM after every call
❌ Writing the same follow-up emails over and over

Your team is brilliant. This work is not.

AI agents can handle every single task above — automatically, accurately, 24/7.

The time your team saves can go toward strategy, relationships, and actual growth. You know, the stuff that matters.

Stop burning hours on tasks that should be automated. Start at myaiworkforce.ai — link in bio.

#AIAutomation #BusinessProductivity #WorkSmarter #EmailAutomation #CRM #AustralianBusiness #AIAgents #SmallBusiness #Automation #TimeSaving`,
    Facebook: `Be honest — how much of your team's day is spent on stuff that doesn't actually move the needle?

Sorting emails. Updating spreadsheets. Logging CRM notes. Copy-pasting data between systems.

Studies show the average employee spends over 2.5 hours per day just managing their inbox. That's time that could be spent on sales calls, client relationships, or actual strategic work.

AI agents can handle all of that automatically. Not "eventually" — right now.

At myaiworkforce.ai, we've built agents specifically for these tasks:
✅ Email Triage Pro
✅ CRM Update Agent
✅ Data Entry Automator

Deploy one in your business this week and watch what happens to your team's output.

👉 myaiworkforce.ai — check out the marketplace and see what's possible.`,
  },
  {
    day: 3,
    title: "Social Proof / Case Study",
    LinkedIn: `We cut a client's support volume by 70% in 30 days. Here's exactly how we did it.

The client runs a mid-sized e-commerce business in Melbourne. Their support team was drowning — 400+ tickets a week, mostly order status requests, return queries, and FAQ-type questions. Response times were blowing out. The team was burned out.

They came to us with one ask: make it manageable.

Here's what we built:

✅ An AI agent that reads incoming support tickets in real time
✅ Auto-responds to the top 12 most common query types (order status, tracking, returns, sizing)
✅ Escalates anything complex or emotional to a human agent — with a summary attached

Results after 30 days:
→ Support volume handled by AI: 70%
→ Average response time: 4 hours → 8 minutes
→ Human team now handles only nuanced, high-value tickets
→ Customer satisfaction score: up 18 points

The human team didn't lose their jobs. They got their sanity back — and started focusing on retention and upsells instead of copy-pasting tracking numbers.

This is what done-for-you AI looks like in practice.

Want similar results? We have limited spots open. 👉 myaiworkforce.ai/done-for-you`,
    X: `We cut a client's support volume by 70% in 30 days.

400+ weekly tickets → AI handles 70% automatically.
Response time: 4 hours → 8 minutes.

The team didn't shrink. They just stopped doing the dumb stuff.

👉 myaiworkforce.ai`,
    Instagram: `Before vs After. This is what AI automation actually looks like in a real business. 👇

BEFORE 😤
↳ 400+ support tickets/week
↳ Team overwhelmed, response times blowing out
↳ Mostly the same 12 questions over and over
↳ Good people doing repetitive work

AFTER 🔥
↳ AI handles 70% of tickets automatically
↳ Response time: 4 hours → 8 minutes
↳ Team focuses only on complex, high-value cases
↳ Customer satisfaction up 18 points

This was 30 days. One AI agent. One Melbourne business.

The team didn't get smaller. They got better work to do.

That's what we build at myaiworkforce.ai. Real results, real businesses. Link in bio.

#CaseStudy #AIResults #BusinessAutomation #CustomerSupport #AIAgents #AustralianBusiness #EcommerceAustralia #Automation #AI #ResultsDriven`,
    Facebook: `Real results. Real business. Real numbers. 📊

One of our clients — an e-commerce business in Melbourne — came to us with a support crisis. Their team was handling 400+ tickets a week, mostly the same questions over and over: "Where's my order?" "How do I return this?" "What size should I get?"

We deployed an AI support agent that handles 70% of those tickets automatically.

The numbers after 30 days:
✅ 70% of tickets handled by AI
✅ Response time dropped from 4 hours to 8 minutes
✅ Customer satisfaction up 18 points
✅ Human team now focused on complex, high-value issues

Nobody lost their job. The team just stopped doing the boring stuff.

This is exactly what we do in our Done-For-You service. Interested in a similar result for your business?

👉 Book a call at myaiworkforce.ai/done-for-you`,
  },
  {
    day: 4,
    title: "Education — What Is an AI Agent?",
    LinkedIn: `Most business owners have heard of AI. Far fewer actually understand what an AI agent is — and how it's different from ChatGPT.

Here's the clearest way I can explain it.

ChatGPT is like a brilliant consultant you can ask questions. You type, it responds. That's it. You still have to take the answer and do something with it.

An AI agent is different. It doesn't just answer — it acts.

An AI agent can:
→ Monitor your inbox and sort emails automatically
→ Pull data from one system and push it to another
→ Trigger workflows based on conditions you define
→ Escalate to a human when something falls outside its rules
→ Run 24/7 without supervision

Think of it like the difference between hiring a consultant and hiring an employee. The consultant gives you advice. The employee does the work.

AI agents are digital employees. They have a job. They do the job. They report back.

The best part? They don't need onboarding. They don't call in sick. And they cost far less than the tasks they replace.

If you're a business owner wondering where to start with AI — start with agents.

👉 Browse the marketplace at myaiworkforce.ai`,
    X: `ChatGPT answers questions.

An AI agent takes action.

It monitors, triggers, executes, and reports — automatically.

Think less "smart search bar," more "digital employee."

That's what we build at myaiworkforce.ai`,
    Instagram: `Let me break down AI agents in plain English. 🧠

AI agent = your best employee.

They show up every day (24/7).
They never forget a task.
They don't need a coffee break.
They execute exactly what you ask, every time.
They flag anything that needs a human.

Unlike ChatGPT (which just talks), AI agents actually DO things:

📧 Sort and respond to emails
🔄 Update your CRM automatically
📊 Pull reports without being asked
🎫 Handle customer support tickets
📅 Book meetings and send reminders

You set the rules. They follow them. Forever.

This is the technology that's giving small businesses the same capabilities as enterprise teams — for a fraction of the cost.

Want to see what's available? Link in bio 👆

#AIAgents #WhatIsAI #BusinessAutomation #AIExplained #SmallBusinessAI #Automation #AustralianBusiness #AIWorkforce #TechForBusiness #WorkSmarter`,
    Facebook: `Not sure what an "AI agent" actually is? You're not alone — and it's simpler than you think.

Here's the clearest way to explain it:

ChatGPT is like a smart assistant you can ask questions. You type, it responds. You still have to act on the answer yourself.

An AI agent is different. It doesn't just respond — it does the work.

For example:
📧 An email triage agent reads your inbox, sorts by priority, drafts responses to common queries, and flags anything urgent — automatically, every day.

🔄 A CRM agent listens to your sales calls (or reads your emails), then updates the relevant contact record without your team touching a thing.

You set it up once. It runs forever. No babysitting required.

That's what we offer at myaiworkforce.ai — pre-built agents for the tasks that eat your team's time.

Have questions? Drop them in the comments 👇`,
  },
  {
    day: 5,
    title: "Product Spotlight — Marketplace",
    LinkedIn: `Three AI agents that could save your team 10+ hours a week. Here's what they do and what they cost.

We've just updated the myaiworkforce.ai marketplace with agents that are ready to deploy in your business today. No developers. No complex setup.

Here are three worth knowing about:

📧 Email Triage Pro — $49/month
Reads, sorts, and prioritises your inbox automatically. Drafts responses to common queries. Flags urgent items. Most users reclaim 1–2 hours per day. Connects with Gmail and Outlook.

🎯 Lead Gen Agent — $79/month
Monitors your defined lead sources (LinkedIn, web forms, inbound email), qualifies leads against your criteria, and delivers a prioritised list to your sales team every morning. No more lead sorting.

📝 Meeting Summariser — $29/month
Joins your calls (Zoom, Teams, Meet), generates a clean summary with action items, and sends it to the right people automatically. Your team stops taking notes forever.

Total cost: $157/month.
Conservative time saved: 12–15 hours/week across a small team.

The maths isn't hard.

👉 Browse all agents at myaiworkforce.ai/marketplace`,
    X: `Meet the Meeting Summariser. 📝

Joins your Zoom/Teams call.
Writes the summary.
Sends action items to the right people.
Automatically.

$29/month. Your team never takes meeting notes again.

👉 myaiworkforce.ai/marketplace`,
    Instagram: `Meet your new team member. 👋

They work 24/7, never complain, and cost less than a single shift.

Introducing three agents now live on the myaiworkforce.ai marketplace:

📧 Email Triage Pro ($49/mo)
→ Sorts your inbox, drafts replies, flags what matters

🎯 Lead Gen Agent ($79/mo)
→ Qualifies leads, delivers a prioritised list every morning

📝 Meeting Summariser ($29/mo)
→ Joins your calls, writes summaries, sends action items

Total: $157/month.
Hours saved: 12–15 per week.

Your team keeps their jobs. They just get to stop doing the boring stuff.

Browse the full marketplace — link in bio.

#AIMarketplace #AIAgents #BusinessTools #Automation #EmailAutomation #LeadGeneration #MeetingSummary #AustralianBusiness #ProductivityTools #AIWorkforce`,
    Facebook: `We just updated the marketplace — and these three agents are getting a lot of attention. 👀

If you've been curious about AI automation but didn't know where to start, these are the most practical entry points for most businesses:

📧 Email Triage Pro ($49/month)
Automatically sorts, prioritises, and drafts responses for your inbox. Works with Gmail and Outlook. Most users save 1–2 hours every single day.

🎯 Lead Gen Agent ($79/month)
Monitors your lead sources, qualifies against your criteria, and delivers a clean prioritised list to your sales team each morning. No more manual lead sorting.

📝 Meeting Summariser ($29/month)
Connects to Zoom, Teams, or Google Meet. Generates a clean summary with action items. Sends it automatically. No more "who was supposed to send the notes?"

All three are ready to deploy now. No developers needed.

👉 Browse the full marketplace at myaiworkforce.ai/marketplace`,
  },
  {
    day: 6,
    title: "Security / Trust",
    LinkedIn: `Why we deploy AI agents on private VPS — not shared servers. And why it matters for your business.

When most AI platforms talk about security, they mean their own servers are secure. That's not good enough.

Here's the real question: where does your business data actually live when you use an AI agent?

With most tools? On shared infrastructure. Your customer emails, CRM data, support tickets, and sales conversations sit on the same servers as thousands of other businesses. If there's a breach anywhere in that system, your data is potentially at risk.

We do it differently.

Every AI agent we deploy at myaiworkforce.ai runs on a dedicated private VPS — a server that belongs to your deployment only. Your data doesn't touch anyone else's environment. Ever.

This matters if you're in:
→ Professional services (legal, accounting, financial advice)
→ Healthcare or allied health
→ E-commerce with customer payment data
→ Any industry with privacy obligations

We're also fully transparent about where your data is stored, what the agent accesses, and how to shut it down instantly if needed.

AI automation shouldn't mean giving up control of your data. With us, you don't have to choose.

👉 Learn more at myaiworkforce.ai`,
    X: `Most AI tools run your business data through shared servers.

We don't.

Every agent we deploy runs on a private VPS — your data, your environment, no one else's.

Security isn't an afterthought. It's the architecture.

👉 myaiworkforce.ai`,
    Instagram: `Your data. Your server. Always. 🔒

When you automate with AI, you're trusting it with your business data — emails, customer info, sales conversations, financial records.

That trust needs to be earned.

At myaiworkforce.ai, every AI agent is deployed on a private VPS — a dedicated server for your business only. Your data never sits alongside another company's data. No shared infrastructure. No shared risk.

We designed it this way because we believe automation and privacy aren't opposites.

You get the efficiency. You keep the control.

That's the standard every AI platform should meet. It's the only standard we accept.

Link in bio to learn more.

#DataSecurity #AIPrivacy #PrivateVPS #BusinessSecurity #AIAgents #TrustAndSafety #AustralianBusiness #DataProtection #CyberSecurity #AIWorkforce`,
    Facebook: `Here's something worth knowing before you choose an AI automation platform.

Most platforms run your business data through shared servers — meaning your customer emails, CRM records, and business conversations are sitting on the same infrastructure as thousands of other companies.

We built myaiworkforce.ai differently.

Every AI agent we deploy runs on a dedicated private VPS — a server that belongs to your deployment only. Your data is isolated. No other businesses. No shared risk.

Why does this matter?

✅ If you handle client data (legal, finance, health, e-commerce)
✅ If you have privacy obligations under Australian law
✅ If you simply don't want your business data in a shared pool

We're also fully transparent — you always know what data the agent accesses, where it's stored, and you can shut it down instantly at any time.

Automation and security shouldn't be a trade-off.

👉 See how we do it at myaiworkforce.ai`,
  },
  {
    day: 7,
    title: "CTA — Done-For-You",
    LinkedIn: `We have 2 Done-For-You spots open this month. Here's what that means.

Every month, we take on a small number of Done-For-You clients — businesses where we custom-build and deploy AI agents directly into their operations.

Not templates. Not generic tools. Purpose-built agents designed around your specific workflows, systems, and team.

Here's the process:

Week 1 — Discovery. We map your business, identify the 3–5 highest-value automation opportunities, and define the outcomes we're targeting.

Week 2–3 — Build. We design, build, and test the agents in a staging environment. You get full visibility throughout.

Week 4 — Deploy & handover. We go live in your business, train your team, and document everything. Ongoing support included.

Results our clients typically see:
→ 10–20 hours per week reclaimed across the team
→ Response times cut by 60–90%
→ Manual error rates effectively eliminated
→ ROI visible within 60 days in most cases

We keep it small because we do it properly. Two spots per month. That's it.

If you've been thinking about AI automation but don't know where to start — this is the fastest, cleanest path.

Book a call this week. The spots fill fast and I'm not just saying that.

👉 myaiworkforce.ai/done-for-you`,
    X: `2 Done-For-You spots open this month.

We build custom AI agents directly into your business.
Discovery → Build → Deploy → Done.

Results in 30 days or we keep working.

Not many. Not for long.

👉 myaiworkforce.ai/done-for-you`,
    Instagram: `Two spots. This month. That's it. ⚡

Our Done-For-You service is exactly what it sounds like — we build custom AI agents and deploy them directly into your business.

You don't learn a new tool.
You don't manage a tech project.
You don't need a developer.

You tell us what's eating your team's time. We build the solution. You get your hours back.

Typical results:
✅ 10–20 hrs/week reclaimed
✅ Response times cut by 60–90%
✅ Visible ROI within 60 days

We keep spots limited because we do the work properly.

If you're serious about automating your business — DM us or tap the link in bio. Spots go fast and we won't pretend otherwise.

#DoneForYou #AIAutomation #AustralianBusiness #AIAgents #BusinessGrowth #Automation #AIWorkforce #SmallBusiness #FounderLife #WorkSmarter`,
    Facebook: `Two Done-For-You spots open this month — and I want to be honest about why we keep it small.

Our Done-For-You service isn't a cookie-cutter package. We sit down with each client, map their business, identify exactly where AI automation will have the biggest impact, then build and deploy custom agents directly into their systems.

It takes real time and real attention. So we cap it at two new clients per month.

Here's what you get:
✅ Custom AI agents built for your specific workflows
✅ Full deployment into your existing tools (email, CRM, support, etc.)
✅ Team training and documentation
✅ Ongoing support
✅ Visible results within 30–60 days

This month's spots usually go by the second week.

If you've been thinking about AI automation for your business — don't sit on it. Book a free 20-minute discovery call this week.

👉 myaiworkforce.ai/done-for-you`,
  },
];

const platformConfig = {
  LinkedIn: {
    color: "#0A66C2",
    bg: "rgba(10, 102, 194, 0.1)",
    border: "rgba(10, 102, 194, 0.3)",
    icon: "in",
    label: "LinkedIn",
  },
  X: {
    color: "#ffffff",
    bg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.2)",
    icon: "𝕏",
    label: "X / Twitter",
  },
  Instagram: {
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.08)",
    border: "rgba(225, 48, 108, 0.3)",
    icon: "◈",
    label: "Instagram",
  },
  Facebook: {
    color: "#1877F2",
    bg: "rgba(24, 119, 242, 0.1)",
    border: "rgba(24, 119, 242, 0.3)",
    icon: "f",
    label: "Facebook",
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "6px 14px",
        background: copied ? "rgba(255, 215, 0, 0.2)" : "rgba(255,255,255,0.07)",
        border: `1px solid ${copied ? "#FFD700" : "rgba(255,255,255,0.15)"}`,
        borderRadius: "6px",
        color: copied ? "#FFD700" : "#999",
        fontSize: "12px",
        cursor: "pointer",
        transition: "all 0.2s",
        fontFamily: "inherit",
      }}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

function DayCard({ data }: { data: DayContent }) {
  const [activeTab, setActiveTab] = useState<Platform>("LinkedIn");
  const platforms: Platform[] = ["LinkedIn", "X", "Instagram", "Facebook"];
  const content = data[activeTab];
  const config = platformConfig[activeTab];
  const charCount = content.length;

  return (
    <div
      style={{
        background: "var(--card, #111)",
        border: "1px solid var(--border, #222)",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "24px",
      }}
    >
      {/* Day Header */}
      <div
        style={{
          padding: "20px 24px 16px",
          borderBottom: "1px solid var(--border, #222)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: "rgba(255, 215, 0, 0.12)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            color: "#FFD700",
            fontSize: "14px",
            flexShrink: 0,
          }}
        >
          {data.day}
        </div>
        <div>
          <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
            Day {data.day}
          </div>
          <div style={{ fontSize: "16px", fontWeight: "600", color: "#fff" }}>{data.title}</div>
        </div>
      </div>

      {/* Platform Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid var(--border, #222)",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {platforms.map((platform) => {
          const pc = platformConfig[platform];
          const isActive = platform === activeTab;
          return (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              style={{
                flex: 1,
                padding: "12px 8px",
                border: "none",
                background: isActive ? pc.bg : "transparent",
                color: isActive ? pc.color : "#555",
                borderBottom: isActive ? `2px solid ${pc.color}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: isActive ? "600" : "400",
                transition: "all 0.2s",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>{pc.icon}</span>
              <span style={{ display: "none" }}>{platform}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px" }}>
        {/* Platform Label + Actions */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "20px",
                background: config.bg,
                border: `1px solid ${config.border}`,
                color: config.color,
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {config.label}
            </span>
            {activeTab === "X" && (
              <span
                style={{
                  fontSize: "12px",
                  color: charCount > 280 ? "#ef4444" : charCount > 240 ? "#F97316" : "#666",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {charCount} / 280 chars
              </span>
            )}
          </div>
          <CopyButton text={content} />
        </div>

        {/* Post Preview Box */}
        <div
          style={{
            background: "rgba(0,0,0,0.4)",
            border: `1px solid ${config.border}`,
            borderRadius: "10px",
            padding: "18px 20px",
            position: "relative",
          }}
        >
          {/* Instagram gradient header */}
          {activeTab === "Instagram" && (
            <div
              style={{
                height: "3px",
                background: "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                borderRadius: "2px",
                marginBottom: "16px",
                marginTop: "-4px",
              }}
            />
          )}

          <p
            style={{
              color: "#ddd",
              fontSize: "14px",
              lineHeight: "1.75",
              margin: 0,
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContentPreviewPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "#fff",
        fontFamily:
          "var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)",
      }}
    >
      {/* Top Nav */}
      <div
        style={{
          borderBottom: "1px solid var(--border, #1a1a1a)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(10,10,10,0.95)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(10px)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#FFD700",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          myaiworkforce.ai
        </Link>
        <div style={{ fontSize: "13px", color: "#555" }}>
          Content Calendar — Week 1
        </div>
        <Link
          href="/"
          style={{
            color: "#999",
            textDecoration: "none",
            fontSize: "13px",
            padding: "6px 14px",
            border: "1px solid #333",
            borderRadius: "6px",
            transition: "all 0.2s",
          }}
        >
          ← Back to site
        </Link>
      </div>

      {/* Hero Header */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 24px 40px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "4px 14px",
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "20px",
            color: "#FFD700",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Internal Preview
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "800",
            margin: "0 0 16px",
            background: "linear-gradient(135deg, #FFD700 0%, #F97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
          }}
        >
          Social Media Content Calendar
        </h1>
        <p style={{ color: "#666", fontSize: "16px", margin: "0 0 8px" }}>
          Week 1 — 7 days × 4 platforms
        </p>
        <p style={{ color: "#444", fontSize: "13px", margin: 0 }}>
          LinkedIn · X/Twitter · Instagram · Facebook
        </p>
      </div>

      {/* Platform Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          padding: "0 24px 40px",
        }}
      >
        {(Object.entries(platformConfig) as [Platform, typeof platformConfig.LinkedIn][]).map(([platform, config]) => (
          <div
            key={platform}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: config.bg,
              border: `1px solid ${config.border}`,
              borderRadius: "20px",
              fontSize: "12px",
              color: config.color,
              fontWeight: "500",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{config.icon}</span>
            {config.label}
          </div>
        ))}
      </div>

      {/* Content Cards */}
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {contentCalendar.map((day) => (
          <DayCard key={day.day} data={day} />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "32px 24px",
          textAlign: "center",
          color: "#444",
          fontSize: "13px",
        }}
      >
        <Link href="/" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "600" }}>
          myaiworkforce.ai
        </Link>{" "}
        · Social Media Content Calendar Week 1 · All rights reserved
      </div>
    </div>
  );
}
