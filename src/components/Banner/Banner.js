import Image from 'next/image';
import './Banner.css';

export default function Banner({ src, title, description }) {
  return <div className='banner'>
    <Image
      src={src}
      alt="banner"
      fill
      style={{ objectFit: "cover" }}
    />
    <div className='bannerMask' />
    <h1>{title}</h1>
    {description &&
      <>
        <div className='bannerDivider' />
        <h2>{description}</h2>
      </>
    }
  </div>;
}
