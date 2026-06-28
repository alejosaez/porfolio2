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
  metadataBase: new URL('https://www.asaezx.com'),

  title: {
    default: 'Alejo Saez | Full Stack Developer & AI Automation Engineer',
    template: '%s | Alejo Saez',
  },

  description:
    'Desarrollador Full Stack especializado en Node.js, React, Next.js, React Native, automatización con IA, n8n y arquitecturas backend escalables. Disponible para proyectos y oportunidades remotas.',

  applicationName: 'Alejo Saez Portfolio',

  authors: [
    {
      name: 'Alejo Saez',
      url: 'https://www.asaezx.com',
    },
  ],

  creator: 'Alejo Saez',
  publisher: 'Alejo Saez',

  keywords: [
    'Alejo Saez',
    'Full Stack Developer',
    'Software Engineer',
    'Node.js Developer',
    'React Developer',
    'Next.js Developer',
    'NestJS Developer',
    'React Native Developer',
    'TypeScript Developer',
    'Backend Developer',
    'Frontend Developer',
    'AI Automation Engineer',
    'n8n Developer',
    'OpenAI Developer',
    'JavaScript Developer',
    'Freelance Developer',
    'Remote Developer',
    'Portfolio',
    'Argentina Developer',
    'Latam Developer',
  ],

  category: 'technology',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

icons: {
  icon: '/icon.png',
  shortcut: '/icon.png',
  apple: '/apple-icon.png',
},
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.asaezx.com',
    siteName: 'Alejo Saez Portfolio',
    title: 'Alejo Saez | Full Stack Developer & AI Automation Engineer',
    description:
      'Portfolio profesional de Alejo Saez. Desarrollo Full Stack, aplicaciones web y mobile, automatización con IA y soluciones backend escalables.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alejo Saez Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alejo Saez | Full Stack Developer & AI Automation Engineer',
    description:
      'Desarrollador Full Stack especializado en Node.js, React, Next.js, React Native y automatización con IA.',
    images: ['/og-image.png'],
  },
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
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alejo Saez',
    url: 'https://www.asaezx.com',
    image: 'https://www.asaezx.com/projects/fotoCV.jpeg',
    jobTitle: 'Full Stack Developer & AI Automation Engineer',
    description:
      'Desarrollador Full Stack especializado en Node.js, React, Next.js, React Native, automatización con IA, n8n y arquitecturas backend escalables.',
    email: 'mailto:alejosaezgebicki@gmail.com',
    sameAs: [
      'https://github.com/alejosaez',
      'https://www.linkedin.com/in/alejo-saez-gebicki/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'La Plata',
      addressCountry: 'AR',
    },
    knowsAbout: [
      'Node.js',
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'React Native',
      'PostgreSQL',
      'Playwright',
      'OpenAI',
      'n8n',
      'java',
      'Automation',
      'Backend Development',
      'Mobile Development',
    ],
  }

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

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
