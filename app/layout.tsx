import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Washington Post - Breaking News, World, US, DC News & Analysis',
  description: 'Breaking news and analysis on politics, business, world national news, entertainment and more. In-depth DC, Virginia, Maryland news coverage.',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
