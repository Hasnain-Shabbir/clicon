import React from 'react';

const CreditCard = ({ size = '24', color = '#191C1F' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M35 8.75H5c-.69 0-1.25.56-1.25 1.25v20c0 .69.56 1.25 1.25 1.25h30c.69 0 1.25-.56 1.25-1.25V10c0-.69-.56-1.25-1.25-1.25zM26.25 26.25h5M18.75 26.25h2.5M3.75 15.14h32.5"
      ></path>
    </svg>
  );
};

export default CreditCard;
