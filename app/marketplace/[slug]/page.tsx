"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { notFound } from "next/navigation";

// Agent data — all 25 marketplace agents
const agents: Record<string, {
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  seller: string;
  description: string;
  features: string[];
  tags: string[];
  longDescription: string;
  includes: string[];
}> = {
  "lead-qualifier": {
    title: "Lead Qualifier",
    category: "Sales",
    price: "$29/mo",
    rating: 5,
    reviews: 214,
    seller: "My AI Workforce",
    description: "Automatically scores and qualifies inbound leads based on your ICP criteria, so your sales team focuses only on high-value prospects.",
    features: [
      "ICP-based lead scoring",
      "CRM auto-tagging",
      "Disqualification reasoning",
      "Slack / email alerts",
      "Weekly qualification report",
      "Works with HubSpot & Salesforce",
    ],
    tags: ["HubSpot", "Salesforce", "Lead Scoring", "Sales", "Automation"],
    longDescription: `Your sales team's time is your most valuable asset. Lead Qualifier ensures they spend it exclusively on prospects who are actually worth pursuing. The agent ingests every new inbound lead, cross-references against your ideal customer profile criteria — company size, industry, tech stack, geography, and buying signals — and produces a score with a plain-English explanation of why the lead is or isn't a fit.\n\nLow-scoring leads are automatically tagged and deprioritised in your CRM. High-scoring leads trigger immediate Slack and email alerts to the right rep. The result: less time wasted on dead-ends, faster follow-up on hot prospects, and a clear audit trail showing exactly why each lead was scored the way it was.\n\nAfter 30 days, the agent analyses your closed/won data and refines the scoring model automatically — so it gets smarter the longer you run it.`,
    includes: [
      "SKILL.md with full qualification logic",
      "ICP configuration template",
      "HubSpot + Salesforce integration guide",
      "Slack alert workflow",
      "Weekly report template",
      "SETUP.md",
    ],
  },
  "cold-outreach-agent": {
    title: "Cold Outreach Agent",
    category: "Sales",
    price: "$49/mo",
    rating: 4,
    reviews: 187,
    seller: "My AI Workforce",
    description: "Researches prospects and drafts hyper-personalised cold emails at scale. Integrates with your outbox for one-click send.",
    features: [
      "Prospect research via LinkedIn & web",
      "Personalised first-line generation",
      "Multi-touch sequence builder",
      "One-click send from Gmail/Outlook",
      "Reply detection & auto-pause",
      "Performance analytics dashboard",
    ],
    tags: ["Gmail", "LinkedIn", "Personalization", "Cold Email", "Outreach"],
    longDescription: `Generic cold emails get ignored. Cold Outreach Agent researches every prospect before writing a single word — checking their LinkedIn activity, company news, recent hires, and product updates to find a genuine, relevant angle for each message. The result is outreach that reads like it came from someone who actually did their homework.\n\nThe agent builds full multi-touch sequences: an opening email, two follow-ups, and a break-up message — each calibrated to the prospect's likely objection at that stage. When a reply is detected, the sequence pauses automatically and routes the thread to your inbox for human takeover.\n\nOver time, the agent learns which subject lines, openers, and angles generate replies for your specific audience, and surfaces that intelligence back to you in a weekly performance digest.`,
    includes: [
      "SKILL.md with outreach logic",
      "Prospect research workflow",
      "4 battle-tested email templates",
      "Gmail + Outlook integration",
      "Reply-detection configuration",
      "Analytics report template",
      "SETUP.md",
    ],
  },
  "crm-updater": {
    title: "CRM Updater",
    category: "Sales",
    price: "$39/mo",
    rating: 5,
    reviews: 302,
    seller: "My AI Workforce",
    description: "Listens to call recordings and emails, then automatically updates your CRM with deal stage, notes, and next actions — no manual entry.",
    features: [
      "Call recording transcription",
      "Auto-extract deal stage signals",
      "CRM field update automation",
      "Next-action task creation",
      "Email thread summarisation",
      "Works with Salesforce & Pipedrive",
    ],
    tags: ["Salesforce", "Pipedrive", "Automation", "CRM", "Sales"],
    longDescription: `Manual CRM hygiene kills sales productivity. Reps spend 20–30% of their week logging calls, updating deal stages, and writing notes — time that should be spent selling. CRM Updater eliminates all of that by listening to your calls and reading your emails, extracting the relevant signals, and updating your CRM automatically.\n\nAfter each call, the agent transcribes the recording, identifies deal stage indicators, extracts commitments and next actions, and writes structured notes directly into the CRM deal record. When a rep sends or receives an email, the agent parses it for deal-relevant content and logs it automatically.\n\nThe result is a CRM that's always up to date without anyone having to touch it. Sales managers get accurate pipeline visibility. Reps reclaim hours every week. Deal data becomes a reliable asset instead of a stale liability.`,
    includes: [
      "SKILL.md with CRM update logic",
      "Salesforce + Pipedrive connectors",
      "Call transcription workflow",
      "Email parsing configuration",
      "Field-mapping template",
      "SETUP.md",
    ],
  },
  "follow-up-agent": {
    title: "Follow-up Agent",
    category: "Sales",
    price: "$19/mo",
    rating: 4,
    reviews: 156,
    seller: "My AI Workforce",
    description: "Tracks open deals and sends timely, context-aware follow-up messages to keep prospects warm without clogging your calendar.",
    features: [
      "Deal inactivity monitoring",
      "Context-aware follow-up drafts",
      "Personalised timing per prospect",
      "Multi-channel (email + LinkedIn)",
      "Human-approval queue",
      "Deal decay reporting",
    ],
    tags: ["Gmail", "Sequences", "24/7", "Sales", "Follow-up"],
    longDescription: `Most deals are lost not because the prospect said no, but because the follow-up fell through the cracks. Follow-up Agent monitors every open deal in your pipeline and triggers context-aware follow-ups at exactly the right time — without you having to think about it.\n\nThe agent reads your CRM to understand where each deal stands, what was discussed last, and how long the prospect has been quiet. It then drafts a follow-up that references specific details from your conversation, making it feel personal rather than templated. You review and approve with a single click, or let it send automatically once you've established the right trust threshold.\n\nDeals that go cold despite follow-up attempts are surfaced in a weekly decay report so you can make an informed call about whether to keep pursuing or move on.`,
    includes: [
      "SKILL.md with follow-up logic",
      "CRM deal monitoring workflow",
      "5 follow-up message templates",
      "Approval queue setup guide",
      "Deal decay report template",
      "SETUP.md",
    ],
  },
  "social-media-scheduler": {
    title: "Social Media Scheduler",
    category: "Marketing",
    price: "$29/mo",
    rating: 5,
    reviews: 389,
    seller: "My AI Workforce",
    description: "Plans, writes, and schedules posts across LinkedIn, Twitter, and Instagram using your brand voice and content calendar.",
    features: [
      "Multi-platform scheduling",
      "Brand voice configuration",
      "Content calendar integration",
      "Hashtag optimisation",
      "Engagement time analysis",
      "Monthly performance report",
    ],
    tags: ["LinkedIn", "Twitter", "Instagram", "Marketing", "Content"],
    longDescription: `Consistent social media presence is one of the highest-ROI marketing activities — but it's relentless work when done manually. Social Media Scheduler takes your content ideas, content calendar, or even a rough brief, and handles everything from writing to scheduling across all your platforms.\n\nThe agent learns your brand voice from existing posts and brand guidelines, then writes platform-native content: punchy threads for Twitter, professional thought-leadership for LinkedIn, and visually-primed captions for Instagram. It analyses your audience engagement patterns to schedule posts at the times most likely to reach them.\n\nEach month, you get a performance report showing which content types, topics, and formats drove the most engagement — informing the next month's content strategy automatically.`,
    includes: [
      "SKILL.md with scheduling logic",
      "Brand voice configuration template",
      "Content calendar integration guide",
      "LinkedIn + Twitter + Instagram connectors",
      "Hashtag research workflow",
      "Monthly performance report template",
      "SETUP.md",
    ],
  },
  "seo-audit-agent": {
    title: "SEO Audit Agent",
    category: "Marketing",
    price: "$39/mo",
    rating: 4,
    reviews: 143,
    seller: "My AI Workforce",
    description: "Crawls your site weekly, identifies SEO gaps, and delivers a prioritised action list with suggested fixes and content ideas.",
    features: [
      "Weekly automated site crawl",
      "Technical SEO issue detection",
      "Keyword gap analysis",
      "Content improvement suggestions",
      "Competitor comparison",
      "Prioritised action report",
    ],
    tags: ["SEO", "Content", "Weekly Reports", "Marketing", "Technical"],
    longDescription: `SEO is one of those disciplines where consistent attention compounds into massive long-term results — but most businesses let it slide because it requires ongoing expertise and effort. SEO Audit Agent automates the weekly hygiene work so you can focus on executing fixes rather than finding them.\n\nEvery week, the agent crawls your site, checks for broken links, missing meta tags, slow pages, duplicate content, and indexing issues. It cross-references your pages against target keywords and identifies where you're close to ranking but need a push. It also monitors a set of competitors and flags when they publish new content in your topic areas.\n\nDelivered every Monday morning: a prioritised list of SEO fixes ranked by estimated impact, along with content ideas specifically designed to capture traffic you're currently missing.`,
    includes: [
      "SKILL.md with audit logic",
      "Site crawl configuration",
      "Competitor tracking setup",
      "Keyword gap analysis workflow",
      "Weekly report template",
      "SETUP.md",
    ],
  },
  "content-repurposer": {
    title: "Content Repurposer",
    category: "Marketing",
    price: "$25/mo",
    rating: 5,
    reviews: 271,
    seller: "My AI Workforce",
    description: "Takes one long-form piece — blog, podcast, or video — and repurposes it into threads, shorts, newsletters, and social snippets.",
    features: [
      "Blog-to-social conversion",
      "Podcast transcription + repurposing",
      "Newsletter section extraction",
      "Twitter/LinkedIn thread creation",
      "Short-form video script generation",
      "Brand voice preservation",
    ],
    tags: ["Blog", "Podcast", "Multi-channel", "Content", "Repurposing"],
    longDescription: `Creating great long-form content is hard. Distributing it shouldn't be. Content Repurposer takes a single piece of content — a blog post, podcast episode, or video transcript — and transforms it into a full week of social content across every channel you use.\n\nFeed the agent a 2,000-word blog post and get back: five LinkedIn posts, a Twitter thread, three Instagram captions, a newsletter intro, and two short-form video scripts. Each piece is adapted for the platform's native format and tone, not just copy-pasted.\n\nThe agent maintains your brand voice throughout, learns your preferred content formats over time, and batches output so you can review and schedule an entire week's content in one sitting — typically under 20 minutes.`,
    includes: [
      "SKILL.md with repurposing logic",
      "Platform format templates (6 platforms)",
      "Brand voice configuration",
      "Podcast transcription workflow",
      "Batch review + scheduling guide",
      "SETUP.md",
    ],
  },
  "email-campaign-agent": {
    title: "Email Campaign Agent",
    category: "Marketing",
    price: "$45/mo",
    rating: 4,
    reviews: 198,
    seller: "My AI Workforce",
    description: "Designs, writes, and sends segmented email campaigns. Monitors open rates and auto-adjusts subject lines using A/B logic.",
    features: [
      "Audience segmentation",
      "AI-written campaign copy",
      "A/B subject line testing",
      "Send-time optimisation",
      "Open rate monitoring",
      "Automated re-engagement sequences",
    ],
    tags: ["Mailchimp", "Klaviyo", "A/B Testing", "Email", "Marketing"],
    longDescription: `Email remains the highest-ROI marketing channel — but only if you send the right message to the right person at the right time. Email Campaign Agent handles the full lifecycle of your email marketing: from segmenting your list and writing campaign copy, to A/B testing subject lines and sending re-engagement sequences to cold subscribers.\n\nThe agent analyses your audience data to build meaningful segments, then writes personalised campaigns for each one. Subject lines are tested automatically across small send cohorts before the winning variant goes to the full list. Send times are optimised per subscriber based on their historical open patterns.\n\nEvery campaign generates a performance summary showing what worked, what didn't, and what the agent will do differently next time. Over 60 days, you'll have a clear picture of what your audience responds to.`,
    includes: [
      "SKILL.md with campaign logic",
      "Mailchimp + Klaviyo integration",
      "Segmentation framework",
      "10 campaign copy templates",
      "A/B testing configuration",
      "Re-engagement sequence (5 emails)",
      "SETUP.md",
    ],
  },
  "invoice-processor": {
    title: "Invoice Processor",
    category: "Operations",
    price: "Free",
    rating: 5,
    reviews: 412,
    seller: "My AI Workforce",
    description: "Reads incoming invoices from email or Drive, extracts line items, matches to POs, and queues for approval — all hands-free.",
    features: [
      "Email + Drive invoice detection",
      "OCR-based data extraction",
      "PO matching and reconciliation",
      "Approval queue management",
      "Xero / QuickBooks sync",
      "Exception flagging",
    ],
    tags: ["Google Drive", "Xero", "QuickBooks", "Finance", "Operations"],
    longDescription: `Invoice processing is one of the most time-consuming and error-prone tasks in any business. Invoice Processor eliminates it entirely — watching your email and Google Drive for new invoices, extracting every field (vendor, date, line items, totals, tax), matching against open purchase orders, and routing for approval automatically.\n\nThe agent handles PDF, Word, and image-based invoices with equal accuracy. When it finds a match to an existing PO, it creates the bill entry in Xero or QuickBooks and sends for single-click approval. When something doesn't match — a duplicate, a price discrepancy, an unrecognised vendor — it flags the exception with a clear explanation.\n\nThe result: your AP process runs itself. Approvers spend 30 seconds per invoice instead of 10 minutes. Month-end close becomes a formality instead of a scramble.`,
    includes: [
      "SKILL.md with processing logic",
      "Gmail + Drive invoice detection",
      "Xero + QuickBooks connector",
      "PO matching workflow",
      "Exception handling guide",
      "SETUP.md",
    ],
  },
  "expense-reporter": {
    title: "Expense Reporter",
    category: "Operations",
    price: "$19/mo",
    rating: 4,
    reviews: 176,
    seller: "My AI Workforce",
    description: "Employees snap receipts, the agent categorises, codes, and compiles expense reports ready for manager approval in minutes.",
    features: [
      "Mobile receipt capture via Slack",
      "Automatic categorisation & coding",
      "Policy compliance checking",
      "Weekly report compilation",
      "Manager approval workflow",
      "Accounting system sync",
    ],
    tags: ["Receipts", "Slack", "Automation", "Finance", "Operations"],
    longDescription: `Expense reporting is everyone's least favourite task. Employees hate doing it, managers hate approving it, and finance hates chasing it. Expense Reporter removes the friction from every step: employees snap a photo of their receipt, drop it in Slack, and forget about it. The agent handles everything else.\n\nThe agent extracts merchant name, amount, date, and category from each receipt, cross-checks against your expense policy, and flags anything that needs a note or approval. At the end of each week, it compiles a clean expense report per employee and routes it for manager review. One click to approve, another to sync to your accounting system.\n\nFinance teams using Expense Reporter typically close monthly expense cycles in one day instead of two weeks.`,
    includes: [
      "SKILL.md with expense logic",
      "Slack receipt intake workflow",
      "Expense policy configuration template",
      "Xero + QuickBooks sync",
      "Approval workflow setup",
      "SETUP.md",
    ],
  },
  "meeting-summariser": {
    title: "Meeting Summariser",
    category: "Operations",
    price: "$29/mo",
    rating: 5,
    reviews: 634,
    seller: "My AI Workforce",
    description: "Joins your Zoom or Teams calls, transcribes the discussion, and delivers structured summaries with action items to every attendee.",
    features: [
      "Auto-join Zoom / Teams / Meet",
      "Full call transcription",
      "Structured summary generation",
      "Action item extraction",
      "Decision log",
      "Post-meeting email distribution",
    ],
    tags: ["Zoom", "Teams", "Action Items", "Operations", "Meetings"],
    longDescription: `Every meeting produces decisions and commitments that too often get lost in the noise. Meeting Summariser joins your calls automatically, transcribes everything, and delivers a structured summary to all attendees within minutes of the call ending — including a clear list of who agreed to do what by when.\n\nThe summary follows a consistent format: a one-paragraph overview, key decisions made, action items with owners and due dates, and topics that need a follow-up meeting. Attendees don't have to take notes. Nothing falls through the cracks.\n\nOver time, the agent builds an institutional knowledge base from your meeting history — searchable summaries, recurring topics, and action item completion rates — giving you unprecedented visibility into how your organisation's decisions are actually being executed.`,
    includes: [
      "SKILL.md with summarisation logic",
      "Zoom + Teams + Meet integration",
      "Summary format template",
      "Action item tracking workflow",
      "Post-meeting email template",
      "Meeting knowledge base setup",
      "SETUP.md",
    ],
  },
  "data-entry-agent": {
    title: "Data Entry Agent",
    category: "Operations",
    price: "From $15",
    rating: 4,
    reviews: 229,
    seller: "My AI Workforce",
    description: "Extracts structured data from PDFs, forms, and emails and populates your spreadsheets or databases with zero copy-paste errors.",
    features: [
      "PDF + form data extraction",
      "Email field parsing",
      "Google Sheets + Airtable sync",
      "Duplicate detection",
      "Validation and error flagging",
      "Batch processing support",
    ],
    tags: ["Google Sheets", "Airtable", "PDF", "Operations", "Data"],
    longDescription: `Copy-paste data entry is one of the most error-prone and soul-destroying tasks in any business. Data Entry Agent eliminates it — reading PDFs, web forms, emails, and scanned documents, extracting the structured data inside, validating it, and populating your systems automatically.\n\nThe agent handles messy, inconsistently formatted source documents just as well as clean ones. It learns your data schema and maps incoming fields intelligently, flagging anything it can't resolve with confidence for human review. Duplicates are detected before they're entered. Validation rules catch format errors and out-of-range values in real time.\n\nBatch mode lets you drop 500 documents into a Drive folder and come back to find your spreadsheet fully populated — with an exceptions report for the handful of records that needed human attention.`,
    includes: [
      "SKILL.md with extraction logic",
      "Google Sheets + Airtable connectors",
      "PDF parsing configuration",
      "Validation rules template",
      "Batch processing workflow",
      "SETUP.md",
    ],
  },
  "inbound-triage-agent": {
    title: "Inbound Triage Agent",
    category: "Customer Support",
    price: "$49/mo",
    rating: 5,
    reviews: 508,
    seller: "My AI Workforce",
    description: "Reads every incoming support ticket, classifies by urgency and topic, and routes to the right team member instantly — 24/7.",
    features: [
      "Multi-channel ticket ingestion",
      "Urgency classification (P1–P4)",
      "Topic categorisation",
      "Smart team routing",
      "SLA countdown tracking",
      "24/7 operation",
    ],
    tags: ["Zendesk", "Intercom", "24/7", "Customer Support", "Triage"],
    longDescription: `When a customer is angry, every minute without a response makes it worse. Inbound Triage Agent processes every ticket the moment it arrives — regardless of channel — and ensures it reaches the right person with the right priority within seconds, even at 3am on a Sunday.\n\nThe agent reads the full ticket, assesses urgency based on language, customer tier, and topic, assigns a P1–P4 priority, categorises by issue type, and routes to the appropriate team member or queue. Critical issues trigger immediate alerts. SLA clocks start ticking from the moment of routing, with automated escalation if response windows are missed.\n\nSupport teams using Inbound Triage Agent see first-response times drop by 60–80% and report that their work is calmer and more focused — because triage chaos has been eliminated.`,
    includes: [
      "SKILL.md with triage logic",
      "Zendesk + Intercom + Freshdesk connectors",
      "Priority classification framework",
      "Team routing configuration",
      "SLA tracking workflow",
      "Escalation policy template",
      "SETUP.md",
    ],
  },
  "review-responder": {
    title: "Review Responder",
    category: "Customer Support",
    price: "$25/mo",
    rating: 4,
    reviews: 184,
    seller: "My AI Workforce",
    description: "Monitors Google, Trustpilot, and G2 for new reviews and drafts on-brand, personalised responses for your approval queue.",
    features: [
      "Multi-platform review monitoring",
      "Sentiment analysis",
      "On-brand response drafting",
      "Personalised reply generation",
      "Approval queue workflow",
      "Review trend reporting",
    ],
    tags: ["Google", "Trustpilot", "Brand Voice", "Customer Support", "Reviews"],
    longDescription: `Your online reviews are one of the most important trust signals for new customers — and how you respond to them matters almost as much as the review itself. Review Responder monitors your business listings across Google, Trustpilot, G2, and Capterra, and drafts personalised, on-brand responses for every new review within minutes of it being posted.\n\nFor positive reviews, the agent writes warm, genuine responses that reinforce what the reviewer loved. For negative reviews, it drafts empathetic, professional replies that acknowledge the issue, offer resolution, and protect your brand reputation. You review each draft before it goes live — one click to approve, or quick edits if needed.\n\nMonthly reporting shows your review velocity, average rating trend, common praise themes, and recurring complaint topics — giving you actionable intelligence about your customer experience.`,
    includes: [
      "SKILL.md with response logic",
      "Google + Trustpilot + G2 monitoring",
      "Brand voice configuration",
      "Response template library (positive + negative)",
      "Approval queue workflow",
      "Monthly trend report template",
      "SETUP.md",
    ],
  },
  "support-ticket-router": {
    title: "Support Ticket Router",
    category: "Customer Support",
    price: "$35/mo",
    rating: 5,
    reviews: 321,
    seller: "My AI Workforce",
    description: "Intelligently classifies and routes support tickets to the correct team or agent based on topic, sentiment, and SLA requirements.",
    features: [
      "Topic + sentiment classification",
      "Skills-based agent routing",
      "SLA-aware prioritisation",
      "Workload balancing",
      "Escalation trigger rules",
      "Routing accuracy reporting",
    ],
    tags: ["Zendesk", "Freshdesk", "SLA", "Customer Support", "Routing"],
    longDescription: `The difference between a good support team and a great one often comes down to routing. When the wrong person handles a ticket, customers wait longer, resolutions are less accurate, and teams feel overwhelmed. Support Ticket Router ensures every ticket lands with the agent best equipped to resolve it, with the right priority attached.\n\nThe agent classifies each ticket by topic, product area, and customer sentiment, then matches to the most appropriate team member based on their skills, current workload, and availability. SLA requirements are factored into routing decisions in real time — a high-priority ticket from an enterprise customer always jumps the queue.\n\nRouting decisions are logged and reviewed weekly, with accuracy metrics surfaced so you can continuously refine the routing logic as your team and product evolve.`,
    includes: [
      "SKILL.md with routing logic",
      "Zendesk + Freshdesk integration",
      "Skills matrix configuration template",
      "SLA tier configuration",
      "Workload balancing algorithm",
      "Routing accuracy dashboard",
      "SETUP.md",
    ],
  },
  "faq-bot": {
    title: "FAQ Bot",
    category: "Customer Support",
    price: "Free",
    rating: 4,
    reviews: 453,
    seller: "My AI Workforce",
    description: "Trains on your documentation and instantly answers customer questions via chat, deflecting up to 70% of tier-1 support volume.",
    features: [
      "Documentation ingestion",
      "Natural language Q&A",
      "Confidence-based escalation",
      "Chat widget embed",
      "Unanswered question logging",
      "Self-improving knowledge base",
    ],
    tags: ["Chat", "Docs", "Deflection", "Customer Support", "FAQ"],
    longDescription: `Most support tickets ask the same 50 questions. FAQ Bot trains on your documentation, help centre, and past resolved tickets, then answers those questions instantly — 24 hours a day, in seconds, without involving a human agent.\n\nThe bot handles natural language — customers don't need to type exact keywords. It understands intent, pulls from the right section of your docs, and responds in plain, helpful language. When confidence is low or the question falls outside its knowledge, it hands off gracefully to a human agent with a summary of what was asked.\n\nEvery unanswered question is logged, clustered by topic, and surfaced in a weekly gaps report — so you can expand the knowledge base over time and drive deflection rates progressively higher.`,
    includes: [
      "SKILL.md with Q&A logic",
      "Documentation ingestion workflow",
      "Chat widget embed code",
      "Escalation handoff configuration",
      "Unanswered question log",
      "SETUP.md",
    ],
  },
  "receipt-scanner": {
    title: "Receipt Scanner",
    category: "Finance",
    price: "Free",
    rating: 5,
    reviews: 267,
    seller: "My AI Workforce",
    description: "Scans and parses receipts from email or photos, extracts merchant, amount, and date, and logs to your accounting software automatically.",
    features: [
      "Email + photo receipt capture",
      "OCR data extraction",
      "Merchant recognition",
      "Auto-categorisation",
      "Xero + QuickBooks logging",
      "Duplicate detection",
    ],
    tags: ["Xero", "QuickBooks", "OCR", "Finance", "Receipts"],
    longDescription: `Lost receipts and manual expense logging cost businesses thousands every year in missed deductions and reconciliation time. Receipt Scanner eliminates both problems: every receipt — whether forwarded by email, photographed on a phone, or dropped in a shared Drive folder — is automatically captured, parsed, and logged.\n\nThe agent uses OCR to extract merchant name, transaction date, amount, and tax components from even crumpled, low-quality images. It auto-categorises the expense based on merchant type and your chart of accounts, and creates the transaction record in Xero or QuickBooks. Duplicates are detected before they're entered.\n\nAt month end, your expense records are complete, categorised, and ready for reconciliation — with zero manual data entry.`,
    includes: [
      "SKILL.md with scanning logic",
      "Email + Drive receipt ingestion",
      "Xero + QuickBooks connector",
      "Auto-categorisation configuration",
      "Duplicate detection workflow",
      "SETUP.md",
    ],
  },
  "financial-reporter": {
    title: "Financial Reporter",
    category: "Finance",
    price: "$45/mo",
    rating: 4,
    reviews: 139,
    seller: "My AI Workforce",
    description: "Pulls data from your accounting tool and generates clear P&L, cash flow, and runway reports on a schedule you define.",
    features: [
      "Automated P&L generation",
      "Cash flow statement",
      "Runway calculation",
      "Budget vs. actual tracking",
      "Scheduled report delivery",
      "Plain-English commentary",
    ],
    tags: ["Xero", "Reports", "Weekly", "Finance", "Analytics"],
    longDescription: `Most founders and executives only see financial data when their accountant sends a report — usually weeks after the period has closed. Financial Reporter gives you current, clean financial intelligence on whatever schedule you define: daily, weekly, or monthly.\n\nThe agent connects to Xero or QuickBooks, pulls the latest transaction data, and generates structured reports covering P&L, cash flow, balance sheet highlights, and runway calculation. Each report includes plain-English commentary explaining the numbers — what changed, why it matters, and what to watch.\n\nBudget vs. actual tracking highlights where you're on track and where you're drifting, early enough to do something about it. You arrive at every board meeting knowing your numbers cold.`,
    includes: [
      "SKILL.md with reporting logic",
      "Xero + QuickBooks connector",
      "P&L report template",
      "Cash flow report template",
      "Budget vs. actual framework",
      "Plain-English commentary prompts",
      "SETUP.md",
    ],
  },
  "quote-comparator": {
    title: "Quote Comparator",
    category: "Finance",
    price: "$29/mo",
    rating: 4,
    reviews: 92,
    seller: "My AI Workforce",
    description: "Receives supplier quotes, normalises line items across formats, and produces a side-by-side comparison to support purchase decisions.",
    features: [
      "Multi-format quote ingestion",
      "Line item normalisation",
      "Side-by-side comparison table",
      "Total cost of ownership calculation",
      "Recommendation summary",
      "Decision audit trail",
    ],
    tags: ["Email", "Procurement", "Analysis", "Finance", "Purchasing"],
    longDescription: `Comparing supplier quotes sounds simple but is surprisingly time-consuming when each vendor uses a different format, different line item labels, and different pricing structures. Quote Comparator normalises everything into a consistent structure so you can make clear, defensible purchase decisions quickly.\n\nForward or upload the quotes — PDFs, emails, spreadsheets — and the agent extracts every line item, maps equivalent items across suppliers, identifies hidden costs (delivery, setup, ongoing fees), and produces a clean side-by-side comparison table. It calculates total cost of ownership over your intended contract period and flags the most important trade-offs between options.\n\nEvery comparison is logged with the decision made and the rationale, creating an audit trail for finance and procurement governance.`,
    includes: [
      "SKILL.md with comparison logic",
      "Multi-format document parser",
      "Line item normalisation workflow",
      "Comparison table template",
      "TCO calculation model",
      "Decision log template",
      "SETUP.md",
    ],
  },
  "onboarding-assistant": {
    title: "Onboarding Assistant",
    category: "HR",
    price: "$39/mo",
    rating: 5,
    reviews: 203,
    seller: "My AI Workforce",
    description: "Guides new hires through their first 30 days — sends documents, books intros, tracks tasks, and answers HR questions on-demand.",
    features: [
      "30-day onboarding plan automation",
      "Document delivery + e-signature tracking",
      "Intro meeting scheduling",
      "Task completion monitoring",
      "HR Q&A via Slack",
      "Manager progress reports",
    ],
    tags: ["Slack", "Notion", "Onboarding", "HR", "Automation"],
    longDescription: `The first 30 days determine whether a new hire thrives or quietly starts looking elsewhere. Onboarding Assistant ensures every new employee gets a structured, consistent onboarding experience — regardless of how busy HR is or which manager they report to.\n\nThe moment a new hire is entered into the system, the agent kicks off their onboarding plan: sending welcome messages, documents, and contracts; scheduling intro meetings with key colleagues; assigning learning tasks with due dates; and standing by in Slack to answer HR questions immediately at any hour.\n\nManagers receive weekly progress reports showing which tasks are complete and where their new hire is getting stuck. After 30 days, an automated check-in survey captures feedback to continuously improve the program.`,
    includes: [
      "SKILL.md with onboarding logic",
      "30-day onboarding plan template",
      "Document delivery workflow",
      "Slack HR assistant configuration",
      "Manager progress report template",
      "30-day check-in survey",
      "SETUP.md",
    ],
  },
  "job-description-writer": {
    title: "Job Description Writer",
    category: "HR",
    price: "From $10",
    rating: 4,
    reviews: 118,
    seller: "My AI Workforce",
    description: "Turns a brief role summary into a polished, inclusive job description optimised for search and aligned to your employer brand.",
    features: [
      "Role brief to full JD conversion",
      "Inclusive language checking",
      "SEO optimisation for job boards",
      "Employer brand alignment",
      "Compensation benchmarking notes",
      "Multi-format export",
    ],
    tags: ["LinkedIn", "Indeed", "Inclusive Language", "HR", "Recruiting"],
    longDescription: `A poorly written job description is one of the most expensive recruiting mistakes you can make — it either attracts the wrong candidates or puts off the right ones before they even apply. Job Description Writer transforms a rough role brief into a polished, inclusive job description that attracts strong candidates and reflects well on your employer brand.\n\nProvide a few sentences about the role, the team, and the key requirements. The agent expands this into a full JD with a compelling role overview, clear responsibilities, well-calibrated requirements (distinguishing must-haves from nice-to-haves), and an authentic benefits section. It checks for exclusionary language, optimises for search visibility on LinkedIn and Indeed, and calibrates the seniority signals to attract the level you're actually hiring for.\n\nOutput is delivered in clean copy ready to paste into any ATS or job board, plus optional HTML and markdown formats.`,
    includes: [
      "SKILL.md with JD writing logic",
      "Role brief intake template",
      "Inclusive language checker",
      "SEO keyword guidance",
      "Employer brand configuration",
      "Multi-format export workflow",
      "SETUP.md",
    ],
  },
  "blog-writer-agent": {
    title: "Blog Writer Agent",
    category: "Content",
    price: "$59/mo",
    rating: 5,
    reviews: 347,
    seller: "My AI Workforce",
    description: "Researches topics, outlines, and writes SEO-optimised blog posts in your brand voice. Delivers drafts ready for a quick human review.",
    features: [
      "Topic research and ideation",
      "SEO-driven content outlines",
      "Full draft creation",
      "Brand voice matching",
      "Internal link suggestions",
      "WordPress + CMS publishing",
    ],
    tags: ["SEO", "WordPress", "Brand Voice", "Content", "Blogging"],
    longDescription: `High-quality blog content is one of the most powerful long-term marketing investments — but it takes hours per post to do well. Blog Writer Agent handles the entire process from research to draft: finding the right angle on each topic, structuring content to rank, writing in your brand voice, and delivering a polished draft that needs only light editing before publishing.\n\nThe agent starts by researching the topic: understanding search intent, identifying the key questions to answer, and reviewing top-ranking content to find gaps your post can fill. It structures the post for SEO — proper heading hierarchy, featured snippet optimisation, strategic keyword placement — while keeping the writing genuinely useful and readable.\n\nDrafts are delivered with metadata suggestions (title tag, meta description), internal link recommendations, and a brief editorial note explaining the strategic choices made. Typically ready to publish after 15–20 minutes of human review.`,
    includes: [
      "SKILL.md with writing logic",
      "Topic research workflow",
      "SEO outline framework",
      "Brand voice configuration",
      "WordPress + Webflow publishing guide",
      "Metadata template",
      "SETUP.md",
    ],
  },
  "video-script-agent": {
    title: "Video Script Agent",
    category: "Content",
    price: "$35/mo",
    rating: 4,
    reviews: 164,
    seller: "My AI Workforce",
    description: "Writes engaging YouTube and short-form video scripts complete with hooks, talking points, and calls to action tailored to your niche.",
    features: [
      "Hook generation (3 variants)",
      "Full script with talking points",
      "Short-form adaptation",
      "CTA optimisation",
      "Thumbnail title suggestions",
      "Platform-native tone (YT vs TikTok)",
    ],
    tags: ["YouTube", "TikTok", "Shorts", "Content", "Video"],
    longDescription: `The difference between a video that gets 200 views and one that gets 200,000 is usually the first 10 seconds. Video Script Agent focuses relentlessly on what makes video content work: a hook that stops the scroll, a structure that retains viewers, and a payoff that drives action.\n\nFor YouTube long-form, the agent writes a complete script with an attention-grabbing hook (three variants to choose from), clearly organised sections, natural-sounding dialogue in your voice, and a compelling CTA. For TikTok and Reels, it adapts the same core idea into a punchy short-form script optimised for the sub-60-second format.\n\nEach script comes with suggested thumbnail title text, chapter markers for YouTube, and a brief note on why the hook structure was chosen — so you learn what works for your audience over time.`,
    includes: [
      "SKILL.md with scripting logic",
      "Hook generation framework",
      "Long-form script template",
      "Short-form adaptation workflow",
      "CTA library (10 variations)",
      "Thumbnail title suggestions",
      "SETUP.md",
    ],
  },
  "competitor-monitor": {
    title: "Competitor Monitor",
    category: "Research",
    price: "$49/mo",
    rating: 5,
    reviews: 221,
    seller: "My AI Workforce",
    description: "Tracks competitor websites, social channels, and pricing pages for changes and delivers a weekly intelligence digest to your inbox.",
    features: [
      "Website change detection",
      "Pricing page monitoring",
      "Social content tracking",
      "Job posting analysis",
      "PR + news monitoring",
      "Weekly intelligence digest",
    ],
    tags: ["Monitoring", "Weekly", "Intelligence", "Research", "Competitive"],
    longDescription: `Your competitors are moving constantly — changing pricing, launching features, hiring in new areas, and shifting their positioning — and most businesses only find out by accident. Competitor Monitor watches them systematically so you always know what they're doing before it affects you.\n\nConfigure up to 10 competitors and the agent monitors their websites for content changes, pricing page updates, and new feature announcements. It tracks their social channels for positioning shifts and campaign activity. It monitors their job postings for signals about where they're investing. And it watches Google Alerts and industry news sources for mentions and PR moves.\n\nEvery Monday morning, you receive a concise intelligence digest covering the week's notable developments, with analysis of what each change might signal strategically. Nothing buried, nothing missed.`,
    includes: [
      "SKILL.md with monitoring logic",
      "Website change detection setup (10 competitors)",
      "Social channel monitoring workflow",
      "Job posting analysis framework",
      "News + PR alert configuration",
      "Weekly digest template",
      "SETUP.md",
    ],
  },
  "market-research-agent": {
    title: "Market Research Agent",
    category: "Research",
    price: "$39/mo",
    rating: 4,
    reviews: 97,
    seller: "My AI Workforce",
    description: "Scours the web for industry trends, news, and data points on a topic of your choice, then produces a structured research brief.",
    features: [
      "Multi-source web research",
      "Trend identification",
      "Data point aggregation",
      "Source credibility scoring",
      "Structured research brief",
      "On-demand or scheduled runs",
    ],
    tags: ["Trends", "Reports", "Industry", "Research", "Intelligence"],
    longDescription: `Good decisions are built on good intelligence. Market Research Agent gives you the ability to commission deep research on any topic — a new market you're considering entering, a technology shift you need to understand, a customer segment you want to serve better — and receive a structured, sourced brief within hours.\n\nThe agent searches across web sources, industry publications, analyst reports, academic research, and news sources, assessing each source for credibility and relevance before synthesising the findings. It identifies the key trends, data points, and perspectives on a topic, organises them into a coherent brief, and flags areas of uncertainty or conflicting evidence.\n\nRun it on demand for one-off research questions, or set it on a schedule to keep you current on your market every week. Each brief includes cited sources so you can verify or dig deeper on any finding.`,
    includes: [
      "SKILL.md with research logic",
      "Multi-source search workflow",
      "Credibility scoring framework",
      "Research brief template",
      "Scheduled monitoring configuration",
      "Citation management guide",
      "SETUP.md",
    ],
  },
  // Original 3 entries kept for backwards compatibility
  "email-triage-pro": {
    title: "Email Triage Pro",
    category: "Operations",
    price: "$29",
    rating: 5,
    reviews: 214,
    seller: "My AI Workforce",
    description: "A battle-tested email triage system that processes your inbox every morning and delivers a structured briefing — prioritised by urgency, categorised by type, and ready for action.",
    features: ["Morning inbox briefing", "5 category system", "Auto-archive noise", "Draft replies", "24h follow-up nudge", "Works with Gmail & Outlook"],
    tags: ["Gmail", "Inbox", "Productivity", "Operations", "24/7"],
    longDescription: `Stop starting your day overwhelmed by email. Email Triage Pro processes your entire inbox and delivers a clean, prioritised briefing — so you know exactly what needs your attention and what can wait.\n\nBuilt from real-world usage across dozens of inboxes. Every categorisation rule has been refined to minimise false positives. Urgent things stay urgent. Noise gets archived automatically.`,
    includes: ["SKILL.md", "SOUL.md", "AGENTS.md", "config.json", "3 triage prompt files", "Morning briefing template", "SETUP.md"],
  },
  "lead-generation-agent": {
    title: "Lead Generation Agent",
    category: "Sales",
    price: "$49",
    rating: 4,
    reviews: 187,
    seller: "My AI Workforce",
    description: "An autonomous lead generation agent that finds, qualifies, and warms up prospects — so your sales pipeline is always full without you lifting a finger.",
    features: ["ICP-based prospect finding", "Automated qualification", "Personalised outreach", "3-touch follow-up sequence", "Pipeline tracking", "Weekly report"],
    tags: ["Sales", "LinkedIn", "Outreach", "Pipeline", "Automation"],
    longDescription: `Your sales pipeline should never run dry. Lead Generation Agent works around the clock to find prospects that match your exact ideal customer profile, research them properly, and draft personalised outreach that actually gets replies.\n\nUnlike generic cold email tools, this agent thinks — it finds the right angle for each prospect based on their recent activity, company news, and likely pain points.`,
    includes: ["SKILL.md", "SOUL.md", "AGENTS.md", "config.json", "3 email templates", "Qualification framework", "Pipeline tracker", "SETUP.md"],
  },
  "ai-ceo-persona": {
    title: "AI CEO Persona",
    category: "Executive",
    price: "$99",
    rating: 5,
    reviews: 312,
    seller: "My AI Workforce",
    description: "The complete configuration to turn your OpenClaw agent into a strategic business operator. For founders and CEOs who want an AI that thinks like a business partner.",
    features: ["Daily morning briefing", "Calendar management", "OKR tracking", "Meeting intelligence", "Weekly business review", "Strategic thinking"],
    tags: ["CEO", "Founder", "Executive", "Strategy", "Calendar", "OKR"],
    longDescription: `This is the configuration that makes the difference between an AI assistant and an AI operator.\n\nThe AI CEO Persona is a complete operational framework — SOUL.md, AGENTS.md, memory system, heartbeat schedule, OKR tracking, meeting intelligence, and morning briefing. Everything configured and ready to deploy.\n\nBuilt by people who run businesses with AI. Every component tested in the real world.`,
    includes: ["SOUL.md (complete executive persona)", "AGENTS.md", "USER.md template", "MEMORY.md framework", "HEARTBEAT.md", "OKR framework", "Meeting intelligence prompts", "Weekly review system", "SETUP.md"],
  },
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

function parseAmount(price: string): { amount: number; type: string } {
  // Parse price strings like "$29/mo", "$49", "Free", "From $15"
  if (price === 'Free') return { amount: 0, type: 'payment' }
  const isSubscription = price.includes('/mo')
  const match = price.match(/\$(\d+)/)
  const dollars = match ? parseInt(match[1]) : 0
  return { amount: dollars * 100, type: isSubscription ? 'subscription' : 'payment' }
}

function BuyButton({ agent }: { agent: { price: string; title: string } }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { amount, type } = parseAmount(agent.price)

  const handleBuy = async () => {
    if (amount === 0) {
      window.location.href = '/contact'
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName: agent.title, amount, type }),
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
        className="w-full py-4 rounded-xl font-bold text-center text-black block mb-3 transition-opacity"
        style={{ backgroundColor: "var(--yellow)", opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
      >
        {loading ? 'Redirecting to checkout…' : amount === 0 ? 'Get This Agent (Free) →' : `Get This Agent ${agent.price} →`}
      </button>
      {error && <p className="text-xs text-red-500 text-center mb-2">{error}</p>}
    </div>
  )
}

export default function AgentPage({ params }: { params: { slug: string } }) {
  const agent = agents[params.slug];
  if (!agent) notFound();

  const stars = Array.from({ length: 5 }, (_, i) => i < agent.rating);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main>
        {/* Hero pattern strip */}
        <div className="relative" style={{ borderBottom: "1px solid var(--nav-border)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
          {/* Breadcrumb */}
          <div className="px-6 py-4 relative">
          <div className="max-w-6xl mx-auto text-sm" style={{ color: "var(--text-dim)" }}>
            <a href="/marketplace" style={{ color: "var(--yellow)" }}>Marketplace</a> → <span>{agent.category}</span> → <span>{agent.title}</span>
          </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(255,215,0,0.1)", color: "var(--yellow)" }}>{agent.category}</span>
            </div>
            <h1 className="text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>{agent.title}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {stars.map((filled, i) => (
                  <span key={i} style={{ color: filled ? "#FFD700" : "var(--border)", fontSize: "18px" }}>★</span>
                ))}
              </div>
              <span className="text-sm" style={{ color: "var(--text-dim)" }}>({agent.reviews} reviews)</span>
              <span className="text-sm" style={{ color: "var(--text-dim)" }}>by <span style={{ color: "var(--yellow)" }}>{agent.seller}</span></span>
            </div>

            <p className="text-lg mb-8" style={{ color: "var(--text-dim)", lineHeight: "1.7" }}>{agent.description}</p>

            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <h2 className="font-bold text-lg mb-4">What&apos;s Included</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {agent.includes.map((item, i) => {
                  const lower = item.toLowerCase();
                  const icon = lower.includes("template") ? "📋" : lower.includes("config") || lower.includes("setup") ? "⚙️" : lower.includes("skill") || lower.includes("guide") || lower.includes("doc") || lower.includes("integration") ? "📄" : lower.includes("workflow") ? "🔄" : lower.includes("report") || lower.includes("analytic") ? "📊" : "📋";
                  return (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span>{icon}</span>
                    <span style={{ color: "var(--text-dim)" }}>{item}</span>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-lg mb-4">Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {agent.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--yellow)" }}>✦</span>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-4">About This Agent</h2>
              <div className="prose" style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
                {agent.longDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "2px solid var(--yellow)" }}>
              <div className="text-4xl font-extrabold mb-1" style={{ color: "var(--yellow)" }}>{agent.price}</div>
              <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>One-time purchase. Use forever.</p>
              <BuyButton agent={agent} />
              <p className="text-xs text-center mb-6" style={{ color: "var(--text-dim)" }}>Instant download after purchase</p>
              <div className="flex flex-col gap-2 text-sm">
                {["Instant download", "Full documentation", "Setup guide included", "Email support"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--yellow)" }}>✓</span>
                    <span style={{ color: "var(--text-dim)" }}>{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs font-semibold mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {agent.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md" style={{ backgroundColor: "var(--bg)", color: "var(--text-dim)", border: "1px solid var(--border)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Security Trust Badge */}
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.2)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🛡️</span>
                    <span className="text-sm font-bold" style={{ color: "#FFD700" }}>Secure Deployment Included</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      "Private VPS deployment",
                      "Your data stays on your server",
                      "End-to-end encrypted",
                      "Human oversight & audit logs",
                      "SOC2-ready architecture",
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span style={{ color: "#FFD700" }}>✓</span>
                        <span style={{ color: "var(--text-dim)" }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
