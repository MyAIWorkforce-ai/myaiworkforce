import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhkfooojytjesnvqrtxx.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'

// Map guide product names / slugs to their markdown files
function getGuideFilename(productName: string): string | null {
  const name = productName.toLowerCase()
  
  const slugMap: Record<string, string> = {
    'how-to-set-up-your-first-ai-email-agent': 'how-to-set-up-your-first-ai-email-agent.md',
    'the-openclaw-quick-start-guide': 'the-openclaw-quick-start-guide.md',
    'automate-your-customer-support-in-3-steps': 'automate-your-customer-support-in-3-steps.md',
    'build-a-lead-generation-agent-from-scratch': 'build-a-lead-generation-agent-from-scratch.md',
    'create-a-social-media-scheduling-agent': 'create-a-social-media-scheduling-agent.md',
    'set-up-an-invoice-processing-workflow': 'set-up-an-invoice-processing-workflow.md',
    'build-a-market-research-agent': 'build-a-market-research-agent.md',
    'build-a-sales-outreach-agent-with-n8n': 'build-a-sales-outreach-agent-with-n8n.md',
    'automate-your-hiring-pipeline': 'automate-your-hiring-pipeline.md',
  }

  // Direct slug match
  for (const [slug, filename] of Object.entries(slugMap)) {
    if (name.includes(slug.replace(/-/g, ' ')) || name.includes(slug)) {
      return filename
    }
  }

  // Fuzzy match on keywords
  if (name.includes('email agent')) return 'how-to-set-up-your-first-ai-email-agent.md'
  if (name.includes('openclaw') || name.includes('quick start')) return 'the-openclaw-quick-start-guide.md'
  if (name.includes('customer support') || name.includes('support')) return 'automate-your-customer-support-in-3-steps.md'
  if (name.includes('lead gen') || name.includes('lead generation')) return 'build-a-lead-generation-agent-from-scratch.md'
  if (name.includes('social media') || name.includes('scheduling')) return 'create-a-social-media-scheduling-agent.md'
  if (name.includes('invoice')) return 'set-up-an-invoice-processing-workflow.md'
  if (name.includes('market research')) return 'build-a-market-research-agent.md'
  if (name.includes('sales outreach') || name.includes('n8n')) return 'build-a-sales-outreach-agent-with-n8n.md'
  if (name.includes('hiring') || name.includes('recruitment')) return 'automate-your-hiring-pipeline.md'

  return null
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')
  const email = searchParams.get('email')

  if (!token && !email) {
    return NextResponse.json({ error: 'Missing token or email parameter' }, { status: 400 })
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    // Look up purchase by token or email
    let query = supabase.from('purchases').select('*')
    
    if (token) {
      query = query.eq('download_token', token)
    } else if (email) {
      query = query.eq('email', email.toLowerCase())
    }

    const { data: purchases, error: dbError } = await query.limit(1)

    if (dbError) {
      console.error('[Download API] Supabase error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    if (!purchases || purchases.length === 0) {
      return NextResponse.json({ error: 'Purchase not found. Please check your email for your download link.' }, { status: 404 })
    }

    const purchase = purchases[0]
    const productName = purchase.product_name || purchase.productName || ''

    // Determine which guide file to serve
    const filename = getGuideFilename(productName)

    if (!filename) {
      // Fallback: redirect to dashboard if file not found
      return NextResponse.redirect('https://myaiworkforce.ai/dashboard')
    }

    // Read the guide file from public/guides/
    const filePath = path.join(process.cwd(), 'public', 'guides', filename)
    
    let fileContent: string
    try {
      fileContent = await readFile(filePath, 'utf-8')
    } catch {
      console.error('[Download API] File not found:', filePath)
      return NextResponse.json({ error: 'File not available. Please contact support.' }, { status: 404 })
    }

    // Return as downloadable file
    const encoder = new TextEncoder()
    const bytes = encoder.encode(fileContent)
    
    return new NextResponse(bytes, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': bytes.length.toString(),
        'Cache-Control': 'no-store',
      },
    })

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('[Download API] Error:', message)
    return NextResponse.json({ error: 'Download failed. Please try again or contact support.' }, { status: 500 })
  }
}
