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
            'slug': slug.current,
            description,
            codeUrl,
            previewUrl,
            'images': images[]{
              _key,
              'url': asset->url,
            },
            'stack': stack[]{
              _key,
              name,
              'icon': icon.asset->url,
            },
            about,
          },
          'posts': *[_type == 'post'] {
            _id,
            title,
            'slug': slug.current,
            description,
            'cover': cover.asset->url,
            'tags': tags[]->{
              _id,
              name,
            },
            publishedAt,
            body,
          },
          'pinnedMessages': *[_type == 'pinnedMessage'] {
            page,
            message,
          },
          'icons': *[_type == 'asset' && type == 'Icons'][0].assets {
            alt,
            'url': asset->url,
          },
          'author': *[_type == 'author'][0] {
            'image': {
              'alt': image.alt,
              'url': image.asset->url,
            },
            'cv': cv.asset->url,
            bio,
          },
        }`
      )
      .then((data) => {
        setState({
          ...state,
          projects: data.projects,
          posts: data.posts,
          pinnedMessages: data.pinnedMessages,
          icons: data.icons,
          author: data.author,
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
