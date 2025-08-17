import Footer from '@/components/Footer';
import Header from '@/components/Header';
import useAuth from '@/hooks/useAuth';
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const { user} =useAuth()
  return (
    <div className="flex flex-col h-screen w-full">
      <Header role={user?.role || "guest"} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
