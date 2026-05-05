import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ai-freelance-blog.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://ai-freelance-blog.vercel.app/blog/5-best-ai-tools-for-freelance-writers-2026',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://ai-freelance-blog.vercel.app/blog/claude-vs-chatgpt-real-test-freelancers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://ai-freelance-blog.vercel.app/blog/free-ai-tools-that-actually-work-2026',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
  url: 'https://ai-freelance-blog.vercel.app/blog/best-ai-tools-upwork-freelancers-2026',
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.8,
},
{
  url: 'https://ai-freelance-blog.vercel.app/blog/how-to-use-chatgpt-write-winning-proposals',
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.8,
},
  ]
}