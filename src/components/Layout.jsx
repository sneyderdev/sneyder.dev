import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, hasFooter, hasArrow }) => {
  return (
    <div>
      <Header hasArrow={hasArrow} />
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
