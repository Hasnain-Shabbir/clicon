import React from 'react';

const Trophy = ({ size = '24', color = '#191C1F' }) => {
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
        d="M8.75 8.75v8.61c0 6.203 4.969 11.343 11.172 11.39A11.251 11.251 0 0031.25 17.5V8.75A1.25 1.25 0 0030 7.5H10a1.25 1.25 0 00-1.25 1.25zM15 35h10M20 28.75V35"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M30.969 20H32.5a5 5 0 005-5v-2.5a1.25 1.25 0 00-1.25-1.25h-5M9.063 20H7.484a5 5 0 01-5-5v-2.5a1.25 1.25 0 011.25-1.25h5"
      ></path>
    </svg>
  );
};

export default Trophy;
