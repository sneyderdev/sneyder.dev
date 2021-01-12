import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import {
  Post,
  PostBackground,
  PostContent,
  PostTag,
} from './SinglePost.styles';

const SinglePost = ({ post }) => {
  const { slug, title, publishedAt, description, tags, mainImage } = post;

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
        <div>
          {tags.map((tag) => (
            <PostTag to={`blog/tag/${tag.name.toLowerCase()}`} key={tag._id}>
              <span>#</span>
              <span>{tag.name}</span>
            </PostTag>
          ))}
        </div>
      </PostContent>
    </Post>
  );
};

export default SinglePost;
