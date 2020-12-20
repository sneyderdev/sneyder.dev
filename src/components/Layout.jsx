import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';

import { Header, Footer } from '.';

import { Blur, setPosition } from '../shared';

const HomeGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;

  @media screen and (min-width: 1024px) {
    max-width: 1900px;
    margin: 0 auto;
    position: relative;
    grid-template-columns:
      [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
        auto,
        850px
      )
      [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
    justify-content: center;
    ${setPosition('fixed')};
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 1024px) {
    max-width: 1900px;
    margin: 0 auto;
    position: relative;
    grid-template-columns:
      [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
        auto,
        850px
      )
      [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
    justify-content: center;
  }
`;

const GridBoundaries = styled.div`
  @media screen and (min-width: 1024px) {
    grid-column: margin2-start / margin3-end;
    border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
    ${setPosition('absolute', -10)};
  }
`;

const Layout = ({ children, hasFooter, hasArrow }) => {
  const location = useLocation();
  const { menu } = useContext(MenuContext);

  return (
    <>
      {location.pathname === '/' ? (
        <HomeGrid>
          {menu && <Blur />}
          <GridBoundaries />
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </HomeGrid>
      ) : (
        <Grid>
          {menu && <Blur />}
          <GridBoundaries />
          <Header hasArrow={hasArrow} />
          {children}
          {hasFooter && <Footer />}
        </Grid>
      )}
    </>
  );
};

export default Layout;
