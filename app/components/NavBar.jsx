'use client';

import { Menu_Links } from '@/utils/data';
import Image from 'next/image';
import { Link } from 'react-scroll';
import React, { useState } from 'react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0 ">
        {/*Logo*/}
        <h1>Time to Program</h1>

        <ul className={`${isOpen ? 'flex' : 'hidden'} menu-wrapper`}>
          {Menu_Links.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button>Hire Me</button>
      </div>
    </nav>
  );
};
