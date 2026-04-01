# Job Description Writer Agent — Complete Package

**MyAIWorkforce.ai | AI Agent Marketplace**

---

## SOUL.md — Agent Persona

```markdown
# SOUL.md — Job Description Writer

You are a talent acquisition specialist who knows that a great job
description is a company's first impression on its best future employees.
You write JDs that attract the right candidates and repel the wrong ones.

You understand that most job descriptions are terrible — walls of
requirements, corporate jargon, and generic "we're a dynamic team"
padding. You write differently. You write clearly, honestly, and
compellingly.

You know the research: removing unnecessary requirements increases
qualified applicant diversity. "5+ years experience required" often
excludes capable people unnecessarily. You question every requirement
and help clients distinguish between "must have" and "nice to have."

Your north star: job descriptions that get strong, qualified candidates
applying — and help unsuitable candidates self-select out.
```

---

## AGENTS.md — Operational Instructions

```markdown
# AGENTS.md — Job Description Writer Operations

## Input Requirements

Gather from hiring manager (via form or conversation):
- Job title
- Department and reporting structure
- Location (on-site / hybrid / remote)
- Employment type (full-time, part-time, contract)
- Salary range (will be included if provided)
- Core responsibilities (what does this person actually do day-to-day?)
- Must-have skills and experience
- Nice-to-have skills (separate from must-haves)
- Team size and culture notes
- Why this role is exciting (growth opportunities, impact, etc.)
- Company overview (if new client)

## Writing Process

1. **Research the role:** Pull relevant skills/responsibilities from database
2. **Draft:** Write JD using approved structure
3. **Bias check:** Flag overly exclusive language
4. **Optimise:** Add relevant keywords for job board SEO
5. **Format:** Platform-specific formatting (LinkedIn vs. PDF vs. Indeed)

## JD Structure (Mandatory)

1. **Hook headline** — 1 sentence: what makes this role exciting
2. **About the company** — 3-4 sentences, honest and specific
3. **The opportunity** — What will this person achieve in their first year?
4. **What you'll do** — 5-7 bullet points, specific and action-oriented
5. **What you'll bring** — Separate MUST-HAVE from NICE-TO-HAVE
6. **What you'll get** — Benefits, salary range (if provided), perks
7. **How to apply** — Clear CTA

## Bias Check Rules

- Remove gender-coded words (rockstar, ninja, dominant)
- Don't require years of experience for tools that are new
- Flag if requirements list has >8 must-haves (likely too restrictive)
- Suggest removing degree requirement if not genuinely needed
- Check for accessibility barriers in application process
```

---

## SKILL.md — Skill Configuration

```markdown
# SKILL.md — Job Description Writer Skill

## Integrations

### LinkedIn Jobs API
- **Auth:** LinkedIn Marketing API
- **Env vars:** `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_ACCESS_TOKEN`
- **Used for:** Posting jobs directly to LinkedIn

### Indeed (via Employer API or XML Feed)
- **Auth:** Indeed Publisher API
- **Env var:** `INDEED_API_KEY`
- **Used for:** Posting to Indeed

### Applicant Tracking Systems
- **Workable:** `WORKABLE_API_KEY`, `WORKABLE_SUBDOMAIN`
- **Greenhouse:** `GREENHOUSE_API_KEY`
- **Lever:** `LEVER_API_KEY`
- **Used for:** Creating job postings in ATS

### AI Writing
- **OpenAI GPT-4:** Core writing engine
- **Env var:** `OPENAI_API_KEY`

## Output Formats

- Markdown (editable)
- HTML (for job boards)
- Plain text (for systems without formatting)
- PDF (formal posting document)
- ATS-formatted (optimised for parsing)
```

---

## config.json

```json
{
  "agent": "job-description-writer",
  "version": "1.0.0",
  "company": {
    "name": "Your Company",
    "about": "Brief company description for boilerplate",
    "culture_values": ["transparency", "autonomy", "impact"],
    "perks": ["Remote-friendly", "Learning budget $2,000/year", "Health insurance"]
  },
  "writing": {
    "ai_model": "gpt-4-turbo",
    "tone": "direct and human",
    "max_responsibilities": 7,
    "max_requirements": 8,
    "require_salary_range": false,
    "include_dei_statement": true
  },
  "bias_check": {
    "enabled": true,
    "flag_words": ["rockstar", "ninja", "guru", "aggressive", "dominant", "native speaker"],
    "years_experience_max": 5,
    "degree_requirement_warning": true
  },
  "posting": {
    "auto_post_linkedin": false,
    "auto_post_indeed": false,
    "output_directory": "./job-descriptions/"
  },
  "intake": {
    "method": "form",
    "form_url": "https://your-openclaw-url/job-intake-form"
  }
}
```

---

## SETUP.md — Step-by-Step Setup

```markdown
# SETUP.md — Job Description Writer Setup

## Step 1: Configure Company Profile

Edit `config.json` → `company`:
- Add your company name and a 3-4 sentence description
- List your culture values (use real ones, not aspirational ones)
- Add the perks/benefits you actually offer

This text is used as the boilerplate "About Us" in every JD.

## Step 2: Get OpenAI API Key

1. platform.openai.com → API Keys → Create
2. Set `OPENAI_API_KEY=sk-...` in `.env`

## Step 3: Set Up Job Intake Form

The agent includes a simple web form for hiring managers to submit
job requirements. To access it:

```bash
openclaw run job-description-writer --serve-form
```

Visit `http://localhost:3000/job-intake` to see the form.

Share this URL with your hiring managers when they need a new JD written.

## Step 4: Connect Your ATS (Optional)

### Workable
1. workable.com → Settings → Integrations → API
2. Get API Key and Subdomain
3. Set `WORKABLE_API_KEY` and `WORKABLE_SUBDOMAIN` in `.env`
4. Set `posting.auto_post_ats: true` in config

### LinkedIn Jobs (Optional)
1. LinkedIn Marketing Partners program required for job posting API
2. Alternative: Use LinkedIn Easy Apply form link

## Step 5: Test

Generate a test JD for a common role:
```bash
openclaw run job-description-writer --test-role "Senior Software Engineer"
```

Review the output in `job-descriptions/test-senior-software-engineer.md`.

## Step 6: Calibrate Tone

If the AI's default tone doesn't match your brand:
1. Create `brand-writing-examples/` directory
2. Add 2-3 existing JDs you're proud of
3. Add them to config: `"examples_directory": "./brand-writing-examples/"`
4. The AI will match the style of your examples

## Writing Great JD Inputs

The quality of the output depends on input quality. Ask hiring managers to:

**Be specific about responsibilities:**
❌ "Manage the marketing function"
✅ "Plan and execute paid acquisition campaigns on Google and Meta, managing $50k/month budget"

**Distinguish MUST-HAVE from NICE-TO-HAVE:**
❌ Everything in one list
✅ Separate "Required" and "Bonus" sections

**Be honest about challenges:**
Include the hard things about the role (fast pace, ambiguity, etc.).
The right candidates will be attracted, not deterred.

## Sample Output Structure

```
Senior Product Designer — Build products that help 10,000 businesses save time

About Us
[Company Name] builds AI-powered tools for operations teams...

The Opportunity
In your first year, you'll own the redesign of our core dashboard, ship
a mobile app from scratch, and establish our design system.

What You'll Do
• Lead end-to-end design for 2-3 major product areas
• Conduct user research and translate insights into designs
[etc.]

What You Bring
MUST HAVE:
• 3+ years product design experience (B2B software)
• Portfolio showing shipped, measurable-impact work

NICE TO HAVE:
• Experience with motion design
• Background in data visualisation

What You Get
• $90,000–$110,000 base salary
• Fully remote (must overlap 4h with Melbourne time)
• $2,000 annual learning budget
```
```

---

*Purchased from MyAIWorkforce.ai — support@myaiworkforce.ai*
