import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Container from '../containers';
import Layout from '../components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Container.Home} />
          <Route exact path='/portfolio' component={Container.Portfolio} />
          <Route exact path='/about' component={Container.About} />
          <Route component={Container.NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
