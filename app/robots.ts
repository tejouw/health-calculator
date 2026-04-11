import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isEN = host.includes('prohealthcalc');

  // Each domain references only its OWN sitemap
  const sitemapUrl = isEN
    ? 'https://prohealthcalc.com/sitemap.xml'
    : 'https://saglikhesapla.com/sitemap.xml';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/staging/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/staging/'],
      },
    ],
    sitemap: sitemapUrl,
  };
}
