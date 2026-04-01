import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://MyAIWorkforce.ai'

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/marketplace`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/guides`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/done-for-you`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/security`, priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Agent pages
  const agentSlugs = [
    'lead-qualifier', 'cold-outreach-agent', 'crm-updater', 'follow-up-agent',
    'social-media-scheduler', 'seo-audit-agent', 'content-repurposer', 'email-campaign-agent',
    'invoice-processor', 'expense-reporter', 'meeting-summariser', 'data-entry-agent',
    'inbound-triage-agent', 'review-responder', 'support-ticket-router', 'faq-bot',
    'receipt-scanner', 'financial-reporter', 'quote-comparator', 'onboarding-assistant',
    'job-description-writer', 'blog-writer-agent', 'video-script-agent', 'competitor-monitor',
    'market-research-agent',
  ]

  const agentPages = agentSlugs.map(slug => ({
    url: `${baseUrl}/marketplace/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Guide pages
  const guideSlugs = [
    'how-to-set-up-your-first-ai-email-agent',
    'automate-your-customer-support-in-3-steps',
    'build-a-lead-generation-agent-from-scratch',
    'create-a-social-media-scheduling-agent',
    'set-up-an-invoice-processing-workflow',
    'build-a-market-research-agent',
    'the-openclaw-quick-start-guide',
    'build-a-sales-outreach-agent-with-n8n',
    'automate-your-hiring-pipeline',
  ]

  const guidePages = guideSlugs.map(slug => ({
    url: `${baseUrl}/guides/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...agentPages, ...guidePages]
}
