import React from 'react';

import SinglePost from '../SinglePost/SinglePost';

import PostsContainer from './Posts.styles';
import { Container, MainSection } from '../../shared';

const Posts = ({ posts }) => {
  return (
    <MainSection>
      <Container>
        <PostsContainer className='fadeIn delay-6'>
          {posts &&
            posts.map((post) => <SinglePost post={post} key={post._id} />)}
        </PostsContainer>
      </Container>
    </MainSection>
  );
};

export default Posts;
