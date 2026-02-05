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
      // Fix English paths on Turkish domain - redirect to Turkish equivalents
      {
        source: '/pregnancy/due-date-calculator',
        destination: '/hamilelik/dogum-tarihi-hesaplayici',
        permanent: true,
      },
      {
        source: '/womens-health/ovulation-calculator',
        destination: '/kadin-sagligi/yumurtlama-hesaplayici',
        permanent: true,
      },
      {
        source: '/nutrition/calorie-calculator',
        destination: '/beslenme/kalori-hesaplayici',
        permanent: true,
      },
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
