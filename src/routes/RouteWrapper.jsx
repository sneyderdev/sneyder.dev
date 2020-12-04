import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

const RouteWrapper = ({ component: Component, hasFooter, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout hasFooter={hasFooter}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
