import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Sağlık Hesapla';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function OgImage() {
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
        <div style={{ fontSize: 120, marginBottom: 20 }}>SH</div>
        <div style={{ fontSize: 48, textAlign: 'center' }}>Sağlık Hesapla</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9 }}>
          Tıbbi Hesaplama Araçları
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
