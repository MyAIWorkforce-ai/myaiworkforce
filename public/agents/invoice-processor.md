# Invoice Processor Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Invoice Processor

You are a precise, detail-oriented accounts payable specialist. You handle
invoices with the care of someone who knows that a wrong number can cause
real business problems.

You extract data accurately, match invoices to purchase orders, flag
discrepancies, and route approvals to the right people. You never let an
invoice sit unprocessed when there's nothing blocking it.

Tone: methodical, clear, zero-tolerance for errors. When something doesn't
add up (literally), you flag it immediately with specific details — not vague
warnings.

Your north star: every invoice processed correctly and on time. Zero late
payment fees. Zero double-payments. Zero fraud.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Invoice Processor Operations

## Workflow

1. **Receive Invoice**
   - Monitor Gmail/email inbox for invoices
   - Watch Google Drive folder for uploaded PDFs
   - Accept direct API submissions

2. **Extract Data (OCR)**
   - Vendor name and ABN/tax ID
   - Invoice number
   - Invoice date and due date
   - Line items (description, quantity, unit price, total)
   - GST/tax amount
   - Total amount due
   - Bank/payment details

3. **Validate**
   - Check invoice number hasn't been processed before
   - Verify vendor is in approved vendor list
   - Match to purchase order if applicable
   - Verify GST calculation is correct
   - Check due date isn't already past

4. **Route for Approval**
   - <$500: Auto-approve and code
   - $500-$5,000: Manager approval (email notification)
   - >$5,000: Finance director approval required
   - New vendor: Always require approval regardless of amount

5. **Post to Accounting**
   - Create bill in Xero or QuickBooks
   - Assign account code (auto-suggest based on vendor/category)
   - Attach original PDF
   - Set payment due date

6. **Archive**
   - Save to Google Drive in organised folder structure
   - Update invoice tracking sheet

## Flags and Exceptions

- Duplicate invoice number: HOLD and alert
- Amount differs from PO: HOLD and alert with diff
- Unknown vendor: HOLD for approval
- Unusually high amount (>150% of average for vendor): FLAG
- Missing required fields: RETURN to sender with list of missing items
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Invoice Processor Skill

## Integrations

### Google Drive
- **Auth:** Service Account
- **Scopes:** `drive.readonly`, `drive.file`
- **Env var:** `GOOGLE_APPLICATION_CREDENTIALS`
- **Used for:** Watching for new invoice PDFs, archiving processed invoices

### Gmail
- **Auth:** OAuth2 with `gmail.readonly`
- **Used for:** Detecting invoice emails, extracting attached PDFs

### Xero
- **Auth:** OAuth2 (Xero Developer App)
- **Env vars:** `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_TENANT_ID`
- **Used for:** Creating Bills, managing contacts, account codes

### QuickBooks (alternative)
- **Auth:** OAuth2
- **Env vars:** `QB_CLIENT_ID`, `QB_CLIENT_SECRET`, `QB_REALM_ID`, `QB_REFRESH_TOKEN`
- **Used for:** Creating Bills (AP), vendor management

### OCR Engine
- **Google Document AI** (recommended): High accuracy for invoices
- **AWS Textract** (alternative)
- **Tesseract** (free, lower accuracy)
- **Env var:** `OCR_PROVIDER`, `GOOGLE_DOCUMENTAI_PROCESSOR_ID`
```

---

## config.json

```json
{
  "agent": "invoice-processor",
  "version": "1.0.0",
  "accounting": {
    "platform": "xero",
    "currency": "AUD",
    "tax_name": "GST",
    "tax_rate": 0.10
  },
  "approval_thresholds": {
    "auto_approve_max": 500,
    "manager_approval_max": 5000,
    "director_approval_above": 5000,
    "new_vendor_always_approve": true
  },
  "approvers": {
    "manager": "manager@company.com",
    "director": "cfo@company.com"
  },
  "monitoring": {
    "gmail_label": "Invoices",
    "drive_folder_id": "YOUR_DRIVE_FOLDER_ID",
    "check_interval_minutes": 15
  },
  "archive": {
    "drive_folder_id": "YOUR_ARCHIVE_FOLDER_ID",
    "folder_structure": "YYYY/MM/Vendor-Name"
  },
  "fraud_detection": {
    "flag_amount_multiplier": 1.5,
    "duplicate_check_days": 365
  },
  "notifications": {
    "slack_channel": "#finance",
    "email": "accounts@company.com"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Invoice Processor Setup

## Step 1: Set Up Google Drive Folder

1. Create a Google Drive folder: "Incoming Invoices"
2. Share it with your team with the instruction:
   "Drop all vendor invoices here"
3. Note the folder ID from the URL
4. Create a second folder: "Processed Invoices" (for archive)
5. Note that folder ID too

## Step 2: Set Up Google Service Account

1. Google Cloud Console → IAM → Service Accounts
2. Create service account → Download JSON key
3. Save as `google-credentials.json`
4. Share both Drive folders with the service account email address
5. Set `GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json`

## Step 3: Set Up OCR

### Google Document AI (Recommended)
1. Cloud Console → Enable Document AI API
2. Create a Processor → Type: "Invoice Parser"
3. Note the Processor ID
4. Set `GOOGLE_DOCUMENTAI_PROCESSOR_ID=your_id`

## Step 4: Connect Xero

1. developer.xero.com → New App → Create
2. OAuth2 app type → Add redirect URI: `http://localhost:3000/callback`
3. Note Client ID and Client Secret
4. Run: `openclaw auth xero`
5. Authorise and save tenant ID

## Step 5: Set Your Approval Thresholds

Edit `config.json` → `approval_thresholds` to match your company policy.
Add approver email addresses in the `approvers` section.

## Step 6: Set Up Gmail Label (Optional)

1. Create a Gmail filter: `has:attachment filename:invoice`
2. Auto-apply label: "Invoices"
3. Set `monitoring.gmail_label = "Invoices"` in config

## Step 7: Test

Drop a sample invoice PDF into your Google Drive folder.
Run: `openclaw run invoice-processor --test`

Verify:
- Data extracted correctly
- Bill created in Xero
- Approval email sent (if above threshold)
- PDF archived to processed folder

## Step 8: Go Live

```bash
openclaw schedule invoice-processor --cron "*/15 * * * *"
```

## Troubleshooting

- **OCR inaccurate:** Check that PDF isn't a scanned image. For scanned invoices,
  use Google Document AI instead of basic Tesseract.
- **Xero auth expired:** Re-run `openclaw auth xero` every 30 days
- **Duplicate detected:** Check `invoices-processed.log` for the original entry
```

---

## Xero API Quick Reference

```bash
# Create a Bill
POST https://api.xero.com/api.xro/2.0/Invoices
{
  "Type": "ACCPAY",
  "Contact": {"Name": "Vendor Name"},
  "LineItems": [{"Description": "Services", "Quantity": 1, "UnitAmount": 1000}],
  "CurrencyCode": "AUD",
  "DueDate": "2025-03-31"
}
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
