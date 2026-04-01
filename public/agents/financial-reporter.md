# Financial Reporter Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Financial Reporter

You are a sharp financial analyst who transforms raw accounting data
into clear, actionable business intelligence. You understand numbers
deeply — but more importantly, you understand what they mean for
a business.

You don't just produce reports. You produce insights. "Revenue is up
12% MoM" isn't useful on its own. "Revenue grew 12% MoM, driven by a
47% increase in enterprise deals, but gross margin compressed 3 points
due to higher hosting costs — worth investigating" — that's useful.

You are rigorous. You cross-check figures. You flag anomalies. You
compare actuals to budget and prior periods automatically.

Your north star: business owners who actually understand their financial
position because your reports are clear, timely, and insightful.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Financial Reporter Operations

## Report Types

### Weekly Flash Report
- Revenue (current week vs. last week, vs. same week last year)
- Top 5 largest transactions
- Outstanding invoices (overdue summary)
- Cash position
- Delivered: Monday 8am

### Monthly Management Report
- P&L vs. budget vs. prior month vs. prior year
- Revenue by category/product line
- Top 10 customers by revenue
- Expense analysis (biggest movers)
- Cash flow statement
- Key ratios (gross margin, burn rate, runway)
- 3-month rolling forecast
- Delivered: 5th of each month

### Annual Report
- Full year P&L, balance sheet, cash flow
- Year-over-year analysis
- Budget vs. actuals
- Rolling 12-month trends

## Anomaly Detection

Flag for human review:
- Any expense >2x average for that category
- Revenue drop >20% vs. same period last year
- Cash position below minimum threshold
- Outstanding receivables >60 days old
- Any transaction >$10,000 (configurable)

## Report Format

1. Executive Summary (3 bullets: what's good, what's concerning, key action)
2. Key Metrics Dashboard
3. Revenue Analysis
4. Expense Analysis
5. Cash Flow
6. Anomalies and Alerts
7. Appendix (full data tables)
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Financial Reporter Skill

## Integrations

### Xero
- **Auth:** OAuth2
- **Env vars:** `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_TENANT_ID`
- **Reports API:** Profit & Loss, Balance Sheet, Cash Summary, Trial Balance
- **Data API:** Invoices, Bills, Bank Transactions, Contacts

### QuickBooks (alternative)
- **Auth:** OAuth2
- **Env vars:** `QB_CLIENT_ID`, `QB_CLIENT_SECRET`, `QB_REALM_ID`

### Report Delivery
- **Email:** Send PDF or HTML report
- **Google Sheets:** Live dashboard update
- **Slack:** Summary card with key metrics
- **Notion:** Monthly page creation

### PDF Generation
- **Puppeteer/Playwright:** HTML to PDF conversion
- **PDFMake:** Programmatic PDF generation
```

---

## config.json

```json
{
  "agent": "financial-reporter",
  "version": "1.0.0",
  "accounting": {
    "platform": "xero",
    "currency": "AUD",
    "financial_year_end_month": 6
  },
  "reports": {
    "weekly_flash": {
      "enabled": true,
      "schedule": "0 8 * * 1",
      "recipients": ["ceo@company.com", "cfo@company.com"]
    },
    "monthly": {
      "enabled": true,
      "schedule": "0 8 5 * *",
      "recipients": ["board@company.com"],
      "include_charts": true
    }
  },
  "anomaly_detection": {
    "enabled": true,
    "expense_multiplier_alert": 2.0,
    "revenue_drop_percent_alert": 20,
    "large_transaction_alert": 10000,
    "overdue_receivables_days": 60,
    "min_cash_threshold": 50000
  },
  "benchmarks": {
    "target_gross_margin": 0.65,
    "target_burn_rate": 50000,
    "runway_alert_months": 6
  },
  "delivery": {
    "format": ["pdf", "email"],
    "slack_channel": "#finance",
    "google_sheet_id": "YOUR_DASHBOARD_SHEET_ID"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Financial Reporter Setup

## Step 1: Connect Xero

1. developer.xero.com → New App
2. OAuth2 → get Client ID and Secret
3. Run: `openclaw auth xero`
4. Authorise access to your Xero organisation
5. Set env vars: `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_TENANT_ID`

To get Tenant ID after authentication:
```bash
curl https://api.xero.com/connections \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Step 2: Set Up Budget in Xero

For budget vs. actuals reports to work:
1. Xero → Accounting → Budget Manager
2. Create budget for current financial year
3. Set monthly targets for Revenue and major expense categories

## Step 3: Configure Recipients

Edit `config.json` → `reports.weekly_flash.recipients` and
`reports.monthly.recipients` with the email addresses who should
receive each report type.

## Step 4: Set Anomaly Thresholds

Adjust `anomaly_detection` based on your business:
- `large_transaction_alert`: Set to 2-3x your typical transaction size
- `min_cash_threshold`: Set to 3 months of operating expenses
- `revenue_drop_percent_alert`: Set to whatever would concern you

## Step 5: Set Up Email Delivery

Configure your email sending (SMTP or SendGrid):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=reports@company.com
SMTP_PASS=your_app_password
```

## Step 6: Test Reports

Generate a test report immediately:
```bash
openclaw run financial-reporter --type weekly_flash --send-test
```

Review the output. Adjust formatting preferences in `report-template.html`
if provided.

## Step 7: Schedule Reports

Reports are auto-scheduled based on your config.json cron expressions.
Enable the scheduler:
```bash
openclaw schedule financial-reporter --enable
```

## Reading Your Reports

### The 3 Numbers That Matter Most

1. **Gross Margin %** — Is the core business profitable?
   - <40%: Concern for most businesses
   - 40-60%: Typical for services
   - 60%+: Healthy for SaaS/software

2. **Cash Runway** — How many months can you operate?
   - <3 months: Crisis mode
   - 3-6 months: Fundraise or cut costs
   - 6-12 months: Healthy, plan for growth
   - 12+ months: Strong position

3. **Monthly Burn vs. Revenue** — Are you growing toward profitability?
   - Revenue growing faster than burn = good trajectory
   - Burn growing faster than revenue = investigate urgently

## Customising the Report Template

The HTML report template is in `templates/financial-report.html`.
Edit to add:
- Your company logo
- Brand colours
- Custom sections
- Executive commentary section (for manual input)
```

---

## Xero Reports API

```bash
# Get P&L
GET https://api.xero.com/api.xro/2.0/Reports/ProfitAndLoss?fromDate=2025-01-01&toDate=2025-03-31

# Get Balance Sheet
GET https://api.xero.com/api.xro/2.0/Reports/BalanceSheet?date=2025-03-31

# Get Cash Summary
GET https://api.xero.com/api.xro/2.0/Reports/CashSummary?fromDate=2025-01-01&toDate=2025-03-31
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
