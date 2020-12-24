import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from '../components';

const RouteWrapper = ({ component: Component, hasArrow, isHome, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout hasArrow={hasArrow} isHome={isHome}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
