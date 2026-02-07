import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sağlık Hesapla - Tıbbi Hesaplama Araçları',
    short_name: 'Sağlık Hesapla',
    description: 'Kreatinin klerensi, BMI, kalori hesaplama ve daha fazlası için profesyonel tıbbi hesaplama araçları',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
