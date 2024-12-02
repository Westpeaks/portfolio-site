import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-medium mb-8 text-center sm:text-2xl sm:flex sm:flex-wrap">
      {children}
    </h2>
  );
}
