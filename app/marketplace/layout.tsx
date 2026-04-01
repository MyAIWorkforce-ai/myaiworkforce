import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Marketplace | Buy & Sell AI Agents | My AI Workforce',
  description: 'Browse 500+ AI agents for sales, marketing, operations and more. Ready-made automations for your business. From $19 one-time or subscribe monthly.',
  keywords: ['AI agents', 'AI marketplace', 'buy AI agents', 'AI automation', 'ready-made AI', 'business automation'],
  openGraph: {
    title: 'AI Agent Marketplace | Buy & Sell AI Agents | My AI Workforce',
    description: 'Browse 500+ AI agents for sales, marketing, operations and more. Ready-made automations for your business. From $19 one-time or subscribe monthly.',
    url: 'https://myaiworkforce.ai/marketplace',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Marketplace | My AI Workforce',
    description: 'Browse 500+ AI agents for sales, marketing, operations and more.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
