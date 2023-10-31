import { Roboto, Alegreya } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import DonationBanner from '@/components/DonationBanner/DonationBanner'
import Footer from '@/components/Footer/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya'
})

export const metadata = {
  title: 'Home',
  description: 'The Thaddeus Resource Center is a charity organization that has been aiding the local community since 1975. Our mission is to inspire HOPE and growth in youth and women in need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${alegreya.variable}`}
      >
        <Navbar />
        {children}
        <Image
          src='/proverbs.png'
          alt='Thaddeus Quote'
          width={1778}
          height={58}
          style={{ margin: '25px' }}
        />
        <DonationBanner />
        <Footer />
      </body>
    </html >
  )
}
