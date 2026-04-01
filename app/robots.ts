import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/internal', '/internal-guides', '/internal-seo', '/content-preview'],
    },
    sitemap: 'https://MyAIWorkforce.ai/sitemap.xml',
  }
}
