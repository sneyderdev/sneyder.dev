import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Projects, PinnedMessage } from '../components';

import { TitleContainer, Title } from '../shared';

const Portfolio = () => {
  const {
    state: { pinnedMessages, projects },
  } = useContext(AppContext);

  return (
    <>
      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Portfolio</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={pinnedMessages.projects} />

      <Projects projects={projects} />
    </>
  );
};

export default Portfolio;
