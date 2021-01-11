import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import { Post, PostBackground, PostContent } from './SinglePost.styles';

const SinglePost = ({ post }) => {
  const { slug, title, publishedAt, description, categories, mainImage } = post;

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <Post to={`blog/${slug}`}>
      <PostBackground image={mainImage} />
      <PostContent>
        <h2>{title}</h2>
        <span>
          {new Date(publishedAt).toLocaleDateString('en-US', dateOptions)}
        </span>
        <PortableText blocks={description} />
        <div>{categories}</div>
      </PostContent>
    </Post>
  );
};

export default SinglePost;
