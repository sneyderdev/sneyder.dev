import React from 'react';
import initialState from '../../initialState';

import PinnedMessage from '../components/PinnedMessage';
import { Projects } from '../components';

import { TitleContainer, Title } from '../shared';

const Portfolio = () => {
  return (
    <>
      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Portfolio</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={initialState.pinnedMessages.projects} />

      <Projects projects={initialState.projects} />
    </>
  );
};

export default Portfolio;
