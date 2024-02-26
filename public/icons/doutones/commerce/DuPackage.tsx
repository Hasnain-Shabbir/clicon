import React from 'react';

const DuPackage = ({ size = '24', color = '#191C1F' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.2"
        d="M3.10313 6.99365C3.03519 7.11033 2.9996 7.24301 3 7.37803V16.6218C3.00072 16.7553 3.03663 16.8863 3.10412 17.0015C3.1716 17.1167 3.26827 17.2121 3.38438 17.278L11.6344 21.9187C11.7456 21.9822 11.8719 22.0146 12 22.0124L12.0844 11.9999L3.10313 6.99365Z"
        fill={color}
      />
      <path
        d="M21 16.622V7.37824C20.9993 7.24472 20.9634 7.11375 20.8959 6.99853C20.8284 6.88331 20.7317 6.78793 20.6156 6.72199L12.3656 2.08137C12.2545 2.01719 12.1284 1.9834 12 1.9834C11.8716 1.9834 11.7455 2.01719 11.6344 2.08137L3.38437 6.72199C3.26827 6.78793 3.1716 6.88331 3.10411 6.99853C3.03663 7.11375 3.00072 7.24472 3 7.37824V16.622C3.00072 16.7555 3.03663 16.8865 3.10411 17.0017C3.1716 17.1169 3.26827 17.2123 3.38437 17.2782L11.6344 21.9189C11.7455 21.983 11.8716 22.0168 12 22.0168C12.1284 22.0168 12.2545 21.983 12.3656 21.9189L20.6156 17.2782C20.7317 17.2123 20.8284 17.1169 20.8959 17.0017C20.9634 16.8865 20.9993 16.7555 21 16.622V16.622Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5938 14.2969V9.42188L7.5 4.40625"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8968 6.99365L12.0843 11.9999L3.10303 6.99365"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0844 12L12 22.0125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DuPackage;
