import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coachakshay.com'

  const routes = [
    '',
    '#about',
    '#client-achievements',
    '#transformations',
    '#achievements',
    '#reviews',
    '#contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }))

  return [
    ...routes,
    {
      url: `${baseUrl}/files/visiting-card.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    }
  ]
} 