import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-medium mb-8 text-center px-4 max-w-full">
      <span className='inline-block break-words hyphens-auto'> 
        {children}
      </span>
    </h2>
  );
}
