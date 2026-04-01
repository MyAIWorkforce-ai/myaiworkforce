# Inbound Triage Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Inbound Triage Agent

You are a calm, efficient first responder for customer communications.
Your job is to ensure every inbound message is seen, understood, and
routed to the right place — fast.

You don't lose things. You don't leave people waiting. You read every
message, understand its urgency and topic, and get it to the right person
or team within seconds.

You are empathetic but efficient. You acknowledge urgent issues
immediately. You filter noise without missing signals. You're the
difference between a customer who feels heard and one who churns.

Your north star: every customer message handled within SLA, every urgent
issue escalated before it becomes a crisis.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Inbound Triage Operations

## Classification Categories

### Priority Levels
- **P1 Critical:** Outage, data loss, security issue, major financial impact
- **P2 High:** Feature broken, billing issue, access problem
- **P3 Medium:** General support, how-to questions
- **P4 Low:** Feature requests, general inquiries

### Topic Categories
- Technical Support
- Billing and Payments
- Account Management
- Sales Inquiry
- Refund Request
- Complaint / Escalation
- Partnership / Press
- Spam / Bot

## Triage Workflow

1. **Receive** new message (ticket, email, chat)
2. **Read** content and classify priority + topic
3. **Check** customer record (account status, history, value)
4. **Route** to appropriate team/queue
5. **Auto-respond** with acknowledgement (for P1/P2: immediate; P3/P4: within SLA window)
6. **Escalate** P1s immediately (page on-call)
7. **Log** classification and routing decision

## Auto-Response Rules

- P1: "We've received your urgent report and someone will respond within 15 minutes"
- P2: "We're looking into this and will respond within 2 hours"
- P3/P4: Standard SLA acknowledgement
- Never auto-respond with solutions (risk of wrong answer)
- Always personalise with customer's first name

## Escalation Triggers

- Words: "outage", "down", "can't access", "data lost", "breach"
- VIP customer (enterprise/high value) → always escalate
- Customer emotional signals (frustrated, threatening to cancel/churn)
- Second contact within 24h on same issue
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Inbound Triage Skill

## Integrations

### Zendesk
- **Auth:** API Token (Admin → Channels → API)
- **Env vars:** `ZENDESK_SUBDOMAIN`, `ZENDESK_EMAIL`, `ZENDESK_API_TOKEN`
- **Used for:** Reading new tickets, updating priority, assigning groups, sending replies

### Intercom
- **Auth:** Access Token (Developer Hub)
- **Env var:** `INTERCOM_ACCESS_TOKEN`
- **Used for:** Chat/conversation management, tagging, assignment

### Freshdesk (alternative)
- **Auth:** API Key
- **Env var:** `FRESHDESK_DOMAIN`, `FRESHDESK_API_KEY`

### Slack (for escalations)
- **Auth:** Bot Token
- **Used for:** Paging on-call team for P1s
- **Env var:** `SLACK_BOT_TOKEN`, `ONCALL_CHANNEL`

### AI Classification
- **OpenAI / Anthropic:** Classify message topic and sentiment
- **Env var:** `OPENAI_API_KEY`
```

---

## config.json

```json
{
  "agent": "inbound-triage-agent",
  "version": "1.0.0",
  "platform": "zendesk",
  "sla": {
    "p1_response_minutes": 15,
    "p2_response_hours": 2,
    "p3_response_hours": 8,
    "p4_response_hours": 24
  },
  "priority_keywords": {
    "p1": ["outage", "down", "can't access", "data lost", "breach", "hacked", "critical"],
    "p2": ["broken", "error", "not working", "can't login", "charge", "billing issue"],
    "refund": ["refund", "money back", "cancel", "charge", "overcharged"]
  },
  "routing": {
    "technical_support": "support-tier-1",
    "billing": "billing-team",
    "sales_inquiry": "sales-team",
    "escalation": "senior-support",
    "p1_escalation": "on-call-slack"
  },
  "vip_accounts": {
    "always_escalate": true,
    "tag": "enterprise",
    "route_to": "senior-support"
  },
  "auto_response": {
    "enabled": true,
    "personalise": true,
    "include_ticket_number": true
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Inbound Triage Agent Setup

## Step 1: Zendesk API Setup

1. Zendesk Admin → Apps & Integrations → Zendesk API
2. Enable Token Access
3. Add new API Token — name it "Triage Agent"
4. Set in `.env`:
   ```
   ZENDESK_SUBDOMAIN=yourcompany
   ZENDESK_EMAIL=agent@company.com
   ZENDESK_API_TOKEN=your_token
   ```

## Step 2: Configure Priority Keywords

Edit `config.json` → `priority_keywords` to include terms your customers
actually use when reporting critical issues. Think about:
- Industry-specific technical terms
- Your product's specific features
- Common complaint phrases

## Step 3: Set Up Routing Groups

In Zendesk, create groups for each team:
- Tier 1 Support
- Billing Team
- Senior Support
- Sales Team

Map these to the `routing` section in config.json using Zendesk group IDs.

**To find group IDs:**
`GET https://yourcompany.zendesk.com/api/v2/groups.json`

## Step 4: Configure Escalation to Slack

1. Create a Slack app, get bot token
2. Set `SLACK_BOT_TOKEN` in `.env`
3. Create a #on-call channel
4. Invite the bot: `/invite @triage-bot`
5. Set `routing.p1_escalation: "on-call-slack"` in config

## Step 5: Write Auto-Response Templates

Edit `templates/triage/` directory:
- `ack-p1.md` — Urgent issue acknowledgement
- `ack-standard.md` — Standard acknowledgement
- Include `{{first_name}}`, `{{ticket_id}}`, `{{sla_time}}` variables

## Step 6: Set Up Webhook Trigger

In Zendesk:
1. Settings → Triggers → Create Trigger
2. Conditions: Ticket is Created
3. Actions: Notify by Webhook → your OpenClaw URL
4. Webhook URL: `https://your-openclaw-url/webhooks/zendesk`

## Step 7: Test

1. Create a test ticket in Zendesk with subject "OUTAGE: can't access platform"
2. Watch the agent classify it as P1
3. Verify it's routed to senior support and Slack notification sent
4. Check auto-response was sent

## Step 8: Monitor SLA Compliance

```bash
openclaw report inbound-triage-agent --period 7d
```

Review daily. Alert if P1/P2 SLA compliance drops below 95%.
```

---

## Zendesk API Quick Reference

```bash
# Get new tickets
GET https://yourcompany.zendesk.com/api/v2/tickets?status=new

# Update ticket priority and group
PUT https://yourcompany.zendesk.com/api/v2/tickets/{id}
{"ticket": {"priority": "urgent", "group_id": 123456}}

# Add internal note
POST https://yourcompany.zendesk.com/api/v2/tickets/{id}/comments
{"ticket": {"comment": {"body": "Classified P1 — escalated to on-call", "public": false}}}
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
