# Blog Writer Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Blog Writer Agent

You are a skilled content writer who understands that great blog content
serves two masters: the reader and the search engine. You never sacrifice
one for the other — you write for humans first, with SEO built in naturally.

You research before you write. You understand that the best articles are
built on real insights, data, and expert perspective — not just fluffy
AI padding. You cite sources. You share specific examples.

You understand structure: a compelling headline, a hook that earns the
next click, section headers that let readers skim and dive, and a clear
takeaway at the end.

Your north star: articles that rank, get read, and generate leads — because
they're genuinely useful to the person searching for that topic.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Blog Writer Operations

## Content Production Workflow

1. **Topic briefing:**
   - Target keyword
   - Search intent (informational, commercial, navigational)
   - Target audience (role, industry, level)
   - Key points to cover (optional)
   - Competing articles to beat (optional)

2. **Research phase:**
   - Analyse top 5 ranking articles for target keyword
   - Identify content gaps (what they're missing)
   - Find relevant statistics and data points
   - Note questions from "People also ask" section

3. **Outline generation:**
   - Create H2/H3 structure
   - Ensure all user intent angles are covered
   - Include "People also ask" questions as H3s where relevant

4. **Draft writing:**
   - 1,500–2,500 words (standard) or as briefed
   - First-person or brand voice as configured
   - Include examples, data, and specifics
   - Natural keyword placement (target: 1-2% density)

5. **SEO optimisation:**
   - Title tag (55-60 chars, includes keyword)
   - Meta description (150-160 chars, includes CTA)
   - Alt text for image suggestions
   - Internal linking suggestions
   - Schema markup recommendations

6. **Quality check:**
   - Flesch reading score
   - Passive voice percentage
   - Keyword placement in H1, first paragraph, conclusion
   - Word count vs. competitor average

## Publishing

- Draft to WordPress (draft status, not auto-publish)
- Notify content manager for review
- Include SEO score and suggestions

## Content Calendar Integration

- Check editorial calendar for upcoming topics
- Flag if similar topic was published recently (duplicate risk)
- Suggest seasonal/timely angles
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Blog Writer Skill

## Integrations

### WordPress
- **Auth:** Application Password (Settings → Users → Application Passwords)
- **Env vars:** `WORDPRESS_URL`, `WORDPRESS_APP_PASSWORD`, `WORDPRESS_USERNAME`
- **API:** WordPress REST API
- **Used for:** Creating posts as drafts with SEO metadata

### SEO Research
- **Semrush API:** Keyword data, SERP analysis
- **Ahrefs API:** Backlink data, keyword research
- **DataForSEO:** SERP data and keyword metrics
- **Env var:** `SEMRUSH_API_KEY` or `AHREFS_API_KEY`

### AI Writing
- **OpenAI GPT-4:** Primary writing engine
- **Anthropic Claude:** Alternative
- **Env var:** `OPENAI_API_KEY`

### Image Generation (Optional)
- **DALL-E 3:** Featured image generation
- **Unsplash API:** Stock photo suggestions
- **Env var:** `UNSPLASH_ACCESS_KEY`

### Analytics (for performance tracking)
- **Google Search Console:** Track rankings and clicks
- **Google Analytics:** Track traffic and engagement
```

---

## config.json

```json
{
  "agent": "blog-writer-agent",
  "version": "1.0.0",
  "wordpress": {
    "url": "https://yourblog.com",
    "post_status": "draft",
    "default_category": "Resources",
    "default_author_id": 1
  },
  "writing": {
    "ai_model": "gpt-4-turbo",
    "target_word_count": 2000,
    "min_word_count": 1500,
    "reading_level": "grade_10",
    "tone": "professional but conversational",
    "person": "second",
    "include_examples": true,
    "include_statistics": true
  },
  "seo": {
    "target_keyword_density": 0.015,
    "include_title_tag": true,
    "include_meta_description": true,
    "include_schema": true,
    "internal_link_suggestions": true
  },
  "brand_voice": {
    "examples_directory": "./blog-examples/",
    "avoid_phrases": ["In conclusion", "In today's world", "It's important to note"],
    "preferred_phrases": []
  },
  "content_calendar": {
    "source": "google_sheets",
    "sheet_id": "YOUR_CALENDAR_SHEET_ID"
  },
  "image": {
    "generate_featured": false,
    "unsplash_enabled": true,
    "alt_text_auto": true
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Blog Writer Agent Setup

## Step 1: Connect WordPress

1. WordPress Admin → Users → Your Profile
2. Scroll to Application Passwords
3. Add New Application Password → name it "Blog Writer Agent"
4. Copy the generated password
5. Set in `.env`:
   ```
   WORDPRESS_URL=https://yourblog.com
   WORDPRESS_USERNAME=admin
   WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx
   ```
6. Test connection: `openclaw test blog-writer-agent --wp-connect`

## Step 2: Set Up SEO Research API

### Semrush (Recommended)
1. semrush.com → Account → API
2. Purchase API units (cheapest plan for basic keyword data)
3. Set `SEMRUSH_API_KEY=your_key`

### Free Alternative: DataForSEO
1. dataforseo.com → Sign up (pay-per-use, cheaper for low volume)
2. Set `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD`

## Step 3: Configure Brand Voice

1. Create `blog-examples/` directory
2. Add 3-5 of your best existing blog posts as `.md` files
3. The agent uses these as style references

If starting from scratch, set tone in config:
- `"professional but conversational"` — most business blogs
- `"technical and precise"` — developer/engineering blogs
- `"fun and approachable"` — consumer brands

## Step 4: Set Up Content Calendar (Optional)

Create a Google Sheet with columns:
`topic | keyword | target_date | assigned_to | status | url`

Set `content_calendar.sheet_id` in config to auto-populate topics.

## Step 5: Generate Your First Post

```bash
openclaw run blog-writer-agent \
  --keyword "how to automate expense reporting" \
  --audience "operations managers at SMEs" \
  --word-count 2000
```

The agent will:
1. Research competing articles
2. Generate an outline (shown for approval)
3. Write the full draft
4. Post to WordPress as a draft
5. Output SEO metadata and suggestions

## Step 6: Review and Publish Workflow

Best practice: Never auto-publish. Review every draft:
1. Check factual claims are accurate
2. Add personal anecdotes or company-specific examples
3. Review internal linking suggestions
4. Add images (alt text pre-generated)
5. Publish when happy

## SEO Content Tips

- **Target keyword in:** Title, URL slug, first 100 words, one H2, conclusion
- **Word count:** Match or beat the average word count of your top 3 competitors
- **Freshness:** Update top-performing posts annually with new data
- **Internal links:** Add 3-5 links to related posts on your site
- **Backlinks:** Promote posts to get inbound links (the real ranking factor)

## Measuring Success

After 3 months:
```bash
openclaw report blog-writer-agent --metrics rankings,traffic
```

Track:
- Keyword ranking improvements
- Organic traffic per post
- Time on page and bounce rate
- Leads/conversions attributed to blog

A good post takes 2-6 months to rank. Patience is required.
```

---

## WordPress REST API Quick Reference

```bash
# Create draft post
POST https://yourblog.com/wp-json/wp/v2/posts
Authorization: Basic base64(username:app_password)
{
  "title": "Post Title",
  "content": "<p>Post content</p>",
  "status": "draft",
  "categories": [5],
  "meta": {
    "_yoast_wpseo_title": "SEO Title",
    "_yoast_wpseo_metadesc": "Meta description"
  }
}
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
