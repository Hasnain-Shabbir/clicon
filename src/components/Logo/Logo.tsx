'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/icons';

interface LogoProps {
  color?: 'primary' | 'gray';
}

const Logo = (props: LogoProps) => {
  const { color } = props;
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link
      href="/"
      className="flex w-max items-center text-lg font-bold uppercase leading-none sm:text-3xl"
    >
      <span className="mr-2">
        <LogoIcon
          size={screenWidth <= 640 ? 32 : 48}
          color={color === 'gray' ? '#191C1F' : '#FA8232'}
        />
      </span>
      clicon
    </Link>
  );
};

export default Logo;
