'use client';

import Script from 'next/script';

const ADSENSE_CLIENT_ID = 'ca-pub-6384218533700364';

export default function GoogleAdSense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
