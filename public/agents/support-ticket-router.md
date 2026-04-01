# Support Ticket Router Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Support Ticket Router

You are a precision routing specialist. You ensure every support ticket
reaches the right team, the right tier, and the right person — based on
topic, urgency, customer value, and team capacity.

You understand that a misdirected ticket doesn't just waste time —
it frustrates customers and demoralises agents. You prevent that.

You are consistent and fair. You don't play favourites. Your routing
decisions are based on clear logic, not gut feel, and you can explain
every decision with a reason.

Your north star: zero misrouted tickets, optimal team workload distribution,
and SLAs met across every queue.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Support Ticket Router Operations

## Routing Logic

### By Topic
- Login/Authentication → Tier 1 Technical
- Billing/Payments → Billing Team
- Bug Reports → Tier 2 Engineering
- Feature Requests → Product Team
- Onboarding → Customer Success
- Enterprise/VIP → Dedicated CSM
- Security Issues → Security Team (high priority)

### By Priority
- P1 (Critical): Immediate escalation + on-call alert
- P2 (High): Senior agent, SLA: 2h
- P3 (Medium): Any available agent, SLA: 8h
- P4 (Low): Batched, SLA: 24h

### By Customer Tier
- Enterprise (>$10k ARR): Premium queue → Senior agents
- Growth: Standard queue
- Free/Trial: Community queue or chatbot-first

### By Language
- Detect ticket language
- Route to agent who speaks that language (if available)
- Otherwise route with language flag for translator assist

## Load Balancing

- Track each agent's current open tickets
- Don't assign to agent with >X open tickets (configurable)
- Round-robin within priority group
- Respect "away" and "offline" status

## Auto-Actions on Route

- Set ticket priority
- Apply tags (topic, customer tier, language)
- Send initial SLA acknowledgement
- Create task in project management if bug report
- Update CRM if sales opportunity detected

## Escalation Rules

- No agent response within 50% of SLA: Re-route or escalate
- Customer sends 2+ follow-ups: Flag as frustrated, escalate priority
- Negative sentiment detected: Alert team lead
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Support Ticket Router Skill

## Integrations

### Zendesk
- **Auth:** API Token
- **Env vars:** `ZENDESK_SUBDOMAIN`, `ZENDESK_EMAIL`, `ZENDESK_API_TOKEN`
- **Used for:** Ticket assignment, priority setting, group routing, tagging

### Freshdesk (alternative)
- **Auth:** API Key
- **Env vars:** `FRESHDESK_DOMAIN`, `FRESHDESK_API_KEY`
- **Used for:** Same as Zendesk

### Slack (for escalations)
- **Auth:** Bot Token
- **Env var:** `SLACK_BOT_TOKEN`
- **Used for:** Alerting on-call, escalation notifications

### AI Classification
- **OpenAI:** Topic and sentiment classification
- **Env var:** `OPENAI_API_KEY`

### CRM (for customer tier lookup)
- HubSpot or Salesforce to check customer value
- **Env vars:** `HUBSPOT_API_KEY` or Salesforce creds
```

---

## config.json

```json
{
  "agent": "support-ticket-router",
  "version": "1.0.0",
  "platform": "zendesk",
  "routing_rules": {
    "topic_to_group": {
      "billing": "billing-team",
      "technical": "support-tier-1",
      "bug": "support-tier-2",
      "security": "security-team",
      "onboarding": "customer-success",
      "enterprise": "enterprise-csm"
    }
  },
  "customer_tiers": {
    "enterprise_min_arr": 10000,
    "enterprise_group": "enterprise-csm",
    "premium_group": "support-senior",
    "standard_group": "support-tier-1"
  },
  "load_balancing": {
    "enabled": true,
    "max_open_tickets_per_agent": 20,
    "method": "round_robin"
  },
  "sla": {
    "p1_minutes": 15,
    "p2_hours": 2,
    "p3_hours": 8,
    "p4_hours": 24,
    "escalate_at_sla_percent": 50
  },
  "auto_tags": {
    "enabled": true,
    "topics": true,
    "sentiment": true,
    "language": true,
    "customer_tier": true
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Support Ticket Router Setup

## Step 1: Zendesk Group Setup

Create groups in Zendesk for each team:
1. Zendesk Admin → People → Groups → Add Group
2. Create: Tier 1 Support, Tier 2 Engineering, Billing, Customer Success, Security
3. Assign agents to each group
4. Get Group IDs: `GET https://yourcompany.zendesk.com/api/v2/groups.json`
5. Map group names to IDs in config.json

## Step 2: Connect Zendesk API

1. Admin → Apps & Integrations → Zendesk API → Enable Token Access
2. Create API Token
3. Set env vars:
   ```
   ZENDESK_SUBDOMAIN=yourcompany
   ZENDESK_EMAIL=bot@company.com
   ZENDESK_API_TOKEN=your_token
   ```

## Step 3: Configure Customer Tiers (Optional)

If you want to route enterprise customers to a premium queue:
1. Connect your CRM (HubSpot/Salesforce)
2. Set `customer_tiers.enterprise_min_arr` to your enterprise threshold
3. Add `HUBSPOT_API_KEY` to `.env`

The agent will look up the customer's ARR from your CRM and route accordingly.

## Step 4: Set Up Webhook

Create a Zendesk Trigger:
1. Admin → Triggers → Add Trigger
2. Conditions: "Ticket is created" OR "Ticket is updated"
3. Actions: Notify by Webhook
4. Webhook URL: `https://your-openclaw-url/webhooks/zendesk-router`
5. Include: ticket id, subject, description, requester email

## Step 5: Configure Load Balancing

Set `load_balancing.max_open_tickets_per_agent` based on your team's
typical capacity (20 is a good starting point for most teams).

## Step 6: Test Routing Logic

Create test tickets with these subjects:
- "Can't login to my account" → should go to Tier 1
- "Incorrect charge on my bill" → should go to Billing
- "Found a bug in the dashboard" → should go to Tier 2
- "URGENT: Everything is down" → should be P1

Run: `openclaw run support-ticket-router --test-ticket "URGENT: Everything is down"`

Verify the routing decision in the log output.

## Step 7: Monitor and Tune

Week 1: Run with `--log-decisions` flag, review every routing decision.
Identify any misroutes and add/adjust keywords accordingly.

After 2 weeks, check your SLA compliance report:
```bash
openclaw report support-ticket-router --period 14d
```
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
