import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free AI Strategy Call | myaiworkforce.ai',
  description: 'Book a free 30-minute AI strategy call. We\'ll identify your highest-impact automation opportunities and show you exactly what\'s possible.',
  keywords: ['contact My AI Workforce', 'free AI strategy call', 'AI consultation', 'book AI call'],
  openGraph: {
    title: 'Contact Us | Book a Free AI Strategy Call | myaiworkforce.ai',
    description: 'Book a free 30-minute AI strategy call. We\'ll identify your highest-impact automation opportunities and show you exactly what\'s possible.',
    url: 'https://myaiworkforce.ai/contact',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free AI Strategy Call | My AI Workforce',
    description: 'Book a free 30-minute AI strategy call and identify your highest-impact automation opportunities.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
