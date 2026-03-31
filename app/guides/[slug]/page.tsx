"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { notFound } from "next/navigation";

interface GuideStep {
  heading: string;
  content: string;
}

interface Guide {
  title: string;
  category: string;
  difficulty: string;
  readTime: string;
  intro: string;
  whatYouNeed: string[];
  steps: GuideStep[];
  tip: string;
}

const guides: Record<string, Guide> = {
  "how-to-set-up-your-first-ai-email-agent": {
    title: "How to Set Up Your First AI Email Agent",
    category: "Operations",
    difficulty: "Beginner",
    readTime: "15 min",
    intro: "Email is the backbone of most business communication — and for most people, it's also their biggest time drain. An AI email agent can triage your inbox, draft replies, and surface what actually needs your attention, giving you back hours every week. This guide walks you through setting one up with OpenClaw from scratch.",
    whatYouNeed: [
      "An OpenClaw account (free tier works)",
      "A Gmail or Outlook inbox",
      "About 30 minutes of setup time",
      "A rough sense of how you categorise emails",
      "Optional: access to a shared team inbox",
    ],
    steps: [
      {
        heading: "Install OpenClaw and connect your inbox",
        content: "Download and install OpenClaw on your Mac or PC. Once running, navigate to Settings → Integrations and connect your Gmail or Outlook account. Grant the necessary permissions — OpenClaw needs read access to classify emails and write access to draft replies. Your inbox connection will appear green once active.",
      },
      {
        heading: "Define your email categories",
        content: "Open the Email Agent skill configuration and define 5–7 categories that match how you actually think about email. Common examples: Urgent/Action Required, Client Emails, Invoices & Finance, Newsletters, Internal Team, and FYI Only. The more specific and personal your categories, the more accurate the triage will be from day one.",
      },
      {
        heading: "Configure your triage rules",
        content: "For each category, describe what makes an email belong there — sender patterns, subject keywords, and typical content. For example: 'Client Emails = from known client domains or containing project names'. The agent uses these as training signals. You can also set rules like 'auto-archive anything from no-reply@ addresses older than 24 hours'.",
      },
      {
        heading: "Set up your morning briefing",
        content: "Configure the morning briefing in HEARTBEAT.md. Choose your delivery time (7am is popular), briefing format (summary vs. full list), and where to receive it — Slack, email, or in-app. The briefing will show your top 5 urgent items, a categorised inbox count, and suggested replies for any messages that have been waiting more than 24 hours.",
      },
      {
        heading: "Run your first triage and review the results",
        content: "Trigger a manual triage run from the OpenClaw dashboard. The agent will process your inbox and show you its categorisation decisions. Review the first 20–30 items and correct any that are wrong using the thumbs up/down buttons. These corrections train the model and typically improve accuracy to 90%+ within the first week.",
      },
      {
        heading: "Enable auto-archive and draft replies",
        content: "Once you're happy with the accuracy, enable auto-archive for your lowest-priority categories (newsletters, FYI) and turn on draft-reply suggestions for high-frequency senders. Drafts appear in a review queue — you approve or edit before anything is sent. Most users find they can process a full day of email in under 10 minutes once the agent is trained.",
      },
    ],
    tip: "Start with a strict review period (approve every action manually for the first 3 days) before enabling any automation. The extra time upfront pays off in a model that's precisely calibrated to your inbox — not a generic one.",
  },

  "automate-your-customer-support-in-3-steps": {
    title: "Automate Your Customer Support in 3 Steps",
    category: "Customer Support",
    difficulty: "Beginner",
    readTime: "20 min",
    intro: "Customer support is one of the first areas where AI delivers fast, measurable ROI. A well-configured support agent can deflect 60–70% of tier-1 queries, respond instantly 24/7, and escalate to humans only when genuinely needed. This guide gets you from zero to a live support agent in three clear steps.",
    whatYouNeed: [
      "OpenClaw installed and running",
      "A Zendesk, Intercom, or Freshdesk account (or email-based support)",
      "Your existing help documentation or FAQ content",
      "A list of your 20 most common support questions",
      "A team member to handle escalations",
    ],
    steps: [
      {
        heading: "Step 1 — Build your knowledge base",
        content: "Gather all your existing support documentation: help centre articles, FAQ pages, past resolved tickets, and product documentation. Drop these into the OpenClaw knowledge base directory. The agent ingests and indexes this content automatically. Don't worry if it's not perfectly organised — the agent handles messy source material well. The goal is coverage, not polish.",
      },
      {
        heading: "Step 2 — Configure triage and routing rules",
        content: "Define what the agent should handle autonomously versus escalate to a human. Start conservatively: auto-respond only to queries matching high-confidence known answers. For everything else, draft a suggested response and route to a human for review. Set escalation triggers: any mention of 'cancel', 'refund', 'legal', or 'complaint' should always route to a human immediately, regardless of confidence.",
      },
      {
        heading: "Step 3 — Connect to your support channel and go live",
        content: "Connect OpenClaw to your support channel using the Zendesk, Intercom, or email integration. Run a 48-hour test period in shadow mode — the agent processes all incoming tickets and logs what it would have done, without actually responding. Review the shadow log to verify accuracy, adjust any rules that are off, then flip the switch to live mode.",
      },
    ],
    tip: "Your first knowledge base doesn't need to be complete to go live. Start with your top 20 questions answered well, and expand from there based on the unanswered question log the agent generates each week.",
  },

  "build-a-lead-generation-agent-from-scratch": {
    title: "Build a Lead Generation Agent from Scratch",
    category: "Sales",
    difficulty: "Intermediate",
    readTime: "25 min",
    intro: "A lead generation agent that runs on autopilot is one of the highest-leverage things a small sales team can build. Done right, it fills your pipeline with qualified prospects, researches each one, and drafts personalised outreach — so your team can focus entirely on conversations and closes. This guide walks you through building one from first principles.",
    whatYouNeed: [
      "OpenClaw with the Sales skill pack",
      "A LinkedIn Sales Navigator account (or Apollo.io)",
      "A Gmail or Outlook account for outreach",
      "A clearly defined ICP (Ideal Customer Profile)",
      "A CRM — HubSpot, Pipedrive, or Salesforce",
      "About 2 hours for initial setup",
    ],
    steps: [
      {
        heading: "Define your ICP in precise terms",
        content: "The quality of your lead generation agent is directly proportional to the specificity of your ICP. Don't write 'B2B SaaS companies' — write 'Series A–C B2B SaaS companies in the HR tech or fintech space, 50–500 employees, US or UK based, using Salesforce or HubSpot, hiring sales roles on LinkedIn right now'. The more specific the criteria, the higher the lead quality and the less manual filtering you'll need to do.",
      },
      {
        heading: "Configure prospect sourcing",
        content: "Connect your LinkedIn Sales Navigator or Apollo.io account in OpenClaw's integrations panel. Configure the search parameters using your ICP criteria. Set a daily prospect limit (50–100 is a good starting point) to avoid overwhelming your outreach capacity. The agent will pull new prospects matching your criteria each morning and enrich them with company news, recent activity, and hiring signals.",
      },
      {
        heading: "Set up qualification scoring",
        content: "Define a scoring rubric with 5–8 criteria and weights. Example: company size match (20%), industry match (20%), recent relevant activity (25%), tech stack match (15%), geography match (10%), growth signals (10%). Prospects scoring above your threshold are queued for outreach; those below are logged and deprioritised. Review the first week's scoring to calibrate the weights.",
      },
      {
        heading: "Write your outreach templates",
        content: "Create 3 outreach templates: an initial email, a follow-up at day 5, and a final touch at day 12. Each should have a variable slot for a personalised first line that references something specific to that prospect — a recent LinkedIn post, a company milestone, or a relevant hiring signal. The agent generates the personalised line; you write the structure around it.",
      },
      {
        heading: "Connect to your CRM and go live",
        content: "Map the CRM fields — company, contact, deal stage, lead source — and set the initial deal stage for agent-sourced leads. Run the agent in approval mode for the first week: it queues each outreach for your sign-off before sending. Once you trust the output, you can automate sending during business hours and approve only the exceptions.",
      },
    ],
    tip: "The personalised first line is what separates 3% reply rates from 15% reply rates. Spend time reviewing the agent's generated first lines in the first two weeks and give explicit feedback on which ones feel genuine versus generic. The model adapts quickly.",
  },

  "create-a-social-media-scheduling-agent": {
    title: "Create a Social Media Scheduling Agent",
    category: "Marketing",
    difficulty: "Beginner",
    readTime: "18 min",
    intro: "Consistent social media presence is one of the highest-ROI marketing activities for most businesses — but the manual work of writing, formatting, and scheduling posts across multiple platforms is relentless. A social media scheduling agent handles all of it, so you stay visible without the daily grind. Here's how to build one.",
    whatYouNeed: [
      "OpenClaw with the Marketing skill pack",
      "LinkedIn, Twitter/X, and/or Instagram business accounts",
      "A brand voice document or examples of posts you like",
      "A basic content calendar (even a simple spreadsheet works)",
      "Buffer or a native scheduler account (optional)",
    ],
    steps: [
      {
        heading: "Document your brand voice",
        content: "Before the agent can write in your voice, it needs to know what that sounds like. Collect 10–15 examples of social posts you love — either your own or ones that match the tone you want. Describe your voice in plain terms: professional but human, no jargon, always practical, occasional humour is fine. The more examples and description you provide, the better the match.",
      },
      {
        heading: "Set up your content pillars",
        content: "Define 4–6 content pillars — recurring themes your posts will rotate through. Examples: industry insights, behind-the-scenes, client success stories, educational tips, product updates, and team culture. Having defined pillars ensures your content stays varied and on-brand, and gives the agent clear guidance on what to write about each day.",
      },
      {
        heading: "Configure platform-specific formatting",
        content: "Each platform has different best practices. Configure the agent with your preferences per platform: LinkedIn posts (150–300 words, thought-leadership tone, 3–5 hashtags), Twitter threads (tight sentences, punchy hooks, 8–12 tweets), Instagram (visual-first caption, 20–30 hashtags, emoji-friendly). The agent will automatically adapt the same core idea to each platform's native format.",
      },
      {
        heading: "Build your first week's content batch",
        content: "Run the agent in batch mode: provide 5–7 content topics or brief ideas, and let it generate a full week of posts across all platforms. Review the batch, make edits, and approve. Once approved, the agent schedules everything at optimal times based on your audience engagement data. Your first batch typically takes 30–45 minutes to review; subsequent weeks take 10–15.",
      },
      {
        heading: "Review performance and iterate",
        content: "After 30 days, review the performance report the agent generates. Which content types drove the most engagement? Which platforms are performing best? What topics resonated most with your audience? Use these insights to refine your content pillars and brief the agent differently for the next month. Content quality compounds over time as the agent learns what works for your specific audience.",
      },
    ],
    tip: "Don't try to automate 100% of your social content immediately. Keep one weekly 'human post' — something personal, a real observation, a genuine moment — in the mix. Audiences can tell the difference and your authentic posts will typically outperform the generated ones, which helps the overall account signal.",
  },

  "set-up-an-invoice-processing-workflow": {
    title: "Set Up an Invoice Processing Workflow",
    category: "Finance",
    difficulty: "Intermediate",
    readTime: "22 min",
    intro: "Manual invoice processing is slow, error-prone, and completely unnecessary with the right automation in place. A well-built invoice processing workflow can handle everything from ingestion to approval to accounting entry — with humans involved only for exceptions and final sign-off. This guide shows you how to build one that actually works.",
    whatYouNeed: [
      "OpenClaw with the Finance skill pack",
      "Xero or QuickBooks accounting software",
      "A dedicated invoices inbox (e.g. invoices@yourcompany.com)",
      "Google Drive or Dropbox for document storage",
      "A list of regular suppliers and their expected invoice formats",
    ],
    steps: [
      {
        heading: "Set up your invoice intake channel",
        content: "Create a dedicated email address for invoice receipt (invoices@yourdomain.com is conventional) and point it at OpenClaw's inbox monitor. Also configure a Google Drive folder called 'Incoming Invoices' and connect it. Any invoice dropped in that folder or sent to that email will be automatically picked up and processed. Communicate the new email address to your suppliers.",
      },
      {
        heading: "Configure your chart of accounts mapping",
        content: "For each major supplier category, define the default expense account in your accounting system. Office supplies → Admin Expenses. Software subscriptions → Software & IT. Contractor invoices → Professional Services. This mapping tells the agent how to code each invoice automatically. You can set supplier-specific overrides for vendors you want coded differently from their category default.",
      },
      {
        heading: "Set up PO matching",
        content: "If you raise purchase orders, export your PO list and connect it to OpenClaw's matching workflow. The agent will attempt to match each incoming invoice to an open PO by vendor name and approximate amount. Matched invoices move straight to approval. Unmatched invoices are flagged as exceptions with the reason noted — no matching PO, amount discrepancy over X%, or unrecognised vendor.",
      },
      {
        heading: "Configure your approval workflow",
        content: "Define approval tiers based on invoice value: invoices under $500 auto-approve (if PO matched), $500–$5,000 require one approver, over $5,000 require two approvers. Set up approval routing: who approves which vendor categories, who covers when someone is on leave. Approvers receive a Slack or email notification with a one-click approve button and a summary of the invoice.",
      },
      {
        heading: "Test with 10 real invoices and go live",
        content: "Before going fully live, run 10 real invoices through the workflow manually and compare the agent's output (coding, matching, exception flags) against what you would have done. Fix any systematic errors in the configuration. Once accuracy is satisfactory, go live. Monitor the exceptions log daily for the first two weeks — exceptions tell you exactly where the configuration needs tuning.",
      },
    ],
    tip: "The biggest time-saver isn't the processing itself — it's the month-end reconciliation. Once your invoices are coded consistently, your accountant's reconciliation work drops from days to hours. Tell your accountant what you're building so they can adjust their process to take advantage of it.",
  },

  "build-a-market-research-agent": {
    title: "Build a Market Research Agent",
    category: "Research",
    difficulty: "Advanced",
    readTime: "30 min",
    intro: "Good strategic decisions require good market intelligence — and gathering that intelligence manually is both time-consuming and inconsistent. A market research agent monitors your industry continuously, surfaces relevant trends and competitor moves, and delivers structured briefs that keep you ahead of the curve. This guide walks through building one that becomes genuinely indispensable.",
    whatYouNeed: [
      "OpenClaw with the Research skill pack",
      "A list of 5–10 competitors to monitor",
      "A defined set of industry keywords and topics",
      "Slack or email for report delivery",
      "Optional: access to industry publications or analyst reports",
      "About 3 hours for initial configuration",
    ],
    steps: [
      {
        heading: "Define your intelligence requirements",
        content: "Before configuring anything, get specific about what you actually need to know. Map your intelligence requirements across four domains: competitor activity (pricing, product updates, marketing moves), industry trends (technology shifts, regulatory changes, market sizing), customer intelligence (pain points, purchase triggers, satisfaction signals), and opportunity signals (new markets, underserved segments, partnership possibilities). Document these as specific questions the agent should try to answer each week.",
      },
      {
        heading: "Set up competitor monitoring",
        content: "For each competitor, configure a monitoring profile: their main website URL, pricing page, blog, LinkedIn page, and any known job boards they post to. The agent will check each source on a defined schedule (daily for pricing pages, weekly for blog content) and flag changes. Configure change sensitivity — you want to catch pricing updates and new feature announcements, but not minor copy tweaks.",
      },
      {
        heading: "Configure industry trend tracking",
        content: "Define your keyword and topic clusters: industry terms, technology names, regulatory topics, key player names. Connect Google Alerts equivalent monitoring through the OpenClaw Research skill. Add RSS feeds from industry publications relevant to your market. Set the agent to categorise findings by strategic relevance — high (needs executive attention), medium (worth noting), low (background awareness).",
      },
      {
        heading: "Build your research brief template",
        content: "Define the structure of your weekly intelligence brief. A good template has: executive summary (5 bullets, what actually matters this week), competitor updates, industry developments, opportunity signals, and a 'watch list' of emerging items not yet significant enough to act on. The consistent structure matters — it lets you scan efficiently and spot trends across weeks.",
      },
      {
        heading: "Set up on-demand deep research",
        content: "In addition to scheduled monitoring, configure the agent for on-demand research requests. When you have a specific question — 'What are the pricing models used by the top 10 competitors in X segment?' or 'What do customers consistently complain about with competitor Y?' — you should be able to brief the agent in plain language and receive a structured answer within hours. This is the advanced capability that separates a monitoring tool from a genuine research resource.",
      },
    ],
    tip: "The best market research agents are tuned over time. Set a monthly review where you look back at the briefs and ask: what did we act on, what was noise, and what did we miss? Use those answers to refine your monitoring configuration. After 3 months, you'll have a system calibrated precisely to your strategic information needs.",
  },

  "the-openclaw-quick-start-guide": {
    title: "The OpenClaw Quick-Start Guide",
    category: "Operations",
    difficulty: "Beginner",
    readTime: "12 min",
    intro: "OpenClaw is an AI agent platform that runs on your own machine, giving you a personal AI that works 24/7, integrates with your tools, and actually remembers who you are. This quick-start guide gets you from installation to your first working agent in under 30 minutes — no code required.",
    whatYouNeed: [
      "A Mac, PC, or Linux machine",
      "Node.js version 18 or higher",
      "An OpenAI or Anthropic API key",
      "About 30 minutes",
    ],
    steps: [
      {
        heading: "Install OpenClaw",
        content: "Open your terminal and run: npm install -g openclaw. Once installed, run openclaw init to create your workspace. This sets up the directory structure — your workspace will live at ~/.openclaw/workspace. Run openclaw gateway start to start the background service that keeps your agent running continuously.",
      },
      {
        heading: "Configure your identity files",
        content: "Navigate to your workspace and open SOUL.md — this is your agent's personality file. Edit it to define how you want your agent to behave: its tone, priorities, and values. Then open USER.md and fill in information about yourself: your name, timezone, what you're working on, and your communication preferences. These two files are the foundation everything else builds on.",
      },
      {
        heading: "Connect your first integration",
        content: "Run openclaw integrations to see available integrations. Start with one: Gmail is the easiest for most people. Follow the connection flow, grant the permissions requested, and verify the connection shows green. Your agent can now read your inbox and act on it. Add more integrations (Slack, Calendar, Notion) once the first one is working smoothly.",
      },
      {
        heading: "Install your first skill",
        content: "Skills are pre-built agent behaviours you can install in minutes. Run openclaw skills list to see what's available. For most beginners, the Email Triage skill is the best first choice — it's immediately useful and demonstrates the platform's capabilities well. Run openclaw skills install email-triage and follow the configuration prompts.",
      },
      {
        heading: "Set up your heartbeat schedule",
        content: "The heartbeat is what makes OpenClaw proactive — it checks in with you on a schedule rather than only responding when you ask. Open HEARTBEAT.md in your workspace and define what you want checked each time the heartbeat fires. Start simple: 'Check for urgent emails and report anything time-sensitive'. Set the heartbeat interval to every 2 hours to start.",
      },
    ],
    tip: "The #1 mistake new OpenClaw users make is trying to configure everything at once. Pick one workflow to automate, get it working well, and live with it for a week before adding more. Depth beats breadth in the early days.",
  },

  "build-a-sales-outreach-agent-with-n8n": {
    title: "Build a Sales Outreach Agent with n8n",
    category: "Sales",
    difficulty: "Advanced",
    readTime: "35 min",
    intro: "n8n is an open-source workflow automation tool that pairs exceptionally well with OpenClaw for sales automation. Together, they can run a fully automated outreach pipeline: finding prospects, researching them, writing personalised emails, managing sequences, and logging everything to your CRM — with minimal human touch. This guide covers the full build.",
    whatYouNeed: [
      "n8n installed (self-hosted) or n8n.cloud account",
      "OpenClaw running locally with the Sales skill pack",
      "Apollo.io or LinkedIn Sales Navigator for prospecting",
      "Gmail or SMTP access for sending",
      "HubSpot or Pipedrive CRM",
      "Familiarity with basic n8n workflow building",
    ],
    steps: [
      {
        heading: "Set up the prospect sourcing workflow",
        content: "In n8n, create a new workflow with an n8n Schedule trigger (runs every weekday at 7am). Connect an Apollo.io node configured with your ICP filters. Set the output limit to 50 new prospects per day. Connect an enrichment step using the HTTP Request node to pull LinkedIn data for each prospect. Store enriched prospects in a Google Sheet or Airtable base as your prospecting pipeline.",
      },
      {
        heading: "Build the OpenClaw research node",
        content: "Add an HTTP Request node that calls OpenClaw's local API endpoint for each new prospect. Pass the enriched prospect data (company, role, recent activity) and request the agent to research the prospect and generate: (1) a personalised first line for the email, (2) the most likely pain point for this prospect, and (3) a relevance score. OpenClaw returns this as structured JSON that feeds into the next node.",
      },
      {
        heading: "Create the email writing workflow",
        content: "Add another OpenClaw API call that takes the research output and generates a full personalised email using your template structure. Pass the personalised first line, pain point, and your email template shell. The agent fills the variables and returns a complete email draft. Add a review step: high-scoring prospects (8+/10 relevance) auto-queue for sending; lower-scoring ones route to a human review Google Sheet.",
      },
      {
        heading: "Configure the sequence and sending logic",
        content: "Build the sequence management workflow: a second n8n workflow checks the prospecting pipeline daily for prospects who haven't replied after 5 days and queues the follow-up email. A third workflow handles the day-12 final touch. All sending goes through the Gmail node with a daily send limit (50/day maximum to protect your domain reputation). Log every send event back to your CRM.",
      },
      {
        heading: "Add CRM sync and reply detection",
        content: "Configure a Gmail trigger workflow that watches your sent folder for replies to outreach emails. When a reply is detected, n8n automatically updates the deal status in HubSpot/Pipedrive to 'Replied', pauses any remaining sequence steps for that prospect, and sends you a Slack notification. Replied prospects are your hottest leads — make sure they hit your CRM immediately so nothing falls through the cracks.",
      },
    ],
    tip: "Start with just 10 prospects through the full workflow before opening the floodgates. Verify that every piece — research quality, email personalisation, CRM logging, sequence management — is working correctly at small scale. A bug in a 10-prospect test costs nothing. A bug in a 500-prospect campaign can damage your domain reputation permanently.",
  },

  "automate-your-hiring-pipeline": {
    title: "Automate Your Hiring Pipeline",
    category: "HR",
    difficulty: "Intermediate",
    readTime: "28 min",
    intro: "Hiring is one of the most time-intensive processes in any growing business — and much of that time is spent on tasks that don't require human judgment: writing job descriptions, screening applications, scheduling interviews, and chasing candidates for responses. An AI hiring agent handles all of this, letting your team focus on the actual decision-making.",
    whatYouNeed: [
      "OpenClaw with the HR skill pack",
      "An ATS (Applicant Tracking System) — Workable, Lever, or Greenhouse",
      "LinkedIn Recruiter or job board access",
      "A Calendly or similar scheduling tool",
      "A standard interview process defined in writing",
    ],
    steps: [
      {
        heading: "Define your hiring process in writing",
        content: "Before automating anything, document your hiring process: stages (Application → Phone Screen → Technical Assessment → Hiring Manager Interview → Offer), what happens at each stage, SLA targets (respond to applications within 2 business days, schedule interviews within 5), and the screening criteria for each role. This document becomes the agent's operating manual.",
      },
      {
        heading: "Automate job description creation",
        content: "Configure the Job Description Writer skill with your employer brand guidelines, standard benefits package, and inclusive language preferences. When a new role opens, provide a 3–5 sentence brief about the role and team. The agent generates a full JD in minutes — you review and approve. Connect the approved JD to auto-post to LinkedIn, Indeed, and any other boards you use via the job board integrations.",
      },
      {
        heading: "Set up application screening",
        content: "Configure screening criteria per role: must-have qualifications, nice-to-have experience, red flags to flag for human review, and deal-breakers that auto-reject (if you choose to use them). The agent reads each application against these criteria and produces a screening summary: qualified/unqualified/review required, with a brief explanation. Qualified candidates automatically move to the phone screen stage.",
      },
      {
        heading: "Automate interview scheduling",
        content: "Connect your Calendly or Google Calendar to the scheduling workflow. When a candidate advances to a stage, the agent sends them a scheduling link with available slots pre-pulled from the interviewer's calendar. When they book, the agent creates the calendar event, sends confirmation emails with role details and preparation guidance, and updates the ATS automatically. No back-and-forth emails.",
      },
      {
        heading: "Configure candidate communication",
        content: "Define email templates for every touchpoint: application received, application under review, advancing to next round, scheduling request, rejection (with two variants — early stage and late stage), and offer stage. The agent sends all candidate communications on your defined SLAs. Late-stage rejections are drafted for human review before sending — these deserve a personal touch. All communication is logged in the ATS.",
      },
    ],
    tip: "The highest-leverage automation in hiring isn't the screening — it's the scheduling. Interview scheduling typically accounts for 30–40% of recruiter time. Getting this one workflow right saves more time than any other part of the automation. Get it perfect before anything else.",
  },
};

const difficultyColors: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

const guidePrices: Record<string, number> = {
  Beginner: 9,
  Intermediate: 14,
  Advanced: 19,
};


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
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
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
        <span className="font-bold" style={{ letterSpacing: "-0.02em" }}><span style={{ color: "#FFD700" }}>My </span><span style={{ color: "#F97316", fontSize: "1.2em" }}>AI </span><span style={{ color: "#FFD700" }}>Workforce</span></span>
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

function GuideBuyButton({ guide }: { guide: Guide & { difficulty: string; title: string } }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const price = guidePrices[guide.difficulty]

  const handleBuy = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName: guide.title,
          amount: price * 100,
          type: 'payment',
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch {
      setError('Failed to connect to payment system')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleBuy}
        disabled={loading}
        className="inline-block px-10 py-4 rounded-xl font-bold text-base transition-opacity"
        style={{ backgroundColor: "#FFD700", color: "#0A0A0A", opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
      >
        {loading ? 'Redirecting to checkout…' : `Buy Now — $${price} →`}
      </button>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug];
  if (!guide) notFound();

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-16 px-6 border-b" style={{ backgroundColor: "var(--bg-section)", borderColor: "var(--nav-border)" }}>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>
              <Link href="/guides" style={{ color: "var(--yellow)" }}>Guides</Link>
              <span className="mx-2">→</span>
              <span>{guide.category}</span>
            </div>
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,215,0,0.3)" }}>
                {guide.category}
              </span>
              <span className="text-xs font-semibold" style={{ color: difficultyColors[guide.difficulty] }}>
                {guide.difficulty}
              </span>
              <span className="text-xs" style={{ color: "var(--text-dim)" }}>📖 {guide.readTime} read</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,215,0,0.15)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.4)" }}>
                ${guidePrices[guide.difficulty]} one-time
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>
              {guide.title}
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-dim)", lineHeight: "1.75" }}>
              {guide.intro}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* What You'll Need */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6" style={{ letterSpacing: "-0.02em" }}>
              What You&apos;ll Need
            </h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <ul className="flex flex-col gap-3">
                {guide.whatYouNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-base">✅</span>
                    <span style={{ color: "var(--text-dim)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Steps */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-8" style={{ letterSpacing: "-0.02em" }}>
              Step-by-Step Guide
            </h2>
            <div className="flex flex-col gap-8">
              {guide.steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "#FFD700", color: "#0A0A0A", border: "2px solid rgba(255,215,0,0.6)" }}
                    >
                      {i + 1}
                    </div>
                    {i < guide.steps.length - 1 && (
                      <div className="w-px flex-1 mt-3" style={{ backgroundColor: "var(--border)" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text)" }}>{step.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)", lineHeight: "1.75" }}>
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Tip */}
          <section className="mb-14">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.3)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span style={{ fontSize: "2rem" }}>💡</span>
                <span className="text-base font-bold" style={{ color: "#FFD700" }}>Pro Tip</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)", lineHeight: "1.75" }}>
                {guide.tip}
              </p>
            </div>
          </section>

          {/* Buy Now CTA */}
          <section
            className="rounded-2xl p-8 text-center mb-8"
            style={{ backgroundColor: "rgba(255,215,0,0.06)", border: "2px solid rgba(255,215,0,0.4)" }}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
              Get the Full Guide
            </h2>
            <p className="text-3xl font-extrabold mb-1" style={{ color: "#FFD700" }}>
              ${guidePrices[guide.difficulty]}
            </p>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-dim)" }}>
              One-time purchase. Instant access. Includes all steps, templates, and setup files.
            </p>
            <GuideBuyButton guide={guide} />
            <p className="text-xs mt-3" style={{ color: "var(--text-dim)" }}>Secure checkout via Stripe</p>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
              Ready to skip the setup?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-dim)" }}>
              Browse ready-made agents in our marketplace — pre-built, pre-configured, and ready to deploy in minutes.
            </p>
            <Link
              href="/marketplace"
              className="inline-block px-8 py-3 rounded-xl font-bold text-sm"
              style={{ backgroundColor: "#FFD700", color: "#0A0A0A" }}
            >
              Browse the Marketplace →
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
