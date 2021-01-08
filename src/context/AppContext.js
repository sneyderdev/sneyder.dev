import React from 'react';
import useInitialState from '../hooks/useInitialState';

import Loader from '../components/Loader/Loader';

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const initialState = useInitialState();
  const hasProjects = Object.keys(initialState.state.projects).length;

  return (
    <>
      {hasProjects > 0 ? (
        <AppContext.Provider value={initialState}>
          {children}
        </AppContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AppContext;
