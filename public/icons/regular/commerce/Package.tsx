import React from 'react';

const Package = ({ size = '24', color = '#191C1F' }) => {
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
        d="M35 27.703V12.297a1.266 1.266 0 00-.64-1.094L20.61 3.47a1.219 1.219 0 00-1.22 0L5.64 11.203A1.266 1.266 0 005 12.297v15.406a1.266 1.266 0 00.64 1.094l13.75 7.734a1.22 1.22 0 001.22 0l13.75-7.734a1.266 1.266 0 00.64-1.094v0z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M27.656 23.828v-8.125L12.5 7.343"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M34.828 11.656L20.141 20 5.17 11.656M20.14 20L20 36.688"
      ></path>
    </svg>
  );
};

export default Package;
