import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-4xl font-medium mb-8 text-center max-w-full break-words hyphens-auto'> 
        {children}
    </h2>
  );
}
