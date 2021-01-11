import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Posts, PinnedMessage } from '../components';

import { TitleContainer, Title } from '../shared';

const Blog = () => {
  const {
    state: { pinnedMessages },
  } = useContext(AppContext);

  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'Blog'
  );

  return (
    <>
      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Blog</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={message} />

      <Posts />
    </>
  );
};

export default Blog;
