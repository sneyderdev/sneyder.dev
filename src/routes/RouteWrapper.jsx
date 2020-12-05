import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

const RouteWrapper = ({ component: Component, hasFooter, hasArrow, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout hasFooter={hasFooter} hasArrow={hasArrow}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
