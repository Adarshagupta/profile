'use client';

import React from 'react';
import NavigationTransition from '@/components/NavigationTransition';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <NavigationTransition>
      {children}
    </NavigationTransition>
  );
};

export default Template; 