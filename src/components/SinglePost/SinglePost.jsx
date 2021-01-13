import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import {
  Post,
  PostBackground,
  PostContent,
  PostTitle,
} from './SinglePost.styles';
import { Tag } from '../../shared';

const SinglePost = ({ post }) => {
  const { slug, title, publishedAt, description, tags, mainImage } = post;

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <Post>
      <PostBackground image={mainImage} />
      <PostContent>
        <PostTitle to={`/blog/${slug}`}>
          <h2>{title}</h2>
        </PostTitle>
        <span>
          {new Date(publishedAt).toLocaleDateString('en-US', dateOptions)}
        </span>
        <PortableText blocks={description} />
        <div>
          {tags.map((tag) => (
            <Tag to={`/blog/tag/${tag.name.toLowerCase()}`} key={tag._id}>
              <span>#</span>
              <span>{tag.name}</span>
            </Tag>
          ))}
        </div>
      </PostContent>
    </Post>
  );
};

export default SinglePost;
