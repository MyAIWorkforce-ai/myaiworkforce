import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Privacy | myaiworkforce.ai',
  description: 'Your data stays on your private server. End-to-end encrypted, human oversight, audit logs. Enterprise-grade security for every Done-For-You client.',
  keywords: ['AI security', 'AI privacy', 'secure AI agents', 'private AI workforce', 'enterprise AI security'],
  openGraph: {
    title: 'Security & Privacy | myaiworkforce.ai',
    description: 'Your data stays on your private server. End-to-end encrypted, human oversight, audit logs. Enterprise-grade security for every Done-For-You client.',
    url: 'https://myaiworkforce.ai/security',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Privacy | myaiworkforce.ai',
    description: 'Your data stays on your private server. Enterprise-grade security for every client.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
