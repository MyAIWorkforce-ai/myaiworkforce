import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build My Agent | $497 Setup + First Month Free | MyAIWorkforce.ai',
  description: 'We build, deploy and manage a custom AI agent for your business. $497 setup + first month free. Live in 24 hours. Handles emails, bookings, follow-ups and admin — 24/7.',
  keywords: ['build AI agent', 'custom AI agent', 'AI automation service', 'done for you AI', 'managed AI workforce', 'AI agency Australia'],
  openGraph: {
    title: 'Build My Agent | $497 Setup + First Month Free | MyAIWorkforce.ai',
    description: 'We build, deploy and manage a custom AI agent for your business. $497 setup + first month free. Live in 24 hours.',
    url: 'https://myaiworkforce.ai/buildmyagent',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build My Agent | $497 Setup + $99/mo | My AI Workforce',
    description: 'Custom AI agent built, deployed and managed for your business. Live in 24 hours.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
