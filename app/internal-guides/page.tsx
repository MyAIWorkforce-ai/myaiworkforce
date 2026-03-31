import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How DIY Guides & Payments Work — Internal Guide',
  description: 'Internal explainer for Toby: how DIY guides and Stripe/Supabase payments work.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

const paymentSteps = [
  {
    number: 1,
    title: 'Customer visits /guides',
    desc: 'Browses the guide cards, sees price and difficulty level',
    icon: '👀',
    done: true,
  },
  {
    number: 2,
    title: 'Clicks "Buy Guide $9 / $14 / $19"',
    desc: 'Button on the guide detail page triggers checkout',
    icon: '🛒',
    done: true,
  },
  {
    number: 3,
    title: 'Stripe Checkout opens',
    desc: "Customer enters card details on Stripe's secure page — we never see card numbers",
    icon: '💳',
    done: true,
  },
  {
    number: 4,
    title: 'Payment processed',
    desc: 'Stripe handles everything. Money goes to your Stripe account.',
    icon: '✅',
    done: true,
  },
  {
    number: 5,
    title: 'Success page',
    desc: '🎉 Payment Successful! Check your email. — Customer lands on /success',
    icon: '🎉',
    done: true,
  },
  {
    number: 6,
    title: '[Coming soon] Email delivery',
    desc: 'Once Supabase webhook is configured, customer gets automatic email with download link',
    icon: '📧',
    done: false,
  },
  {
    number: 7,
    title: 'Payout to your bank',
    desc: 'Stripe pays out to your Australian bank account on a rolling basis (usually 2–7 days)',
    icon: '🏦',
    done: true,
  },
]

const workingItems = [
  'Guide pages live with Buy buttons',
  'Stripe checkout opens and processes real payments',
  'Money lands in Stripe account',
  'Success page after payment',
  'User signup/login (Supabase auth)',
]

const partialItems = [
  'Purchase recording in Supabase (connected but webhook not configured)',
  'Email delivery of guides after purchase (success page shows but no email yet)',
]

const notBuiltItems = [
  'Automated email with download link after purchase',
  'Customer dashboard (see what they\'ve bought)',
  'Guide file downloads (files need to be uploaded to Supabase storage)',
  'Stripe webhook handler for purchase events',
]

const nextSteps = [
  {
    number: 1,
    title: 'Upload guide files',
    desc: 'Create the actual guide PDFs/markdown files and upload to Supabase Storage',
    icon: '📂',
  },
  {
    number: 2,
    title: 'Set up Resend',
    desc: 'resend.com — free tier, 3,000 emails/month — email delivery service',
    icon: '📬',
  },
  {
    number: 3,
    title: 'Configure Stripe webhook',
    desc: 'So purchases trigger automatic emails to customers',
    icon: '🔗',
  },
  {
    number: 4,
    title: 'Build customer dashboard',
    desc: '/dashboard page where customers see their purchases and access downloads',
    icon: '📊',
  },
  {
    number: 5,
    title: 'Test end-to-end',
    desc: 'Buy a guide with real card, confirm email arrives with download link',
    icon: '🧪',
  },
]

const revenueRows = [
  { sales: '10 guide sales/month', revenue: '~$120/mo passive' },
  { sales: '50 guide sales/month', revenue: '~$600/mo passive' },
  { sales: '200 guide sales/month', revenue: '~$2,400/mo passive' },
  { sales: '1,000 guide sales/month', revenue: '~$12,000/mo passive' },
]

export default function InternalGuidesPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Hero */}
      <section style={{ borderBottom: '1px solid #222', padding: '60px 24px 48px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          background: '#1a1a0a',
          border: '1px solid #FFD700',
          color: '#FFD700',
          fontSize: 13,
          fontWeight: 600,
          padding: '6px 16px',
          borderRadius: 20,
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          🔒 Private — Internal use only
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
          How DIY Guides &amp; Payments Work
          <span style={{ display: 'block', color: '#FFD700' }}>Internal Guide</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: 18, maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
          Everything you need to know about the guides product and how money flows through the site.
        </p>
      </section>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Section 1: What Are DIY Guides */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={1} title="What Are the DIY Guides?" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            <Card>
              <CardIcon>📚</CardIcon>
              <CardTitle>Digital Products</CardTitle>
              <CardText>Guides are paid PDF/markdown instruction files sold on the site. Customers buy once and get the guide forever — no subscription.</CardText>
            </Card>
            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Priced by Difficulty</CardTitle>
              <CardText>
                <PriceBadge level="Beginner" price="$9" color="#22c55e" />
                <PriceBadge level="Intermediate" price="$14" color="#F97316" />
                <PriceBadge level="Advanced" price="$19" color="#ef4444" />
                One-time payment. No recurring fees.
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Target Customer</CardTitle>
              <CardText>DIY business owners who want to build their own AI agents without hiring someone. They do the work — you give them the blueprint.</CardText>
            </Card>
            <Card>
              <CardIcon>🚀</CardIcon>
              <CardTitle>9 Guides Live Now</CardTitle>
              <CardText>Email agents · Customer support · Lead gen · Social media · Invoice processing · Market research · OpenClaw quick-start · n8n sales outreach · Hiring pipeline</CardText>
            </Card>
            <Card style={{ gridColumn: 'span 2' }}>
              <CardIcon>🔄</CardIcon>
              <CardTitle>The Business Strategy</CardTitle>
              <CardText>
                This is the <strong style={{ color: '#FFD700' }}>low-ticket entry point</strong> — gets people into the ecosystem. 
                They buy a $9 guide, see results, then upgrade to Done-For-You ($3k–$8k). 
                Guides are the top of the funnel.
              </CardText>
            </Card>
          </div>
        </section>

        {/* Section 2: Payment Flow */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={2} title="The Payment Flow — Step by Step" />
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {paymentSteps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
                {/* Line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48, flexShrink: 0 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: step.done ? '#FFD700' : '#333',
                    color: step.done ? '#0A0A0A' : '#888',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 14,
                    flexShrink: 0,
                    zIndex: 1,
                    border: step.done ? 'none' : '2px dashed #555',
                  }}>
                    {step.number}
                  </div>
                  {i < paymentSteps.length - 1 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      background: step.done ? '#FFD700' : '#333',
                      minHeight: 24,
                    }} />
                  )}
                </div>
                {/* Content */}
                <div style={{
                  marginLeft: 16,
                  paddingBottom: i < paymentSteps.length - 1 ? 24 : 0,
                  flex: 1,
                }}>
                  <div style={{
                    background: step.done ? '#111' : '#0f0f0f',
                    border: `1px solid ${step.done ? '#222' : '#333'}`,
                    borderRadius: 12,
                    padding: '16px 20px',
                    marginTop: 0,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 20 }}>{step.icon}</span>
                      <strong style={{ color: step.done ? '#fff' : '#888', fontSize: 15 }}>{step.title}</strong>
                      {!step.done && (
                        <span style={{ background: '#F97316', color: '#fff', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p style={{ color: '#aaa', margin: 0, fontSize: 14, lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 20,
            background: '#1a1000',
            border: '1px solid #F97316',
            borderRadius: 12,
            padding: '16px 20px',
          }}>
            <p style={{ margin: 0, color: '#fcd34d', fontSize: 14, lineHeight: 1.6 }}>
              ⚠️ <strong>Note:</strong> Step 6 (email delivery) is the next thing to build — right now customers land on the success page but don&apos;t get an automated email yet. 
              This needs a Stripe webhook + Supabase + email service (like Resend or SendGrid) to complete.
            </p>
          </div>
        </section>

        {/* Section 3: Marketplace Agents */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={3} title="The Marketplace Agents — Same Flow" />
          <div style={{ marginTop: 24, background: '#111', border: '1px solid #222', borderRadius: 16, padding: 28 }}>
            <p style={{ color: '#ccc', marginTop: 0, lineHeight: 1.7 }}>
              The marketplace agents work the exact same way as guides. The same Stripe checkout, the same success page.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 16 }}>
              <MiniCard icon="💰" title="Paid Agents" text="$29/mo, $49/mo — 'Get Agent →' triggers Stripe checkout → Success page" color="#FFD700" />
              <MiniCard icon="🆓" title="Free Agents" text="'Get Agent →' goes to /contact (Book a Call) — no payment needed" color="#22c55e" />
              <MiniCard icon="📧" title="Same Gap" text="Automated email delivery of agent files after purchase is also not built yet" color="#F97316" />
            </div>
          </div>
        </section>

        {/* Section 4: What Stripe Does */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={4} title="What Stripe Does" subtitle="In plain English" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            <Card>
              <CardIcon>🏧</CardIcon>
              <CardTitle>Bank Terminal for the Internet</CardTitle>
              <CardText>Stripe is like a bank terminal for your website. When customers pay, they type their card into Stripe&apos;s secure form — not yours.</CardText>
            </Card>
            <Card>
              <CardIcon>🔐</CardIcon>
              <CardTitle>You Never Touch Card Data</CardTitle>
              <CardText>You never store or even see credit card numbers. Stripe is PCI compliant — they handle all the security compliance for you.</CardText>
            </Card>
            <Card>
              <CardIcon>🏦</CardIcon>
              <CardTitle>Auto-Transfer to Your Bank</CardTitle>
              <CardText>Money lands in your Stripe balance, then automatically transfers to your Australian bank account. Check all transactions at dashboard.stripe.com</CardText>
            </Card>
            <Card style={{ border: '1px solid #22c55e33', background: '#0a1a0a' }}>
              <CardIcon>🟢</CardIcon>
              <CardTitle style={{ color: '#22c55e' }}>Currently: LIVE MODE</CardTitle>
              <CardText>Real money, real payments. To test, use card <code style={{ background: '#1a2a1a', padding: '2px 6px', borderRadius: 4, color: '#86efac' }}>4242 4242 4242 4242</code> — but only works in test mode (not live).</CardText>
            </Card>
            <Card style={{ border: '1px solid #ef444433', background: '#1a0a0a', gridColumn: 'span 2' }}>
              <CardIcon>⚠️</CardIcon>
              <CardTitle style={{ color: '#ef4444' }}>Keep Your Live Keys Safe</CardTitle>
              <CardText>Your <code style={{ background: '#2a1a1a', padding: '2px 6px', borderRadius: 4, color: '#fca5a5' }}>sk_live_...</code> keys are stored securely on the Mac mini. <strong style={{ color: '#ef4444' }}>Never share them with anyone.</strong> Anyone with your live secret key can transfer money out of your account.</CardText>
            </Card>
          </div>
        </section>

        {/* Section 5: What Supabase Does */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={5} title="What Supabase Does" subtitle="In plain English" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            <Card>
              <CardIcon>🗄️</CardIcon>
              <CardTitle>Your Database</CardTitle>
              <CardText>Supabase is your database — it stores user accounts, purchase records, and anything else the site needs to remember.</CardText>
            </Card>
            <Card>
              <CardIcon>👤</CardIcon>
              <CardTitle>User Accounts</CardTitle>
              <CardText>When someone signs up at /signup → account created in Supabase. When they log in at /login → Supabase verifies their password. It&apos;s all handled automatically.</CardText>
            </Card>
            <Card style={{ border: '1px solid #F97316', background: '#1a0f00' }}>
              <CardIcon>⚡</CardIcon>
              <CardTitle style={{ color: '#F97316' }}>Currently: Purchase Recording Not Active</CardTitle>
              <CardText>Supabase is connected but not yet recording purchases automatically. That needs the Stripe webhook to be configured first.</CardText>
            </Card>
            <Card>
              <CardIcon>🔗</CardIcon>
              <CardTitle>The Missing Link: Webhooks</CardTitle>
              <CardText>
                The flow will be: Stripe payment succeeds → Stripe fires a webhook → your server receives it → Supabase records the purchase → email sent to customer.
              </CardText>
            </Card>
          </div>
        </section>

        {/* Section 6: Status */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={6} title="What's Still To Build" subtitle="Honest status — as of now" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            {/* Working */}
            <div style={{ background: '#0a1a0a', border: '1px solid #22c55e44', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 20 }}>🟢</span>
                <strong style={{ color: '#22c55e', fontSize: 16 }}>WORKING</strong>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {workingItems.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#22c55e', marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#86efac', fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partial */}
            <div style={{ background: '#1a1200', border: '1px solid #eab30844', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 20 }}>🟡</span>
                <strong style={{ color: '#eab308', fontSize: 16 }}>PARTIALLY DONE</strong>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {partialItems.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#eab308', marginTop: 1, flexShrink: 0 }}>~</span>
                    <span style={{ color: '#fde68a', fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Built */}
            <div style={{ background: '#1a0a0a', border: '1px solid #ef444444', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 20 }}>🔴</span>
                <strong style={{ color: '#ef4444', fontSize: 16 }}>NOT YET BUILT</strong>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {notBuiltItems.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#ef4444', marginTop: 1, flexShrink: 0 }}>✗</span>
                    <span style={{ color: '#fca5a5', fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Next Steps */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={7} title="What To Do Next" subtitle="Priority order — tackle these in sequence" />
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {nextSteps.map((step) => (
              <div key={step.number} style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                background: '#111',
                border: '1px solid #222',
                borderRadius: 12,
                padding: '16px 20px',
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFD700, #F97316)',
                  color: '#0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 15,
                  flexShrink: 0,
                }}>
                  {step.number}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>{step.icon}</span>
                    <strong style={{ color: '#FFD700', fontSize: 15 }}>{step.title}</strong>
                  </div>
                  <p style={{ color: '#aaa', margin: '4px 0 0', fontSize: 14, lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Revenue Projections */}
        <section style={{ marginTop: 64 }}>
          <SectionHeader number={8} title="Revenue Projections — Guides" subtitle="What this could look like at scale" />
          <div style={{ marginTop: 24, background: '#111', border: '1px solid #222', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1a1a00', borderBottom: '1px solid #333' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: '#FFD700', fontSize: 14, fontWeight: 600 }}>Sales Volume</th>
                  <th style={{ padding: '14px 20px', textAlign: 'right', color: '#FFD700', fontSize: 14, fontWeight: 600 }}>Monthly Revenue</th>
                </tr>
              </thead>
              <tbody>
                {revenueRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < revenueRows.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                    <td style={{ padding: '14px 20px', color: '#ccc', fontSize: 14 }}>{row.sales}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'right', color: '#22c55e', fontWeight: 700, fontSize: 15 }}>{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{
            marginTop: 16,
            background: '#0a1a0a',
            border: '1px solid #22c55e44',
            borderRadius: 12,
            padding: '14px 20px',
          }}>
            <p style={{ margin: 0, color: '#86efac', fontSize: 14, lineHeight: 1.6 }}>
              💡 Once the email delivery is set up, this is <strong>100% passive income</strong>. No work per sale — customers pay, guides deliver automatically.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid #222', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/internal" style={{ color: '#FFD700', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
              ← Internal Hub
            </Link>
            <Link href="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: 14 }}>
              Main Site
            </Link>
            <Link href="/guides" style={{ color: '#aaa', textDecoration: 'none', fontSize: 14 }}>
              View Guides
            </Link>
            <Link href="/marketplace" style={{ color: '#aaa', textDecoration: 'none', fontSize: 14 }}>
              View Marketplace
            </Link>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#1a1a0a',
            border: '1px solid #FFD700',
            color: '#FFD700',
            fontSize: 12,
            padding: '6px 12px',
            borderRadius: 20,
            fontWeight: 600,
          }}>
            🔒 Private — Not indexed by search engines
          </div>
        </div>

      </div>
    </main>
  )
}

// ─── Helper Components ───────────────────────────────────────────────────────

function SectionHeader({ number, title, subtitle }: { number: number; title: string; subtitle?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 8 }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'linear-gradient(135deg, #FFD700, #F97316)',
        color: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: 18,
        flexShrink: 0,
        marginTop: 2,
      }}>
        {number}
      </div>
      <div>
        <h2 style={{ margin: 0, fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff' }}>{title}</h2>
        {subtitle && <p style={{ margin: '4px 0 0', color: '#888', fontSize: 14 }}>{subtitle}</p>}
      </div>
    </div>
  )
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: '#111',
      border: '1px solid #222',
      borderRadius: 16,
      padding: 24,
      ...style,
    }}>
      {children}
    </div>
  )
}

function CardIcon({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 28, marginBottom: 12 }}>{children}</div>
}

function CardTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#fff', ...style }}>{children}</h3>
}

function CardText({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: 0, color: '#aaa', fontSize: 14, lineHeight: 1.6 }}>{children}</p>
}

function PriceBadge({ level, price, color }: { level: string; price: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: `${color}20`,
      border: `1px solid ${color}44`,
      color,
      fontSize: 12,
      fontWeight: 600,
      padding: '3px 8px',
      borderRadius: 8,
      marginRight: 6,
      marginBottom: 8,
    }}>
      {level} {price}
    </span>
  )
}

function MiniCard({ icon, title, text, color }: { icon: string; title: string; text: string; color: string }) {
  return (
    <div style={{
      background: '#0A0A0A',
      border: `1px solid ${color}33`,
      borderRadius: 12,
      padding: '16px 18px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <strong style={{ color, fontSize: 14 }}>{title}</strong>
      </div>
      <p style={{ margin: 0, color: '#aaa', fontSize: 13, lineHeight: 1.5 }}>{text}</p>
    </div>
  )
}
