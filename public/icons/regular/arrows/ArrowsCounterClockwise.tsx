import React from 'react';

const ArrowsCounterClockwise = ({ size = '24', color = '#191C1F' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.48126 9.34686H2.98126V4.84686"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.8313 6.16873C17.0659 5.40224 16.1569 4.79417 15.1563 4.37929C14.1558 3.9644 13.0832 3.75085 12 3.75085C10.9168 3.75085 9.84427 3.9644 8.84369 4.37929C7.8431 4.79417 6.93413 5.40224 6.16876 6.16873L2.98126 9.34685"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5187 14.6531H21.0187V19.1531"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.16876 17.8313C6.93413 18.5977 7.8431 19.2058 8.84368 19.6207C9.84427 20.0356 10.9168 20.2491 12 20.2491C13.0832 20.2491 14.1558 20.0356 15.1563 19.6207C16.1569 19.2058 17.0659 18.5977 17.8313 17.8313L21.0188 14.6531"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowsCounterClockwise;
