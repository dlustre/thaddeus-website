import React, { useState } from 'react'
import Link from 'next/link';
import './Dropdown.css';

export default function Dropdown({ items }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      className={'dropdown-menu'}
      onClick={handleClick}
      style={{ display: click ? 'none' : 'block' }}
    >
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={'dropdown-link'}
              href={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}