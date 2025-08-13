import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://coachakshay.com/images/logo.png"
          alt="Coach Akshay Logo"
          width={180}
          height={180}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  )
} 