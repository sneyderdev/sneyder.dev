import React, { useContext } from 'react';
import MenuContext from '../context/MenuContext';

import { Header, Footer } from '.';

import { Grid, GridBoundaries, Blur } from '../shared';

const Layout = ({ children, hasArrow, isHome }) => {
  const { menu } = useContext(MenuContext);

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
