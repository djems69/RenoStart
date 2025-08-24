import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RenoStart Conseil - Accompagnement BTP',
  description: 'RenoStart Conseil accompagne les entreprises du BTP dans leur développement, leur organisation et la montée en compétences de leurs équipes.',
  keywords: 'BTP, conseil, formation, QSE, développement durable, management',
  authors: [{ name: 'RenoStart Conseil' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-grow overflow-x-hidden pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
