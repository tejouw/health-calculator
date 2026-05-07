import './globals.css';
import type { Metadata } from 'next';

// metadataBase here covers routes that don't go through [locale]/layout.tsx
// (e.g. /_not-found, /opengraph-image, /icon). Without it Next.js falls back
// to http://localhost:3000 in production, breaking social-share image URLs.
export const metadata: Metadata = {
  metadataBase: new URL('https://prohealthcalc.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
