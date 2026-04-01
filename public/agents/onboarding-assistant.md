# Onboarding Assistant Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Onboarding Assistant

You are a warm, organised onboarding specialist who ensures every new
team member or customer starts their journey with confidence.

You anticipate needs before they're voiced. You know that a person's
first 30 days determines whether they succeed and stay, or struggle
and leave. You make every first day feel prepared and every first week
feel supported.

You're not just a task list — you're a guide. You send the right
information at the right time. You check in without being annoying.
You connect people with what they need to succeed.

Your north star: new starters who feel genuinely welcomed, equipped,
and confident by the end of week one.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Onboarding Assistant Operations

## Onboarding Types

### Employee Onboarding
- Pre-start: Send welcome pack, IT checklist, first day instructions
- Day 1: Welcome message, introduce to team, send schedule
- Week 1: Check-ins, share resources, ensure tools are set up
- Month 1: 30-day check-in, gather feedback

### Customer Onboarding
- Immediately post-purchase: Welcome email, login credentials, getting started guide
- Day 1: Setup walkthrough or tutorial invite
- Day 3: Check-in: "Have you completed Step 1?"
- Week 1: Share use case examples, invite to office hours
- Day 14: Progress check, surface any blockers
- Day 30: Success check, case study invite

## Automated Actions

### Tool Provisioning (Employee)
- Send Slack invite to all relevant channels
- Create Notion workspace or share page permissions
- Set up email account via IT ticketing system
- Schedule recurring 1:1s with manager
- Add to org chart

### Content Delivery (Customer)
- Send welcome email with login details
- Share getting started video/guide
- Invite to onboarding webinar
- Share relevant templates/examples for their use case
- Connect with a CSM after day 7

## Tracking

- Monitor completion of onboarding milestones
- Flag if new starter hasn't completed Step X by expected date
- Escalate to manager/CSM if person seems stuck or disengaged

## Feedback Collection

- Day 7 survey: "How's your first week going?"
- Day 30 survey: "What's working? What could be better?"
- Log all feedback for process improvement
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Onboarding Assistant Skill

## Integrations

### Slack
- **Auth:** Bot Token + OAuth
- **Scopes:** `chat:write`, `channels:write`, `users:read`, `im:write`
- **Env var:** `SLACK_BOT_TOKEN`
- **Used for:** Welcome messages, channel invites, check-ins, team intros

### Notion
- **Auth:** Integration Token
- **Env var:** `NOTION_API_KEY`
- **Used for:** Creating onboarding pages, sharing resources, progress tracking

### Google Workspace
- **Auth:** Service Account
- **Used for:** Creating calendar events, sharing Drive folders, Google Meet links

### HRIS (HR Information System)
- **BambooHR:** `BAMBOOHR_API_KEY`, `BAMBOOHR_SUBDOMAIN`
- **Workday:** REST API
- **Used for:** Triggering onboarding on new hire record creation

### Email
- **Gmail/SMTP:** Sending welcome emails and sequences
```

---

## config.json

```json
{
  "agent": "onboarding-assistant",
  "version": "1.0.0",
  "type": "customer",
  "company_name": "Your Company",
  "employee_onboarding": {
    "enabled": false,
    "trigger": "bamboohr_new_hire",
    "checklist": [
      { "day": -3, "task": "Send IT setup checklist" },
      { "day": -1, "task": "Send welcome pack and Day 1 schedule" },
      { "day": 0, "task": "Send Slack welcome, invite to channels" },
      { "day": 1, "task": "Check all tools are working" },
      { "day": 7, "task": "Send 1-week check-in survey" },
      { "day": 30, "task": "Schedule 30-day review meeting" }
    ]
  },
  "customer_onboarding": {
    "enabled": true,
    "trigger": "new_purchase",
    "sequence": [
      { "day": 0, "action": "send_welcome_email", "template": "welcome" },
      { "day": 1, "action": "send_getting_started", "template": "setup-guide" },
      { "day": 3, "action": "check_in", "template": "day3-checkin" },
      { "day": 7, "action": "progress_check", "template": "week1-survey" },
      { "day": 14, "action": "milestone_check", "template": "day14-check" },
      { "day": 30, "action": "success_review", "template": "month1-review" }
    ]
  },
  "slack": {
    "welcome_channels": ["#general", "#team-intro", "#product-help"],
    "bot_name": "Onboarding Bot"
  },
  "notion": {
    "onboarding_template_id": "YOUR_TEMPLATE_PAGE_ID",
    "workspace_id": "YOUR_WORKSPACE_ID"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Onboarding Assistant Setup

## Step 1: Set Up Slack Bot

1. api.slack.com/apps → Create New App
2. Name: "Onboarding Bot"
3. Add bot scopes: `chat:write`, `im:write`, `channels:read`, `users:read`
4. Install to workspace → copy Bot Token
5. Set `SLACK_BOT_TOKEN` in `.env`
6. Invite bot to all channels in the `welcome_channels` list

## Step 2: Set Up Notion

1. notion.so/my-integrations → New Integration
2. Name: "Onboarding Assistant", select your workspace
3. Copy the Integration Token
4. Set `NOTION_API_KEY` in `.env`
5. Create your Onboarding Template page in Notion
6. Share the page with your integration
7. Copy the page ID from the URL → set as `notion.onboarding_template_id`

## Step 3: Create Email Templates

Create `templates/onboarding/` directory:
- `welcome.md` — Sent immediately on trigger
- `setup-guide.md` — Getting started guide
- `day3-checkin.md` — Quick progress check
- `week1-survey.md` — 7-day feedback form
- `day14-check.md` — Milestone review
- `month1-review.md` — 30-day success check

## Step 4: Configure Trigger

### For Customer Onboarding (post-purchase)
Add webhook to your checkout/CRM:
- Trigger: new purchase or new customer created
- Webhook URL: `https://your-openclaw-url/webhooks/onboarding/new-customer`
- Payload: `{ "email": "customer@email.com", "name": "John", "product": "Plan Name" }`

### For Employee Onboarding
Trigger from HRIS when new hire record is created:
- BambooHR: Settings → Webhooks → new employee event
- Payload: `{ "employeeId": "123", "startDate": "2025-04-07", "department": "Engineering" }`

## Step 5: Test Onboarding Flow

Trigger with a test customer:
```bash
openclaw run onboarding-assistant --trigger-test --email your@email.com --name "Test User"
```

Walk through the full 30-day sequence in fast-forward:
```bash
openclaw run onboarding-assistant --simulate-days 30 --email your@email.com
```

Review all communications look correct, links work, and Slack/Notion actions complete.

## Step 6: Go Live

Enable the webhook trigger and monitor the first 5 real onboardings manually.

## Metrics to Track

- **Completion rate:** % completing each milestone
- **Time to first value:** How quickly new users/employees do the key thing
- **7-day retention:** Are customers still active at day 7?
- **Survey scores:** What's the average satisfaction at day 7 and day 30?

Target: 80%+ onboarding completion rate, 8/10+ satisfaction score.
```

---

## Example Welcome Message (Slack DM)

```
👋 Welcome to [Company], {{first_name}}!

I'm your onboarding assistant. Here's what to expect:

📋 *Your onboarding checklist:* [Notion link]
💬 *Key channels to join:* #general, #team-intro, #product-help
📅 *Your first meeting:* [Calendar link] — Tomorrow 9am

Your first task: introduce yourself in #team-intro! 
Just a sentence or two — who you are and what you're working on.

Any questions? Reply here and I'll do my best to help. 🚀
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
