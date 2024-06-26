import React from 'react';

const Headphones = ({ size = '24', color = '#191C1F' }) => {
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
        d="M35.234 21.25h-5a2.5 2.5 0 00-2.5 2.5V30a2.5 2.5 0 002.5 2.5h2.5a2.5 2.5 0 002.5-2.5v-8.75zm0 0a15 15 0 00-15.125-15A15 15 0 005 21.25V30a2.5 2.5 0 002.5 2.5H10a2.5 2.5 0 002.5-2.5v-6.25a2.5 2.5 0 00-2.5-2.5H5"
      ></path>
    </svg>
  );
};

export default Headphones;
