# Set Up an Invoice Processing Workflow

**Time required:** 2–4 hours  
**Difficulty:** Intermediate  
**Tools:** Make or Zapier, Xero or QuickBooks, Google Drive or Dropbox

---

## What You'll Build

An automated system that: detects incoming invoices via email, extracts key data using AI/OCR, creates the invoice entry in your accounting software, and routes it for approval — all without manual data entry.

---

## The Problem This Solves

Manual invoice processing costs businesses an average of $12–$15 per invoice in staff time. At 50 invoices per month, that's $600–$750/month in pure admin cost. This workflow reduces that to under $1 per invoice.

---

## Step 1: Standardise How Invoices Arrive

Before automating, decide where invoices land:

**Option A: Dedicated email inbox**
Create `invoices@yourdomain.com` and ask all suppliers to send invoices there. This is the cleanest approach.

**Option B: Gmail label**
Apply a "INVOICE" label manually (or via Gmail filter) to incoming invoices in your main inbox.

**Option C: Shared Google Drive folder**
Ask your team to upload invoices to a specific Drive folder. Works well for physical receipts photographed on mobile.

---

## Step 2: Set Up Email-to-Data Extraction

### Using Make (Recommended)

1. **Trigger:** Gmail — Watch emails in invoices@yourdomain.com
2. **Download Attachment:** Get the PDF/image attachment
3. **OCR Extraction:** Use the Mindee or Google Document AI module:
   - Invoice number
   - Supplier name
   - Amount (excl. GST)
   - GST amount
   - Total amount
   - Invoice date
   - Due date
   - Line items (optional)
4. **Parse with AI (if OCR isn't enough):**
   Use OpenAI module with prompt:
   ```
   Extract from this invoice text: supplier name, invoice number, 
   date, due date, subtotal, GST, total amount. Return as JSON.
   
   Invoice text: [extracted text]
   ```

### Using Zapier

1. Trigger: New email in Gmail with attachment
2. Action: Formatter → Extract text from PDF (Zapier's built-in)
3. Action: OpenAI — Extract structured data
4. Action: Continue to accounting step

---

## Step 3: Create the Invoice in Xero or QuickBooks

### Xero Integration

In Make, after extraction:
1. **Xero module:** "Create Bill"
2. Map the extracted fields:
   - Contact: Supplier name (auto-match or create new)
   - Date: Invoice date
   - Due Date: Due date
   - Line Items: Description + Amount
   - Tax: Auto-calculate GST

**Important:** Set status to "DRAFT" — don't post automatically until you've approved the workflow.

### QuickBooks Integration

Same concept — use the QuickBooks module in Make/Zapier:
- Module: "Create Bill"
- Map: Vendor, Date, Due Date, Amount, Account (e.g. "Office Expenses")

---

## Step 4: Build the Approval Workflow

Never auto-post invoices without approval. Set up a Slack/email approval gate:

**In Make:**
1. After creating draft bill, send Slack message:
   ```
   📄 New invoice ready for review
   Supplier: [Supplier Name]
   Amount: $[Total]
   Due: [Due Date]
   Invoice #: [Invoice Number]
   
   [Approve] [Reject] [View in Xero]
   ```
2. Wait for response
3. If Approved: Update Xero bill status from DRAFT to APPROVED
4. If Rejected: Flag for manual review, add to exceptions report

---

## Step 5: Handle Exceptions

Some invoices will fail to extract correctly. Build an exceptions workflow:

1. If extraction confidence is below 80% → route to exceptions folder
2. Send notification: "Invoice from [supplier] needs manual review"
3. Log in Google Sheets: Date, Supplier, Issue, Resolved by

Check your exceptions log weekly and retrain your extraction prompts based on patterns.

---

## Step 6: Monthly Reconciliation Report

At month end, auto-generate a report:

1. Query Xero API for all bills in the month
2. Group by: Supplier, Category, Status (Paid/Unpaid)
3. Calculate totals and compare to budget
4. Email to stakeholders as PDF

---

## Cost Comparison

| Method | Cost per invoice | Time per invoice |
|--------|-----------------|-----------------|
| Manual data entry | $12–$15 | 8–12 mins |
| This automation | $0.50–$1.00 | 30 seconds |
| Savings (at 50/mo) | $550–$700/mo | ~8 hours/mo |

---

## Troubleshooting

**OCR extracting wrong amounts?**
- Try Mindee's invoice parser — it's purpose-built and more accurate than generic OCR
- Add a validation step: if subtotal + GST ≠ total, flag for review

**Supplier not found in Xero?**
- Add a "Create Contact if not exists" step before creating the bill

**Duplicate invoice detection?**
- Store invoice numbers in a Google Sheet
- Before creating: check if invoice number already exists

---

For a pre-built invoice processing agent, visit [myaiworkforce.ai/marketplace](https://myaiworkforce.ai/marketplace)
