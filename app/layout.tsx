import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/contexts/LanguageContext'


export const metadata: Metadata = {
  title: 'FranesDev — Piensa como programador. Vive mejor.',
  description: 'Acertijos de lógica, mentalidad y historias de Papá Dev. Ayudo a pensar mejor — sin necesidad de saber programar. Desarrollador full-time y padre desde Ecuador.',
  keywords: ['logica', 'acertijos', 'mentalidad', 'pensamiento', 'papa dev', 'franesdev', 'ecuador', 'pensar mejor', 'programador'],
  authors: [{ name: 'FranesDev', url: 'https://franes.dev' }],
  creator: 'FranesDev',
  metadataBase: new URL('https://franes.dev'),
  openGraph: {
    title: 'FranesDev — Piensa como programador. Vive mejor.',
    description: 'Lógica, acertijos y mentalidad de programador para todos. No tutoriales de código — aprende a pensar mejor.',
    url: 'https://franes.dev',
    siteName: 'FranesDev',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'FranesDev' }],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FranesDev — Piensa como programador. Vive mejor.',
    description: 'Lógica, acertijos y mentalidad de programador para todos. No tutoriales de código.',
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
