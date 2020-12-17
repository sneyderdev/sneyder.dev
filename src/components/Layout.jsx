import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';

import { Header, Footer } from '.';

import { Blur } from '../shared';

const HomeGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children, hasFooter, hasArrow }) => {
  const location = useLocation();
  const { menu } = useContext(MenuContext);

  return (
    <>
      {location.pathname === '/' ? (
        <HomeGrid>
          {menu && <Blur />}
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </HomeGrid>
      ) : (
        <Grid>
          {menu && <Blur />}
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </Grid>
      )}
    </>
  );
};

export default Layout;
