import React from 'react';
import { Header, Footer } from '.';

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
