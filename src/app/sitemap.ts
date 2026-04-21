import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://treinopronto.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/perguntas-protocolo`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resultado`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
    },
  ]
}
