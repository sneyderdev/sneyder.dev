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
            description,
            codeUrl,
            previewUrl,
            'slug': slug.current,
            'images': images[]{
              _key,
              'url': asset->url
            },
            about,
            'stack': stack[]{
              _key,
              name,
              'icon': icon.asset->url
            }
          },
          'pinnedMessages': *[_type == 'pinnedMessage'] {
            page,
            message,
          },
          'author': *[_type == 'author'][0] {
            'image': {
              'alt': image.alt,
              'url': image.asset->url
            },
            'cv': cv.asset->url,
            bio,
          },
          'icons': *[_type == 'asset' && type == 'Icons'][0].assets {
            alt,
            'url': asset->url
          },
          'posts': *[_type == 'post'] {
            _id,
            title,
            description,
            publishedAt,
            'tags': tags[]->{
              _id,
              name
            },
            'mainImage': mainImage.asset->url,
            'slug': slug.current,
            body
          }
        }`
      )
      .then((data) => {
        setState({
          ...state,
          projects: data.projects,
          pinnedMessages: data.pinnedMessages,
          author: data.author,
          icons: data.icons,
          posts: data.posts,
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
