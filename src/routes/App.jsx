import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Portfolio, ProjectInfo, About, NotFound } from '../containers';
import RouteWrapper from './RouteWrapper';

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWrapper exact path='/' component={Home} />
        <RouteWrapper
          exact
          path='/portfolio/:name'
          component={ProjectInfo}
          hasFooter
          hasArrow
        />
        <RouteWrapper exact path='/portfolio' component={Portfolio} hasFooter />
        <RouteWrapper exact path='/about' component={About} hasFooter />
        <RouteWrapper component={NotFound} hasFooter />
      </Switch>
    </Router>
  );
};

export default App;
