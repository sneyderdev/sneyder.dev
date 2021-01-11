import React from 'react';

import { Container, MainSection } from '../../shared';

const Posts = ({ posts }) => {
  return (
    <MainSection>
      <Container>
        <div className='fadeIn delay-6'>
          {posts && posts.map((post) => <Posts post={post} key={post._id} />)}
        </div>
      </Container>
    </MainSection>
  );
};

export default Posts;
