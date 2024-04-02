import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className="mx-auto max-w-container px-5">{children}</div>;
};

export default Container;
