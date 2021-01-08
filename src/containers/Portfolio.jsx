/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import initialState from '../initialState';
import sanityClient from '../sanityClient';

import { Projects, PinnedMessage } from '../components';

import { TitleContainer, Title } from '../shared';

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
          _id,
          name,
          codeUrl,
          previewUrl,
          'slug': slug.current,
          'images': images[0].asset->url
        }`
      )
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Portfolio</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={initialState.pinnedMessages.projects} />

      <Projects projects={projects} />
    </>
  );
};

export default Portfolio;
