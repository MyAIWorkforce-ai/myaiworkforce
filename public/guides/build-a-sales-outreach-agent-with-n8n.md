# Build a Sales Outreach Agent with n8n

**Time required:** 3–5 hours  
**Difficulty:** Intermediate–Advanced  
**Tools:** n8n (self-hosted or cloud), Apollo.io or LinkedIn, Gmail

---

## What You'll Build

A fully automated cold outreach system using n8n that: pulls prospect data from Apollo.io or LinkedIn, personalises each email using AI, sends on a schedule, tracks replies, and pauses sequences when a prospect responds — all without writing a single line of code.

---

## Prerequisites

- n8n account (cloud: [n8n.io](https://n8n.io), or self-hosted via Docker)
- Gmail account with API access enabled
- Apollo.io account (free tier works)
- OpenAI API key

---

## Step 1: Set Up n8n

### Cloud (Easiest)
Sign up at [n8n.io](https://n8n.io). Free tier includes 5 active workflows.

### Self-hosted (Best for scale)
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

Access at `http://localhost:5678`.

---

## Step 2: Build Your Prospect Data Source

### Apollo.io Setup

1. Sign up at [apollo.io](https://apollo.io)
2. Use filters to build your prospect list:
   - Industry, Company size, Geography, Job title
3. Export to CSV (50 free exports/month on free tier)
4. Upload CSV to Google Sheets — this becomes your prospect database

**Required columns:**
```
first_name | last_name | email | company | title | linkedin_url | status | last_email_sent | email_count
```

`status` values: `pending`, `email_1_sent`, `email_2_sent`, `email_3_sent`, `replied`, `unsubscribed`

### LinkedIn (Alternative)

Use Phantombuster's LinkedIn Profile Scraper to extract prospects, then enrich emails with Hunter.io.

---

## Step 3: Create the Core Outreach Workflow

In n8n, create a new workflow:

### Node 1: Schedule Trigger
- Cron: `0 9 * * 1-5` (9am, Monday–Friday)

### Node 2: Google Sheets — Read Prospects
- Operation: Read rows
- Filter: status = "pending" AND email_count = 0
- Limit: 20 (don't send too many at once)

### Node 3: Loop Over Items
- Loop through each prospect

### Node 4: OpenAI — Personalise Email
- Model: gpt-4o-mini (cost-effective)
- Prompt:
```
Write a personalised cold email for this prospect. Keep it under 80 words.
Tone: direct, professional, no waffle.

Prospect:
- Name: {{ $json.first_name }}
- Company: {{ $json.company }}
- Title: {{ $json.title }}

Template to personalise (don't change structure, just make it feel personal):

Subject: Quick question about {{ $json.company }}'s [relevant process]

Hi {{ $json.first_name }},

I noticed [observation about their company/role/industry].

We help [ICP description] automate [pain point] — saving them [specific outcome].

Worth 15 minutes to see if it applies to {{ $json.company }}?

[Your name]
```

### Node 5: Gmail — Send Email
- To: `{{ $json.email }}`
- Subject: (from AI output)
- Body: (from AI output)
- Reply-to: your@email.com

### Node 6: Google Sheets — Update Status
- Update row where email = `{{ $json.email }}`
- Set: status = "email_1_sent", last_email_sent = today, email_count = 1

---

## Step 4: Build the Follow-Up Sequence

Create a second workflow for follow-ups:

### Node 1: Schedule Trigger
- Cron: `0 9 * * 1-5`

### Node 2: Google Sheets — Read Follow-up Queue
- Filter: status = "email_1_sent" AND last_email_sent <= 4 days ago

### Node 3: OpenAI — Generate Follow-up
- Shorter prompt, reference first email:
```
Write a short follow-up email (under 50 words). Don't be pushy.
Acknowledge they're busy. Add one piece of value (a tip, resource, or insight).
First name: {{ $json.first_name }}, Company: {{ $json.company }}
```

### Node 4–6: Same as above (Send + Update status to email_2_sent)

Repeat for email 3 (Day 9 — final break-up email).

---

## Step 5: Reply Detection (Critical)

If someone replies, you must stop all automated follow-ups immediately.

### Gmail Trigger Workflow

Create a separate workflow:
1. **Trigger:** Gmail — Watch for new emails
2. **Filter:** From address matches anyone in your prospects sheet
3. **Update Google Sheets:** Set status = "replied"
4. **Notify:** Send Slack/Discord message: "Reply from [name] at [company] — check inbox!"

This ensures no prospect gets a follow-up email after they've responded.

---

## Step 6: Unsubscribe Handling

Add an unsubscribe link to every email:

```
P.S. Not interested? [Click here to unsubscribe](https://yourwebhook.url?email={{ $json.email }})
```

Create a n8n webhook that updates the prospect's status to "unsubscribed" when clicked.

---

## Monitoring and Optimisation

Track these in Google Sheets weekly:
- **Send rate:** How many sent per week
- **Open rate:** Use a tracking pixel or Gmail open tracking
- **Reply rate:** Total replies / total sent
- **Positive reply rate:** Positive replies / total sent

**Target benchmarks:**
- Open rate: 50–65% (with good subject lines)
- Reply rate: 8–15%
- Positive reply rate: 2–5%

If reply rate is below 5%, rewrite your email copy. If open rate is below 40%, fix your subject lines.

---

## Advanced: LinkedIn Message Integration

For a true multichannel sequence:
1. Email Day 1
2. LinkedIn connection request Day 2 (via Phantombuster)
3. LinkedIn message Day 3 (if connected)
4. Email follow-up Day 5

This dramatically increases reply rates for high-value prospects.

---

For a pre-built sales outreach agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
