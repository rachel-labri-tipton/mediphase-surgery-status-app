import Footer from '@/components/Footer';
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
