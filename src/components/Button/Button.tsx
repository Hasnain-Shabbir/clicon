'use client';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { tw } from '@/utils/utils';

import { colors } from './button.styles';

interface ButtonProps {
  children: ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  largeSize?: boolean;
  startIcon?: ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  variant: 'text' | 'contained' | 'outlined';
}

const Button = (props: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    children,
    color,
    disabled,
    endIcon,
    href,
    fullWidth,
    startIcon,
    largeSize,
    target,
    variant,
  } = props;

  const btnDisabled =
    href?.length && disabled ? false : disabled ? true : false;

  const btnWarning =
    color === 'warning'
      ? `text-gray-900 hover:bg-warning-400 hover:border-warning-400`
      : ``;

  const btnOutlined = btnDisabled
    ? tw`cursor-not-allowed border-${color}-200 bg-transparent text-${color}-200 focus:ring-0`
    : tw`border-${color}-500 bg-transparent text-${color}-500 hover:border-${color}-600 hover:bg-${color}-50 hover:text-${color}-600 focus:ring focus:ring-${color}-100`;

  const btnContained = btnDisabled
    ? tw`cursor-not-allowed border-${color}-200 bg-${color}-200 text-white hover:border-${color}-200 focus:ring-0`
    : tw`border-${color}-500 bg-${color}-500 text-white hover:border-${color}-600 hover:bg-${color}-600 focus:ring focus:ring-${color}-200 ${btnWarning}`;

  const btnSize = largeSize ? 'px-8' : 'px-6';
  const btnVariant = variant === 'contained' ? btnContained : btnOutlined;
  const outlinedIconColor = btnDisabled
    ? colors[color][200]
    : colors[color][500];
  const hoverStyle = isHovered ? colors[color][600] : outlinedIconColor;
  const btnWarnStyle = color === 'warning' ? 'black' : 'white';
  const btnWarnDisabled = btnDisabled ? 'white' : btnWarnStyle;

  const buttonElement = href?.length ? Link : 'button';
  const buttonProps = {
    onMouseEnter: () => setIsHovered(disabled ? false : true),
    onMouseLeave: () => setIsHovered(false),
    className: tw`flex items-center justify-center rounded-base border-2 py-4 font-bold uppercase transition-all ${btnSize} ${btnVariant} ${fullWidth ? 'w-full' : ''}`,
    disabled: btnDisabled && !href,
    role: 'button',
    'aria-disabled': btnDisabled ? true : undefined,
    'aria-label': children,
  };
  const linkProps = { ...buttonProps, href, target, 'aria-label': children };

  const applyColorToSVGIcon = (icon: ReactNode) => {
    if (React.isValidElement(icon)) {
      const clonedElement = React.cloneElement(
        icon as React.ReactElement<{ color?: string }>,
        { color: variant === 'outlined' ? hoverStyle : btnWarnDisabled },
      );
      return clonedElement;
    }
    return icon;
  };

  return React.createElement(
    buttonElement,
    href ? linkProps : (buttonProps as any),
    <>
      <span className="mr-3">{applyColorToSVGIcon(startIcon)}</span>
      {children}
      <span className="ml-3">{applyColorToSVGIcon(endIcon)}</span>
    </>,
  );
};

export default Button;
