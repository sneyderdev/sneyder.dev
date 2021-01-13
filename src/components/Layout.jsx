import React, { useContext } from 'react';
import MenuContext from '../context/MenuContext';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Grid, GridBoundaries, Blur } from '../shared';

const Layout = ({ children, hasArrow, isHome, isPost }) => {
  const { menu } = useContext(MenuContext);

  return (
    <>
      <Grid isHome={isHome}>
        {menu && <Blur />}
        <GridBoundaries />
        <Header hasArrow={hasArrow} />
        {children}
        {!isHome && <Footer isPost={isPost} />}
      </Grid>
    </>
  );
};

export default Layout;
