import { useState, useEffect } from 'react';
import client from '../client';

const useProject = (slug, setLoading) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == '${slug}'][0]{
          _id,
          name,
          description,
          codeUrl,
          previewUrl,
          'images': images[]{
            _key,
            'url': asset->url
          },
          about,
          'stack': stack[]{
            _key,
            name,
            'icon': Icon.asset->url
          }
        }`
      )
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return project;
};

export default useProject;
