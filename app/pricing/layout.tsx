import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Build My Agent — $497 Setup + First Month Free | MyAIWorkforce.ai',
  description: 'Simple, transparent pricing. DIY guides from $9, marketplace agents from $19, or Build My Agent from $497 setup + $199/mo. No lock-in contracts.',
  keywords: ['AI workforce pricing', 'AI agent pricing', 'AI automation cost', 'done for you pricing'],
  openGraph: {
    title: 'Pricing | Build My Agent — $497 Setup + First Month Free | MyAIWorkforce.ai',
    description: 'Simple, transparent pricing. DIY guides from $9, marketplace agents from $19, or Build My Agent from $497 setup + $199/mo. No lock-in contracts.',
    url: 'https://MyAIWorkforce.ai/pricing',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | My AI Workforce',
    description: 'Simple, transparent pricing. DIY guides from $9, Build My Agent from $497 setup + $199/mo.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
