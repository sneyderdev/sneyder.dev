import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Grid, GridBoundaries, Blur } from '../shared';

const Layout = ({ children, hasArrow, isHome }) => {
  const {
    state: { menu },
  } = useContext(AppContext);

  return (
    <>
      <Grid isHome={isHome}>
        {menu && <Blur />}
        <GridBoundaries />
        <Header hasArrow={hasArrow} />
        {children}
        {!isHome && <Footer />}
      </Grid>
    </>
  );
};

export default Layout;
