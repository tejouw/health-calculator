import { ImageResponse } from 'next/og';

interface Props {
  params: Promise<{ locale: string }>;
}

// Image metadata
export const alt = 'ProHealthCalc - Professional Health Calculators';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function OgImage({ params }: Props) {
  const { locale } = await params;

  const content = locale === 'tr' ? {
    title: 'Sağlık Hesapla',
    subtitle: '350+ Profesyonel Sağlık Hesaplayıcısı',
    tags: 'VKİ • Kalori • Hamilelik • Fitness • Tıbbi',
  } : {
    title: 'ProHealthCalc',
    subtitle: '350+ Professional Health Calculators',
    tags: 'BMI • Calories • Pregnancy • Fitness • Medical',
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 20 }}>💊</div>
        <div style={{ fontSize: 48, textAlign: 'center' }}>{content.title}</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9 }}>
          {content.subtitle}
        </div>
        <div style={{ fontSize: 24, marginTop: 10, opacity: 0.8 }}>
          {content.tags}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
