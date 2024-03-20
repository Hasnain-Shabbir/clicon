import React from 'react';

const LogoIcon = ({ size = 48, color = '#FA8232' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24zm-12 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-12 8a8 8 0 100-16 8 8 0 000 16z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default LogoIcon;
