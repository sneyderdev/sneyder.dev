import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from '../context/AppContext';
import { MenuContextProvider } from '../context/MenuContext';

import RouteWrapper from './RouteWrapper';
import { SleepScreen, ScrollToTop } from '../components';
import {
  Home,
  Portfolio,
  ProjectInfo,
  Blog,
  PostInfo,
  TagInfo,
  About,
  NotFound,
} from '../containers';
import { theme, GlobalStyle, Background } from '../shared';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <MenuContextProvider>
            <Router>
              <GlobalStyle />
              <Background />
              <SleepScreen />
              <ScrollToTop />
              <Switch>
                <RouteWrapper exact path='/' component={Home} isHome />
                <RouteWrapper exact path='/portfolio' component={Portfolio} />
                <RouteWrapper
                  exact
                  path='/portfolio/:slug'
                  component={ProjectInfo}
                  hasArrow
                />
                <RouteWrapper exact path='/blog' component={Blog} />
                <RouteWrapper
                  exact
                  path='/blog/:slug'
                  component={PostInfo}
                  hasArrow
                  isPost
                />
                <RouteWrapper
                  exact
                  path='/blog/tag/:slug'
                  component={TagInfo}
                />
                <RouteWrapper exact path='/about' component={About} />
                <RouteWrapper component={NotFound} />
              </Switch>
            </Router>
          </MenuContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
