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
      // Redirect www to non-www (canonical) — MUST be first for priority
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
      // Redirect English category paths to Turkish equivalents (only on Turkish domain)
      ...[
        { en: 'body-weight', tr: 'vucut-kilo' },
        { en: 'fitness', tr: 'fitness' },
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
        { en: 'substance', tr: 'madde' },
      ].filter(({ en, tr }) => en !== tr).map(({ en, tr }) => ({
        source: `/${en}/:slug*`,
        has: [{ type: 'host' as const, value: 'saglikhesapla.com' }],
        destination: `/${tr}/:slug*`,
        permanent: true,
      })),
      // Redirect Turkish category paths to English equivalents (only on English domain)
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
        { en: 'substance', tr: 'madde' },
      ].filter(({ en, tr }) => en !== tr).map(({ en, tr }) => ({
        source: `/${tr}/:slug*`,
        has: [{ type: 'host' as const, value: 'prohealthcalc.com' }],
        destination: `/${en}/:slug*`,
        permanent: true,
      })),
      // Fix broken URL with ampersand
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
