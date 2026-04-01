# Build a Lead Generation Agent from Scratch

**Time required:** 3–4 hours  
**Difficulty:** Intermediate  
**Tools:** OpenClaw or n8n, Apollo.io or Hunter.io, Gmail/SMTP

---

## What You'll Build

An automated lead generation system that: researches prospects matching your ideal client profile, generates personalised outreach emails, sends them on a schedule, and follows up automatically — without you lifting a finger.

---

## Step 1: Define Your Ideal Client Profile (ICP)

This is the most important step. Garbage in, garbage out. Be brutally specific.

**Template:**
```
Industry: [e.g. SaaS companies, 10–100 employees]
Geography: [e.g. Australia, UK, USA]
Job titles to target: [e.g. Head of Operations, COO, CEO]
Revenue range: [e.g. $1M–$10M ARR]
Pain points we solve: [e.g. manual data entry, slow reporting]
Signals they need us: [e.g. recently hired, job posts for ops roles, using competitor]
```

The more specific, the better your reply rates.

---

## Step 2: Build Your Prospect List

**Option A: Apollo.io (Recommended)**
- Sign up for Apollo.io free tier (50 exports/month)
- Use filters: Industry + Employee count + Location + Job title
- Export to CSV with: Name, Email, Company, Job title, LinkedIn URL

**Option B: LinkedIn Sales Navigator**
- Use advanced search with your ICP criteria
- Export with a tool like Phantombuster or Evaboot
- Enrich emails with Hunter.io or Clearbit

**Option C: Manual research**
- Use Google: `site:linkedin.com/in "Head of Operations" "Sydney" "SaaS"`
- Find emails with Hunter.io domain search

Aim for 100–200 qualified prospects as your first batch.

---

## Step 3: Write Your Outreach Templates

Write 3 emails per sequence. Keep them short (under 100 words each).

**Email 1 — Day 1 (The Hook):**
```
Subject: Quick question about [Company]'s operations

Hi [First Name],

I noticed [Company] is scaling fast — congrats on [recent milestone/news].

We help [similar companies] cut manual ops work by 60–80% using AI agents.

Worth a 15-min call to see if it fits?

[Your name]
```

**Email 2 — Day 4 (The Value Add):**
```
Subject: Re: Quick question

Hi [First Name],

Thought this might be useful — we just published a guide on automating [relevant process].

Still happy to show you how we've done it for [similar company type] if helpful.

[Your name]
```

**Email 3 — Day 9 (The Close):**
```
Subject: Last one from me

Hi [First Name],

I'll keep this short — if automating your [relevant process] is a priority this quarter, I'd love to chat.

If not, no worries at all. Just reply "not now" and I'll stop.

[Your name]
```

---

## Step 4: Set Up the Sending Sequence

### Using OpenClaw

Add to `HEARTBEAT.md`:

```markdown
## Lead Generation (daily, 9am)
1. Read the prospects CSV from workspace/leads/queue.csv
2. For each prospect not yet contacted:
   - Personalise Email 1 template with their name, company, and any notable news
   - Send via Gmail
   - Log: name, email, date sent, email number
3. Check follow-up schedule:
   - Any prospects at Day 4? Send Email 2
   - Any at Day 9? Send Email 3
4. Log replies for human review
```

### Using n8n

1. **Trigger:** Schedule node — daily at 9am
2. **Read CSV:** Read Binary node → CSV parse
3. **Filter:** Check "last_contacted" date for follow-up logic
4. **AI Personalisation:** OpenAI node — "Personalise this email template for [name] at [company]. Research: [linkedin_url]"
5. **Send:** Gmail node with personalised content
6. **Update CRM:** Update row in Google Sheets or Airtable

---

## Step 5: CRM Integration

Track every prospect interaction. Minimum fields to log:

| Field | Example |
|-------|---------|
| Name | Jane Smith |
| Company | Acme Corp |
| Email | jane@acme.com |
| Status | Email 2 sent |
| Last contact | 2024-01-15 |
| Response | No reply |
| Notes | COO, interested in ops automation |

Use Google Sheets, Airtable, or HubSpot free tier.

---

## Reply Handling

Set a filter in Gmail to label replies with "LEAD-REPLY". Check these daily (or let OpenClaw flag them).

When a prospect replies positively:
1. Book a call immediately using Calendly
2. Move them to "Interested" in your CRM
3. Stop the follow-up sequence

---

## Expected Results

Industry averages for cold email:
- Open rate: 40–60% (with personalisation)
- Reply rate: 5–15%
- Positive reply rate: 1–3%

With 200 prospects, expect 2–6 qualified conversations. That's a full sales pipeline with zero manual effort after setup.

---

For a pre-built lead generation agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
