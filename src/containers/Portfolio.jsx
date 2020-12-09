import React from 'react';
import initialState from '../../initialState';
import PinnedMessage from '../components/PinnedMessage';
import { Projects } from '../components';

const Portfolio = () => {
  return (
    <>
      <section className='header'>
        <div className='header__title'>
          <h1 className='slideUp'>Portfolio</h1>
        </div>
      </section>
      <PinnedMessage message={initialState.pinnedMessages.projects} />
      <Projects projects={initialState.projects} />
    </>
  );
};

export default Portfolio;
