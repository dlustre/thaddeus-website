import Navbar from '@/components/Navbar/Navbar'
import { Banner } from '../components/Banner/Banner';
import { DonationBanner } from '@/components/DonationBanner/DonationBanner';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner src={'/banner.jpg'} />
      <DonationBanner />
      <Footer />
    </div>
  )
}
