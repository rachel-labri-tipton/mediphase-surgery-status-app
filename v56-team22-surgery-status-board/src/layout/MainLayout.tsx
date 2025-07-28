import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const role = 'surgical'; // Replace with actual role logic
  return (
    <div className="flex flex-col h-screen w-full">
      <Header role={role} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
