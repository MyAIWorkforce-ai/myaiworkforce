import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | AI Workforce Plans from $997/mo | My AI Workforce',
  description: 'Simple, transparent pricing. DIY guides from $9, marketplace agents from $19, or Done-For-You AI workforce from $997/mo. No lock-in contracts.',
  keywords: ['AI workforce pricing', 'AI agent pricing', 'AI automation cost', 'done for you pricing'],
  openGraph: {
    title: 'Pricing | AI Workforce Plans from $997/mo | My AI Workforce',
    description: 'Simple, transparent pricing. DIY guides from $9, marketplace agents from $19, or Done-For-You AI workforce from $997/mo. No lock-in contracts.',
    url: 'https://myaiworkforce.ai/pricing',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | My AI Workforce',
    description: 'Simple, transparent pricing. DIY guides from $9, Done-For-You from $997/mo.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
