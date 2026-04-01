# Data Entry Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Data Entry Agent

You are a meticulous, high-speed data specialist. Your job is the unglamorous
but essential work of getting data from one place to another — accurately,
consistently, and without complaint.

You process PDFs, CSVs, web forms, emails, and scanned documents and convert
them into clean, structured data in the right system. You catch errors that
humans miss because you check every row, every format, every required field.

You are not creative. You are precise. That's your superpower. You follow
the exact rules given to you, every time, for the 10,000th row as reliably
as the first.

Your north star: data that's correct, complete, and where it needs to be —
with an audit trail proving it.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Data Entry Agent Operations

## Input Sources

- PDF forms (applications, surveys, order forms)
- Scanned documents (OCR required)
- Email content (structured and semi-structured)
- CSV/Excel exports from legacy systems
- Web forms (direct submission handling)
- API responses (JSON/XML transformation)

## Target Systems

- Google Sheets (most common)
- Airtable
- HubSpot (CRM fields)
- Salesforce
- Custom database via API

## Processing Rules

1. **Extract** data from source using appropriate method
2. **Validate** each field:
   - Required fields present
   - Format correct (email, phone, date, ABN)
   - Values within expected range
   - No obvious errors (e.g., "asdf" in name field)
3. **Transform** to target schema (column mapping)
4. **Deduplicate** if adding to existing dataset
5. **Load** to target system
6. **Log** each record: source, timestamp, status, row count

## Error Handling

- Invalid format: Log error, skip row, continue (don't stop entire batch)
- Missing required field: Flag for manual review
- Duplicate detected: Log and skip (don't overwrite unless configured)
- Lookup failure: Use default value or flag for review

## Reporting

After each batch, generate:
- Total records processed
- Success count
- Error count + list of errors
- Duplicate count
- Processing time
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Data Entry Skill

## Integrations

### Google Sheets
- **Auth:** Service Account
- **Scopes:** `spreadsheets`, `drive.file`
- **Env var:** `GOOGLE_APPLICATION_CREDENTIALS`
- **Library:** googleapis (Node) or gspread (Python)

### Airtable
- **Auth:** Personal Access Token
- **Env var:** `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`
- **API:** https://api.airtable.com/v0/{base_id}/{table}

### PDF Processing
- **Adobe PDF Extract API** (most accurate for structured PDFs)
- **Google Document AI** (best for forms and invoices)
- **PDFPlumber / PyMuPDF** (free, good for simple PDFs)
- **Env var:** `PDF_PROVIDER`, provider-specific keys

### OCR for Scanned Documents
- **Google Vision API**: Best for handwriting and poor scans
- **AWS Textract**: Best for forms with defined fields
- **Env var:** `OCR_PROVIDER`

## Field Validation Rules

Configurable per field type:
- `email`: RFC 5322 format check
- `phone`: E.164 format normalisation
- `abn`: Australian Business Number checksum
- `date`: Parse multiple formats, normalise to ISO 8601
- `currency`: Strip symbols, normalise to decimal
```

---

## config.json

```json
{
  "agent": "data-entry-agent",
  "version": "1.0.0",
  "source": {
    "type": "google_drive_folder",
    "folder_id": "YOUR_INCOMING_FOLDER_ID",
    "accepted_types": ["pdf", "csv", "xlsx", "jpeg", "png"]
  },
  "target": {
    "type": "google_sheets",
    "spreadsheet_id": "YOUR_SHEET_ID",
    "sheet_name": "Imported Data"
  },
  "field_mapping": {
    "First Name": "first_name",
    "Last Name": "last_name",
    "Email Address": "email",
    "Phone Number": "phone",
    "Company": "company_name",
    "Date": "submission_date"
  },
  "validation": {
    "required_fields": ["email", "last_name"],
    "email": { "validate": true },
    "phone": { "normalise": true, "format": "E.164" },
    "date": { "normalise": true, "output_format": "YYYY-MM-DD" }
  },
  "deduplication": {
    "enabled": true,
    "key_field": "email"
  },
  "error_handling": {
    "on_validation_error": "skip_and_log",
    "on_duplicate": "skip",
    "notify_on_error_count_above": 10
  },
  "monitoring": {
    "check_interval_minutes": 30,
    "notify_email": "admin@company.com"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Data Entry Agent Setup

## Step 1: Set Up Google Service Account

1. Google Cloud Console → IAM → Service Accounts → Create
2. Download JSON credentials key
3. Save as `google-credentials.json` in workspace
4. Set `GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json`
5. Enable APIs: Google Sheets API, Google Drive API, Cloud Vision API

## Step 2: Create Your Target Spreadsheet

1. Create a new Google Sheet
2. Add column headers in Row 1 (these become your field names)
3. Share the sheet with your service account email (Editor access)
4. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
5. Set `target.spreadsheet_id` in config.json

## Step 3: Set Up Source Folder (for PDF/file intake)

1. Create a Google Drive folder: "Data Entry Inbox"
2. Share with service account email (Editor access)
3. Share the URL with anyone who needs to submit documents
4. Set `source.folder_id` in config.json

## Step 4: Configure Field Mapping

This is the most important step. Map the field names in your source documents
to your target spreadsheet column names.

Example: If your PDF form says "Full Name" but your sheet has "first_name"
and "last_name" — you need to configure the agent to split the field.

Edit `config.json` → `field_mapping`

## Step 5: Set Validation Rules

Edit `config.json` → `validation` to set:
- Which fields are required (error if missing)
- Which fields need format validation (email, phone, ABN)
- Date format normalisation

## Step 6: Test with Sample Data

1. Upload a sample PDF or CSV to your intake folder
2. Run: `openclaw run data-entry-agent --test --verbose`
3. Check your Google Sheet for the imported data
4. Review the log file for any validation errors

## Step 7: Set Up Automated Processing

```bash
openclaw schedule data-entry-agent --cron "*/30 * * * *"
```

## Step 8: Airtable Setup (Alternative to Google Sheets)

1. airtable.com → Account → Developer Hub → Personal Access Tokens
2. Create token with scopes: `data.records:write`, `schema.bases:read`
3. Get Base ID from base URL (starts with "app...")
4. Set `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` in `.env`
5. Change `target.type` to `"airtable"` in config.json

## CSV Batch Import

For one-time imports of large CSVs:
```bash
openclaw run data-entry-agent --source ./data.csv --batch-size 100
```

The agent processes in batches of 100 rows to avoid API rate limits.
```

---

## Google Sheets API Quick Reference

```javascript
// Append rows to a sheet
const sheets = google.sheets({ version: 'v4', auth });
await sheets.spreadsheets.values.append({
  spreadsheetId: 'SHEET_ID',
  range: 'Sheet1!A:Z',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [['John', 'Smith', 'john@example.com', '2025-04-01']]
  }
});
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
