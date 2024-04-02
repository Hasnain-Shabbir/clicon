import React from 'react';

interface FeatureCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  styles?: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  const { icon, title, description } = props.data;

  return (
    <div className={`flex items-center ${props.styles}`}>
      <span>{icon}</span>
      <div className="ml-4 text-base leading-snug">
        <p className="text-medium mb-1 uppercase">{title}</p>
        <p className="text-wrap text-c-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
