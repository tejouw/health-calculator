import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Fix broken URLs with embedded domain (404 errors from Google Search Console)
      {
        source: '/https\\:/prohealthcalc.com/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/https\\://prohealthcalc.com/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // Redirect English category paths to Turkish equivalents (only on Turkish domain)
      ...[
        { en: 'body-weight', tr: 'vucut-kilo' },
        { en: 'nutrition', tr: 'beslenme' },
        { en: 'pregnancy', tr: 'hamilelik' },
        { en: 'womens-health', tr: 'kadin-sagligi' },
        { en: 'mens-health', tr: 'erkek-sagligi' },
        { en: 'heart', tr: 'kalp' },
        { en: 'diabetes', tr: 'diyabet' },
        { en: 'medical', tr: 'tibbi-hesaplamalar' },
        { en: 'mental-health', tr: 'ruh-sagligi' },
        { en: 'sleep', tr: 'uyku' },
        { en: 'childrens-health', tr: 'cocuk-sagligi' },
        { en: 'daily-life', tr: 'gunluk-yasam' },
      ].map(({ en, tr }) => ({
        source: `/${en}/:slug*`,
        has: [{ type: 'host' as const, value: 'saglikhesapla.com' }],
        destination: `/${tr}/:slug*`,
        permanent: true,
      })),
      // Fix broken URL with ampersand
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      // Redirect www to non-www (canonical)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.saglikhesapla.com',
          },
        ],
        destination: 'https://saglikhesapla.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.prohealthcalc.com',
          },
        ],
        destination: 'https://prohealthcalc.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
