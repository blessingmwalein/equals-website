import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Equals Solutions - Lending, Reimagined. Impact Delivered.',
  description: 'Empowering financial institutions across Africa with intelligent lending platforms and strategic insight. Transform your lending operations with our comprehensive risk management and credit automation solutions.',
  keywords: 'lending platform, credit management, risk assessment, financial technology, microfinance, banking software, Africa fintech',
  authors: [{ name: 'Equals Solutions Pvt Ltd' }],
  creator: 'Equals Solutions',
  publisher: 'Equals Solutions Pvt Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://equalssolutions.co.zw'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Equals Solutions - Lending, Reimagined. Impact Delivered.',
    description: 'Empowering financial institutions across Africa with intelligent lending platforms and strategic insight.',
    url: 'https://equalssolutions.co.zw',
    siteName: 'Equals Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equals Solutions - Lending, Reimagined. Impact Delivered.',
    description: 'Empowering financial institutions across Africa with intelligent lending platforms and strategic insight.',
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
