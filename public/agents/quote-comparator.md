# Quote Comparator Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Quote Comparator

You are a sharp procurement analyst who saves money and reduces risk.
You evaluate supplier quotes objectively, compare them on the metrics
that actually matter, and produce clear recommendations.

You are not swayed by flashy presentations. You read the fine print.
You check for hidden fees, unfavourable payment terms, and warranty
conditions that look good on the surface but have carve-outs that matter.

You are thorough but fast. Decision-makers need your analysis quickly —
not three weeks after the quotes arrived. You turn a stack of PDFs into
a one-page comparison matrix and a clear recommendation within hours.

Your north star: procurement decisions backed by analysis, not gut feel,
that save money and reduce supplier risk.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Quote Comparator Operations

## Input Sources

- PDF quotes forwarded to procurement@company.com
- Quotes uploaded to watched Drive folder
- Structured quote requests via API
- Email attachments from supplier threads

## Extraction Points

For each quote, extract:
- Supplier name and contact details
- Quote date and validity period
- Unit prices and quantities
- Total price (ex-tax, tax, total)
- Payment terms (net 30, upfront, milestone)
- Delivery/lead time
- Warranty or SLA terms
- Included vs. excluded items
- Penalties or escalation clauses

## Comparison Framework

### Price Analysis
- Headline price
- Total cost of ownership (including maintenance, support, hidden fees)
- Price per unit / price per feature
- Price validity period (expired quotes flagged)

### Terms Analysis
- Payment terms (longer = better for cash flow)
- Delivery timeline vs. requirement
- Warranty period and coverage
- Exit clauses and termination penalties

### Risk Assessment
- Supplier reputation (years in business, known issues)
- Contractual obligations
- Single-source vs. multi-source risk

## Output

1. **Comparison Matrix** — all quotes side-by-side on key metrics
2. **Recommendation** — clear winner with reasoning
3. **Risk Flags** — anything concerning in any quote
4. **Negotiation Points** — where each supplier has room to move
5. **Next Steps** — what to do to proceed with preferred supplier

## Rules

- Never recommend a quote without explaining the reasoning
- Always flag if recommended quote is NOT the cheapest (explain why)
- Flag expired or expiring quotes
- Note where information was missing from a quote
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Quote Comparator Skill

## Integrations

### Email Monitoring
- **Gmail:** Monitor procurement@company.com for quotes
- **Auth:** OAuth2 with `gmail.readonly`
- **Env vars:** `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, `GMAIL_REFRESH_TOKEN`

### Document Processing
- **Google Document AI:** Extract structured data from PDF quotes
- **OpenAI Vision API:** Parse PDF/image quotes
- **Env var:** `OPENAI_API_KEY` or `GOOGLE_DOCUMENTAI_KEY`

### Procurement Systems (optional)
- **Procurify:** API integration for PO creation
- **Coupa:** Supplier management integration
- **Custom:** Output JSON for any procurement system

### Output
- **Google Sheets:** Comparison matrix
- **Email:** Formatted HTML comparison report
- **Slack:** Summary card
- **PDF:** Formal procurement document
```

---

## config.json

```json
{
  "agent": "quote-comparator",
  "version": "1.0.0",
  "monitoring": {
    "email": "procurement@company.com",
    "drive_folder_id": "YOUR_QUOTES_FOLDER_ID",
    "check_interval_minutes": 30
  },
  "comparison": {
    "primary_metric": "total_cost_of_ownership",
    "weight_price": 0.40,
    "weight_delivery": 0.20,
    "weight_terms": 0.20,
    "weight_warranty": 0.10,
    "weight_risk": 0.10
  },
  "thresholds": {
    "min_quotes_for_comparison": 2,
    "expired_quote_alert_days": 30,
    "large_purchase_alert": 10000,
    "significant_price_difference_percent": 15
  },
  "output": {
    "format": ["google_sheets", "email"],
    "sheet_id": "YOUR_COMPARISON_SHEET_ID",
    "notify_email": "procurement@company.com",
    "slack_channel": "#procurement"
  },
  "required_fields": [
    "supplier_name",
    "total_price",
    "payment_terms",
    "delivery_date",
    "quote_validity"
  ]
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Quote Comparator Setup

## Step 1: Set Up Quote Intake

### Option A: Email Inbox
1. Create or designate a procurement email address
2. Set `monitoring.email` to that address
3. Run: `openclaw auth gmail` for that account

### Option B: Google Drive
1. Create "Incoming Quotes" folder
2. Instruct suppliers to email you, then forward to this folder
3. Set `monitoring.drive_folder_id` in config

## Step 2: Configure Comparison Weights

The agent scores each quote across 5 dimensions. Edit the weights in
`config.json` → `comparison` to reflect your priorities:

- Heavy cost focus: `weight_price: 0.60`
- Speed-critical project: `weight_delivery: 0.40`
- Long-term contract: `weight_terms: 0.30, weight_warranty: 0.25`

Weights must sum to 1.0.

## Step 3: Set Required Fields

Edit `required_fields` — quotes missing these fields will be flagged as
incomplete. Common required fields:
- `supplier_name`
- `total_price`
- `payment_terms`
- `delivery_date`
- `quote_validity`

## Step 4: Create Output Spreadsheet

1. Create a Google Sheet named "Quote Comparisons"
2. The agent will auto-create tabs for each comparison
3. Share with service account
4. Set `output.sheet_id` in config

## Step 5: Test with Sample Quotes

1. Forward 2-3 sample PDF quotes to your intake email
2. Run: `openclaw run quote-comparator --test`
3. Review the comparison matrix output
4. Verify extraction accuracy for key fields

## Step 6: Trigger Comparison

Comparisons are triggered when:
- You email multiple quotes on the same topic within 24h
- You upload multiple PDFs with similar filenames to the Drive folder
- You manually trigger: `openclaw run quote-comparator --folder "Office Fit-out"`

## Step 7: Automated Monitoring

```bash
openclaw schedule quote-comparator --cron "*/30 * * * 1-5"
```
Checks for new quotes every 30 minutes on weekdays.

## How to Request Quotes from Suppliers

For best extraction results, ask suppliers to include these fields clearly:
- Itemised price list (not just total)
- Payment terms stated explicitly
- Quote validity date
- ABN/business registration number

Provide suppliers with a quote template (editable in `templates/quote-request-template.docx`).

## Comparison Matrix Format

The output Google Sheet has these columns per supplier:
- Supplier Name | Total Price | Price per Unit | Payment Terms | Delivery Days |
  Warranty (months) | Valid Until | Missing Fields | Risk Score | TOTAL SCORE

Plus a "Recommendation" tab with the full analysis and suggested next steps.
```

---

## Negotiation Guide

Once you have your comparison, use these common negotiation points:

**Price:**
- "Supplier B quoted 15% less — can you match?"
- "We'll pay within 7 days rather than 30 — can you offer a 3% early payment discount?"

**Terms:**
- "We need net-60 payment terms for cash flow — is that possible?"
- "Can you extend the quote validity to 90 days?"

**Delivery:**
- "We need delivery by [date] — what would expedite delivery cost?"

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
