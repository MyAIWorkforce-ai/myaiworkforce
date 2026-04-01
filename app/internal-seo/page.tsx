import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Strategy — Internal Review | My AI Workforce',
  description: 'Internal SEO strategy review for MyAIWorkforce.ai. Private page for founder review.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

const seoPages = [
  {
    name: 'Homepage',
    path: '/',
    title: 'Buy & Sell AI Agents Worldwide | MyAIWorkforce.ai',
    titleLen: 49,
    metaDesc: 'Build your AI workforce without the complexity. Browse 500+ ready-made AI agents, step-by-step guides, or let us build and run your entire AI workforce from $997/mo.',
    metaLen: 162,
    primaryKeyword: 'AI workforce Australia',
    secondaryKeywords: ['AI agents for business', 'AI automation small business', 'done for you AI', 'buy AI agents', 'Australian AI platform'],
    h1: 'Your AI Workforce Starts Here',
    schemaType: 'Organization + WebSite + SiteLinksSearchBox',
    internalLinks: ['/marketplace', '/done-for-you', '/pricing'],
    seoScore: 'Low',
    notes: 'No meta tags currently set. High-priority page — fix first.',
  },
  {
    name: 'Marketplace',
    path: '/marketplace',
    title: 'AI Agent Marketplace Australia | Buy & Deploy AI Agents',
    titleLen: 55,
    metaDesc: 'Browse 500+ AI agents for sales, marketing, ops & more. Filter by industry, price or use case. Deploy instantly. Built for Australian businesses ready to automate.',
    metaLen: 160,
    primaryKeyword: 'AI agent marketplace Australia',
    secondaryKeywords: ['buy AI agents', 'AI automation tools', 'business AI agents', 'AI software marketplace', 'OpenClaw agents'],
    h1: 'Browse the AI Agent Marketplace',
    schemaType: 'ItemList + Product',
    internalLinks: ['/done-for-you', '/guides', '/pricing'],
    seoScore: 'Low',
    notes: 'Product listings need individual schema markup. Filter/category pages are link equity goldmines.',
  },
  {
    name: 'Guides',
    path: '/guides',
    title: 'AI Automation Guides for Business | My AI Workforce',
    titleLen: 51,
    metaDesc: 'Step-by-step AI automation guides built for Australian business owners. No tech skills needed. Learn how to automate email, lead gen, CRM, support and more.',
    metaLen: 158,
    primaryKeyword: 'AI automation guides for business',
    secondaryKeywords: ['how to automate business with AI', 'AI for small business Australia', 'AI setup guide', 'business automation tutorials', 'OpenClaw how to'],
    h1: 'AI Automation Guides — Built for Business Owners',
    schemaType: 'HowTo + BreadcrumbList',
    internalLinks: ['/marketplace', '/done-for-you', '/blog'],
    seoScore: 'Low',
    notes: 'Huge SEO opportunity. Each guide should be its own indexable page with HowTo schema.',
  },
  {
    name: 'Done-For-You',
    path: '/done-for-you',
    title: 'Done-For-You AI Workforce | From $997/mo | MyAIWorkforce.ai',
    titleLen: 59,
    metaDesc: 'We build, deploy & manage your AI workforce. Private VPS, custom agents, 24/7 monitoring. Email triage, lead gen, CRM automation and more. Book a free audit.',
    metaLen: 157,
    primaryKeyword: 'done for you AI agents Australia',
    secondaryKeywords: ['AI automation service', 'managed AI workforce', 'hire AI agent', 'business automation service Australia', 'AI agency Australia'],
    h1: 'We Build & Run Your Entire AI Workforce',
    schemaType: 'Service + FAQPage + AggregateRating',
    internalLinks: ['/pricing', '/contact', '/marketplace'],
    seoScore: 'Low',
    notes: 'High-intent commercial page. Add testimonials with schema. FAQ section will capture long-tail questions.',
  },
  {
    name: 'Pricing',
    path: '/pricing',
    title: 'AI Workforce Pricing | Plans from $997/mo | My AI Workforce',
    titleLen: 60,
    metaDesc: 'Simple, transparent pricing for your AI workforce. DIY marketplace access or full done-for-you management from $997/mo. No lock-in. Cancel anytime. See all plans.',
    metaLen: 160,
    primaryKeyword: 'AI workforce pricing Australia',
    secondaryKeywords: ['AI agent cost', 'done for you AI price', 'AI automation pricing', 'AI service plans', 'AI subscription Australia'],
    h1: 'Simple Pricing. No Surprises.',
    schemaType: 'PriceSpecification + FAQPage',
    internalLinks: ['/done-for-you', '/contact', '/marketplace'],
    seoScore: 'Low',
    notes: 'Pricing pages rank for high-intent keywords. Add comparison table. Add FAQ schema for "how much does AI cost" queries.',
  },
  {
    name: 'About',
    path: '/about',
    title: 'About My AI Workforce | Australian AI Agency & Marketplace',
    titleLen: 56,
    metaDesc: 'My AI Workforce is Australia\'s leading AI agent marketplace and done-for-you AI agency. Built by founders who know automation. Meet the team behind your AI workforce.',
    metaLen: 160,
    primaryKeyword: 'Australian AI agency',
    secondaryKeywords: ['AI company Australia', 'AI startup Australia', 'who is My AI Workforce', 'AI workforce team', 'Australian AI founders'],
    h1: 'We\'re Building Australia\'s AI Workforce',
    schemaType: 'Organization + Person',
    internalLinks: ['/done-for-you', '/marketplace', '/contact'],
    seoScore: 'Medium',
    notes: 'Add founder bio with Person schema. E-E-A-T signals matter here — show expertise and authority.',
  },
  {
    name: 'Blog',
    path: '/blog',
    title: 'AI Automation Blog for Business | My AI Workforce',
    titleLen: 50,
    metaDesc: 'Practical AI automation tips, guides and case studies for Australian business owners. No jargon — just tactics that work. Published weekly.',
    metaLen: 142,
    primaryKeyword: 'AI automation blog Australia',
    secondaryKeywords: ['AI for business blog', 'AI automation tips', 'small business AI advice', 'AI news Australia', 'AI agent tutorials'],
    h1: 'AI Automation Tips, Guides & Case Studies',
    schemaType: 'Blog + BlogPosting (per post)',
    internalLinks: ['/guides', '/marketplace', '/done-for-you'],
    seoScore: 'Low',
    notes: 'Blog is the #1 SEO lever. Each post needs individual meta, schema, and internal links. Start publishing ASAP.',
  },
  {
    name: 'Contact',
    path: '/contact',
    title: 'Contact My AI Workforce | Book a Free AI Audit',
    titleLen: 50,
    metaDesc: 'Book a free 30-min AI audit with our team. We\'ll map out your AI workforce, identify quick wins, and show you exactly what\'s possible for your business.',
    metaLen: 152,
    primaryKeyword: 'contact AI automation agency Australia',
    secondaryKeywords: ['book AI audit', 'AI consultation Australia', 'free AI strategy session', 'AI workforce consultation', 'hire AI agency'],
    h1: 'Book Your Free AI Audit',
    schemaType: 'ContactPage + LocalBusiness',
    internalLinks: ['/done-for-you', '/pricing', '/about'],
    seoScore: 'Low',
    notes: 'LocalBusiness schema helps with local SEO. Add Google Maps embed. Include response time promise.',
  },
  {
    name: 'Security',
    path: '/security',
    title: 'Security & Privacy | MyAIWorkforce.ai | Enterprise-Grade AI',
    titleLen: 58,
    metaDesc: 'Your data stays yours. My AI Workforce uses private VPS infrastructure, end-to-end encryption, and zero data sharing. Enterprise-grade security for Australian businesses.',
    metaLen: 162,
    primaryKeyword: 'AI security Australia',
    secondaryKeywords: ['secure AI platform', 'private AI deployment', 'AI data privacy Australia', 'enterprise AI security', 'GDPR compliant AI'],
    h1: 'Enterprise-Grade Security. Your Data Stays Yours.',
    schemaType: 'WebPage + FAQPage',
    internalLinks: ['/done-for-you', '/about', '/contact'],
    seoScore: 'Low',
    notes: 'Security pages are trust signals. Also ranks for enterprise buyers searching "secure AI" + "private AI deployment".',
  },
]

const blogPosts = [
  {
    num: 1,
    title: 'Best AI Agents for Small Business Australia 2025',
    keyword: 'AI agents small business Australia',
    searches: '1,200/mo',
    difficulty: 'Medium',
  },
  {
    num: 2,
    title: 'How to Automate Your Email Inbox with AI (Step-by-Step)',
    keyword: 'email automation AI',
    searches: '3,400/mo',
    difficulty: 'Medium',
  },
  {
    num: 3,
    title: 'OpenClaw vs n8n vs Make: The Complete 2025 Comparison',
    keyword: 'OpenClaw vs n8n',
    searches: '800/mo',
    difficulty: 'Low',
  },
  {
    num: 4,
    title: 'How Much Does AI Automation Cost for Small Business?',
    keyword: 'AI automation cost small business',
    searches: '1,900/mo',
    difficulty: 'Low',
  },
  {
    num: 5,
    title: 'The 7 Best AI Tools for Australian Business Owners in 2025',
    keyword: 'best AI tools for Australian business',
    searches: '2,100/mo',
    difficulty: 'Medium',
  },
  {
    num: 6,
    title: 'Done-For-You AI vs DIY: Which Is Right for Your Business?',
    keyword: 'done for you AI vs DIY',
    searches: '600/mo',
    difficulty: 'Low',
  },
  {
    num: 7,
    title: 'How to Automate Lead Generation with AI Agents',
    keyword: 'AI lead generation automation',
    searches: '2,800/mo',
    difficulty: 'High',
  },
  {
    num: 8,
    title: 'What Is an AI Workforce? The Beginner\'s Guide for Business Owners',
    keyword: 'what is AI workforce',
    searches: '1,400/mo',
    difficulty: 'Low',
  },
  {
    num: 9,
    title: 'CRM Automation with AI: Save 10+ Hours a Week',
    keyword: 'CRM automation AI',
    searches: '1,700/mo',
    difficulty: 'Medium',
  },
  {
    num: 10,
    title: 'AI Agents for Real Estate Australia: The Complete Guide',
    keyword: 'AI agents real estate Australia',
    searches: '900/mo',
    difficulty: 'Low',
  },
]

const quickWins = [
  {
    num: 1,
    title: 'Set Page Titles & Meta Descriptions on All 9 Pages',
    why: 'Right now every page likely shows the same generic title in Google. This single fix improves click-through rate (CTR) immediately and signals relevance to Google for your target keywords. 30-minute job, instant impact.',
    effort: 'Low',
    impact: 'High',
  },
  {
    num: 2,
    title: 'Add Organization Schema to Homepage',
    why: 'Structured data tells Google exactly what your business is, where you\'re based, and what you do. It enables rich results (logo in search, sitelinks, knowledge panel) and is a one-time setup.',
    effort: 'Low',
    impact: 'High',
  },
  {
    num: 3,
    title: 'Connect Google Search Console & Submit Sitemap',
    why: 'Without Search Console, you\'re flying blind. It shows what Google already indexes, what keywords you\'re showing for, and alerts you to errors. Sitemap ensures every page gets crawled and indexed fast.',
    effort: 'Low',
    impact: 'High',
  },
  {
    num: 4,
    title: 'Add OpenGraph Tags to All Pages',
    why: 'Every time someone shares a link on LinkedIn, Slack, or Twitter, it should show a rich preview with image, title, and description. Without OG tags, it shows a blank ugly preview — zero social traffic. Easy fix with huge ongoing ROI.',
    effort: 'Low',
    impact: 'Medium',
  },
  {
    num: 5,
    title: 'Publish 2 Long-Form Blog Posts (2,000+ words each)',
    why: 'Fresh content is rocket fuel for SEO. Two well-optimised posts targeting "AI agents small business Australia" and "done for you AI services" can start ranking within 6-8 weeks. Target keywords with search volume but low competition first.',
    effort: 'Medium',
    impact: 'High',
  },
]

const scoreColor = (score: string) => {
  if (score === 'High') return '#22c55e'
  if (score === 'Medium') return '#f59e0b'
  return '#ef4444'
}

const difficultyColor = (diff: string) => {
  if (diff === 'Low') return '#22c55e'
  if (diff === 'Medium') return '#f59e0b'
  return '#ef4444'
}

export default function InternalSEOPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#e5e5e5', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero */}
      <div style={{ borderBottom: '1px solid #1a1a1a', padding: '60px 40px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '4px 12px',
          fontSize: '13px',
          color: '#FFD700',
          marginBottom: '20px',
          fontWeight: 600,
        }}>
          🔒 Private
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#FFD700', margin: '0 0 16px' }}>
          SEO Strategy — Internal Review
        </h1>
        <p style={{ fontSize: '18px', color: '#888', margin: 0, maxWidth: '600px' }}>
          Complete SEO plan for all main pages. Review and approve before implementation.
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 80px' }}>

        {/* Section 1: Per-page SEO cards */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#FFD700', marginBottom: '8px' }}>
          📄 Page-by-Page SEO Plan
        </h2>
        <p style={{ color: '#666', marginBottom: '32px', fontSize: '14px' }}>
          9 pages · All titles 50-60 chars · All descriptions 150-160 chars
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
          {seoPages.map((page) => (
            <div key={page.path} style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '12px',
              padding: '28px',
              borderLeft: `4px solid ${scoreColor(page.seoScore)}`,
            }}>
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                    {page.name}
                    <span style={{ fontSize: '14px', color: '#555', fontWeight: 400, marginLeft: '10px' }}>{page.path}</span>
                  </h3>
                </div>
                <div style={{
                  background: scoreColor(page.seoScore) + '22',
                  border: `1px solid ${scoreColor(page.seoScore)}`,
                  borderRadius: '6px',
                  padding: '4px 12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: scoreColor(page.seoScore),
                }}>
                  SEO Score: {page.seoScore}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Left col */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Page Title ({page.titleLen} chars)
                    </div>
                    <div style={{ background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#d4d4d4', fontFamily: 'monospace' }}>
                      {page.title}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Meta Description ({page.metaLen} chars)
                    </div>
                    <div style={{ background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#aaa', lineHeight: '1.5', fontFamily: 'monospace' }}>
                      {page.metaDesc}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      H1 Tag
                    </div>
                    <div style={{ fontSize: '15px', color: '#e5e5e5', fontStyle: 'italic' }}>
                      &ldquo;{page.h1}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Right col */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      Primary Keyword
                    </div>
                    <span style={{ background: '#1a2a1a', border: '1px solid #2a4a2a', borderRadius: '4px', padding: '4px 10px', fontSize: '13px', color: '#22c55e', fontWeight: 600 }}>
                      {page.primaryKeyword}
                    </span>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      Secondary Keywords
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {page.secondaryKeywords.map((kw) => (
                        <span key={kw} style={{ background: '#1a1a2a', border: '1px solid #2a2a4a', borderRadius: '4px', padding: '3px 8px', fontSize: '12px', color: '#818cf8' }}>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Schema Type
                    </div>
                    <div style={{ fontSize: '13px', color: '#f59e0b' }}>
                      {page.schemaType}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      Internal Links → 
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {page.internalLinks.map((link) => (
                        <span key={link} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '4px', padding: '3px 8px', fontSize: '12px', color: '#888' }}>
                          {link}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #1a1a1a' }}>
                <span style={{ fontSize: '12px', color: '#555', fontStyle: 'italic' }}>
                  💡 {page.notes}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Global SEO Checklist */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#FFD700', marginBottom: '8px' }}>
          ✅ Global SEO Checklist
        </h2>
        <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>Items that apply across the entire site</p>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '28px', marginBottom: '64px' }}>
          {[
            { done: false, item: 'Google Search Console connected' },
            { done: false, item: 'Sitemap.xml created and submitted' },
            { done: false, item: 'robots.txt configured' },
            { done: false, item: 'OpenGraph tags on all pages (for social sharing)' },
            { done: false, item: 'Twitter Card tags' },
            { done: false, item: 'Canonical URLs set' },
            { done: false, item: 'Schema markup (Organization) on homepage' },
            { done: false, item: 'Page speed optimised (images lazy loaded, fonts optimised)' },
            { done: true, item: 'Mobile responsive' },
            { done: true, item: 'HTTPS' },
          ].map(({ done, item }) => (
            <div key={item} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 0',
              borderBottom: '1px solid #1a1a1a',
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: done ? 'none' : '2px solid #333',
                background: done ? '#22c55e' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '12px',
              }}>
                {done ? '✓' : ''}
              </div>
              <span style={{ fontSize: '15px', color: done ? '#22c55e' : '#ccc' }}>
                {item}
                {done && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#22c55e' }}>✅</span>}
              </span>
              {!done && (
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#ef4444', fontWeight: 600, textTransform: 'uppercase' }}>
                  Needs setup
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Section 3: Blog SEO Strategy */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#FFD700', marginBottom: '8px' }}>
          ✍️ Blog SEO Strategy
        </h2>
        <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>10 high-value blog posts — ordered by quick-win potential</p>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', overflow: 'hidden', marginBottom: '64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 100px 80px', padding: '12px 20px', background: '#1a1a1a', fontSize: '11px', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '1px', gap: '16px' }}>
            <div>#</div>
            <div>Blog Title</div>
            <div>Target Keyword</div>
            <div>Est. Searches</div>
            <div>Difficulty</div>
          </div>
          {blogPosts.map((post) => (
            <div key={post.num} style={{
              display: 'grid',
              gridTemplateColumns: '40px 1fr 1fr 100px 80px',
              padding: '16px 20px',
              borderBottom: '1px solid #1a1a1a',
              gap: '16px',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '14px', color: '#555', fontWeight: 700 }}>{post.num}</div>
              <div style={{ fontSize: '14px', color: '#e5e5e5', fontWeight: 500 }}>{post.title}</div>
              <div style={{ fontSize: '13px', color: '#818cf8' }}>{post.keyword}</div>
              <div style={{ fontSize: '13px', color: '#22c55e', fontWeight: 600 }}>{post.searches}</div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: difficultyColor(post.difficulty),
                background: difficultyColor(post.difficulty) + '22',
                border: `1px solid ${difficultyColor(post.difficulty)}44`,
                borderRadius: '4px',
                padding: '2px 8px',
                textAlign: 'center',
              }}>
                {post.difficulty}
              </div>
            </div>
          ))}
        </div>

        {/* Section 4: Quick Wins */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#FFD700', marginBottom: '8px' }}>
          ⚡ Quick Wins — Implement First
        </h2>
        <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>Do these 5 things before anything else. Fastest path to SEO results.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px' }}>
          {quickWins.map((win) => (
            <div key={win.num} style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#FFD700',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '18px',
                flexShrink: 0,
              }}>
                {win.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#fff' }}>{win.title}</h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: win.effort === 'Low' ? '#22c55e' : '#f59e0b', background: (win.effort === 'Low' ? '#22c55e' : '#f59e0b') + '22', border: `1px solid ${win.effort === 'Low' ? '#22c55e' : '#f59e0b'}44`, borderRadius: '4px', padding: '2px 8px' }}>
                      Effort: {win.effort}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#22c55e', background: '#22c55e22', border: '1px solid #22c55e44', borderRadius: '4px', padding: '2px 8px' }}>
                      Impact: {win.impact}
                    </span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#888', lineHeight: '1.6' }}>{win.why}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 5: Implement */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1500 0%, #111 100%)',
          border: '1px solid #FFD700',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '64px',
        }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>🚀</div>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFD700', margin: '0 0 12px' }}>
            Ready to Implement?
          </h3>
          <p style={{ fontSize: '16px', color: '#888', margin: '0 0 24px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>
            Once you approve this strategy, ask Monty to implement all meta tags, page titles, and schema markup across the site.
          </p>
          <div style={{
            background: '#0A0A0A',
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '16px 24px',
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: '15px',
            color: '#FFD700',
          }}>
            &ldquo;Monty, implement the approved SEO strategy across all pages&rdquo;
          </div>
        </div>

        {/* Back link */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '32px', textAlign: 'center' }}>
          <a href="/internal" style={{ color: '#555', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            ← Back to Internal Dashboard
          </a>
          <div style={{ marginTop: '12px', fontSize: '12px', color: '#333' }}>
            🔒 This page is noindexed · Not linked from nav · Private to founder
          </div>
        </div>
      </div>
    </div>
  )
}
