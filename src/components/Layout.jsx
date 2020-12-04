import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, hasFooter }) => {
  return (
    <div>
      <Header />
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
