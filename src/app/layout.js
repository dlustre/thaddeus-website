import { Roboto, Alegreya } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
export const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${alegreya.variable}`}>{children}</body>
    </html >
  )
}
