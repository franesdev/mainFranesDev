import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/contexts/LanguageContext'


export const metadata: Metadata = {
  title: 'FranesDev — Programa mejor. Piensa diferente.',
  description: 'Developer Full Stack desde Ecuador. Contenido sobre lógica, IA y programación para devs y no devs. Acertijos semanales, videos y Dev Log.',
  keywords: ['programacion', 'developer', 'logica', 'inteligencia artificial', 'franesdev', 'ecuador', 'aprender a programar', 'pensamiento logico'],
  authors: [{ name: 'FranesDev', url: 'https://franes.dev' }],
  creator: 'FranesDev',
  metadataBase: new URL('https://franes.dev'),
  openGraph: {
    title: 'FranesDev — Programa mejor. Piensa diferente.',
    description: 'Lógica, IA y pensamiento dev para programadores y no programadores. Acertijos semanales que la IA no puede resolver.',
    url: 'https://franes.dev',
    siteName: 'FranesDev',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'FranesDev' }],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FranesDev — Programa mejor. Piensa diferente.',
    description: 'Lógica, IA y pensamiento dev para programadores y no programadores.',
    creator: '@franesdev',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
        <script 
          data-name="BMC-Widget" 
          data-cfasync="false" 
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
          data-id="franesdev" 
          data-description="Support me on Buy me a coffee!" 
          data-message="¡Gracias por tu apoyo! Un café me da el empujón para seguir compartiendo lo que aprendo contigo." 
          data-color="#40DCA5" 
          data-position="Right" 
          data-x_margin="18" 
          data-y_margin="18"
        />
      </body>
    </html>
  )
}
