import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | HeapFox',
    default: 'HeapFox — Docs without the overhead'
  },
  description: 'Fully hosted, customizable documentation as a service — built for teams and devs who want beautiful docs without maintaining infra.',
  generator: 'Next.js',
  metadataBase: new URL('https://heapfox.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HeapFox — Docs without the overhead',
    description: 'Fully hosted, customizable documentation as a service. Markdown/MDX, Git sync, themes, collaboration, and instant deploys.',
    type: 'website',
    url: 'https://heapfox.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeapFox — Docs without the overhead',
    description: 'Hosted, customizable docs with Git sync, themes, collaboration, and fast deploys.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
