import React from 'react';
import Link from 'next/link';
import { Apple } from '@/icons';

interface MobileAppProps {
  color: 'primary' | 'gray' | 'primaryLight';
}

const MobileApp = (props: MobileAppProps) => {
  const { color } = props;
  const bgColor =
    color === 'primary'
      ? 'bg-primary-500'
      : color === 'gray'
        ? 'bg-c-gray-800'
        : 'bg-primary-100';
  const textColor = color === 'primaryLight' ? 'text-black' : 'text-white';

  return (
    <Link
      href="#"
      className={`flex w-max items-center rounded-[3px] px-5 py-4 ${textColor} ${bgColor}`}
    >
      <span>
        <Apple color={color === 'primaryLight' ? '#191C1F' : '#fff'} />
      </span>
      <div className="ml-4">
        <p className="text-[11px]">Get it now</p>
        <h5 className="text-sm font-semibold leading-snug">App Store</h5>
      </div>
    </Link>
  );
};

export default MobileApp;
