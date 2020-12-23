import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

const RouteWrapper = ({
  component: Component,
  hasFooter,
  hasArrow,
  isHome,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout hasFooter={hasFooter} hasArrow={hasArrow} isHome={isHome}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
