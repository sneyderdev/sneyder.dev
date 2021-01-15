import React from 'react';

import {
  Post,
  PostBackground,
  PostContent,
  PostTitle,
} from './SinglePost.styles';
import { Tag } from '../../shared';

const SinglePost = ({ post }) => {
  const { title, slug, description, cover, tags, publishedAt } = post;

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <Post>
      <PostBackground coverImage={cover} />
      <PostContent>
        <PostTitle to={`/blog/${slug}`}>
          <h2>{title}</h2>
        </PostTitle>
        <span>
          {new Date(publishedAt).toLocaleDateString('en-US', dateOptions)}
        </span>
        <p>{description}</p>
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
