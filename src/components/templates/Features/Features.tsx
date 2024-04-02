import React from 'react';
import { CreditCard, Headphones, Package, Trophy } from '@/icons';
import { Container, FeatureCard } from '@/components';

interface FeatureDataType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: FeatureDataType[] = [
  {
    id: 1,
    title: 'Fasted Delivery',
    description: 'Delivery in 24/H',
    icon: <Package size="40" />,
  },
  {
    id: 2,
    title: '24 Hours Return',
    description: '100% money-back guarantee',
    icon: <Trophy size="40" />,
  },
  {
    id: 3,
    title: 'Secure Payment',
    description: 'Your money is safe',
    icon: <CreditCard size="40" />,
  },
  {
    id: 4,
    title: 'Support 24/7',
    description: 'Live contact/message',
    icon: <Headphones size="40" />,
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center ">
          <div className="flex w-full items-start justify-between rounded-md border border-c-gray-100 p-4 lg:p-8">
            {featuresData.map((feature) => (
              <FeatureCard
                data={feature}
                key={feature.id}
                styles="pl-10 pr-10 border-t-c-gray-100 border-l border-t-0 first:border-l-0 first:pl-0"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
