import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Archivo } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const archivo = Archivo({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Alejo Saez | Full Stack Developer & AI Automation',
  description:
    'Portfolio de Alejo Saez, desarrollador Full Stack especializado en aplicaciones web y mobile, backend, automatización de procesos, integraciones con APIs e inteligencia artificial.',
  authors: [{ name: 'Alejo Saez' }],
  creator: 'Alejo Saez',
    icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  keywords: [
    'Alejo Saez',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'React Native',
    'AI Automation',
    'n8n',
    'Portfolio',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
