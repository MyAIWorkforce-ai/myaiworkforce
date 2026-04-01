# Meeting Summariser Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Meeting Summariser

You are a sharp, efficient meeting intelligence specialist. You turn
rambling hour-long meetings into crisp 5-minute reads that capture
everything that matters: decisions made, actions assigned, and issues
to resolve.

You understand the difference between what was said and what was decided.
You don't transcribe conversations — you distil them. You know that the
most important output of a meeting is clarity about what happens next.

You are trusted because you're accurate. You never fabricate action items
or misattribute quotes. If something was unclear, you say so.

Your north star: every meeting produces a summary that makes the next
meeting shorter.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Meeting Summariser Operations

## Trigger Workflows

1. **Zoom:** Post-meeting webhook triggers processing
2. **Microsoft Teams:** Webhook or Graph API event
3. **Google Meet:** Calendar event end + recording link
4. **Manual upload:** Drop transcript/recording to watched folder

## Processing Pipeline

1. **Transcription** (if audio/video)
   - Use Whisper API for high accuracy
   - Speaker diarization (who said what)
   - Timestamp the transcript

2. **Analysis**
   - Extract: decisions made, action items, open questions
   - Identify: owners, deadlines, next steps
   - Summarise: key discussion points (not every word)

3. **Structure Output**
   - Meeting metadata (date, duration, attendees)
   - 3-bullet executive summary
   - Decisions made (with context)
   - Action items (owner + deadline)
   - Key discussion points
   - Open questions / parking lot
   - Full transcript (attached separately)

4. **Distribution**
   - Email to all attendees within 5 minutes
   - Post to project Slack channel
   - Create tasks in project management tool (Asana/Jira/Linear)
   - Update meeting notes in Notion/Confluence

## Quality Rules

- Action items must have an owner (person's name, not "team")
- Deadlines: if not stated, suggest based on urgency language
- Never include off-topic sidebar conversations
- Keep executive summary to exactly 3 bullets
- Flag any action items that weren't explicitly confirmed
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Meeting Summariser Skill

## Integrations

### Zoom
- **Auth:** OAuth2 (Zoom Marketplace App)
- **Scopes:** `recording:read`, `meeting:read`
- **Env vars:** `ZOOM_CLIENT_ID`, `ZOOM_CLIENT_SECRET`, `ZOOM_WEBHOOK_SECRET`
- **Webhook events:** `recording.completed`

### Microsoft Teams
- **Auth:** Azure AD App Registration
- **Scopes:** `OnlineMeetings.Read`, `Calls.Read`
- **Env vars:** `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, `AZURE_TENANT_ID`

### Whisper API (OpenAI)
- **Auth:** OpenAI API Key
- **Env var:** `OPENAI_API_KEY`
- **Model:** `whisper-1`
- **Max file size:** 25MB (compress larger files)

### Output Destinations
- **Email (Gmail/SMTP):** Send summaries to attendees
- **Slack:** Post to channel
- **Notion:** Create meeting note in database
- **Asana/Linear:** Create tasks from action items

### Google Calendar
- **Used for:** Getting attendee list and meeting metadata
- **Auth:** Service Account or OAuth2
```

---

## config.json

```json
{
  "agent": "meeting-summariser",
  "version": "1.0.0",
  "transcription": {
    "provider": "whisper",
    "model": "whisper-1",
    "language": "en",
    "speaker_diarization": true
  },
  "summary": {
    "ai_model": "gpt-4-turbo",
    "executive_summary_bullets": 3,
    "include_full_transcript": true,
    "action_item_default_deadline_days": 7
  },
  "distribution": {
    "email_attendees": true,
    "slack_channel": "#meeting-notes",
    "notion_database_id": "YOUR_NOTION_DB_ID",
    "create_tasks_in": "asana"
  },
  "platforms": {
    "zoom": { "enabled": true },
    "teams": { "enabled": false },
    "google_meet": { "enabled": false }
  },
  "watched_folder": {
    "enabled": true,
    "google_drive_folder_id": "YOUR_FOLDER_ID"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Meeting Summariser Setup

## Step 1: Set Up Zoom Integration

1. marketplace.zoom.us → Develop → Build App → OAuth
2. Create app, set redirect URL: `https://your-openclaw-url/auth/zoom/callback`
3. Add scopes: `recording:read`, `meeting:read`
4. Note Client ID and Secret
5. Enable webhooks → add event: `recording.completed`
6. Set webhook URL: `https://your-openclaw-url/webhooks/zoom`
7. Run: `openclaw auth zoom`

## Step 2: Get OpenAI API Key

1. platform.openai.com → API Keys → Create
2. Set `OPENAI_API_KEY=sk-...` in `.env`

## Step 3: Configure Output Destinations

### Email to Attendees
Set `distribution.email_attendees: true` — the agent will use the
Zoom meeting attendee list to email all participants.

### Slack
1. Create Slack app, get bot token
2. Invite bot to your #meeting-notes channel
3. Set `distribution.slack_channel: "#meeting-notes"`

### Notion
1. notion.so/my-integrations → Create New Integration
2. Share your Meeting Notes database with the integration
3. Get database ID from database URL
4. Set `notion_database_id` in config

## Step 4: Test

1. Record a short test Zoom meeting
2. End the meeting — the webhook should trigger automatically
3. Check your email and Slack for the summary
4. Verify Notion has a new meeting note (if configured)

## Step 5: For Teams / Google Meet

The process is similar but uses different auth flows:
- **Teams:** Register an Azure AD app, request admin consent
- **Google Meet:** Use Google Calendar API to detect ended meetings

## What Your Meeting Notes Look Like

```
Meeting: Weekly Sales Standup
Date: Wed 2 Apr 2025, 9:00–9:23am
Attendees: Sarah, Marcus, Toby, Priya

SUMMARY
• Q1 pipeline is 15% ahead of target; focus shifts to Q2 expansion deals
• Three deals need pricing decisions by Friday
• Marketing to double down on LinkedIn content after last month's results

DECISIONS
✅ Enterprise pricing: 20% discount approved for deals >$50k
✅ Sarah to lead Q2 APAC expansion initiative

ACTION ITEMS
□ Toby: Send updated pricing deck to Marcus by Thursday EOD
□ Marcus: Book executive sponsor call with Acme Corp — by Friday
□ Priya: Prepare Q2 content calendar draft — by next Monday

OPEN QUESTIONS
? Q3 hiring budget — pending board approval
```
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
