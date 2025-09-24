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
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
        <script 
          data-name="BMC-Widget" 
          data-cfasync="false" 
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
          data-id="franesdev" 
          data-description="Support me on Buy me a coffee!" 
          data-message="¡Gracias por pasar por aquí! Si gustas??, puedes dejar tu aporte en este lugar. Recuerda aquí aprendemos juntos!!" 
          data-color="#FF813F" 
          data-position="Right" 
          data-x_margin="18" 
          data-y_margin="18"
        />
      </body>
    </html>
  )
}
