import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | AI Automation Agency | myaiworkforce.ai',
  description: 'My AI Workforce is a global AI agent marketplace and done-for-you agency helping businesses automate with AI. Built by Toby Banks.',
  keywords: ['about My AI Workforce', 'AI automation agency', 'Toby Banks', 'AI workforce company'],
  openGraph: {
    title: 'About | AI Automation Agency | myaiworkforce.ai',
    description: 'My AI Workforce is a global AI agent marketplace and done-for-you agency helping businesses automate with AI. Built by Toby Banks.',
    url: 'https://myaiworkforce.ai/about',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About My AI Workforce',
    description: 'A global AI agent marketplace and done-for-you agency. Built by Toby Banks.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
