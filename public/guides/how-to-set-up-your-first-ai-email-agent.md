# How to Set Up Your First AI Email Agent

**Time required:** 45–60 minutes  
**Difficulty:** Beginner  
**Tools:** OpenClaw, Gmail, Node.js

---

## What You'll Build

An AI agent that monitors your Gmail inbox, categorises incoming emails, drafts responses to common queries, and flags urgent messages — all running automatically in the background on your computer or VPS.

---

## Prerequisites

Before you start, make sure you have:

- [ ] OpenClaw installed (`npm install -g openclaw`)
- [ ] Node.js 18+ installed
- [ ] A Gmail account (or Google Workspace email)
- [ ] 10–15 minutes to set up Gmail OAuth credentials

---

## Step 1: Install and Initialise OpenClaw

If you haven't installed OpenClaw yet:

```bash
npm install -g openclaw
openclaw init
```

This creates your workspace directory at `~/.openclaw/workspace/`. This is where all your agent configuration files live.

---

## Step 2: Create Your Email Agent's Persona (SOUL.md)

Every OpenClaw agent needs a SOUL.md — this defines how your agent thinks, writes, and makes decisions. For an email agent, this is critical because it determines your email tone.

Create `~/.openclaw/workspace/SOUL.md`:

```markdown
# SOUL.md - Email Agent Persona

You are a professional email assistant for [Your Name/Business].

## Tone
- Professional but warm
- Concise — no fluff
- Use first-person ("I" not "we") unless specified

## How to Handle Emails

**Urgent (reply within 1 hour):**
- Client complaints
- Payment issues
- Meeting requests from known clients

**Standard (reply within 24 hours):**
- General enquiries
- New leads
- Partner requests

**Low priority (batch weekly):**
- Newsletters
- Notifications
- Cold outreach

## Things You Never Do
- Commit to prices or timelines without checking
- Share confidential information
- Send external emails without human approval
```

---

## Step 3: Configure Gmail OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable the **Gmail API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Application type: **Desktop App**
6. Download the `credentials.json` file
7. Place it in `~/.openclaw/workspace/credentials.json`

Then authorise OpenClaw:

```bash
openclaw auth gmail
```

Follow the browser prompt to grant permissions. OpenClaw will save your token securely.

---

## Step 4: Set Up Email Heartbeat (HEARTBEAT.md)

HEARTBEAT.md tells OpenClaw what to check periodically. Add email monitoring:

Create `~/.openclaw/workspace/HEARTBEAT.md`:

```markdown
# HEARTBEAT.md

## Email Check (every 30 minutes)
1. Check Gmail for unread emails from the last 30 minutes
2. Categorise each as: Urgent / Standard / Low Priority / Spam
3. For Urgent emails: notify me immediately via Discord/Telegram
4. For Standard emails: draft a response and save as draft
5. For Low Priority: label and archive
6. Log summary: X new emails, Y urgent, Z drafts created
```

---

## Step 5: Start Your Agent

```bash
openclaw start
```

Your agent is now running. To check its status:

```bash
openclaw status
```

---

## Step 6: Test Your Setup

Send a test email to your Gmail account with subject "TEST - Urgent: Invoice overdue". Within 30 minutes (or your configured interval), OpenClaw should:

1. Detect the email
2. Classify it as Urgent
3. Either notify you or draft a response

Check `~/.openclaw/workspace/memory/` for daily logs showing what the agent processed.

---

## Troubleshooting

**Agent not checking emails?**
- Run `openclaw logs` to see what's happening
- Check your `credentials.json` is in the right place
- Re-run `openclaw auth gmail` if the token has expired

**Getting too many notifications?**
- Tighten your SOUL.md urgency criteria
- Add specific sender emails to your urgent/ignore lists

**Drafts not being created?**
- Ensure Gmail API has write permissions (not just read)
- Check SOUL.md — your agent follows it strictly

---

## What's Next?

- Connect to Slack or Discord for notifications
- Set up CRM integration to log client emails automatically
- Add auto-send rules for specific low-risk response types

For more guides, visit [myaiworkforce.ai/guides](https://myaiworkforce.ai/guides)
