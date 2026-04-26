import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
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
      // Cross-domain slug recovery:
      // EN-slug categories on TR domain → 301 to EN domain (same path).
      // Earlier behaviour rewrote slug locally, but the calculator slug stayed
      // in the wrong locale → still 404. Sending the user to the matching
      // domain preserves the calc slug and lands on a real page.
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
        destination: `https://prohealthcalc.com/${en}/:slug*`,
        permanent: true,
      })),
      // TR-slug categories on EN domain → 301 to TR domain (same path)
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
        destination: `https://saglikhesapla.com/${tr}/:slug*`,
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
