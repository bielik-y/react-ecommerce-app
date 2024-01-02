import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { Header } from '@/components/navbar/header'
import './globals.css'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techstore',
  description: 'Find and buy any device you want in Techstore'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-paper antialiased min-h-screen', inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
