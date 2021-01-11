import React from 'react';
import PortableText from '@sanity/block-content-to-react';

const SinglePost = ({ post }) => {
  const { slug, title, publishedAt, description, categories } = post;

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <div>
      <h2>{title}</h2>
      <span>
        {new Date(publishedAt).toLocaleDateString('en-US', dateOptions)}
      </span>
      <PortableText blocks={description} />
      <div>{categories}</div>
    </div>
  );
};

export default SinglePost;
