# The OpenClaw Quick-Start Guide

**Time required:** 20–30 minutes  
**Difficulty:** Beginner  
**Tools:** Node.js, npm, Terminal

---

## What is OpenClaw?

OpenClaw is an AI agent runtime that lets you deploy a persistent, always-on AI assistant on your own hardware. Unlike ChatGPT (which requires you to be online and typing), OpenClaw runs 24/7 in the background — checking emails, monitoring channels, executing tasks, and reporting back.

Think of it as hiring a tireless AI employee who runs on your Mac, PC, or VPS.

---

## System Requirements

- **OS:** macOS 12+, Ubuntu 20.04+, or Windows 10+ (WSL2 recommended)
- **Node.js:** 18.0 or higher
- **RAM:** 2GB minimum (4GB recommended)
- **Disk:** 500MB free space
- **Internet:** Required for AI model API calls

Check your Node version:
```bash
node --version
```

If you need to install or update Node, use [nvm](https://github.com/nvm-sh/nvm):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

---

## Step 1: Install OpenClaw

```bash
npm install -g openclaw
```

Verify the install:
```bash
openclaw --version
```

---

## Step 2: Initialise Your Workspace

```bash
openclaw init
```

This creates `~/.openclaw/workspace/` with the following structure:

```
workspace/
├── SOUL.md          # Your agent's personality
├── AGENTS.md        # Workspace rules and conventions
├── HEARTBEAT.md     # Periodic task checklist
├── TOOLS.md         # Your tool/device notes
├── MEMORY.md        # Long-term memory
└── memory/          # Daily session logs
```

---

## Step 3: Configure Your AI Model

OpenClaw works with multiple AI providers. Add your API key:

```bash
openclaw config set model anthropic/claude-sonnet-4
openclaw config set apiKey YOUR_API_KEY_HERE
```

Or use OpenAI:
```bash
openclaw config set model openai/gpt-4o
openclaw config set apiKey YOUR_OPENAI_KEY
```

---

## Step 4: Write Your SOUL.md

This is the most important file. Your agent reads SOUL.md on every session start. Be specific:

```markdown
# SOUL.md

You are Jamie, a professional AI assistant for Acme Corp.

## Core Job
- Monitor and respond to business emails
- Keep the calendar organised
- Research and summarise topics on request

## Communication Style
- Direct and professional
- Concise — no waffle
- Australian English spelling

## What You Never Do
- Send external messages without approval
- Make financial commitments
- Share confidential files
```

---

## Step 5: Connect to Discord or Telegram

OpenClaw can send you notifications and receive commands via messaging apps.

**Discord setup:**
1. Create a bot at [discord.com/developers](https://discord.com/developers/applications)
2. Copy the bot token
3. Add to your server with message read/write permissions

```bash
openclaw config set discord.token YOUR_BOT_TOKEN
openclaw config set discord.channelId YOUR_CHANNEL_ID
```

**Telegram setup:**
1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Create a new bot with `/newbot`
3. Copy the token

```bash
openclaw config set telegram.token YOUR_BOT_TOKEN
openclaw config set telegram.chatId YOUR_CHAT_ID
```

---

## Step 6: Your First Heartbeat

A heartbeat is a periodic check-in where your agent reviews its task list. Set up a simple one in `HEARTBEAT.md`:

```markdown
# HEARTBEAT.md

Check these things every 30 minutes:
1. Any urgent emails? Notify me.
2. Any calendar events in the next 2 hours? Remind me.
3. Otherwise: HEARTBEAT_OK
```

Start OpenClaw:
```bash
openclaw start
```

Your agent is now live. It will check in every 30 minutes (configurable) and only message you when something needs attention.

---

## Step 7: Explore Your Workspace

OpenClaw writes daily logs to `~/.openclaw/workspace/memory/YYYY-MM-DD.md`. After a day of use, read through these to understand what your agent is doing and refine its behaviour.

---

## Common Next Steps

- **Add Gmail access:** `openclaw auth gmail`
- **Add Google Calendar:** `openclaw auth google-calendar`
- **Run on a VPS:** Great for 24/7 uptime without keeping your computer on

---

For more guides and pre-built agents, visit [myaiworkforce.ai](https://myaiworkforce.ai)
