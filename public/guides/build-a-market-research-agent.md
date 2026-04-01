# Build a Market Research Agent

**Time required:** 3–4 hours  
**Difficulty:** Intermediate  
**Tools:** n8n or Make, SerpAPI or Tavily, Google Sheets, optional OpenAI

---

## What You'll Build

An automated market research system that: monitors competitor websites for pricing and product changes, tracks relevant news and industry mentions, and delivers a weekly digest to your inbox — without any manual browsing.

---

## Why This Matters

The average founder spends 3–5 hours per week on competitive research. Most of it is repetitive: checking competitor websites, reading industry news, scanning pricing pages. This guide automates all of that.

---

## Step 1: Define What You're Monitoring

Start with a clear brief. For each competitor or topic, decide:

**Competitor Monitoring:**
- Which competitors? (List 3–5 to start)
- What to track: pricing page, product page, homepage, job listings
- Alert threshold: any change, or only significant changes?

**Industry News:**
- Keywords to monitor (e.g. "AI automation Australia", "no-code AI tools")
- Sources to prioritise (TechCrunch, industry blogs, LinkedIn)
- Relevance filter: only news that mentions your industry or competitors

---

## Step 2: Set Up Web Monitoring

### Option A: Visualping or Distill.io (No-code)

The easiest option for watching specific web pages:
1. Sign up at [visualping.io](https://visualping.io/) or [distill.io](https://distill.io/)
2. Add URLs: competitor pricing pages, product pages
3. Set check frequency: daily or weekly
4. Set threshold: alert on any text change, or only major changes
5. Connect to email or Slack for notifications

**Cost:** Free tier covers ~20 URLs with daily checks.

### Option B: n8n with SerpAPI (More powerful)

For structured data extraction and AI analysis:

1. **Schedule trigger** — Daily at 6am
2. **HTTP Request** — Fetch competitor URL content
3. **HTML Extract** — Pull specific elements (pricing table, feature list)
4. **Compare** — Check against yesterday's snapshot in Google Sheets
5. **If changed** — Flag and notify

---

## Step 3: Track Competitor Pricing

Create a Google Sheets pricing tracker:

| Competitor | Plan | Price | Last Updated | Change |
|------------|------|-------|--------------|--------|
| Competitor A | Starter | $49/mo | 2024-01-15 | +$10 |
| Competitor B | Pro | $99/mo | 2024-01-10 | No change |
| Competitor C | Enterprise | Contact | 2024-01-12 | Now public: $299 |

**Automation (Make/n8n):**
1. Trigger: Weekly on Monday
2. For each competitor URL:
   - Fetch page content
   - Use AI to extract pricing: `"Extract all pricing plans and amounts from this text. Return as JSON."`
   - Compare to last week's sheet row
   - If different: update sheet + send alert

---

## Step 4: News Monitoring

### Using Google Alerts (Free, Simple)

1. Go to [google.com/alerts](https://google.com/alerts)
2. Create alerts for:
   - "[Your industry] news"
   - "[Competitor names]"
   - "[Your target keywords]"
3. Set delivery: once a day, to your email

### Using n8n with SerpAPI (Automated + AI-filtered)

1. **Schedule:** Daily 7am
2. **SerpAPI node:** Search "[keyword] news last 24 hours"
3. **Loop** through results
4. **OpenAI filter:** "Is this article relevant to [your business context]? Yes/No"
5. **Filter:** Only keep "Yes" results
6. **Append** to weekly digest Google Doc

**SerpAPI cost:** ~$50/month for 5,000 searches, which is plenty for daily monitoring.

---

## Step 5: Generate the Weekly Digest

Every Friday, your agent should compile and send a digest:

**Template:**
```
🔍 Weekly Market Intelligence Report — [Date]

## Competitor Changes
- Competitor A raised prices by $10/month (Starter plan)
- Competitor B launched new feature: [Feature name]
- No changes detected for Competitors C, D

## Industry News (Top 5)
1. [Headline] — [Source] — [1-line summary]
2. [Headline] — [Source] — [1-line summary]
...

## Job Postings (Competitor Hiring Signals)
- Competitor A hiring: 3 AI Engineers (signal: product expansion)
- Competitor B hiring: Sales reps in Australia (signal: entering your market)

## Opportunities
- Competitor A's price increase creates opening at mid-market
- New regulation [X] affects competitors differently than us
```

**Delivery:** Email via Gmail or Mailgun, or post to Slack/Discord.

---

## Step 6: Competitor Job Posting Intelligence

One of the most underused research sources is competitor job postings. They reveal:
- New markets they're entering (hiring sales in new regions)
- New products (hiring specific engineers)
- Financial health (mass hiring = funded, mass layoffs = struggling)

**Automation:**
1. Use SerpAPI to search `site:linkedin.com/jobs [competitor name]` weekly
2. Compare to previous week's list
3. Flag new postings with AI summary: "What does this hiring suggest about their strategy?"

---

## Putting It All Together

Your complete market research stack:
- **Visualping** → Page change monitoring (pricing, products)
- **Google Alerts** → Daily news digests
- **SerpAPI + n8n** → Structured competitor data extraction
- **Google Sheets** → Historical price tracking
- **OpenAI** → Relevance filtering + digest generation
- **Gmail/Slack** → Weekly digest delivery

**Total cost:** ~$60–$100/month. **Time saved:** 3–5 hours/week.

---

For a pre-built market research agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
