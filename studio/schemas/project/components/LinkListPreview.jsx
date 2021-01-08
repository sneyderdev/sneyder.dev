import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../../src/client';

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const LinkListPreview = ({ items }) => {
  return (
    <div style={{ padding: '10px', color: '#fff', background: '#000' }}>
      {items &&
        items.map((item) => (
          <div
            key={item._key}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={urlFor(item.icon)}
              alt={item.text}
              style={{ width: '15px', height: '15px', marginRight: '10px' }}
            />
            <span>{item.text}</span>
          </div>
        ))}
    </div>
  );
};

export default LinkListPreview;
