import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/work', '/about', '/contact'];
  const now = new Date();

  return routes.map((route) => ({
    url: `https://www.gloud.io${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
