import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import Notifications from './components/Notifications'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CBX - Premium Video Editing Resources',
  description: 'High-quality after effects bundles, editing packs, transition packs, and LUTs for professional video editors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <CartProvider>
          <Notifications />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

