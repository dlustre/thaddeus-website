import Link from "next/link";
import './DonationBanner.css';

export function DonationBanner() {
  return <div className='donationBanner'>
    <h2 className='header'>
      Take initiative and join our cause to bring hope to ‘at risk’ youth, teen moms, and single moms in our community.
    </h2>
    <Link
      className='button'
      href='#'
    >
      Make a Donation
    </Link>
  </div>;
}
