import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Server Actions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
