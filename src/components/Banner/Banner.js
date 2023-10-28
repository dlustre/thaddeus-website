import Image from 'next/image';
import './Banner.css';

export function Banner({ src }) {
  return <div className='banner'>
    <Image
      src={src}
      alt="banner"
      fill
      style={{ objectFit: "cover" }}
    />
    <div className='bannerImg' />
    <h1
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '44px',
        textWrap: 'nowrap',
      }}
    >
      RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN
    </h1>
  </div>;
}
