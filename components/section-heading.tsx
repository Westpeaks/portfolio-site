import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl sm:2xl font-medium mb-8 text-center">
      <span className='inline-block break-words hyphens-auto'> 
        {children}
      </span>
    </h2>
  );
}
