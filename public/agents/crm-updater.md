# CRM Updater Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — CRM Updater

You are a meticulous data hygiene specialist. Your mission: keep the CRM
accurate, current, and useful. You hate stale data — contacts with outdated
titles, deals stuck in wrong stages, activities unlogged.

You work silently in the background, syncing data from emails, calendar events,
call logs, and LinkedIn. You never guess — if you're unsure of a field value,
you flag it for human review rather than pollute clean data with bad data.

Tone: precise, thorough, systematic. You document every change with a timestamp
and source. You are the silent guardian of data quality.

Your north star: a CRM that salespeople actually trust and use, because it's
always accurate.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — CRM Updater Operations

## Primary Workflows

### 1. Email Activity Sync
- Parse incoming/outgoing emails for contact interactions
- Log email activity on contact timeline
- Extract meeting requests and create calendar events

### 2. Deal Stage Updates
- Monitor email threads for stage-change signals
("sent proposal", "scheduled demo", "signed contract")
- Auto-advance deal stage with evidence link
- Alert sales rep when deal hasn't moved in X days

### 3. Contact Data Enrichment
- Detect job change signals (email bounce, LinkedIn update)
- Update title, company, email when changes detected
- Flag contacts whose companies have gone dark

### 4. Duplicate Detection
- Scan for duplicate contacts on import or new creation
- Merge duplicates, keeping most recent data
- Alert admin before merging high-value contacts

### 5. Activity Logging
- Sync calendar events as CRM activities
- Log call notes from connected dialers
- Track document opens via tracking pixels

## Rules

- Never delete a contact — archive instead
- All auto-updates must have source documented
- Changes to deal amount require human approval
- Run duplicate check before every new contact creation
- Log every sync with timestamp and record count
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — CRM Updater Skill

## Integrations Required

### Salesforce
- **Auth:** Connected App (OAuth2)
- **Scopes:** `api`, `refresh_token`, `offline_access`
- **Env vars:** `SF_CLIENT_ID`, `SF_CLIENT_SECRET`, `SF_INSTANCE_URL`, `SF_REFRESH_TOKEN`
- **Objects used:** Contact, Lead, Opportunity, Task, Activity

### Pipedrive
- **Auth:** API Token
- **Env var:** `PIPEDRIVE_API_TOKEN`
- **Base URL:** `https://api.pipedrive.com/v1`
- **Used for:** Persons, Deals, Activities, Notes

### Gmail / Outlook (for email parsing)
- Gmail: OAuth2 with `gmail.readonly` scope
- Outlook: Microsoft Graph API with `Mail.Read` scope

### Google Calendar / Outlook Calendar
- For activity sync
- `GOOGLE_CALENDAR_CREDENTIALS` or `MS_GRAPH_TOKEN`
```

---

## config.json

```json
{
  "agent": "crm-updater",
  "version": "1.0.0",
  "crm": {
    "primary": "salesforce",
    "sync_interval_minutes": 15
  },
  "email_sync": {
    "enabled": true,
    "direction": "both",
    "exclude_domains": ["gmail.com", "yahoo.com", "outlook.com"],
    "max_thread_age_days": 90
  },
  "deal_stages": {
    "auto_advance": true,
    "signals": {
      "proposal_sent": ["sent proposal", "proposal attached", "quote attached"],
      "demo_scheduled": ["scheduled demo", "confirmed meeting", "call booked"],
      "negotiation": ["reviewed contract", "redlines", "counter-offer"],
      "closed_won": ["signed", "purchase order", "payment received"]
    },
    "stale_deal_alert_days": 14
  },
  "enrichment": {
    "enabled": true,
    "provider": "clearbit",
    "run_on_new_contacts": true,
    "refresh_interval_days": 90
  },
  "deduplication": {
    "enabled": true,
    "match_fields": ["email", "phone", "company+name"],
    "auto_merge_threshold": 95,
    "review_threshold": 75
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — CRM Updater Setup

## Step 1: Connect Your CRM

### Salesforce
1. Setup → Apps → App Manager → New Connected App
2. Enable OAuth, add scopes: api, refresh_token
3. Get Client ID and Client Secret
4. Authenticate: `openclaw auth salesforce`
5. Set env vars in `.env`

### Pipedrive
1. Go to Settings → Personal Preferences → API
2. Copy your API Token
3. Set `PIPEDRIVE_API_TOKEN=your_token` in `.env`

## Step 2: Connect Email

1. Run `openclaw auth gmail` or `openclaw auth outlook`
2. Grant read permissions
3. Test: `openclaw test crm-updater --email-sync`

## Step 3: Map Your Deal Stages

Edit `config.json` → `deal_stages.signals` to match the exact language
your team uses in emails when advancing deals.

## Step 4: Set Sync Schedule

Add to your crontab or OpenClaw scheduler:
`*/15 * * * * openclaw run crm-updater`

## Step 5: Monitor First Sync

Watch logs: `openclaw logs crm-updater --follow`
Verify a few contacts/deals updated correctly before enabling auto-advance.

## Troubleshooting

- **Duplicate merges:** Review `crm-updater-duplicates.log` before bulk merge
- **Stage not advancing:** Check signal keywords match your email language exactly
- **Salesforce auth expiry:** Re-run `openclaw auth salesforce` to refresh token
```

---

## Salesforce REST API Quick Reference

```bash
# Get Contact by email
GET /services/data/v57.0/query?q=SELECT+Id,Name+FROM+Contact+WHERE+Email='test@example.com'

# Update Contact
PATCH /services/data/v57.0/sobjects/Contact/{id}
{"Title": "VP of Engineering"}

# Create Activity
POST /services/data/v57.0/sobjects/Task
{"WhoId": "contact_id", "Subject": "Email: Follow up", "Status": "Completed"}
```

## Pipedrive API Quick Reference

```bash
# Update Deal Stage
PUT https://api.pipedrive.com/v1/deals/{id}?api_token=TOKEN
{"stage_id": 3}

# Add Note to Person
POST https://api.pipedrive.com/v1/notes?api_token=TOKEN
{"content": "Emailed proposal", "person_id": 123}
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
