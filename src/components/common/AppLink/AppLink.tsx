'use client';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/icons';
import { colors, Colors } from '../Button/button.styles';

interface AppLinkProps {
  children: ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  href: string;
}

const AppLink = (props: AppLinkProps) => {
  const { children, color, href } = props;
  const [isHovered, setIsHovered] = useState(false);

  const currentTextColor = isHovered
    ? `text-${color}-600`
    : `text-${color}-500`;
  const afterColor = isHovered ? `hover:after:bg-${color}-600` : ``;

  const iconColor = (color: keyof Colors) => {
    const selectedColor = isHovered ? colors[color][600] : colors[color][500];
    return selectedColor;
  };

  return (
    <Link
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      href={href}
      className={`relative flex w-max items-center justify-center py-1.5 text-sm font-medium ${currentTextColor} ${afterColor} transition-all duration-75 after:invisible after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 after:transition-all after:content-[''] hover:after:visible hover:after:opacity-100`}
    >
      {children}
      <span className="ml-2">
        <ArrowRight size="20" color={iconColor(color)} />
      </span>
    </Link>
  );
};

export default AppLink;
