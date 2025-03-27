'use client';

import { Menu_Links } from '@/utils/data';
import Image from 'next/image';
import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';

import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleRisize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleRisize();

    window.addEventListener('resize', handleRisize);

    return () => window.removeEventListener('resize', handleRisize);
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0 ">
        {/*Logo*/}
        <div className={satisfy.className}>
          <h1 className="px-2">
            👋 Hi, I'm{' '}
            <span className="text-primary font-bold px-2 text-sm lg:text-2xl">
              Bruce IRAKOZE
            </span>
          </h1>
        </div>

        {/*Menu Hamburger*/}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                d="M4 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

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
        <li className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
          <a
            href="mailto:irabruce20@gmail.com"
            target="_blank"
            className="block  py-3 font-semibold"
          >
            Hire me
          </a>
        </li>
      </div>
    </nav>
  );
};
