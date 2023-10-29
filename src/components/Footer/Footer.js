import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return <div className='footer'>
    <Image
      src='/thaddeus_footer_logo.png'
      alt='Thaddeus Logo'
      width={500 / 4.5}
      height={647 / 4.5}
      className='footerLogo'
    />
    <div className='footerLinks'>
      <div className='footerColumn'>
        <h1>ABOUT</h1>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>How We Help</Link>
        <Link href='#'>Our Impact</Link>
        <Link href='#'>Contact Us</Link>
      </div>
      <div className='footerColumn'>
        <h1>ACTIVITIES</h1>
        <Link href='#'>DONATE</Link>
        <Link href='#'>Internships</Link>
        <Link href='#'>Openings</Link>
        <Link href='#'>Volunteering</Link>
      </div>
      <div className='footerColumn'>
        <h1>INFORMATION</h1>
        <Link href='#'>Community Partners</Link>
        <Link href='#'>Get Involved</Link>
        <Link href='#'>News & Media</Link>
      </div>
    </div>
    <div className='footerSocials'>
      <Link href='#'>
        <Image
          src='/facebook.svg'
          alt='Facebook'
          width={35}
          height={35} />
      </Link>
      <Link href='#'>
        <Image
          src='/linkedin.svg'
          alt='LinkedIn'
          width={35}
          height={35} />
      </Link>
      <Link href='#'>
        <Image
          src='/instagram.svg'
          alt='Instagram'
          width={35}
          height={35} />
      </Link>
    </div>
  </div>;
}
