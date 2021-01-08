/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import initialState from '../initialState';
import sanityClient from '../sanityClient';

import { Projects, PinnedMessage, Loader } from '../components';

import { TitleContainer, Title } from '../shared';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
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
      .then((data) => {
        setProjects(data);
        setLoading(!loading);
      })
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

      {loading ? <Loader /> : <Projects projects={projects} />}
    </>
  );
};

export default Portfolio;
