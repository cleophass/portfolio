import React from 'react';
import Menu from '@/components/Menu/Menu';
const TestingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className=" dark:bg-gray-900" lang="en" suppressHydrationWarning>
      <body>
        <Menu /> 
          {children}
      </body>
    </html>
  );
};

export default TestingLayout;
