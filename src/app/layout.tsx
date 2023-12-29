import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { Header } from '@/components/navbar/header'
import './globals.css'

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
      <body className={cn('bg-paper antialiased h-screen mt-20', inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
