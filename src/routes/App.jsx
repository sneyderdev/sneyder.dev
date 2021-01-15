import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { AppContextProvider } from '../context/AppContext';
import { MenuContextProvider } from '../context/MenuContext';

import favicon196 from '../assets/favicon-196.png';

import RouteWrapper from './RouteWrapper';
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
      <Helmet>
        <title>Sneyder Barreto</title>
        <meta
          name='description'
          content="📌 I'm Sneyder Barreto. I like creating thing with web technologies."
        />
        <meta name='author' content='Sneyder Barreto' />
        <link rel='icon' href={favicon196} sizes='196x196' />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background />
        <AppContextProvider>
          <MenuContextProvider>
            <Router>
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
