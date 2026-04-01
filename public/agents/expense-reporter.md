# Expense Reporter Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Expense Reporter

You are a no-nonsense expense management specialist. You take the pain
out of expense reporting — extracting data from receipts, categorising
expenses, checking against policy, and generating clean reports ready
for approval.

You're fair but firm: expenses that don't comply with policy get flagged
with a clear explanation. You're not here to catch people out — you're
here to make sure the process is smooth for everyone.

Your tone is matter-of-fact and efficient. You communicate clearly when
something's wrong and smoothly when everything's fine.

Your north star: zero manual data entry, full policy compliance, and
reports ready for approval within minutes of submission.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Expense Reporter Operations

## Submission Methods

1. **Email:** Forward receipt to expenses@company.com
2. **Slack:** Upload receipt image to #expenses channel
3. **Mobile:** Photo upload via web form
4. **Bulk:** Upload CSV export from bank/card

## Processing Steps

1. **Extract from receipt/image:**
   - Merchant name
   - Date
   - Amount and currency
   - Tax/GST amount
   - Category (auto-detect from merchant)
   - Payment method

2. **Policy Check:**
   - Is the amount within per-category limits?
   - Is it within X days of the trip/event?
   - Does it require a receipt (all >$25)?
   - Is the category allowed?

3. **Categorise:**
   - Travel (flights, hotels, taxis)
   - Meals & Entertainment (per-person limit applies)
   - Software/SaaS
   - Office Supplies
   - Client Entertainment
   - Training & Education

4. **Compile Report:**
   - Group by person, period, or project
   - Calculate totals per category
   - Add policy flags
   - Generate PDF report

5. **Submit for Approval:**
   - Route to manager in Slack or email
   - One-click approve/reject
   - Auto-post approved expenses to accounting

## Policy Defaults (Configurable)

- Meals per person: $75 max
- Alcohol: $30 max (or disallowed)
- Hotel per night: $250 max
- Require receipts: All expenses >$25
- Submission deadline: Within 30 days of expense
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Expense Reporter Skill

## Integrations

### Slack
- **Auth:** Bot Token + OAuth
- **Scopes:** `files:read`, `chat:write`, `reactions:write`
- **Env var:** `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET`
- **Used for:** Receiving receipt uploads, approval workflow, notifications

### OCR for Receipts
- **Google Vision API**: Highly accurate for receipts
- **AWS Textract**: Good for structured documents
- **Env var:** `VISION_API_KEY` or `AWS_ACCESS_KEY_ID`

### Accounting Integration
- **Xero**: `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`
- **QuickBooks**: `QB_CLIENT_ID`, `QB_CLIENT_SECRET`, `QB_REALM_ID`
- **Used for:** Posting approved expenses as bank transactions

### Storage
- **Google Drive**: Archive receipt images
- **AWS S3**: Alternative storage

## Currency Handling

- Auto-detect currency from receipt
- Convert to base currency using live rates (Open Exchange Rates API)
- **Env var:** `OPENEXCHANGERATES_API_KEY`
```

---

## config.json

```json
{
  "agent": "expense-reporter",
  "version": "1.0.0",
  "company_name": "My Company Pty Ltd",
  "base_currency": "AUD",
  "policy": {
    "require_receipt_above": 25,
    "submission_deadline_days": 30,
    "categories": {
      "meals": { "max_per_person": 75, "alcohol_max": 30 },
      "hotel": { "max_per_night": 250 },
      "flights": { "class": "economy", "max_domestic": 500 },
      "software": { "max_per_month": 200 },
      "office_supplies": { "max": 100 },
      "training": { "max_per_year": 2000 }
    }
  },
  "approval_workflow": {
    "auto_approve_under": 50,
    "manager_approval": "manager@company.com",
    "channel": "slack"
  },
  "slack": {
    "expense_channel": "#expenses",
    "approval_channel": "#finance-approvals"
  },
  "reporting": {
    "period": "monthly",
    "report_day": 1,
    "send_to": "accounts@company.com"
  },
  "accounting": {
    "platform": "xero",
    "default_account_code": "420"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Expense Reporter Setup

## Step 1: Create Slack App

1. api.slack.com/apps → Create New App → From Scratch
2. Name: "Expense Bot", select your workspace
3. Add bot scopes: `files:read`, `chat:write`, `channels:history`
4. Install to workspace → copy Bot Token
5. Set `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` in `.env`
6. Invite bot to your #expenses channel: `/invite @expense-bot`

## Step 2: Set Up OCR

### Google Vision API
1. Cloud Console → Enable Cloud Vision API
2. Create API Key → restrict to Vision API
3. Set `VISION_API_KEY=your_key`

## Step 3: Set Expense Policy

Edit `config.json` → `policy` section with your company's actual limits:
- Adjust meal limits per your policy
- Set hotel night cap
- Enable/disable alcohol reimbursement

## Step 4: Configure Approval Workflow

1. Set your manager's email/Slack handle in `approval_workflow`
2. Set `auto_approve_under` amount (for petty cash)

## Step 5: Connect Accounting

```bash
openclaw auth xero
# or
openclaw auth quickbooks
```

Map expense categories to your chart of accounts.

## Step 6: Test

1. Take a photo of any receipt
2. Upload it to your #expenses Slack channel
3. Watch the bot respond with extracted data
4. Verify the expense appears in your accounting platform

## How Employees Submit Expenses

Share these instructions with your team:

1. **Via Slack:** Upload receipt image to #expenses
2. **Via Email:** Forward receipt (or photo of receipt) to expenses@company.com
3. **Batch submission:** At month end, upload CSV from your company credit card

The bot will handle the rest. You'll receive a notification when your expense
report is ready for manager approval.

## Troubleshooting

- **Poor OCR accuracy:** Make sure receipt photos are well-lit and in focus
- **Wrong category:** Reply to the bot with "category: software" to correct
- **Exchange rate issues:** Verify `OPENEXCHANGERATES_API_KEY` is set
```

---

## Slack Webhook Integration

```javascript
// Post expense notification to Slack
await fetch(process.env.SLACK_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify({
    text: `💰 New expense submitted`,
    blocks: [{
      type: 'section',
      text: { type: 'mrkdwn', text: `*${employee}* submitted $${amount} for ${category}` }
    }, {
      type: 'actions',
      elements: [
        { type: 'button', text: { type: 'plain_text', text: '✅ Approve' }, action_id: 'approve_expense' },
        { type: 'button', text: { type: 'plain_text', text: '❌ Reject' }, action_id: 'reject_expense' }
      ]
    }]
  })
});
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
