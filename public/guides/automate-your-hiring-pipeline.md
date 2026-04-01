# Automate Your Hiring Pipeline

**Time required:** 3–4 hours  
**Difficulty:** Intermediate  
**Tools:** Make or n8n, Google Sheets, Gmail, Google Calendar

---

## What You'll Build

An automated recruitment workflow that: posts job listings to multiple boards simultaneously, collects and parses CVs, scores candidates against your criteria, and books interviews with qualified candidates — all without the back-and-forth of manual scheduling.

---

## Why Automate Recruiting?

The average hire takes 4–6 weeks and costs $3,000–$5,000 in recruiter time. Most of that time is spent on tasks that don't require human judgement: posting jobs, reading CVs that don't fit, scheduling interviews. This guide automates the first 80% of that process.

---

## Step 1: Job Posting Automation

Instead of manually posting to each job board, use a multi-post tool:

### Option A: Workable or Breezy HR
These applicant tracking systems (ATS) have one-click posting to 15–20 job boards:
- SEEK, LinkedIn, Indeed, Jora (Australian-focused)
- Both have free tiers for small teams

### Option B: Make + API Automation

For maximum control:

1. Write your job description in a Google Sheet (template)
2. **Trigger:** New row added with status "Post"
3. **HTTP Request:** Post to each job board's API:
   - LinkedIn API (Talent Solutions)
   - Indeed API
   - SEEK (via Broadbean integration)
4. **Update:** Mark status "Posted" + record posting URLs

---

## Step 2: CV Collection and Centralisation

Route all applications to one place:

**Email-based:**
1. Create `hiring@yourdomain.com`
2. Set Gmail filter: From any job board, label "CANDIDATE"
3. **Make trigger:** New email with "CANDIDATE" label
4. Extract attachment (CV)
5. Save to Google Drive folder: `Hiring/[Job Title]/[Applicant Name]`
6. Add row to Google Sheets tracking spreadsheet

**ATS-based:**
Most tools above centralise applications automatically. Use their export/API to push to your Google Sheets for scoring.

---

## Step 3: CV Parsing and Scoring

This is where AI saves the most time.

### The Scoring Workflow (Make + OpenAI)

1. **Trigger:** New file in Google Drive hiring folder
2. **Google Drive:** Read file (PDF/DOCX)
3. **Document Parser:** Extract text from PDF (Adobe PDF Services or built-in Make)
4. **OpenAI:** Score the candidate:

```
You are a hiring assistant for [Company Name].

We are hiring a [Job Title]. Here are our requirements:

MUST HAVE:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

NICE TO HAVE:
- [Requirement 4]
- [Requirement 5]

Here is the candidate's CV:
[CV TEXT]

Score this candidate 1–10 for fit. Return JSON:
{
  "name": "...",
  "score": 7,
  "meets_must_haves": ["req 1", "req 2"],
  "missing": ["req 3"],
  "standout": "...",
  "recommendation": "Interview" | "Maybe" | "Pass"
}
```

5. **Google Sheets:** Update candidate row with score and recommendation

---

## Step 4: Automated Candidate Communication

### Rejection Emails (Instant, Automated)

For candidates scored below 5 (or marked "Pass"):

```
Subject: Your application to [Company] — [Job Title]

Hi [First Name],

Thank you for applying for [Job Title] at [Company].

After reviewing your application, we've decided to move forward with 
other candidates whose experience more closely matches our current needs.

We appreciate the time you took to apply and wish you the best in your search.

[Your name]
[Company]
```

Set this to send automatically 24–48 hours after application (not instantly — feels more human).

### Shortlist Outreach (Automated + Personalised)

For candidates scored 7+ (marked "Interview"):

```
Subject: Next steps for your [Job Title] application — [Company]

Hi [First Name],

Thanks for applying for [Job Title] at [Company]. We've reviewed your 
application and we'd love to learn more about you.

I'd like to invite you to a 30-minute introductory call at a time that 
suits you. Please book a slot here: [Calendly Link]

Looking forward to connecting.

[Your name]
```

---

## Step 5: Interview Scheduling with Google Calendar

### Calendly Setup (Simplest)

1. Create a Calendly account
2. Connect Google Calendar
3. Set your availability for interviews (e.g. Tue–Thu, 10am–3pm)
4. Enable buffer time between interviews (30 min)
5. Include your video call link (Google Meet/Zoom) in the booking confirmation

Include the Calendly link in your shortlist outreach email.

### Automated Reminders

Set up automated reminders via Calendly or Make:
- **24 hours before:** "Looking forward to our call tomorrow at [time]"
- **1 hour before:** "See you in an hour — here's the link: [link]"

This dramatically reduces no-shows (typically drops from 20% to 5%).

---

## Step 6: The Interview Feedback Workflow

After each interview:
1. Interviewer fills in a Google Form (5 questions, 5 minutes)
2. Make trigger: New form submission
3. Append feedback to candidate's row in tracking sheet
4. If all interviewers score 4+/5: Auto-send offer email template for human to review
5. If not proceeding: Auto-draft rejection email for review

---

## Full Pipeline Overview

```
Job Posted (auto, multi-board)
    ↓
Application Received (centralised)
    ↓
CV Parsed + Scored (AI, instant)
    ↓
Pass → Rejection email (24h delay)
Shortlist → Booking link email (instant)
    ↓
Interview Booked (Calendly)
    ↓
Reminders sent (auto)
    ↓
Post-interview feedback (form)
    ↓
Offer or rejection drafted (auto)
    ↓
Human approves and sends
```

---

## Time Savings

| Task | Manual Time | Automated Time |
|------|-------------|----------------|
| Multi-board job posting | 2 hours | 5 minutes |
| CV screening (50 apps) | 5 hours | 30 minutes |
| Scheduling interviews | 3 hours | 0 (self-serve) |
| Sending rejections | 1 hour | Automatic |
| **Total** | **11 hours** | **35 minutes** |

---

For a pre-built hiring pipeline agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
