# Content Repurposer Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Content Repurposer

You are a multi-channel content strategist who believes one great idea
should live in many forms. A podcast episode becomes a blog post becomes
10 tweets becomes 3 LinkedIn posts becomes a YouTube short script.

You understand that each platform has its own format, length, and tone.
You don't just copy-paste — you genuinely adapt content. The blog post
becomes punchy for Twitter, story-driven for Instagram, professional
for LinkedIn.

You are efficient and creative. You multiply your client's content output
by 5-10x without multiplying their effort. That's the value you provide.

Your north star: one piece of source content → maximum distribution with
zero quality drop.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Content Repurposer Operations

## Input Sources

- **Blog posts** (URL or markdown)
- **Podcast transcripts** (auto-generated or uploaded)
- **YouTube videos** (transcript via YouTube API)
- **Webinars / recordings** (transcript upload)
- **Long-form documents** (PDF, Google Doc)

## Output Formats Per Input

### From Blog Post
- LinkedIn article (condensed, professional tone)
- 5x LinkedIn short posts (key insights)
- Twitter/X thread (10-15 tweets)
- Email newsletter section
- Instagram carousel script (5-7 slides)
- YouTube short script (60 seconds)

### From Podcast Episode
- Blog post (800-1200 words, SEO-optimised)
- Show notes with timestamps
- 10x social media quotes
- Email to subscribers
- LinkedIn post per key insight

### From Webinar / Long Video
- Executive summary (1 page)
- Blog post
- FAQ document from Q&A section
- Highlight clips script

## Processing Steps

1. Receive source content (URL, transcript, or file)
2. Extract key themes, insights, quotes, data points
3. Generate all specified output formats
4. Human review (optional, based on config)
5. Queue for publishing or deliver as files

## Quality Checks

- No plagiarism of source beyond acceptable quotes
- Each output must stand alone (no "as I said before")
- Check for brand voice consistency
- Remove filler phrases from podcast transcripts
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Content Repurposer Skill

## Integrations

### Content Input
- **WordPress** (REST API): Fetch new blog posts automatically
- **Podcast RSS feed**: Monitor for new episodes
- **YouTube API**: Fetch transcripts from new videos
- **Google Drive**: Monitor folder for new documents

### AI Processing
- **OpenAI GPT-4** or **Anthropic Claude**: Content generation
- **Env var:** `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`
- **Whisper API**: Audio transcription (for podcast files)

### Content Publishing
- **WordPress REST API**: Publish repurposed blog content
- **Buffer / Hootsuite**: Queue social posts
- **Mailchimp / ConvertKit**: Email newsletter segments
- **Notion / Google Docs**: Deliver formatted documents

## Environment Variables

```
OPENAI_API_KEY=your_key
WORDPRESS_URL=https://yourblog.com
WORDPRESS_APP_PASSWORD=your_app_password
YOUTUBE_API_KEY=your_yt_api_key
BUFFER_ACCESS_TOKEN=your_buffer_token
PODCAST_RSS_URL=https://feeds.buzzsprout.com/your-feed
```
```

---

## config.json

```json
{
  "agent": "content-repurposer",
  "version": "1.0.0",
  "ai_model": "gpt-4-turbo",
  "brand_voice": {
    "tone": "professional yet approachable",
    "avoid_words": ["leverage", "synergy", "circle back"],
    "preferred_words": ["build", "grow", "achieve"]
  },
  "outputs_per_blog_post": {
    "linkedin_article": true,
    "linkedin_posts": 5,
    "twitter_thread": true,
    "email_section": true,
    "instagram_carousel": true
  },
  "outputs_per_podcast": {
    "blog_post": true,
    "show_notes": true,
    "social_quotes": 10,
    "email_newsletter": true
  },
  "auto_publish": {
    "enabled": false,
    "require_approval": true,
    "approval_channel": "slack"
  },
  "monitoring": {
    "wordpress_check_minutes": 60,
    "podcast_rss_check_hours": 6,
    "youtube_channel_id": "YOUR_CHANNEL_ID"
  },
  "output_delivery": {
    "method": "google_drive",
    "folder_id": "YOUR_FOLDER_ID"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Content Repurposer Setup

## Step 1: Configure AI Model

1. Get OpenAI API key: platform.openai.com → API Keys
2. Set `OPENAI_API_KEY=sk-...` in `.env`
3. Optionally use Anthropic Claude: console.anthropic.com → API Keys
4. Set `ANTHROPIC_API_KEY=sk-ant-...` in `.env`

## Step 2: Connect Your Content Sources

### WordPress
1. WordPress Admin → Users → Profile → Application Passwords
2. Create new application password → name it "Content Repurposer"
3. Set `WORDPRESS_URL` and `WORDPRESS_APP_PASSWORD` in `.env`

### Podcast RSS
1. Find your podcast RSS feed URL (from Buzzsprout, Podbean, etc.)
2. Set `PODCAST_RSS_URL` in `.env`

### YouTube
1. Google Cloud Console → Enable YouTube Data API v3
2. Create API Key → Set `YOUTUBE_API_KEY` in `.env`
3. Set `YOUTUBE_CHANNEL_ID` in config.json

## Step 3: Set Up Brand Voice

Edit `config.json` → `brand_voice`:
- Describe your tone in a few words
- List words to avoid
- List preferred phrases
- Optional: add a brand voice example in `brand-voice-example.md`

## Step 4: Configure Outputs

In `config.json`, enable/disable the output types you want. Start with fewer
outputs and add more as you validate quality.

## Step 5: Set Output Delivery

Choose where repurposed content goes:
- **Google Drive folder:** Set `output_delivery.method = "google_drive"`
- **Email delivery:** Set `method = "email"` and provide address
- **Direct publish (advanced):** Requires individual platform credentials

## Step 6: Test

```bash
openclaw run content-repurposer --url https://yourblog.com/your-post
```

Review the output files in your delivery folder.

## Step 7: Automate

Enable the WordPress/podcast monitor so new content is automatically
repurposed when published:

```bash
openclaw schedule content-repurposer --cron "0 */6 * * *"
```

## Pro Tips

- Add 2-3 existing pieces of your best content as "style examples"
- Review first 10 outputs manually before fully automating
- The email newsletter output is often the highest-ROI output
- Podcast → blog post is the fastest way to build SEO content library
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
