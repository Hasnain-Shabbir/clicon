import React from 'react';

interface BadgeProps {
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';
  title: string;
}

const Badge = (props: BadgeProps) => {
  const { color, title } = props;

  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
    gray: 'bg-c-gray-400',
  };
  const selectColor = colors[color];
  const textColor = selectColor.includes('warning')
    ? 'text-black'
    : 'text-white';

  return (
    <span
      className={`w-max rounded-sm ${selectColor} px-2.5 py-1.5 text-xs font-semibold uppercase leading-none ${textColor}`}
    >
      {title}
    </span>
  );
};

export default Badge;
