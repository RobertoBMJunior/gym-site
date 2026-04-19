import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnswersProvider } from './context/AnswersContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Treino Pronto',
    template: '%s | Treino Pronto',
  },
  description:
    'Gere seu treino personalizado com base no seu nível, objetivo e rotina. Sem cadastro, rápido e gratuito.',
  keywords: [
    'treino personalizado',
    'treino academia',
    'hipertrofia',
    'calistenia',
    'academia',
    'gym',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnswersProvider>
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </AnswersProvider>
      </body>
    </html>
  )
}
