import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Banner/Banner';
import DonationBanner from '@/components/DonationBanner/DonationBanner';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Banner src={'/banner.jpg'} title={'RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN'} />
    </>
  )
}
