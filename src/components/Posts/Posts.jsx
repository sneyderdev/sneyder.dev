import React from 'react';

import SinglePost from '../SinglePost/SinglePost';

import { Container, MainSection } from '../../shared';

const Posts = ({ posts }) => {
  return (
    <MainSection>
      <Container>
        <div className='fadeIn delay-6'>
          {posts &&
            posts.map((post) => <SinglePost post={post} key={post._id} />)}
        </div>
      </Container>
    </MainSection>
  );
};

export default Posts;
