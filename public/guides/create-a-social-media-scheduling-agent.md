# Create a Social Media Scheduling Agent

**Time required:** 2–3 hours  
**Difficulty:** Beginner–Intermediate  
**Tools:** n8n or Make, LinkedIn API or Buffer, optional ChatGPT

---

## What You'll Build

An automated social media pipeline that generates content based on your content pillars, formats posts for each platform, and schedules them for optimal times — all without you opening a social media app.

---

## Step 1: Define Your Content Pillars

Content pillars are the 3–5 recurring themes you post about. They give your audience consistency and make content creation systematic.

**Example pillars for an AI company:**
1. **Education** — "Did you know AI can do X?" posts
2. **Social proof** — Client wins, case studies, testimonials
3. **Thought leadership** — Opinions on industry trends
4. **Behind the scenes** — How you work, team updates
5. **Offers** — Promotions, new products, lead magnets

Aim for a 70/20/10 mix: 70% educational/entertaining, 20% social proof, 10% promotional.

---

## Step 2: Create a Content Calendar Template

Build a simple weekly content calendar in Google Sheets or Airtable:

| Day | Platform | Pillar | Topic | Status | Scheduled Time |
|-----|----------|--------|-------|--------|----------------|
| Mon | LinkedIn | Education | AI email agents | Draft | 8:00am |
| Tue | Twitter/X | Thought leadership | AI trends 2025 | Scheduled | 12:00pm |
| Wed | LinkedIn | Social proof | Client win | Draft | 8:00am |
| Thu | Twitter/X | Education | How-to tip | Draft | 5:00pm |
| Fri | LinkedIn | Behind scenes | Friday insight | Draft | 9:00am |

---

## Step 3: Set Up AI Content Generation

### Using Make (formerly Integromat)

1. **Trigger:** Google Sheets — Watch for new rows with Status = "Generate"
2. **AI Module:** OpenAI — Send prompt:
   ```
   Write a LinkedIn post about "[Topic]" for a [Pillar] post.
   Tone: professional but conversational.
   Length: 150–200 words.
   Include 3 relevant hashtags.
   No emojis unless they add genuine value.
   ```
3. **Update Sheet:** Write generated post back to the "Content" column
4. **Notify:** Send Slack/Discord message: "Post drafted for review: [Topic]"

### Using n8n

1. **Schedule trigger** — Monday 7am
2. **Read Airtable** — Fetch this week's content plan
3. **Loop** — For each row
4. **OpenAI node** — Generate content based on topic + pillar
5. **Write back** — Update Airtable with draft
6. **Discord notification** — "7 posts drafted for this week. Review at [link]"

---

## Step 4: Connect LinkedIn and Twitter APIs

### LinkedIn

1. Go to [LinkedIn Developer Portal](https://developer.linkedin.com/)
2. Create an app → Request "Share on LinkedIn" permission
3. Generate OAuth token (Buffer or Hootsuite can handle this without code)
4. In Make/n8n, use the LinkedIn module with your token

### Twitter/X API

1. Apply at [developer.twitter.com](https://developer.twitter.com/)
2. Create a project and app
3. Get API Key, API Secret, Access Token, Access Token Secret
4. Use the Twitter module in Make or n8n

**Easier alternative:** Use Buffer or Hootsuite as the posting layer. Both have native integrations with Make and n8n, and handle OAuth complexity for you.

---

## Step 5: Optimal Posting Times

Research-backed best times (adjust for your audience timezone):

| Platform | Best Days | Best Times |
|----------|-----------|------------|
| LinkedIn | Tue–Thu | 8am, 12pm, 5pm |
| Twitter/X | Mon–Fri | 9am, 3pm, 6pm |
| Instagram | Tue, Wed | 11am, 2pm |
| Facebook | Wed, Thu | 1pm, 3pm |

Your scheduling agent should post at these times automatically after you approve drafts.

---

## Step 6: The Review + Approve Workflow

Don't post without reviewing. The workflow should be:

1. **Monday morning:** Agent generates 5–7 draft posts → sends to your Discord/Slack
2. **Monday morning:** You review in 15 minutes, edit if needed, mark approved
3. **Monday–Friday:** Agent posts at scheduled times automatically
4. **Friday:** Agent sends weekly performance report (impressions, clicks, engagement)

---

## Advanced: Repurposing Content

Set up a second workflow that takes your best-performing posts and repurposes them:

- LinkedIn long-form → Twitter thread
- Blog post → 5 LinkedIn tips
- Video transcript → LinkedIn carousel outline

This multiplies your output without extra creative work.

---

## Expected Results

With consistent posting (5x/week):
- LinkedIn: 10–30% organic reach growth per month
- Twitter: 50–200 new followers per month
- Consistent brand presence without daily effort

---

For a pre-built social media scheduling agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
