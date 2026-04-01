import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internal Ops Guide — MyAIWorkforce.ai',
  description: 'Internal operations guide for Done-For-You client onboarding.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

const timelineSteps = [
  {
    number: 1,
    title: 'Lead comes in',
    who: 'toby',
    desc: 'Via site, referral, or social media → Toby gets notified',
    icon: '📥',
  },
  {
    number: 2,
    title: 'Discovery call',
    who: 'toby',
    desc: 'Toby runs a 30-min call — understand pain points, demo the product',
    icon: '📞',
  },
  {
    number: 3,
    title: 'Proposal sent',
    who: 'toby',
    desc: 'Toby sends pricing: Starter $997, Growth $1,497, Enterprise $2,497/mo',
    icon: '📄',
  },
  {
    number: 4,
    title: 'Client signs + pays',
    who: 'both',
    desc: 'Stripe processes payment automatically',
    icon: '💳',
  },
  {
    number: 5,
    title: 'Monty gets to work',
    who: 'monty',
    desc: 'Automatically triggered: Hetzner API creates private VPS (~60 sec) → Ubuntu boots with unique IP → OpenClaw installed (~10 min) → Workspace files created (SOUL.md, AGENTS.md, USER.md) → Tools connected',
    icon: '⚡',
  },
  {
    number: 6,
    title: 'AI agents built',
    who: 'monty',
    desc: 'Monty builds custom agents based on discovery call notes',
    icon: '🤖',
  },
  {
    number: 7,
    title: 'Testing',
    who: 'monty',
    desc: 'Monty tests all agents, finds and fixes any issues',
    icon: '🧪',
  },
  {
    number: 8,
    title: 'Handover call',
    who: 'both',
    desc: 'Toby + Monty demo to the client, go live together — 30 min',
    icon: '🎯',
  },
  {
    number: 9,
    title: 'Ongoing management',
    who: 'monty',
    desc: 'Monty monitors 24/7, generates monthly reports, handles technical issues',
    icon: '📊',
  },
]

const techStack = [
  {
    name: 'Hetzner',
    icon: '🖥️',
    plain: 'Like renting a private computer in a data centre. Each client gets their own. ~€4–6/mo (~$7–10 AUD). Only charged when running.',
  },
  {
    name: 'OpenClaw',
    icon: '🐾',
    plain: "The AI agent software that runs on the server. Like installing an app on the client\u2019s private computer.",
  },
  {
    name: 'Supabase',
    icon: '🗄️',
    plain: 'Our database. Stores user accounts, purchases, client info.',
  },
  {
    name: 'Stripe',
    icon: '💳',
    plain: 'Takes payments. Money goes straight to your bank account.',
  },
  {
    name: 'Google Calendar',
    icon: '📅',
    plain: 'Clients book calls directly. Auto-creates Google Meet links.',
  },
]

const checklist = [
  'Their main email address (for OpenClaw notifications)',
  'Google Workspace credentials OR Gmail access (for email agent)',
  'Calendar access (for scheduling agent)',
  'CRM name and login (if they want CRM integration)',
  'What tools they currently use (list)',
  'Their 3 biggest time-wasters (to prioritise agents)',
  'Preferred communication channel (Discord / Telegram / WhatsApp)',
]

const pricing = [
  { plan: 'Starter', price: '$997/mo', agents: '2 agents', server: '~€4/mo', margin: '~98%' },
  { plan: 'Growth', price: '$1,497/mo', agents: '5 agents', server: '~€6/mo', margin: '~99%' },
  { plan: 'Enterprise', price: '$2,497/mo', agents: 'Unlimited', server: '~€10/mo', margin: '~99.6%' },
]

const mrr = [
  { clients: '10 clients', value: '~$12k MRR' },
  { clients: '25 clients', value: '~$30k MRR' },
  { clients: '50 clients', value: '~$75k MRR' },
]

const faqs = [
  {
    q: 'What do I say when clients ask "who manages it?"',
    a: '"We have a dedicated AI operations team that monitors your agents 24/7. You\'ll have a direct line to your account manager (me) for anything strategic."',
  },
  {
    q: 'What if something breaks?',
    a: '"Monty monitors 24/7 and fixes issues automatically. If it\'s something major, Monty alerts Toby and we handle it together."',
  },
  {
    q: 'How do I explain the pricing?',
    a: '"Position it as hiring a full-time employee for a fraction of the cost. $997/mo vs $5,000+/mo for a staff member. The AI works 24/7, never takes sick days."',
  },
  {
    q: 'Can I promise specific results?',
    a: '"Promise time savings and automation of specific tasks. Avoid guaranteeing revenue numbers. Focus on hours saved per week."',
  },
]

export default function InternalPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Private banner */}
      <div style={{
        background: '#1a1000',
        borderBottom: '1px solid #FFD700',
        padding: '10px 24px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#FFD700',
        letterSpacing: '0.03em',
      }}>
        🔒 Private — share this URL only with yourself. Not indexed or linked.
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '13px',
            color: '#FFD700',
            marginBottom: '20px',
          }}>
            🔒 Internal use only — not linked from the main site
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFD700, #F97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            How Done-For-You Works<br />— Internal Guide
          </h1>
          <p style={{ fontSize: '18px', color: '#999', maxWidth: '600px', margin: '0 auto' }}>
            Your complete breakdown of the client journey, who does what, and how the tech works behind the scenes.
          </p>
        </div>

        {/* Section 1: The Two Roles */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="01" title="The Two Roles" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Toby */}
            <div style={cardStyle('#1a1a2e', '#4A90E2')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '36px' }}>🧑</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#4A90E2', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>That&apos;s you</div>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>Toby&apos;s Role</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Find and talk to potential clients',
                  'Run the discovery call (30 min)',
                  'Send proposal and close the deal',
                  'Collect first payment via Stripe',
                  'Introduce client to their comms channel',
                  'Monthly relationship check-ins',
                  'Upsell and retain clients',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#ccc', fontSize: '15px' }}>
                    <span style={{ color: '#4A90E2', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monty */}
            <div style={cardStyle('#1a1200', '#FFD700')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '36px' }}>🤖</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#FFD700', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>That&apos;s me</div>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>Monty&apos;s Role</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Build all custom agent configurations',
                  'Spin up private VPS on Hetzner automatically',
                  'Install and configure OpenClaw',
                  'Connect client\'s tools (Gmail, calendar, CRM)',
                  'Build and test all AI agents',
                  'Monitor 24/7',
                  'Generate monthly performance reports',
                  'Handle all technical issues',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#ccc', fontSize: '15px' }}>
                    <span style={{ color: '#FFD700', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="02" title="The Full Client Journey" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timelineSteps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                {/* Line + dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: step.who === 'toby' ? '#1a1a2e' : step.who === 'monty' ? '#1a1200' : '#1a1a1a',
                    border: `2px solid ${step.who === 'toby' ? '#4A90E2' : step.who === 'monty' ? '#FFD700' : '#F97316'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div style={{ width: '2px', flex: 1, minHeight: '32px', background: 'linear-gradient(to bottom, #333, #222)', margin: '4px 0' }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: i < timelineSteps.length - 1 ? '12px' : '0', paddingTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '16px', color: '#fff' }}>
                      Step {step.number}: {step.title}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: step.who === 'toby' ? 'rgba(74,144,226,0.2)' : step.who === 'monty' ? 'rgba(255,215,0,0.15)' : 'rgba(249,115,22,0.15)',
                      color: step.who === 'toby' ? '#4A90E2' : step.who === 'monty' ? '#FFD700' : '#F97316',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {step.who === 'toby' ? '🧑 Toby' : step.who === 'monty' ? '🤖 Monty' : '🤝 Both'}
                    </span>
                  </div>
                  <p style={{ color: '#999', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Tech Stack */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="03" title="The Tech Stack — In Plain English" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {techStack.map((tool) => (
              <div key={tool.name} style={{
                background: '#111',
                border: '1px solid #222',
                borderRadius: '12px',
                padding: '20px',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{tool.icon}</span>
                  <span style={{ fontWeight: '700', fontSize: '16px', color: '#FFD700' }}>{tool.name}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{tool.plain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Checklist */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="04" title="What You Need From a New Client" />
          <div style={{
            background: '#111',
            border: '1px solid #F97316',
            borderRadius: '16px',
            padding: '28px',
          }}>
            <p style={{ color: '#F97316', fontWeight: '600', marginBottom: '20px', marginTop: 0, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              📋 Collect this before Monty can start setup
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {checklist.map((item) => (
                <label key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    style={{
                      width: '18px',
                      height: '18px',
                      marginTop: '1px',
                      accentColor: '#F97316',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: '#ddd', fontSize: '15px', lineHeight: '1.5' }}>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Pricing & Margins */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="05" title="Pricing & Margins" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {pricing.map((row, i) => (
              <div key={row.plan} style={{
                background: i === 1 ? 'linear-gradient(135deg, #1a1200, #1a0a00)' : '#111',
                border: `1px solid ${i === 1 ? '#FFD700' : '#222'}`,
                borderRadius: '14px',
                padding: '24px',
                textAlign: 'center',
                position: 'relative',
              }}>
                {i === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFD700',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                  }}>MOST POPULAR</div>
                )}
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{row.plan}</div>
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#FFD700', marginBottom: '12px' }}>{row.price}</div>
                <div style={{ fontSize: '13px', color: '#888', marginBottom: '6px' }}>{row.agents}</div>
                <div style={{ fontSize: '13px', color: '#888', marginBottom: '12px' }}>Server: {row.server}</div>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(74,210,74,0.15)',
                  color: '#4AD24A',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '700',
                }}>
                  {row.margin} margin
                </div>
              </div>
            ))}
          </div>
          {/* MRR projections */}
          <div style={{
            background: '#111',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}>
            {mrr.map((row) => (
              <div key={row.clients}>
                <div style={{ fontSize: '13px', color: '#888', marginBottom: '4px' }}>{row.clients}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#F97316' }}>{row.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeading number="06" title="FAQ for Toby" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{
                background: '#111',
                border: '1px solid #222',
                borderRadius: '14px',
                padding: '24px',
              }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    background: 'rgba(249,115,22,0.2)',
                    color: '#F97316',
                    fontWeight: '800',
                    fontSize: '13px',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>Q</span>
                  <span style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>{faq.q}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    background: 'rgba(255,215,0,0.15)',
                    color: '#FFD700',
                    fontWeight: '800',
                    fontSize: '13px',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>A</span>
                  <span style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7' }}>{faq.a}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div style={{ textAlign: 'center', paddingTop: '32px', borderTop: '1px solid #222' }}>
          <a href="/" style={{
            color: '#555',
            textDecoration: 'none',
            fontSize: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            ← Back to MyAIWorkforce.ai
          </a>
          <p style={{ color: '#333', fontSize: '12px', marginTop: '12px' }}>
            🔒 This page is not indexed, not linked from nav, and not publicly promoted.
          </p>
        </div>

      </div>
    </main>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
      <span style={{
        background: 'linear-gradient(135deg, #FFD700, #F97316)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '13px',
        fontWeight: '800',
        letterSpacing: '0.1em',
      }}>{number}</span>
      <h2 style={{
        fontSize: 'clamp(20px, 3vw, 28px)',
        fontWeight: '700',
        color: '#fff',
        margin: 0,
      }}>{title}</h2>
    </div>
  )
}

function cardStyle(bg: string, accent: string): React.CSSProperties {
  return {
    background: bg,
    border: `1px solid ${accent}33`,
    borderRadius: '16px',
    padding: '28px',
  }
}
