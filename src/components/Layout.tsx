import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Additional scroll-to-top mechanism for extra reliability
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content" style={{ paddingTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;