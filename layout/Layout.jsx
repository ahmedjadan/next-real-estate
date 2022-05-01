import Footer from '@components/Footer/Footer';
import Navigation from '@components/Header/Navigation';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navigation />
      <main className="flex-1 mt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
