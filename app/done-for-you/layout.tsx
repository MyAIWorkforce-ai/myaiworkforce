import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Done-For-You AI Workforce | From $997/mo | MyAIWorkforce.ai',
  description: 'We build, deploy and manage your AI workforce. Private VPS, custom agents, 24/7 monitoring. Email triage, lead gen, CRM automation and more.',
  keywords: ['done for you AI', 'managed AI workforce', 'AI agency', 'custom AI agents', 'AI automation service'],
  openGraph: {
    title: 'Done-For-You AI Workforce | From $997/mo | MyAIWorkforce.ai',
    description: 'We build, deploy and manage your AI workforce. Private VPS, custom agents, 24/7 monitoring. Email triage, lead gen, CRM automation and more.',
    url: 'https://MyAIWorkforce.ai/done-for-you',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Done-For-You AI Workforce | My AI Workforce',
    description: 'We build, deploy and manage your AI workforce. From $997/mo.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
