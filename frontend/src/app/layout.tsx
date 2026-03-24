import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Biretica — Transform. Innovate. Grow.',
  description:
    'Biretica is a global digital transformation consultancy helping organizations navigate complexity, accelerate innovation, and achieve sustainable growth.',
  keywords: ['digital transformation', 'consulting', 'cloud', 'AI', 'cybersecurity', 'strategy'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
