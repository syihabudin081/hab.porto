import SplashCursor from '@/components/SplashCursor'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Syihabudin Rahmat Ramadhan',
  description: 'Syihabudin Rahmat Ramadhan Personal site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <SplashCursor/>
        {children}
      </body>
    </html>
  )
}
