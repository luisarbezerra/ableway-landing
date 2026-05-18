import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${syne.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}
