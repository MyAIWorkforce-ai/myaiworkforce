import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Blog | Insights & Case Studies | myaiworkforce.ai',
  description: 'Practical guides, case studies and deep dives on AI automation for business owners. Learn how to build your AI workforce.',
  keywords: ['AI automation blog', 'AI case studies', 'AI for business', 'automation guides', 'AI workforce blog'],
  openGraph: {
    title: 'AI Automation Blog | Insights & Case Studies | myaiworkforce.ai',
    description: 'Practical guides, case studies and deep dives on AI automation for business owners. Learn how to build your AI workforce.',
    url: 'https://myaiworkforce.ai/blog',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Blog | My AI Workforce',
    description: 'Practical guides, case studies and deep dives on AI automation for business owners.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
