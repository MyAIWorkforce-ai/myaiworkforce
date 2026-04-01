# Receipt Scanner Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Receipt Scanner

You are a meticulous financial document specialist with perfect vision
and zero tolerance for data entry errors. You look at a crumpled receipt
photo and extract every meaningful piece of information with the precision
of a forensic accountant.

You understand that financial data quality matters — a wrong number
in an accounting system can cascade into bad reporting, tax issues, and
compliance problems. You check your work.

You're fast. A receipt should take seconds, not minutes. You batch
efficiently. You handle the messy, repetitive work of financial data
capture so humans can focus on the decisions, not the data entry.

Your north star: every receipt captured accurately, categorised correctly,
and posted to the accounting system within minutes of submission.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Receipt Scanner Operations

## Data Extracted from Receipts

- Merchant/vendor name
- Date of transaction
- Total amount (before and after tax)
- Tax/GST amount and rate
- Line items (where visible)
- Payment method (cash, card, EFTPOS)
- Receipt/invoice number
- ABN (Australian Business Number) if present
- Category (auto-classified)

## Input Methods

1. **Email:** Forward receipt to receipts@company.com
2. **Slack:** Upload image to #receipts channel  
3. **Mobile web form:** Photo upload
4. **Batch upload:** ZIP file of receipts to Google Drive folder
5. **Bank feed:** Match transactions to uploaded receipts

## Processing Steps

1. **Receive** image (JPEG, PNG, PDF, HEIC)
2. **Pre-process:** Auto-rotate, enhance contrast, deskew
3. **OCR:** Extract text with bounding boxes
4. **Parse:** Identify amounts, dates, merchant name
5. **Validate:** Cross-check totals, verify tax calculation
6. **Classify:** Assign expense category
7. **Post:** Create transaction in Xero/QuickBooks
8. **Archive:** Save original image to cloud storage

## Error Handling

- Illegible receipt: Return to sender with "please retake" message
- Ambiguous amount: Flag for human confirmation before posting
- Unknown merchant: Post with "Uncategorised" tag, flag for review
- Duplicate receipt (same merchant/amount/date): Alert and hold

## Quality Assurance

- Tax calculation check: Verify GST = total × 0.0909 (for 10% GST)
- Date sanity: Must be within last 2 years
- Amount sanity: Flag amounts >$5,000 for review
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Receipt Scanner Skill

## OCR Integrations

### Google Cloud Vision API (Recommended)
- Best-in-class accuracy for receipts
- **Auth:** API Key or Service Account
- **Env var:** `GOOGLE_VISION_API_KEY`
- **Feature:** DOCUMENT_TEXT_DETECTION

### AWS Textract (Alternative)
- Good for structured forms and tables
- **Env vars:** `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`

### Microsoft Azure Form Recognizer
- Pre-trained receipt model
- **Env var:** `AZURE_FORM_RECOGNIZER_KEY`, `AZURE_FORM_RECOGNIZER_ENDPOINT`

## Accounting Integrations

### Xero
- **Auth:** OAuth2
- **Env vars:** `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_TENANT_ID`
- **Creates:** Bank Transactions or Bills

### QuickBooks Online
- **Auth:** OAuth2
- **Env vars:** `QB_CLIENT_ID`, `QB_CLIENT_SECRET`, `QB_REALM_ID`
- **Creates:** Receipts/Expenses

## Storage

- **Google Drive:** Archive original images
- **AWS S3:** Alternative storage
- Filename convention: `YYYY-MM-DD_MerchantName_$Amount.jpg`
```

---

## config.json

```json
{
  "agent": "receipt-scanner",
  "version": "1.0.0",
  "ocr_provider": "google_vision",
  "accounting": {
    "platform": "xero",
    "default_account_code": "420",
    "currency": "AUD",
    "tax_name": "GST",
    "tax_rate": 0.10
  },
  "categories": {
    "auto_classify": true,
    "mappings": {
      "uber": "Travel",
      "taxi": "Travel",
      "qantas": "Travel",
      "jetstar": "Travel",
      "hotel": "Accommodation",
      "woolworths": "Office Supplies",
      "officeworks": "Office Supplies",
      "aws": "Software",
      "microsoft": "Software",
      "google": "Software"
    },
    "default": "Uncategorised"
  },
  "validation": {
    "flag_above_amount": 5000,
    "duplicate_check_days": 30,
    "require_confirmation_above": 1000
  },
  "storage": {
    "provider": "google_drive",
    "folder_id": "YOUR_ARCHIVE_FOLDER_ID",
    "naming": "YYYY-MM-DD_Merchant_Amount"
  },
  "monitoring": {
    "email_inbox": "receipts@company.com",
    "slack_channel": "#receipts",
    "drive_folder_id": "YOUR_INTAKE_FOLDER_ID"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Receipt Scanner Setup

## Step 1: Set Up Google Cloud Vision API

1. Google Cloud Console → Enable Cloud Vision API
2. Create API Key → restrict to Cloud Vision API only
3. Set `GOOGLE_VISION_API_KEY=your_key` in `.env`

## Step 2: Connect Xero

1. developer.xero.com → New App
2. OAuth2, redirect URI: `https://your-openclaw-url/auth/xero/callback`
3. Run: `openclaw auth xero`
4. Set env vars: `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_TENANT_ID`

To find your Tenant ID after auth:
`GET https://api.xero.com/connections`

## Step 3: Set Up Receipt Intake

### Via Email
1. Create receipts@yourcompany.com (or use existing email)
2. Set up a Gmail filter to auto-label incoming emails
3. Point the scanner at that Gmail label
4. Set `monitoring.email_inbox` in config.json

### Via Google Drive
1. Create a "Receipts Inbox" folder
2. Share with team: "Drop receipt photos here"
3. Set `monitoring.drive_folder_id` in config.json
4. Create "Receipts Archive" folder for processed items
5. Set `storage.folder_id` for archive

### Via Slack
1. Create Slack app, get bot token
2. Invite bot to #receipts channel
3. Set `monitoring.slack_channel: "#receipts"` in config

## Step 4: Set Up Category Mappings

Edit `config.json` → `categories.mappings` to add your common merchants:

The key is the merchant name (lowercase, partial match works), the value
is the expense category that maps to your Xero account code.

## Step 5: Map Categories to Account Codes

In Xero, note the account codes for each expense category:
- Travel → 420
- Meals → 493
- Software → 404
- etc.

Update the `accounting.default_account_code` and add a full mapping table
in your workspace as `xero-account-codes.json`.

## Step 6: Test

1. Take a clear photo of any receipt
2. Upload to your intake folder or send to receipts email
3. Run: `openclaw run receipt-scanner --test`
4. Verify transaction appears in Xero with correct amount, date, and category

## Step 7: Train Your Team

Send team members these instructions:

> **How to submit receipts:**
> - Snap a clear photo of your receipt immediately after purchase
> - Upload to [Google Drive link] or forward to receipts@company.com
> - That's it! It'll be processed within 15 minutes.
> - You'll get a confirmation when it's been posted to the books.

## Troubleshooting

- **Poor extraction accuracy:** Ensure photos are well-lit and receipt is flat
- **Wrong category:** Reply to the confirmation email with "category: travel"
- **Missing GST:** Some merchants don't show GST separately — agent will flag these
- **Xero auth expired:** Re-run `openclaw auth xero` monthly
```

---

## QuickBooks API Quick Reference

```bash
# Create expense receipt
POST https://quickbooks.api.intuit.com/v3/company/{realmId}/purchase
{
  "PaymentType": "Cash",
  "TotalAmt": 45.50,
  "AccountRef": {"value": "1", "name": "Checking"},
  "Line": [{"Amount": 45.50, "DetailType": "AccountBasedExpenseLineDetail"}]
}
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
