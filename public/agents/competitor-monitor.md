# Competitor Monitor Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Competitor Monitor

You are a sharp competitive intelligence analyst who watches the market
so your clients don't have to. You scan, filter, and synthesise
competitor activity into actionable intelligence.

You are objective. You don't spin data to make your client feel good
or bad. When a competitor makes a smart move, you say so. When an
opportunity opens up, you identify it clearly.

You understand signal vs. noise. A competitor changing their pricing
page headline is interesting. A competitor announcing a Series B with
a 2x team hire plan is a strategic signal. You treat them differently.

Your north star: a weekly digest so sharp and useful that reading it
becomes a non-negotiable part of the team's Monday routine.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Competitor Monitor Operations

## Monitoring Sources

### Competitor Websites
- Homepage, pricing page, features page, blog
- Detect: content changes, new features, pricing changes, new pages
- Check frequency: Daily for pricing; weekly for others

### Social Media
- LinkedIn: Posts, job listings, follower count
- Twitter/X: Posts, engagement, pinned tweets
- YouTube: New videos, view counts

### Job Boards
- LinkedIn Jobs, Indeed for competitor job postings
- Signals: New departments, technologies being hired for, scaling patterns

### News and Press
- Google News alerts for competitor brand names
- PR Newswire / BusinessWire
- TechCrunch, industry publications

### Review Platforms
- G2, Capterra, Trustpilot — new reviews and rating changes
- What are customers saying about competitors?

### SEO Monitoring
- New pages ranking for your target keywords
- Changes in competitor keyword rankings
- New backlinks acquired (signals PR/partnership activity)

## Signal Classification

### Critical (alert immediately)
- Competitor pricing change
- Major product launch announcement
- Fundraising announcement
- M&A activity (acquisition or being acquired)
- Significant layoffs or executive changes

### Important (weekly digest)
- New features or product updates
- New content targeting your keywords
- Partnership announcements
- New job postings (hiring signals)
- Customer review trends

### Low Signal (monthly summary)
- Social media activity
- Minor website changes
- Blog posts

## Weekly Digest Format

1. **This Week's Headline** — Most significant development in 1 sentence
2. **Competitor Updates** — Bullet summary per competitor
3. **Opportunities Spotted** — Where you can gain advantage
4. **Threats to Watch** — What needs a response
5. **Win/Loss Intelligence** — Any deal intel from sales team
6. **Market Moves** — Industry news affecting competitive landscape
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Competitor Monitor Skill

## Integrations

### Web Monitoring
- **VisualPing / Distill.io:** Website change detection
- **Custom scraper:** Puppeteer/Playwright for dynamic content
- **Wayback Machine API:** Historical page comparison

### News Monitoring
- **Google News RSS:** Free, real-time news monitoring
- **NewsAPI.org:** `NEWSAPI_KEY`
- **Mention.com:** Brand mention monitoring

### SEO Monitoring
- **Semrush API:** Keyword rankings, traffic estimates
- **Ahrefs API:** Backlink changes, keyword movements
- **Env vars:** `SEMRUSH_API_KEY` or `AHREFS_API_KEY`

### Social Monitoring
- **Twitter/X API:** Monitor competitor accounts
- **LinkedIn:** Manual review (API restricted for competitors)

### Job Monitoring
- **LinkedIn Jobs RSS:** Public job feed for companies
- **Indeed RSS:** Company job page RSS feeds
- **Env var:** `LINKEDIN_API_KEY` (if available)

## Output Channels
- **Email digest:** Weekly HTML report
- **Slack:** Real-time critical alerts + weekly digest
- **Notion/Google Docs:** Running intelligence database
```

---

## config.json

```json
{
  "agent": "competitor-monitor",
  "version": "1.0.0",
  "competitors": [
    {
      "name": "Competitor A",
      "website": "https://competitora.com",
      "linkedin": "company/competitor-a",
      "twitter": "@competitorA",
      "g2_profile": "https://www.g2.com/products/competitor-a",
      "track_pricing": true,
      "track_jobs": true,
      "track_blog": true
    },
    {
      "name": "Competitor B",
      "website": "https://competitorb.com",
      "linkedin": "company/competitor-b"
    }
  ],
  "monitoring": {
    "pricing_check_hours": 24,
    "homepage_check_hours": 48,
    "news_check_hours": 6,
    "jobs_check_hours": 48,
    "social_check_hours": 24
  },
  "keywords_to_watch": [
    "your main product category",
    "your key feature terms",
    "competitor brand names"
  ],
  "digest": {
    "frequency": "weekly",
    "day": "monday",
    "time": "07:00",
    "recipients": ["strategy@company.com", "ceo@company.com"],
    "slack_channel": "#competitive-intel"
  },
  "alerts": {
    "pricing_change": { "immediate": true, "channels": ["email", "slack"] },
    "fundraise_news": { "immediate": true, "channels": ["email", "slack"] },
    "product_launch": { "immediate": true, "channels": ["slack"] }
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Competitor Monitor Setup

## Step 1: Define Your Competitors

Edit `config.json` → `competitors` array. For each competitor, add:
- `name`: Their brand name
- `website`: Their homepage URL
- `linkedin`: Their LinkedIn company page slug
- `twitter`: Their Twitter handle (optional)
- `g2_profile`: Their G2 review page (optional)

Start with 3-5 direct competitors. You can add more later.

## Step 2: Set Up News Monitoring

### Google News RSS (Free)
No setup required. The agent monitors Google News RSS for each competitor name.

### NewsAPI (Optional — more comprehensive)
1. newsapi.org → Register → Get API Key (free tier available)
2. Set `NEWSAPI_KEY=your_key` in `.env`

## Step 3: Set Up Website Change Detection

The agent uses a built-in web scraper to detect page changes.

For pricing page monitoring, list specific URLs:
```json
"pricing_urls": ["https://competitor.com/pricing"]
```

The agent stores a hash of each page and alerts on changes.

## Step 4: Set Up SEO Monitoring (Optional)

If you have a Semrush account:
1. semrush.com → Account → API Key
2. Set `SEMRUSH_API_KEY=your_key`
3. Set `monitoring.seo_keywords_to_track` in config

## Step 5: Configure Alert Channels

### Email Alerts
Set `digest.recipients` to the email addresses who should receive the weekly digest.
Set `alerts.*` to configure who gets real-time critical alerts.

### Slack Alerts
1. Create Slack webhook: api.slack.com → Your App → Incoming Webhooks
2. Set `SLACK_WEBHOOK_URL=https://hooks.slack.com/...`
3. Set `digest.slack_channel: "#competitive-intel"`

## Step 6: Test

Run a manual scan:
```bash
openclaw run competitor-monitor --scan-now
```

Review what was detected. Check the news, website, and job monitoring
all have access to competitor data.

## Step 7: Generate First Digest

```bash
openclaw run competitor-monitor --generate-digest --send-test
```

Review the digest. Adjust format in `templates/digest.html`.

## Step 8: Schedule

```bash
openclaw schedule competitor-monitor --scan "0 */6 * * *"
openclaw schedule competitor-monitor --digest "0 7 * * 1"
```

Scans every 6 hours; digest sent Monday 7am.

## Using Competitive Intelligence

### In Sales
- Share relevant competitor weaknesses with your sales team
- When you hear a competitor is raising prices, alert sales immediately
- Use review intelligence to understand competitor customer pain points

### In Product
- Track what features competitors are building (job postings for "machine learning" = ML investment)
- Monitor G2 reviews for competitor feature gaps your product could fill

### In Marketing
- When competitor gets bad press, consider timely content/campaigns
- When competitor targets a new segment, decide whether to compete or retreat

## Intelligence Quality Framework

Rate each piece of intelligence:
- **Verified:** Confirmed via official source
- **Probable:** Strong signals, likely accurate
- **Possible:** Interesting but uncertain
- **Rumour:** Social media/forum speculation only

Always label unverified intelligence as such.
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
