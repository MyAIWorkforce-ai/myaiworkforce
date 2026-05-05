'use client';
import React, { useState } from 'react';

const nativeIntegrations = [
  {
    icon: '📧',
    name: 'Gmail',
    desc: 'Your agent reads, replies, sends and organises your emails automatically. Never miss an important message.',
    examples: ['Reply to customer enquiries', 'Send quotes and invoices', 'Organise your inbox', 'Follow up on leads'],
    works: 'Just ask your agent: "Connect my Gmail"',
  },
  {
    icon: '📅',
    name: 'Google Calendar',
    desc: 'Your agent books appointments, reschedules meetings and sends reminders — all from a simple conversation.',
    examples: ['Book client appointments', 'Set reminders', 'Reschedule meetings', 'Check your availability'],
    works: 'Just ask your agent: "Connect my Calendar"',
  },
  {
    icon: '📁',
    name: 'Google Drive',
    desc: 'Your agent can save, find and share files in your Drive. No more hunting for documents.',
    examples: ['Save client documents', 'Find old quotes', 'Share files with clients', 'Organise folders'],
    works: 'Just ask your agent: "Connect my Google Drive"',
  },
  {
    icon: '📊',
    name: 'Google Sheets',
    desc: 'Your agent reads and updates your spreadsheets. Great for tracking leads, jobs, stock or anything else.',
    examples: ['Update job trackers', 'Log new leads', 'Read price lists', 'Track expenses'],
    works: 'Just ask your agent: "Connect my Google Sheets"',
  },
  {
    icon: '📝',
    name: 'Google Docs',
    desc: 'Your agent can write, read and update your documents. Perfect for proposals, reports and templates.',
    examples: ['Draft proposals', 'Update SOPs', 'Read templates', 'Write reports'],
    works: 'Just ask your agent: "Connect my Google Docs"',
  },
  {
    icon: '👥',
    name: 'Google Contacts',
    desc: 'Your agent can look up, add and update your contacts. Always know who you\'re dealing with.',
    examples: ['Look up client details', 'Add new contacts', 'Update phone numbers', 'Find past clients'],
    works: 'Just ask your agent: "Connect my Contacts"',
  },
];

const advancedIntegrations = [
  {
    icon: '💼',
    name: 'Xero',
    category: 'Accounting',
    desc: 'Create invoices, track payments and reconcile accounts automatically.',
    example: '📋 Real example: A plumber finishes a job → agent creates the invoice in Xero → sends it to the client → follows up automatically if unpaid after 7 days.',
  },
  {
    icon: '📒',
    name: 'MYOB',
    category: 'Accounting',
    desc: 'Full accounting automation — invoices, payroll reminders, expense tracking.',
    example: '📋 Real example: New job booked → agent creates job card in MYOB → tracks time and materials → generates invoice on completion.',
  },
  {
    icon: '💳',
    name: 'Stripe',
    category: 'Payments',
    desc: 'Get notified of payments, send payment links and track outstanding invoices.',
    example: '📋 Real example: Client pays deposit → agent sends confirmation email → books the job in calendar → alerts you on Telegram.',
  },
  {
    icon: '📱',
    name: 'WhatsApp Business',
    category: 'Messaging',
    desc: 'Your agent handles WhatsApp enquiries — quotes, bookings, follow-ups.',
    example: '📋 Real example: Client WhatsApps asking for a quote → agent asks the right questions, sends a ballpark price, books a site visit.',
  },
  {
    icon: '📘',
    name: 'Facebook & Instagram',
    category: 'Social Media',
    desc: 'Respond to DMs and comments, capture leads from your social pages.',
    example: '📋 Real example: Someone comments "How much?" on your Facebook post → agent DMs them a price guide and books a consultation.',
  },
  {
    icon: '🏪',
    name: 'Shopify',
    category: 'E-Commerce',
    desc: 'Manage orders, handle customer enquiries and track stock automatically.',
    example: '📋 Real example: Customer asks where their order is → agent checks Shopify, finds the order, gives tracking details — without you doing anything.',
  },
  {
    icon: '🔗',
    name: 'HubSpot CRM',
    category: 'CRM',
    desc: 'New leads go straight into HubSpot, with follow-up sequences triggered automatically.',
    example: '📋 Real example: Someone fills in your contact form → agent adds them to HubSpot → sends a welcome email → books a call.',
  },
  {
    icon: '📋',
    name: 'Trello / Monday / Asana',
    category: 'Project Management',
    desc: 'Create tasks, update job statuses and manage your team\'s work automatically.',
    example: '📋 Real example: New job confirmed → agent creates a Trello card → assigns it → sets a due date → notifies the team.',
  },
  {
    icon: '💬',
    name: 'Slack',
    category: 'Team Communication',
    desc: 'Your agent posts updates to your team Slack channels automatically.',
    example: '📋 Real example: Big new job lands → agent posts to your #jobs Slack channel so the whole team sees it instantly.',
  },
  {
    icon: '📆',
    name: 'Calendly',
    category: 'Bookings',
    desc: 'Sync bookings from Calendly into your calendar and trigger follow-up emails.',
    example: '📋 Real example: Client books via Calendly → agent adds job details to your Google Calendar → sends a prep email 24h before.',
  },
  {
    icon: '🛒',
    name: 'WooCommerce',
    category: 'E-Commerce',
    desc: 'Handle orders, refunds and customer queries from your WooCommerce store.',
    example: '📋 Real example: Order placed on your website → agent emails a receipt, updates stock count, schedules delivery follow-up.',
  },
  {
    icon: '📊',
    name: 'Airtable',
    category: 'Database',
    desc: 'Read and update your Airtable databases — great for tracking anything.',
    example: '📋 Real example: New lead comes in → agent adds their details to your Airtable CRM and flags for follow-up.',
  },
  {
    icon: '📬',
    name: 'Mailchimp',
    category: 'Email Marketing',
    desc: 'Add new contacts to your email list and trigger marketing sequences.',
    example: '📋 Real example: New customer signs up → agent adds them to your Mailchimp list → 3-email welcome sequence fires automatically.',
  },
  {
    icon: '🔧',
    name: 'ServiceM8 / Tradify',
    category: 'Trade Management',
    desc: 'Perfect for tradies — manage jobs, quotes and invoices from your agent.',
    example: '📋 Real example: Customer calls → agent logs the job in ServiceM8, sends a quote, schedules the work — you just show up.',
  },
  {
    icon: '🌐',
    name: 'Any Website or Form',
    category: 'Web',
    desc: 'Capture leads from any contact form, landing page or booking widget.',
    example: '📋 Real example: Someone fills in your website contact form → agent responds within 60 seconds, qualifies the lead, books a call.',
  },
  {
    icon: '⚡',
    name: 'Anything with an API',
    category: 'Custom',
    desc: 'If it has an API, your agent can connect to it. We build custom integrations for any tool you use.',
    example: '📋 Real example: Your industry-specific software, your accounting system, your booking platform — we\'ll connect it.',
  },
];

const categories = ['All', 'Accounting', 'Payments', 'Messaging', 'Social Media', 'E-Commerce', 'CRM', 'Project Management', 'Team Communication', 'Bookings', 'Trade Management', 'Web', 'Custom'];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedNative, setExpandedNative] = useState<string | null>(null);
  const [expandedAdvanced, setExpandedAdvanced] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? advancedIntegrations
    : advancedIntegrations.filter(i => i.category === activeCategory);

  return (
    <div style={{ background: '#f9f6f0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '80px 20px 60px', textAlign: 'center' }}>
        <p style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 12 }}>MY AI WORKFORCE</p>
        <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
          Connect Your Agent to<br />Every App You Use
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Your agent works with the tools you already use — emails, calendar, accounting, job management and more. No tech knowledge needed. Just tell your agent what to connect.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>6</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Built-in (instant)</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>500+</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Advanced integrations</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 24px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>0</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Tech skills needed</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 20px' }}>

        {/* Native Section */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ background: '#22c55e', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>✅ BUILT IN — INSTANT</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Just Ask Your Agent</h2>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: 32, lineHeight: 1.7 }}>
            These apps are built directly into your agent. No setup, no forms, no tech — just tell your agent to connect them and click the link it sends you. Done in 2 minutes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {nativeIntegrations.map(app => (
              <div
                key={app.name}
                onClick={() => setExpandedNative(expandedNative === app.name ? null : app.name)}
                style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 20,
                  cursor: 'pointer',
                  border: expandedNative === app.name ? '2px solid #22c55e' : '2px solid transparent',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.8rem' }}>{app.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1rem' }}>{app.name}</div>
                    <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>✅ Built in</span>
                  </div>
                </div>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: expandedNative === app.name ? 12 : 0 }}>{app.desc}</p>
                {expandedNative === app.name && (
                  <div>
                    <div style={{ marginBottom: 12 }}>
                      {app.examples.map(ex => (
                        <div key={ex} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}>
                          <span style={{ color: '#22c55e', marginTop: 2 }}>✓</span>
                          <span style={{ fontSize: '0.85rem', color: '#444' }}>{ex}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: '#f0fdf4', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem', color: '#166534', fontWeight: 600 }}>
                      💬 {app.works}
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 8, fontSize: '0.8rem', color: '#999' }}>{expandedNative === app.name ? '▲ Less' : '▼ See what it can do'}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ background: '#c9a84c', color: '#1a1a2e', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>⚡ ADVANCED — WE BUILD IT FOR YOU</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Advanced Integrations</h2>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: 24, lineHeight: 1.7 }}>
            These connect your agent to your other business software. We set it all up for you — you just use it. Think of it as automation that runs in the background while you get on with your work.
          </p>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: activeCategory === cat ? '#1a1a2e' : '#e8e0d0',
                  color: activeCategory === cat ? 'white' : '#555',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {filtered.map(app => (
              <div
                key={app.name}
                onClick={() => setExpandedAdvanced(expandedAdvanced === app.name ? null : app.name)}
                style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 20,
                  cursor: 'pointer',
                  border: expandedAdvanced === app.name ? '2px solid #c9a84c' : '2px solid transparent',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.8rem' }}>{app.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1rem' }}>{app.name}</div>
                    <span style={{ background: '#fef9e7', color: '#b7770d', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>{app.category}</span>
                  </div>
                </div>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: expandedAdvanced === app.name ? 12 : 0 }}>{app.desc}</p>
                {expandedAdvanced === app.name && (
                  <div style={{ background: '#fef9e7', borderRadius: 8, padding: '12px 14px', fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>
                    {app.example}
                  </div>
                )}
                <div style={{ marginTop: 8, fontSize: '0.8rem', color: '#999' }}>{expandedAdvanced === app.name ? '▲ Less' : '▼ See a real example'}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#1a1a2e', borderRadius: 16, padding: '40px 32px', textAlign: 'center', marginTop: 64 }}>
          <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>Ready to connect your tools?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, fontSize: '1rem', lineHeight: 1.7 }}>
            Your agent handles the tech. You just tell it what you want connected — and it walks you through the rest in plain English.
          </p>
          <a
            href="/buildagent"
            style={{
              display: 'inline-block',
              background: '#c9a84c',
              color: '#1a1a2e',
              padding: '16px 36px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Get Your AI Agent →
          </a>
        </div>

      </div>
    </div>
  );
}
