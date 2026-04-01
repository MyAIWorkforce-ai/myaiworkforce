import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DIY AI Agent Guides | Step-by-Step Automation | My AI Workforce',
  description: 'Build your own AI workforce with our step-by-step guides. From $9. Covers OpenClaw, n8n, Make, ChatGPT and more. No technical team required.',
  keywords: ['AI guides', 'AI automation guides', 'DIY AI', 'n8n tutorial', 'OpenClaw guide', 'no-code AI'],
  openGraph: {
    title: 'DIY AI Agent Guides | Step-by-Step Automation | My AI Workforce',
    description: 'Build your own AI workforce with our step-by-step guides. From $9. Covers OpenClaw, n8n, Make, ChatGPT and more. No technical team required.',
    url: 'https://myaiworkforce.ai/guides',
    siteName: 'My AI Workforce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY AI Agent Guides | My AI Workforce',
    description: 'Build your own AI workforce with our step-by-step guides. From $9.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
