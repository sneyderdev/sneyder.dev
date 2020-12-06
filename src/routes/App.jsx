import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import RouteWrapper from './RouteWrapper';
import { Home, Portfolio, ProjectInfo, About, NotFound } from '../containers';
import { GlobalStyle, theme } from '../shared';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
          <RouteWrapper
            exact
            path='/portfolio'
            component={Portfolio}
            hasFooter
          />
          <RouteWrapper exact path='/about' component={About} hasFooter />
          <RouteWrapper component={NotFound} hasFooter />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
