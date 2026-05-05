'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function IconMenu() {
  return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}
function IconX() {
  return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
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
  const isDark = theme === 'dark';
  return (
    <button className="theme-toggle" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

const NAV_LINKS = [
  { label: 'Build My Agent', href: '/buildmyagent' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Guides', href: '/guides' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ borderBottom: '1px solid var(--nav-border)', backgroundColor: 'var(--nav-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold" style={{ letterSpacing: '-0.02em' }}>
          <span style={{ color: '#c9a84c' }}>My </span><span style={{ color: '#ffffff', fontSize: '1.2em' }}>AI </span><span style={{ color: '#c9a84c' }}>Workforce</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200 nav-link"
              style={link.href === '/integrations' ? { color: '#c9a84c', fontWeight: '600' } : {}}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.3)' }}>Login</Link>
          <Link href="https://calendar.app.google/cEdmSQvEZ66hj4dy7" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg text-sm font-semibold glow-yellow" style={{ backgroundColor: '#c9a84c', color: '#0A0A0A' }}>Book a Free Call</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button style={{ color: 'var(--text-dim)' }} onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <IconX /> : <IconMenu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: 'var(--nav-border)', backgroundColor: '#1a1a2e' }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.88)' }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link href="/login" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }} onClick={() => setOpen(false)}>Login</Link>
              <Link href="/signup" className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center" style={{ border: '1px solid var(--yellow)', color: 'var(--yellow)' }} onClick={() => setOpen(false)}>Sign Up</Link>
            </div>
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2" style={{ backgroundColor: '#c9a84c', color: '#0A0A0A' }} onClick={() => setOpen(false)}>Book a Free Call</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="text-xl font-bold mb-2"><span style={{ color: '#c9a84c' }}>My </span><span style={{ color: '#c9a84c', fontSize: '1.2em' }}>AI </span><span style={{ color: '#c9a84c' }}>Workforce</span></div>
            <p className="text-sm" style={{ color: '#6b7280' }}>The #1 platform for AI workforce automation.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'Build My Agent', href: '/buildmyagent' },
              { label: 'Integrations', href: '/integrations' },
              { label: 'Guides', href: '/guides' },
              { label: 'Marketplace', href: '/marketplace' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Sell Your Agents', href: '/creator/agents' },
              { label: 'Sell Your Skills', href: '/creator/skills' },
              { label: 'Contact', href: '/contact' },
              { label: 'Invest with Us', href: '/invest' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors duration-200"
                style={{ color: ['Invest with Us', 'Sell Your Agents'].includes(link.label) ? '#c9a84c' : '#6b7280', fontWeight: ['Invest with Us', 'Sell Your Agents'].includes(link.label) ? '600' : 'normal' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#e5e7eb' }}>
          <p className="text-sm" style={{ color: '#6b7280' }}>© {new Date().getFullYear()} My AI Workforce. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm" style={{ color: '#6b7280' }}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm" style={{ color: '#6b7280' }}>Terms of Service</Link>
            <Link href="/security" className="text-sm" style={{ color: '#6b7280' }}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const nativeIntegrations = [
  { icon: '📧', name: 'Gmail', desc: 'Reads, replies, sends and organises your emails. Never miss an important message.', examples: ['Reply to customer enquiries within seconds', 'Send quotes and invoices by email', 'Organise inbox with labels', 'Follow up on leads automatically', 'Draft emails from a voice command', 'Flag and alert you about urgent messages'], works: 'Just ask: "Connect my Gmail"' },
  { icon: '📅', name: 'Google Calendar', desc: 'Books appointments, reschedules meetings and sends reminders — all from a simple conversation.', examples: ['Book client appointments automatically', 'Set job reminders and deadlines', 'Reschedule without back-and-forth', 'Check availability before confirming jobs', 'Send calendar invites to clients', 'Block travel time between jobs'], works: 'Just ask: "Connect my Calendar"' },
  { icon: '📁', name: 'Google Drive', desc: 'Save, find and share files in your Drive. No more hunting for documents.', examples: ['Save client documents automatically', 'Find old quotes in seconds', 'Share files with clients via link', 'Organise folders by client or job', 'Upload job photos', 'Create folders for new clients'], works: 'Just ask: "Connect my Drive"' },
  { icon: '📊', name: 'Google Sheets', desc: 'Reads and updates your spreadsheets. Track leads, jobs, stock or anything else.', examples: ['Update job trackers in real time', 'Log new leads automatically', 'Read price lists when quoting', 'Track expenses and costs', 'Generate weekly summaries', 'Flag rows that need attention'], works: 'Just ask: "Connect my Sheets"' },
  { icon: '📝', name: 'Google Docs', desc: 'Writes, reads and updates your documents. Perfect for proposals, reports and templates.', examples: ['Draft client proposals from a voice note', 'Update SOPs automatically', 'Write job reports', 'Fill in your own templates', 'Summarise long documents', 'Create instant meeting notes'], works: 'Just ask: "Connect my Docs"' },
  { icon: '👥', name: 'Google Contacts', desc: 'Look up, add and update your contacts. Always know who you\'re dealing with.', examples: ['Look up client details instantly', 'Add new contacts from emails', 'Update phone numbers and addresses', 'Find past clients by name or job', 'Merge duplicate contacts', 'Tag contacts by category'], works: 'Just ask: "Connect my Contacts"' },
  { icon: '✅', name: 'Google Tasks', desc: 'Create, manage and complete tasks through your agent. Your to-do list, handled.', examples: ['Create tasks from emails automatically', 'Set job deadlines', 'Mark tasks complete via Telegram', 'Daily task summaries', 'Organise by project', 'Remind you of overdue items'], works: 'Just ask: "Connect my Tasks"' },
  { icon: '📋', name: 'Google Forms', desc: 'Capture form responses and act on them instantly — follow-ups, alerts, logging.', examples: ['Get notified when a form is submitted', 'Extract client details from responses', 'Auto-reply to new enquiries', 'Add form data to your CRM sheet', 'Trigger follow-up emails', 'Weekly response summaries'], works: 'Just ask: "Connect my Forms"' },
  { icon: '🎤', name: 'Voice Commands', desc: 'Send a voice message and your agent acts on it instantly. Hands-free on the job.', examples: ['"Send a quote to John for $1,500"', '"What\'s on my calendar tomorrow?"', '"Remind me to call Sarah at 3pm"', '"Draft a follow-up email to last enquiry"', '"What emails came in today?"', '"Log a new lead — plumber in Frankston"'], works: 'Already built in — send a voice note on Telegram' },
  { icon: '🔍', name: 'Web Research', desc: 'Searches the web for you — competitor prices, supplier info, industry news, anything.', examples: ['Research competitor pricing', 'Find supplier contact details', 'Look up building regulations', 'Check the weather for outdoor jobs', 'Find local subcontractors', 'Research a new client before a meeting'], works: 'Already built in — just ask your agent anything' },
  { icon: '🖼️', name: 'Image Generation', desc: 'Generate professional images for social media, proposals or marketing. Just describe it.', examples: ['Create social media graphics', 'Generate before/after mockups', 'Design simple flyers', 'Visualise a project concept', 'Create branded images', 'Generate thumbnails for posts'], works: 'Already built in — ask your agent to create an image' },
  { icon: '🗓️', name: 'Google Slides', desc: 'Create and update presentations automatically. Proposals, pitch decks, reports.', examples: ['Build a client proposal deck', 'Update your company presentation', 'Create a project summary', 'Generate a monthly report deck', 'Add images automatically', 'Share with clients instantly'], works: 'Just ask: "Connect my Slides"' },
  { icon: '💬', name: 'Google Chat', desc: 'Post updates to your Google Chat spaces — perfect for team alerts and notifications.', examples: ['Post new job alerts to your team', 'Daily summaries to your workspace', 'Alert staff of urgent jobs', 'Share files in team spaces', 'Post automated status updates', 'Notify the team of new bookings'], works: 'Just ask: "Connect my Google Chat"' },
  { icon: '📈', name: 'Data Analysis & Reports', desc: 'Feed your agent data and it analyses it, spots trends and tells you exactly what matters.', examples: ['Monthly revenue summaries', 'Best performing services', 'Client retention analysis', 'Lead source tracking', 'Job completion time reports', 'Expense breakdowns by category'], works: 'Already built in — share any file and ask for analysis' },
  { icon: '📱', name: 'Telegram (24/7 Access)', desc: 'Your agent lives on Telegram — messages, voice notes, photos, files. Always available.', examples: ['Chat with your agent any time', 'Send job photos for records', 'Get instant answers', 'Receive alerts for new enquiries', 'Share documents via chat', 'Set up team broadcast messages'], works: 'Already set up — it\'s how you talk to your agent' },
  { icon: '📧', name: 'Outlook / Microsoft 365', desc: 'Connect your Microsoft email and calendar. Reads, replies and manages your Outlook inbox.', examples: ['Reply to Outlook emails automatically', 'Book meetings via Outlook Calendar', 'Manage shared inboxes', 'Send from your company address', 'Flag important emails', 'Archive and organise automatically'], works: 'Just ask: "Connect my Outlook"' },
];

const advancedIntegrations = [
  { icon: '💼', name: 'Xero', category: 'Accounting', desc: 'Create invoices, track payments, reconcile accounts and manage payroll automatically.', examples: ['Job done → invoice created → sent to client → follow-up if unpaid after 7 days', 'New job booked → create estimate in Xero → convert to invoice on completion', 'Monthly reconciliation report sent to you automatically', 'Overdue invoice alerts with one-click reminder send'] },
  { icon: '📒', name: 'MYOB', category: 'Accounting', desc: 'Full accounting automation — invoices, payroll reminders, expense tracking, reporting.', examples: ['New client added → MYOB card created → first invoice drafted automatically', 'Track time and materials per job → auto-generate invoice', 'Weekly P&L summary delivered to your Telegram', 'Expense receipt photographed → logged in MYOB automatically'] },
  { icon: '📗', name: 'QuickBooks', category: 'Accounting', desc: 'Invoice automation, expense tracking and financial reporting through your agent.', examples: ['Quote approved → invoice raised in QuickBooks automatically', 'Bank feed reviewed and categorised by your agent daily', 'GST report prepared at end of quarter', 'Late payment reminders sent without you touching anything'] },
  { icon: '💳', name: 'Stripe', category: 'Payments', desc: 'Get notified of payments, send payment links, track outstanding invoices and refunds.', examples: ['Client pays deposit → confirmation email sent → job booked in calendar → you\'re alerted', 'Overdue payment → agent sends polite reminder with payment link', 'New subscription signed up → welcome email triggered automatically', 'Refund requested → agent logs it and notifies you for approval'] },
  { icon: '💰', name: 'PayPal', category: 'Payments', desc: 'Track PayPal payments and trigger follow-up actions when money lands.', examples: ['Payment received → client notified → service delivered automatically', 'Dispute raised → agent flags it and drafts your response', 'Monthly PayPal revenue summary sent to you'] },
  { icon: '📱', name: 'WhatsApp Business', category: 'Messaging', desc: 'Your agent handles WhatsApp enquiries — quotes, bookings, FAQs, follow-ups.', examples: ['Client WhatsApps "how much?" → agent asks the right questions → sends ballpark price → books site visit', 'After-hours message received → agent replies instantly so client isn\'t left waiting', 'Booking confirmed → WhatsApp reminder sent 24h before', 'Tradie finishes job → agent sends WhatsApp review request'] },
  { icon: '📘', name: 'Facebook & Instagram', category: 'Social Media', desc: 'Respond to DMs and comments, capture leads from your social pages automatically.', examples: ['Someone comments "How much?" → agent DMs them a price guide and books a consult', 'New Facebook lead form submitted → agent responds within 60 seconds', 'Instagram DM received → agent qualifies the lead and books a call', 'Post goes live → agent monitors comments and flags any that need your attention'] },
  { icon: '🔗', name: 'HubSpot CRM', category: 'CRM', desc: 'New leads go into HubSpot automatically, with follow-up sequences triggered instantly.', examples: ['Contact form submitted → added to HubSpot → welcome email sent → call booked', 'Deal stage updated → agent sends the right email for that stage', 'Lead goes cold → agent sends re-engagement sequence automatically', 'Meeting booked → HubSpot contact updated → prep email sent'] },
  { icon: '☁️', name: 'Salesforce', category: 'CRM', desc: 'Keep Salesforce up to date automatically — leads, opportunities, notes and tasks.', examples: ['Email from new prospect → Salesforce lead created automatically', 'Call finished → agent logs call notes in Salesforce via voice', 'Deal won → onboarding sequence triggered automatically', 'Monthly pipeline report generated and sent to your team'] },
  { icon: '🏪', name: 'Shopify', category: 'E-Commerce', desc: 'Manage orders, handle customer enquiries, track stock and automate fulfilment.', examples: ['Customer asks where their order is → agent checks Shopify and replies with tracking', 'Stock runs low → agent alerts you and drafts a reorder email to supplier', 'Order placed → personalised thank-you email sent instantly', 'Abandoned cart → agent sends a friendly reminder after 1 hour'] },
  { icon: '🛒', name: 'WooCommerce', category: 'E-Commerce', desc: 'Handle orders, refunds and customer queries from your WooCommerce store.', examples: ['Order placed → receipt sent → stock updated → delivery scheduled', 'Refund requested → agent processes it and sends confirmation', 'New product added → social media post drafted automatically', 'Weekly sales report delivered every Monday morning'] },
  { icon: '📋', name: 'Trello', category: 'Project Management', desc: 'Create tasks, update job statuses and manage your team\'s work automatically.', examples: ['New job confirmed → Trello card created → assigned to team member → due date set', 'Client emails a change request → new card created in "Changes" column', 'Job completed → card archived → invoice triggered', 'Overdue card → agent alerts the assigned person on Telegram'] },
  { icon: '📆', name: 'Monday.com', category: 'Project Management', desc: 'Keep your Monday.com boards updated automatically as jobs progress.', examples: ['New lead → Monday item created with all details', 'Status changed to "In Progress" → client notified automatically', 'Deadline approaching → agent sends reminder to team', 'Project complete → client satisfaction email sent'] },
  { icon: '✅', name: 'Asana', category: 'Project Management', desc: 'Create and update Asana tasks from emails, voice notes or any trigger.', examples: ['Email arrives with action item → Asana task created automatically', 'Voice note: "Create a task to follow up with Tim by Friday" → done', 'Project milestone reached → team notified via Slack and email', 'Overdue task → agent escalates to manager'] },
  { icon: '💬', name: 'Slack', category: 'Team Communication', desc: 'Your agent posts updates, alerts and summaries to your team Slack channels.', examples: ['New job lands → posted to #jobs channel instantly', 'Daily summary of all new enquiries → posted every morning at 8am', 'Urgent client email → agent pings the right person in Slack', 'Weekly revenue update → posted to #finance every Friday'] },
  { icon: '📆', name: 'Calendly', category: 'Bookings', desc: 'Sync Calendly bookings into your workflow and trigger follow-ups automatically.', examples: ['Client books via Calendly → added to Google Calendar → confirmation email sent', 'Prep email sent 24h before every meeting automatically', 'No-show → agent sends a reschedule link 30 minutes later', 'Booking cancelled → slot opened back up and waitlist notified'] },
  { icon: '🔧', name: 'ServiceM8', category: 'Trade Software', desc: 'Perfect for tradies — manage jobs, quotes and invoices from your agent on the go.', examples: ['Call comes in → job logged in ServiceM8 → quote sent → work scheduled automatically', 'Job status updated → client gets an ETA via SMS', 'Job complete → invoice raised and sent within minutes', 'Parts needed → supplier email drafted automatically'] },
  { icon: '🔨', name: 'Tradify', category: 'Trade Software', desc: 'Run your trade business from your agent — jobs, quotes, timesheets, invoices.', examples: ['Enquiry received → Tradify job created → quote sent within the hour', 'Timesheet submitted → invoice generated automatically', 'Job overrunning → client notified with updated completion time', 'Weekly job summary delivered every Friday afternoon'] },
  { icon: '🏥', name: 'Cliniko / Health Software', category: 'Health & Allied Health', desc: 'Book appointments, send reminders and manage patient admin automatically.', examples: ['New patient enquiry → booking link sent → appointment created in Cliniko', 'Appointment reminder sent 48h and 2h before', 'No-show → agent follows up with rebooking link', 'Repeat booking due → agent proactively reaches out to patient'] },
  { icon: '📬', name: 'Mailchimp', category: 'Email Marketing', desc: 'Add new contacts to your email list and trigger marketing sequences automatically.', examples: ['New customer → added to Mailchimp list → 3-email welcome sequence fires', 'Job complete → client added to "happy customers" list for review request', 'Monthly newsletter drafted by agent from your latest updates', 'Unsubscribe detected → agent removes from CRM contact list'] },
  { icon: '📊', name: 'Airtable', category: 'Database', desc: 'Read and update Airtable databases — great for tracking anything across your business.', examples: ['New lead → added to Airtable CRM with full details', 'Job status updated in Airtable as work progresses', 'Daily database summary delivered to your Telegram', 'Record updated → triggers follow-up email automatically'] },
  { icon: '📝', name: 'Typeform / Jotform', category: 'Forms & Surveys', desc: 'Capture form and survey responses and act on them instantly.', examples: ['Quote request submitted → agent sends tailored quote within minutes', 'Customer feedback received → logged, summarised and sent to you', 'New booking form submitted → appointment created automatically', 'Survey completed → results added to your tracking sheet'] },
  { icon: '🌐', name: 'Any Website Contact Form', category: 'Web', desc: 'Capture leads from any website form and have your agent respond within 60 seconds.', examples: ['Contact form submitted → agent responds within 60 seconds — while you\'re sleeping', 'Lead qualified via email → booked into calendar automatically', 'Spam filtered → only real enquiries reach you', 'Lead source tracked so you know what marketing works'] },
  { icon: '🔷', name: 'GitHub', category: 'Developer Tools', desc: 'Your agent monitors repos, manages issues, triggers deployments and keeps your team updated.', examples: ['New issue created → agent assigns it and notifies the right person', 'PR merged → agent posts update to Slack and updates project board', 'Build fails → agent alerts you on Telegram instantly', 'Weekly repo activity summary delivered every Monday'] },
  { icon: '▲', name: 'Vercel', category: 'Developer Tools', desc: 'Your agent monitors deployments, gets notified on failures and keeps your sites running.', examples: ['Deploy fails → agent alerts you immediately with the error', 'New deployment goes live → agent posts to your team Slack', 'Domain expiring → agent warns you 30 days out', 'Weekly deployment summary with uptime stats'] },
  { icon: '🐙', name: 'GitLab / Bitbucket', category: 'Developer Tools', desc: 'Connect your code repos — issue tracking, pipeline alerts and team notifications.', examples: ['Pipeline fails → Telegram alert with error details', 'New merge request → agent notifies reviewers', 'Issue assigned to you → Telegram notification', 'Sprint summary sent every Friday afternoon'] },
  { icon: '☁️', name: 'AWS / Google Cloud / Azure', category: 'Developer Tools', desc: 'Monitor cloud infrastructure, get alerts on errors and automate routine cloud tasks.', examples: ['Server CPU spikes → instant Telegram alert', 'Monthly cloud bill summary delivered automatically', 'New support ticket opened → agent flags it to your team', 'Scheduled backups confirmed or flagged if failed'] },
  { icon: '🗄️', name: 'Supabase / Firebase', category: 'Developer Tools', desc: 'Monitor your database, get alerts on issues and automate data-driven workflows.', examples: ['New user signs up → agent sends welcome email automatically', 'Database usage near limit → alert sent before it\'s a problem', 'New form submission → data saved + follow-up triggered', 'Weekly active user report delivered automatically'] },
  { icon: '🔔', name: 'Zapier / Make.com', category: 'Automation', desc: 'Connect to thousands of apps through Zapier or Make — if it exists, your agent can trigger it.', examples: ['Any trigger in any app → your agent acts on it', 'Chain complex multi-step workflows across 10+ apps', 'Connect apps that don\'t have direct integrations', 'Automate any repetitive task across your whole tech stack'] },
  { icon: '📊', name: 'Google Analytics / Search Console', category: 'Marketing', desc: 'Your agent monitors your website traffic, rankings and alerts you to anything important.', examples: ['Traffic drops suddenly → agent alerts you same day', 'Weekly SEO ranking report delivered automatically', 'New keywords ranking on page 1 → notification sent', 'Monthly performance summary vs previous month'] },
  { icon: '📣', name: 'Google Ads / Meta Ads', category: 'Marketing', desc: 'Monitor ad performance and get alerts when campaigns need attention.', examples: ['Ad spend budget nearly hit → agent alerts you before overspend', 'Campaign performance drops → flagged for review', 'Daily spend summary delivered each morning', 'New lead from ad → agent follows up within 60 seconds'] },
  { icon: '⚡', name: 'Anything with an API', category: 'Custom', desc: 'If it has an API, your agent can connect to it. We build custom integrations for any tool.', examples: ['Your industry-specific software — we\'ll connect it', 'Your booking platform, your POS, your CRM', 'Internal tools and custom databases', 'Any app that\'s not on this list — just ask us'] },
];

const categories = ['All', 'Accounting', 'Payments', 'Messaging', 'Social Media', 'E-Commerce', 'CRM', 'Project Management', 'Team Communication', 'Bookings', 'Trade Software', 'Health & Allied Health', 'Email Marketing', 'Database', 'Forms & Surveys', 'Developer Tools', 'Automation', 'Marketing', 'Web', 'Custom'];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedNative, setExpandedNative] = useState<string | null>(null);
  const [expandedAdvanced, setExpandedAdvanced] = useState<string | null>(null);

  const filtered = activeCategory === 'All' ? advancedIntegrations : advancedIntegrations.filter(i => i.category === activeCategory);

  return (
    <div style={{ background: '#f9f6f0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Nav />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '80px 20px 60px', textAlign: 'center', paddingTop: '120px' }}>
        <p style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 12 }}>INTEGRATIONS</p>
        <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
          Connect Your Agent to<br />Every App You Use
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Your agent works with the tools you already use — emails, calendar, accounting, job management and more. No tech knowledge needed. Just tell your agent what to connect and it walks you through the rest in plain English.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>16</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Built-in (instant)</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>10,000+</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Advanced integrations</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>0</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Tech skills needed</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 20px' }}>

        {/* Native */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: '#22c55e', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 20 }}>✅ BUILT IN — WORKS INSTANTLY</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Just Ask Your Agent</h2>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: 32, lineHeight: 1.7, maxWidth: 680 }}>
            These apps are built directly into your agent. No setup forms, no tech — just tell your agent to connect them and click the link it sends you. Done in 2 minutes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 16 }}>
            {nativeIntegrations.map(app => (
              <div key={app.name} onClick={() => setExpandedNative(expandedNative === app.name ? null : app.name)}
                style={{ background: 'white', borderRadius: 12, padding: 20, cursor: 'pointer', border: expandedNative === app.name ? '2px solid #22c55e' : '2px solid transparent', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.8rem' }}>{app.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{app.name}</div>
                    <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>✅ Built in</span>
                  </div>
                </div>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: expandedNative === app.name ? 12 : 0 }}>{app.desc}</p>
                {expandedNative === app.name && (
                  <div>
                    <div style={{ marginBottom: 12 }}>
                      {app.examples.map((ex, i) => (
                        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 5 }}>
                          <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 2 }}>✓</span>
                          <span style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.5 }}>{ex}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: '#f0fdf4', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem', color: '#166534', fontWeight: 600 }}>
                      💬 {app.works}
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#aaa' }}>{expandedNative === app.name ? '▲ Less' : '▼ See what it can do'}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: '#c9a84c', color: '#1a1a2e', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 20 }}>⚡ ADVANCED — WE SET IT UP FOR YOU</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Advanced Integrations</h2>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: 24, lineHeight: 1.7, maxWidth: 680 }}>
            These connect your agent to your other business software and automate entire workflows. We set it all up — you just use it. Think of it as automation running silently in the background while you get on with your work.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, background: activeCategory === cat ? '#1a1a2e' : '#e8e0d0', color: activeCategory === cat ? 'white' : '#555', transition: 'all 0.2s' }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 16 }}>
            {filtered.map(app => (
              <div key={app.name} onClick={() => setExpandedAdvanced(expandedAdvanced === app.name ? null : app.name)}
                style={{ background: 'white', borderRadius: 12, padding: 20, cursor: 'pointer', border: expandedAdvanced === app.name ? '2px solid #c9a84c' : '2px solid transparent', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.8rem' }}>{app.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{app.name}</div>
                    <span style={{ background: '#fef9e7', color: '#b7770d', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>{app.category}</span>
                  </div>
                </div>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: expandedAdvanced === app.name ? 12 : 0 }}>{app.desc}</p>
                {expandedAdvanced === app.name && (
                  <div>
                    {app.examples.map((ex, i) => (
                      <div key={i} style={{ background: '#fef9e7', borderRadius: 8, padding: '10px 14px', fontSize: '0.85rem', color: '#555', lineHeight: 1.6, marginBottom: 6 }}>
                        📋 {ex}
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#aaa' }}>{expandedAdvanced === app.name ? '▲ Less' : '▼ See real examples'}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#1a1a2e', borderRadius: 16, padding: '40px 32px', textAlign: 'center', marginTop: 64 }}>
          <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>Ready to connect your tools?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
            Your agent handles the tech. Just tell it what you want connected — it walks you through the rest in plain English. No forms. No setup calls. No tech knowledge needed.
          </p>
          <a href="/buildagent" style={{ display: 'inline-block', background: '#c9a84c', color: '#1a1a2e', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
            Get Your AI Agent →
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
