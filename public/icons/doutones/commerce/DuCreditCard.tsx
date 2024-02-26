import React from 'react';

const DuCreditCard = ({ size = '24', color = '#191C1F' }) => {
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
        d="M2.25 9.08447H21.75V18.0001C21.75 18.199 21.671 18.3898 21.5303 18.5304C21.3897 18.6711 21.1989 18.7501 21 18.7501H3C2.80109 18.7501 2.61032 18.6711 2.46967 18.5304C2.32902 18.3898 2.25 18.199 2.25 18.0001V9.08447Z"
        fill={color}
      />
      <path
        d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 15.75H18.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 15.75H12.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 9.08447H21.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DuCreditCard;
