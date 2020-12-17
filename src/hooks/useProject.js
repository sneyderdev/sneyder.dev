import { useReducer, useEffect } from 'react';
import initialState from '../../initialState';

const useProject = (projectName, setLoading) => {
  const projectReducer = (state, action) => {
    switch (action.type) {
      case 'GET_PROJECT':
        return {
          project:
            state.projects.find((project) =>
              project.name.toLowerCase().startsWith(action.payload[0])
            ) || {},
        };
      default:
        return state;
    }
  };

  const [project, dispatch] = useReducer(projectReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_PROJECT', payload: projectName });
    setLoading(false);
  }, []);

  return project;
};

export default useProject;
