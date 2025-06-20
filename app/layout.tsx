import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LzyCrazy - Login',
  description: 'Created with Love by LzyCrazy',
  generator: 'Next.js',
  applicationName: 'LzyCrazy',
  keywords: ['LzyCrazy', 'Login', 'Next.js'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
