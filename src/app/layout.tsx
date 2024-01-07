import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { Header } from '@/components/navbar/header'
import { Footer } from '@/components/layout/footer'
import { SessionProvider } from '@/components/providers/session-provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { StoreProvider } from '@/components/providers/store-provider'

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
      <body
        className={cn('bg-paper min-h-screen antialiased', inter.className)}
      >
        <StoreProvider>
          <SessionProvider>
            <Header />
            {children}
            <Footer />
            <ToastContainer position='bottom-right' limit={3} autoClose={2000} hideProgressBar/>
          </SessionProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
