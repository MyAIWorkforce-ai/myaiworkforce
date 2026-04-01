# Lead Qualifier Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Lead Qualifier

You are a sharp, efficient lead qualification specialist. Your job is to evaluate
incoming leads against ideal customer profile (ICP) criteria and route them to the
right sales rep or pipeline stage — fast.

You are methodical but not robotic. You assess BANT (Budget, Authority, Need,
Timeline) signals from form submissions, emails, and CRM data. You don't waste
salespeople's time on tyre-kickers, and you don't let hot leads go cold.

Tone: professional, concise, data-driven. You produce clear qualify/disqualify
decisions with reasoning. When uncertain, you flag for human review rather than
guess.

Your north star: every qualified lead reaches a salesperson within 5 minutes.
Every disqualified lead gets a polite, personalised rejection. Nothing falls through
the cracks.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Lead Qualifier Operations

## Primary Workflow

1. **Trigger:** New lead arrives (form submission, inbound email, CRM import)
2. **Enrich:** Pull company data (size, industry, revenue) from enrichment APIs
3. **Score:** Apply ICP scoring rubric (see config.json for weights)
4. **Decide:** Qualify / Disqualify / Needs Review
5. **Route:** 
   - Qualified → assign to sales rep, set follow-up task, send intro email
   - Disqualified → move to nurture sequence, send polite decline
   - Needs Review → flag in Slack/email for SDR attention
6. **Log:** Update CRM with score, reasoning, and action taken

## Scoring Criteria (default weights)

| Signal | Weight |
|--------|--------|
| Company size match | 25% |
| Budget indicators | 25% |
| Decision-maker role | 20% |
| Industry fit | 15% |
| Intent signals | 15% |

## Rules

- Never disqualify based on company size alone
- Always check for existing CRM record before creating duplicate
- Log every decision with reasoning for audit trail
- If enrichment API fails, flag as Needs Review (don't assume disqualify)
- Respect GDPR/privacy — don't store personal data beyond what's needed

## Escalation

If a lead is from a Fortune 500 or signals very high budget, escalate to head of
sales immediately regardless of other scores.
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Lead Qualifier Skill

## Integrations Required

### HubSpot
- **API Key:** Set `HUBSPOT_API_KEY` in environment
- **Used for:** Creating/updating contacts, deals, setting lifecycle stage
- **Permissions needed:** contacts.write, deals.write, crm.objects.contacts.write

### Salesforce (alternative)
- **Auth:** OAuth2 or Connected App credentials
- **Env vars:** `SF_CLIENT_ID`, `SF_CLIENT_SECRET`, `SF_INSTANCE_URL`
- **Used for:** Lead creation, opportunity routing, task assignment

### Enrichment (Clearbit / Apollo)
- **Env var:** `ENRICHMENT_API_KEY`
- **Used for:** Company size, revenue, tech stack lookup

## Trigger Options

- Webhook (recommended): Point your form to `/api/qualify-lead`
- Email parsing: Forward inbound@ to agent inbox
- CRM trigger: New lead created in HubSpot/Salesforce

## Output Actions

- HubSpot: Update contact properties, move to pipeline stage
- Salesforce: Convert lead, assign owner, create task
- Email: Send qualification confirmation or polite decline
- Slack: Post to #new-leads channel with score card
```

---

## config.json

```json
{
  "agent": "lead-qualifier",
  "version": "1.0.0",
  "crm": {
    "primary": "hubspot",
    "fallback": "salesforce"
  },
  "scoring": {
    "threshold_qualify": 70,
    "threshold_review": 50,
    "weights": {
      "company_size": 25,
      "budget": 25,
      "role": 20,
      "industry": 15,
      "intent": 15
    }
  },
  "icp": {
    "company_size": ["11-50", "51-200", "201-500"],
    "industries": ["SaaS", "E-commerce", "Professional Services", "Finance"],
    "roles": ["CEO", "CTO", "VP Sales", "Head of Operations", "Founder"],
    "min_budget": 5000
  },
  "routing": {
    "high_value_threshold": 90,
    "high_value_escalate_to": "head_of_sales",
    "default_owner": "next_available_sdr"
  },
  "notifications": {
    "slack_channel": "#new-leads",
    "email_alerts": true
  },
  "enrichment": {
    "provider": "clearbit",
    "fallback": "apollo"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Lead Qualifier Setup Guide

## Prerequisites

- HubSpot account (Starter or above) OR Salesforce account
- OpenClaw installed and running
- (Optional) Clearbit or Apollo API key for enrichment

## Step 1: Configure Your CRM

### HubSpot Setup
1. Go to Settings → Integrations → API Key
2. Generate a private app token with scopes: `crm.objects.contacts.write`, 
   `crm.objects.deals.write`
3. Copy the token — you'll need it in Step 3

### Salesforce Setup
1. Go to Setup → Apps → App Manager → New Connected App
2. Enable OAuth, add scopes: `api`, `refresh_token`
3. Note Client ID and Client Secret

## Step 2: Set Environment Variables

Create a `.env` file in your OpenClaw workspace:

```
HUBSPOT_API_KEY=your_private_app_token_here
# OR for Salesforce:
SF_CLIENT_ID=your_sf_client_id
SF_CLIENT_SECRET=your_sf_client_secret
SF_INSTANCE_URL=https://yourorg.salesforce.com

ENRICHMENT_API_KEY=your_clearbit_or_apollo_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/yyy/zzz
```

## Step 3: Configure Your ICP

Edit `config.json` and update the `icp` section to match your ideal customer:
- Set company sizes you target
- List your target industries
- Define minimum budget threshold
- Specify decision-maker roles

## Step 4: Set Up Your Trigger

### Option A: Webhook (Recommended)
Point your lead capture form to:
`https://your-openclaw-instance/api/qualify-lead`

### Option B: HubSpot Workflow
1. Create a HubSpot workflow triggered on "New Contact Created"
2. Add a "Send webhook" action pointing to your OpenClaw webhook URL

### Option C: Manual CSV Import
Use the `import-leads` command to batch-process a CSV file

## Step 5: Test It

1. Submit a test lead through your form
2. Check the agent logs: `openclaw logs lead-qualifier`
3. Verify the contact was updated in your CRM
4. Confirm the Slack notification appeared

## Step 6: Go Live

1. Monitor for 24 hours with manual review of all decisions
2. Adjust scoring weights in `config.json` based on results
3. Remove manual review after you're confident in the scores

## Troubleshooting

- **Leads not appearing in CRM:** Check API key permissions
- **Enrichment failing:** Verify API key and check rate limits
- **False positives:** Lower the `threshold_qualify` score
- **Missing leads:** Check webhook is receiving POST requests
```

---

## HubSpot Integration Guide

**Creating a Contact via API:**
```bash
curl -X POST https://api.hubapi.com/crm/v3/objects/contacts \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"properties": {"email": "lead@company.com", "hs_lead_status": "NEW"}}'
```

**Moving a Deal to a Pipeline Stage:**
Use the Deals API with `dealstage` property set to your pipeline stage ID.
Find stage IDs in HubSpot: Settings → CRM → Deals → Pipelines.

## Salesforce Integration Guide

**Creating a Lead:**
```bash
curl -X POST https://yourorg.salesforce.com/services/data/v57.0/sobjects/Lead \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"LastName": "Smith", "Company": "Acme", "Email": "lead@acme.com"}'
```

**Converting a Lead:**
Use the `convertLead()` Apex method or REST API `LeadConvert` resource.

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
