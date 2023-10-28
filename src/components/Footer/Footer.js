import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

export function Footer() {
  return <div className='footer'>
    <Image
      src='/thaddeus_footer_logo.png'
      alt='Thaddeus Logo'
      width={500 / 5}
      height={647 / 5}
      className='footerLogo'
    />
    <div className='footerLinks'>
      <div className='footerColumn'>
        <h1>ABOUT</h1>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
      </div>
      <div className='footerColumn'>
        <h1>ACTIVITIES</h1>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
      </div>
      <div className='footerColumn'>
        <h1>INFORMATION</h1>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
        <Link href='#'>Who We Are</Link>
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
