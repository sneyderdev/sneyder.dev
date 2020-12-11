import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Footer } from '.';

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

  return (
    <>
      {location.pathname === '/' ? (
        <HomeGrid>
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </HomeGrid>
      ) : (
        <Grid>
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </Grid>
      )}
    </>
  );
};

export default Layout;
