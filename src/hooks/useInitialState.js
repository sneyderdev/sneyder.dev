/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import initialState from '../initialState';
import sanityClient from '../sanityClient';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    sanityClient
      .fetch(
        `{
          'projects': *[_type == 'project'] {
            _id,
            name,
            codeUrl,
            previewUrl,
            'slug': slug.current,
            'images': images[0].asset->url
          },
          'pinnedMessages': *[_type == 'pinnedMessage'] {
            page,
            message,
          }
        }`
      )
      .then((data) => {
        setState({
          ...state,
          projects: data.projects,
          pinnedMessages: data.pinnedMessages,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return {
    state,
    setState,
  };
};

export default useInitialState;
