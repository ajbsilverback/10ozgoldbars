import { MetadataRoute } from 'next'
import { getAllResourceSlugs } from '@/data/resources'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.10ozgoldbars.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = getAllResourceSlugs().map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...resourcePages]
}
