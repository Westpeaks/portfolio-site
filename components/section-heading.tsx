import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl sm:text-2xl font-medium mb-8 text-center break-words">
      {children}
    </h2>
  );
}
