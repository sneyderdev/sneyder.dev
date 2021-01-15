import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';

import { Posts, PinnedMessage } from '../components';

import { TitleContainer, Title } from '../shared';

const TagInfo = () => {
  const {
    state: { pinnedMessages, posts },
  } = useContext(AppContext);

  const { slug } = useParams();

  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'Blog'
  );

  const postsFiltered = posts.filter((post) =>
    post.tags.some((tag) => tag.name.toLowerCase() === slug)
  );

  const { name: tagName } = postsFiltered[0].tags.find(
    (tag) => tag.name.toLowerCase() === slug
  );

  return (
    <>
      <Helmet>
        <title>#{tagName} - Sneyder Barreto</title>
      </Helmet>

      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>
            <span>#</span>
            <span>{tagName}</span>
          </h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={message} />

      <Posts posts={postsFiltered} />
    </>
  );
};

export default TagInfo;
