import { ImageResponse } from 'next/og'
import { join } from 'path'
import { readFile } from 'fs/promises'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'

// Image generation
export default async function Icon() {
  const logoPath = join(process.cwd(), 'public', 'logo.jpeg')
  const logoData = await readFile(logoPath)
  // Convert buffer to base64
  const logoBase64 = logoData.toString('base64')
  const logoSrc = `data:image/jpeg;base64,${logoBase64}`

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 120,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
            src={logoSrc}
            alt="Logo"
            style={{
                width: '70%', // Increased for better visibility
                height: '70%',
                objectFit: 'contain'
            }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
