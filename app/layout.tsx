import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: 'Franes Dev',
  description: 'Imagine | Program | Create',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  )
}
