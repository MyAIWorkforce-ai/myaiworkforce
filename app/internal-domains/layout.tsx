import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Portfolio — Internal | MyAIWorkforce.ai',
  description: 'Internal domain portfolio overview with estimated sale values.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function InternalDomainsLayout({ children }: { children: React.ReactNode }) {
  return children
}
