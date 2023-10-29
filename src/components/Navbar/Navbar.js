'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (i) => {
    if (window.innerWidth < 960) {
      setDropdown({ ...dropdown, [i]: false });
    } else {
      setDropdown({ ...dropdown, [i]: true });
    }
  };

  const onMouseLeave = (i) => {
    setDropdown({ ...dropdown, [i]: false });
  };

  const items = {
    whoWeAre: [
      {
        title: 'Our vision',
        path: '/our-vision',
      },
      {
        title: 'Our Staff',
        path: '/our-staff',
      },
    ],
    howWeHelp: [
      {
        title: 'Resource Center',
        path: '/resource-center',
      },
      {
        title: 'Mental Health & Wellness',
        path: '/mental-health-and-wellness',
      },
    ],
    joinUs: [
      {
        title: 'Gallery',
        path: '/gallery',
      },
      {
        title: 'Get Involved',
        path: '/get-involved',
      },
      {
        title: 'Internships',
        path: '/internships',
      },
    ],
    blogs: [
      {
        title: 'Business',
        path: '/business-blogs',
      },
      {
        title: 'Human Resources',
        path: '/human-resources-blogs',
      },
    ]
  }

  return (
    <nav className='navbar'>
      <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
        <Image
          src='/thaddeus_navbar_logo.png'
          alt='Thaddeus Logo'
          width={500 / 2.3}
          height={195 / 2.3}
        />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        {!click && <span style={{ color: 'black' }}>=</span>}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link href='/' className='nav-links' onClick={closeMobileMenu}>
            HOME
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter(0) }}
          onMouseLeave={() => { onMouseLeave(0) }}
        >
          <Link
            href='#'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            WHO WE ARE
          </Link>
          {dropdown[0] && <Dropdown items={items.whoWeAre} />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter(1) }}
          onMouseLeave={() => { onMouseLeave(1) }}
        >
          <Link
            href='#'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            HOW WE HELP
          </Link>
          {dropdown[1] && <Dropdown items={items.howWeHelp} />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter(2) }}
          onMouseLeave={() => { onMouseLeave(2) }}
        >
          <Link
            href='#'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            JOIN US
          </Link>
          {dropdown[2] && <Dropdown items={items.joinUs} />}
        </li>
        <li
          className='nav-item'
          onMouseEnter={() => { onMouseEnter(3) }}
          onMouseLeave={() => { onMouseLeave(3) }}
        >
          <Link
            href='#'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            BLOGS
          </Link>
          {dropdown[3] && <Dropdown items={items.blogs} />}
        </li>
      </ul>
    </nav>
  );
}
