import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'radial-gradient(circle at top left, rgba(34,211,238,0.35), transparent 30%), radial-gradient(circle at top right, rgba(59,130,246,0.35), transparent 25%), linear-gradient(180deg, #020617 0%, #0f172a 100%)',
          color: 'white'
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: 'uppercase', color: '#67e8f9' }}>
          Gloud
        </div>
        <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Software, cloud, mobile, and digital growth delivery.
        </div>
        <div style={{ fontSize: 28, color: '#cbd5e1' }}>Pakistan • Ireland • Global delivery</div>
      </div>
    ),
    size
  );
}
