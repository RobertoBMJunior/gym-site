import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://treinopronto.com'

  // Páginas fixas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-26'),
    },
    {
      url: `${baseUrl}/perguntas-protocolo`,
      lastModified: new Date('2026-04-26'),
    },
    {
      url: `${baseUrl}/resultado`,
      lastModified: new Date('2026-04-26'),
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date('2026-04-20'),
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date('2026-04-20'),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ]

  // Posts do blog
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticPages, ...blogUrls]
}
