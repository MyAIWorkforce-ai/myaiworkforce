#!/usr/bin/env node
/**
 * Generate branded PDFs for all MyAIWorkforce guides
 * Usage: node scripts/generate-pdfs.js
 */

const puppeteer = require('puppeteer');
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, '../public/guides');
const OUTPUT_DIR = path.join(__dirname, '../public/guide-pdfs');

// Ensure output dir exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Parse metadata from markdown front matter (bold lines at top)
function parseMeta(content) {
  const lines = content.split('\n');
  const title = lines[0].replace(/^#+\s*/, '').trim();
  const meta = {};
  for (let i = 1; i < Math.min(10, lines.length); i++) {
    const m = lines[i].match(/\*\*(.+?):\*\*\s*(.+)/);
    if (m) meta[m[1].trim()] = m[2].trim();
  }
  return { title, ...meta };
}

function buildHtml(title, meta, bodyHtml) {
  const timeRequired = meta['Time required'] || '';
  const difficulty = meta['Difficulty'] || '';
  const tools = meta['Tools'] || '';

  // Subtitle lines for cover
  const subtitleParts = [
    timeRequired && `⏱ ${timeRequired}`,
    difficulty && `📊 ${difficulty}`,
  ].filter(Boolean);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 11pt;
      color: #1a1a1a;
      background: #ffffff;
    }

    /* ===== COVER PAGE ===== */
    .cover {
      width: 100%;
      min-height: 100vh;
      background: #0A0A0A;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 80px;
      page-break-after: always;
      position: relative;
    }

    .cover-accent-top {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, #FFD700, #F97316, #FFD700);
    }

    .cover-logo {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 80px;
      text-align: center;
    }
    .logo-my { color: #FFD700; }
    .logo-ai { color: #F97316; font-size: 1.25em; }
    .logo-workforce { color: #FFD700; }

    .cover-badge {
      background: rgba(255, 215, 0, 0.12);
      border: 1px solid rgba(255, 215, 0, 0.3);
      color: #FFD700;
      font-size: 9pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 32px;
    }

    .cover-title {
      font-size: 36pt;
      font-weight: 900;
      color: #ffffff;
      text-align: center;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 28px;
      max-width: 600px;
    }

    .cover-subtitle {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 60px;
    }

    .cover-meta-item {
      color: #888888;
      font-size: 10pt;
      font-weight: 500;
    }

    .cover-tools {
      color: #555555;
      font-size: 9pt;
      text-align: center;
      max-width: 480px;
      line-height: 1.6;
    }

    .cover-tools strong {
      color: #777777;
    }

    .cover-footer {
      position: absolute;
      bottom: 32px;
      left: 0; right: 0;
      text-align: center;
      color: #333333;
      font-size: 8pt;
      letter-spacing: 0.5px;
    }

    /* ===== INTERIOR PAGES ===== */
    .content {
      padding: 48px 64px;
      background: #ffffff;
      max-width: 100%;
    }

    .content h1 {
      font-size: 22pt;
      font-weight: 900;
      color: #0A0A0A;
      border-bottom: 3px solid #FFD700;
      padding-bottom: 12px;
      margin-bottom: 24px;
      margin-top: 48px;
      letter-spacing: -0.02em;
      page-break-after: avoid;
    }

    .content h1:first-child {
      margin-top: 0;
    }

    .content h2 {
      font-size: 16pt;
      font-weight: 700;
      color: #0A0A0A;
      margin-top: 36px;
      margin-bottom: 16px;
      padding-left: 12px;
      border-left: 4px solid #FFD700;
      page-break-after: avoid;
    }

    .content h3 {
      font-size: 13pt;
      font-weight: 700;
      color: #1a1a1a;
      margin-top: 24px;
      margin-bottom: 12px;
      page-break-after: avoid;
    }

    .content h4 {
      font-size: 11pt;
      font-weight: 700;
      color: #333333;
      margin-top: 20px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      page-break-after: avoid;
    }

    .content p {
      color: #2a2a2a;
      line-height: 1.75;
      margin-bottom: 14px;
    }

    .content strong {
      color: #0A0A0A;
      font-weight: 700;
    }

    .content em {
      color: #444444;
      font-style: italic;
    }

    .content ul, .content ol {
      margin: 12px 0 16px 28px;
    }

    .content li {
      color: #2a2a2a;
      line-height: 1.7;
      margin-bottom: 6px;
    }

    .content li::marker {
      color: #FFD700;
      font-weight: 700;
    }

    .content ul li::marker {
      content: "▸ ";
      color: #F97316;
    }

    .content pre {
      background: #0f0f0f;
      border: 1px solid #2a2a2a;
      border-left: 4px solid #F97316;
      border-radius: 8px;
      padding: 20px 24px;
      overflow-x: auto;
      margin: 16px 0;
      page-break-inside: avoid;
    }

    .content pre code {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 9pt;
      color: #e0e0e0;
      background: none;
      padding: 0;
      border-radius: 0;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .content code {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 9pt;
      background: #f5f5f5;
      color: #F97316;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .content blockquote {
      border-left: 4px solid #FFD700;
      background: #fffbeb;
      padding: 16px 20px;
      margin: 16px 0;
      border-radius: 0 8px 8px 0;
      page-break-inside: avoid;
    }

    .content blockquote p {
      color: #4a3800;
      margin: 0;
    }

    .content hr {
      border: none;
      border-top: 1px solid #e0e0e0;
      margin: 32px 0;
    }

    .content a {
      color: #F97316;
      text-decoration: none;
    }

    /* Checkbox styling */
    .content li input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border: 2px solid #FFD700;
      border-radius: 3px;
      margin-right: 8px;
      vertical-align: middle;
      display: inline-block;
      position: relative;
      top: -1px;
    }

    .content li input[type="checkbox"]:checked::after {
      content: "✓";
      position: absolute;
      top: -3px;
      left: 1px;
      color: #FFD700;
      font-size: 11px;
      font-weight: 700;
    }

    /* Table styling */
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 10pt;
      page-break-inside: avoid;
    }

    .content th {
      background: #0A0A0A;
      color: #FFD700;
      padding: 10px 14px;
      text-align: left;
      font-weight: 700;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .content td {
      padding: 10px 14px;
      border-bottom: 1px solid #e8e8e8;
      color: #2a2a2a;
      vertical-align: top;
    }

    .content tr:nth-child(even) td {
      background: #fafafa;
    }

    /* Page footer (printed via @page) */
    @page {
      margin: 0;
      size: A4;
    }

    /* Running footer on content pages */
    .page-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 36px;
      background: #ffffff;
      border-top: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 64px;
      font-size: 8pt;
      color: #999999;
    }

    .page-footer .brand {
      font-weight: 600;
      color: #FFD700;
    }

    /* Add bottom padding to content so footer doesn't overlap */
    .content-wrapper {
      padding-bottom: 48px;
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover">
    <div class="cover-accent-top"></div>
    <div class="cover-logo">
      <span class="logo-my">My </span><span class="logo-ai">AI </span><span class="logo-workforce">Workforce</span>
    </div>
    <div class="cover-badge">Practical AI Guide</div>
    <h1 class="cover-title">${title}</h1>
    ${subtitleParts.length ? `<div class="cover-subtitle">${subtitleParts.map(s => `<span class="cover-meta-item">${s}</span>`).join('')}</div>` : ''}
    ${tools ? `<p class="cover-tools"><strong>Tools covered:</strong> ${tools}</p>` : ''}
    <div class="cover-footer">myaiworkforce.ai</div>
  </div>

  <!-- CONTENT PAGES -->
  <div class="content-wrapper">
    <div class="content">
      ${bodyHtml}
    </div>
    <div class="page-footer">
      <span class="brand">myaiworkforce.ai</span>
      <span>${title}</span>
    </div>
  </div>

</body>
</html>`;
}

// Strip the first heading and meta lines that are already shown on cover
function stripCoverContent(content) {
  const lines = content.split('\n');
  let i = 0;
  // Skip the H1 title line
  if (lines[i] && lines[i].startsWith('#')) i++;
  // Skip blank line
  while (i < lines.length && lines[i].trim() === '') i++;
  // Skip bold meta lines (Time required, Difficulty, Tools)
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.match(/^\*\*[^*]+:\*\*/)) {
      i++;
    } else {
      break;
    }
  }
  // Skip trailing blank/separator lines
  while (i < lines.length && (lines[i].trim() === '' || lines[i].trim() === '---')) i++;

  return lines.slice(i).join('\n');
}

async function generatePdf(browser, mdFile) {
  const slug = path.basename(mdFile, '.md');
  const content = fs.readFileSync(mdFile, 'utf8');
  const meta = parseMeta(content);
  const bodyMarkdown = stripCoverContent(content);
  const bodyHtml = marked.parse(bodyMarkdown);
  const html = buildHtml(meta.title, meta, bodyHtml);

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for fonts
  await new Promise(r => setTimeout(r, 1000));

  const outputPath = path.join(OUTPUT_DIR, `${slug}.pdf`);
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false,
  });

  await page.close();
  console.log(`✅ Generated: ${slug}.pdf`);
  return outputPath;
}

async function main() {
  console.log('🚀 Starting PDF generation...\n');

  const mdFiles = fs.readdirSync(GUIDES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(GUIDES_DIR, f));

  console.log(`Found ${mdFiles.length} guides to process\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=medium',
    ],
  });

  try {
    for (const mdFile of mdFiles) {
      await generatePdf(browser, mdFile);
    }
  } finally {
    await browser.close();
  }

  console.log('\n✨ All PDFs generated successfully!');
  console.log(`📁 Output: ${OUTPUT_DIR}`);

  // List generated files
  const pdfs = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.pdf'));
  console.log('\nGenerated PDFs:');
  pdfs.forEach(f => {
    const size = fs.statSync(path.join(OUTPUT_DIR, f)).size;
    console.log(`  • ${f} (${(size / 1024).toFixed(1)} KB)`);
  });
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
