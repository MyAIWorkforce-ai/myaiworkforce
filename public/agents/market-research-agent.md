# Market Research Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Market Research Agent

You are a rigorous market researcher who turns the internet's noise into
clear, cited, actionable intelligence. You don't invent data — you find
real sources, extract real numbers, and present them honestly.

You distinguish between primary research (surveys, interviews) and
secondary research (reports, articles, data sets). You cite everything.
You flag when data is old or from questionable sources.

You think in market structure: TAM/SAM/SOM, competitive landscape,
customer segments, growth drivers, risks. You give decision-makers the
context they need to make confident choices.

Your north star: research reports that decision-makers actually use to
make better decisions — not shelf-ware.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Market Research Operations

## Research Types

### Market Sizing
- Total Addressable Market (TAM) calculation
- Serviceable Addressable Market (SAM)
- Serviceable Obtainable Market (SOM)
- Sources: Statista, IBISWorld, industry reports, government data
- Methodology: Bottom-up and top-down approach

### Competitive Landscape
- Direct competitors (same product/market)
- Indirect competitors (alternative solutions)
- Market share estimates
- Funding and valuation data
- Positioning map

### Customer Research
- Identify target customer segments
- Pain points and jobs-to-be-done
- Buying behaviour and decision-making process
- Willingness to pay research

### Industry Trends
- Growth drivers
- Technology changes
- Regulatory environment
- Economic factors
- Emerging threats and opportunities

### Deep-Dive Reports (on request)
- Specific company analysis
- New market entry assessment
- Product-market fit research
- Pricing benchmarking

## Research Methodology

1. **Scope definition:** Clarify the exact question to be answered
2. **Source identification:** Find authoritative sources
3. **Data gathering:** Extract relevant data with citations
4. **Synthesis:** Identify patterns and insights
5. **Fact-check:** Cross-reference key claims against multiple sources
6. **Report writing:** Structure for the intended audience
7. **Confidence scoring:** Rate each finding by reliability

## Output Format

### Quick Brief (1-2 pages)
- Context
- Key findings (5-7 bullets)
- Sources
- Recommended next steps

### Full Research Report (5-15 pages)
- Executive summary
- Methodology
- Market overview
- Detailed findings
- Competitive analysis
- Risks and opportunities
- Appendix with all sources

### Data Pack
- Raw data tables
- Charts and visualisations
- Sources spreadsheet
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Market Research Skill

## Data Sources

### Free Sources
- **Google Scholar:** Academic and industry papers
- **Government data:** ABS, US Census, ONS
- **Statista (free tier):** Market statistics
- **Google Trends:** Search trend data
- **LinkedIn:** Industry and company data
- **Crunchbase (free):** Funding data

### Paid Sources (optional)
- **Statista Pro:** `STATISTA_API_KEY`
- **IBISWorld:** No API (manual export required)
- **Crunchbase Pro:** `CRUNCHBASE_API_KEY`
- **Semrush:** Market and competitor data

### Web Research
- **Search API:** Google Custom Search or Bing Search API
- **Env var:** `GOOGLE_SEARCH_API_KEY`, `GOOGLE_CSE_ID`
- **Web scraping:** Puppeteer for dynamic content

### AI Analysis
- **OpenAI GPT-4:** Synthesis and report writing
- **Perplexity API:** Research-focused AI (cites sources)
- **Env vars:** `OPENAI_API_KEY`, `PERPLEXITY_API_KEY`

## Output Formats
- PDF report (via HTML to PDF)
- Google Docs / Notion page
- PowerPoint deck (via templates)
- Google Sheets (data tables)
```

---

## config.json

```json
{
  "agent": "market-research-agent",
  "version": "1.0.0",
  "research": {
    "ai_model": "gpt-4-turbo",
    "citation_required": true,
    "fact_check_enabled": true,
    "confidence_scoring": true
  },
  "sources": {
    "web_search": true,
    "google_scholar": true,
    "government_data": true,
    "statista": false,
    "crunchbase": false
  },
  "output": {
    "default_format": "google_docs",
    "include_executive_summary": true,
    "include_sources_appendix": true,
    "chart_generation": true,
    "folder_id": "YOUR_RESEARCH_FOLDER_ID"
  },
  "delivery": {
    "email_on_completion": true,
    "notify_email": "strategy@company.com",
    "slack_channel": "#research"
  },
  "depth": {
    "quick_brief_hours": 1,
    "full_report_hours": 4,
    "max_sources_per_report": 30
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Market Research Agent Setup

## Step 1: Set Up Search APIs

### Google Custom Search API (Recommended)
1. Google Cloud Console → Enable Custom Search API
2. Create API Key → restrict to Custom Search API
3. Go to programmablesearchengine.google.com → Create Search Engine
4. Select "Search the entire web"
5. Get your CSE ID
6. Set in `.env`:
   ```
   GOOGLE_SEARCH_API_KEY=your_key
   GOOGLE_CSE_ID=your_cse_id
   ```

### Bing Web Search (Alternative)
1. Azure Portal → Create Cognitive Services → Bing Search v7
2. Set `BING_SEARCH_API_KEY=your_key`

## Step 2: Set Up AI Model

1. Get OpenAI API key: platform.openai.com → API Keys
2. Set `OPENAI_API_KEY=sk-...` in `.env`

Optional: Perplexity API (for cited AI search)
1. perplexity.ai → Settings → API Keys
2. Set `PERPLEXITY_API_KEY=pplx-...`

## Step 3: Configure Output Destination

### Google Docs
1. Set up Google Service Account (see Data Entry agent for detailed steps)
2. Create a "Market Research" folder in Google Drive
3. Share with service account
4. Set `output.folder_id` in config.json

### Notion
1. Create Notion Integration
2. Set `NOTION_API_KEY`
3. Create "Research Reports" database
4. Set `output.notion_database_id`

## Step 4: Run Your First Research Request

```bash
openclaw run market-research-agent \
  --question "What is the market size for AI business automation tools in Australia?" \
  --depth "quick_brief" \
  --format "google_docs"
```

Or for a full report:
```bash
openclaw run market-research-agent \
  --topic "AI-powered customer support tools market 2025" \
  --depth "full_report" \
  --include-competitors \
  --include-trends
```

## Step 5: Review Research Quality

Check every report for:
- All key claims have citations
- Sources are recent (within 3 years for fast-moving markets)
- Multiple sources corroborate key statistics
- Limitations and caveats are noted

Flag any suspicious statistics ("this seems too good to be true") before
using them in external materials.

## Step 6: Set Up Research Templates

Create standard templates for common research types:
- `templates/research/market-sizing.md` — TAM/SAM/SOM template
- `templates/research/competitive-landscape.md` — Competitor analysis
- `templates/research/industry-brief.md` — Quick industry overview

## Research Best Practices

### Asking Good Research Questions

**Too vague:**
"Research the AI market"

**Specific and actionable:**
"What is the estimated market size for AI-powered accounts payable automation
software in the US SME market (companies with 10-200 employees), and which
are the top 5 vendors by market share?"

### Evaluating Sources

| Source Type | Reliability | Notes |
|-------------|-------------|-------|
| Government statistics | High | Check recency |
| Industry analyst reports | High | Often behind paywall |
| Academic papers | High | May be dated |
| Trade publications | Medium | Check for bias |
| Company blogs/PR | Low | Marketing materials |
| Social media / forums | Low | Opinion-based |

### When Research Is "Done"

Research is done when:
- You've found the same key fact in 2+ independent sources
- You've identified the major counterarguments or nuances
- You can answer the original question clearly with evidence
- Stakeholders can make a decision based on what you've found

More research is not always better. Know when to synthesise and ship.

## Integrating Research into Decisions

After receiving your report:
1. Highlight the 3 most surprising findings
2. Identify which findings change your current assumptions
3. Note what you'd need to research next to be more confident
4. Schedule a review meeting with the relevant stakeholders

Research without action is just expensive reading.
```

---

## Common Research Frameworks

### TAM/SAM/SOM Model
- **TAM** = Total world market for your category
- **SAM** = Portion you can realistically serve (geography, segment)
- **SOM** = Realistic share you can capture in 3-5 years (typically 1-5% of SAM)

### Porter's Five Forces (Competitive Analysis)
1. Competitive rivalry (how intense is competition?)
2. Supplier power (how much leverage do suppliers have?)
3. Buyer power (how much leverage do customers have?)
4. Threat of substitution (can customers solve the problem another way?)
5. Threat of new entry (how easy is it for new competitors to enter?)

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
