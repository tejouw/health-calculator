'use client';

import Script from 'next/script';

const ADSENSE_CLIENT_ID = 'ca-pub-6384218533700364';

// TODO: Re-enable after AdSense approval
const ADSENSE_ENABLED = false;

export default function GoogleAdSense() {
  if (!ADSENSE_ENABLED) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
