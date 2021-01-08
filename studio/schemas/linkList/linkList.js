import React from 'react';
import { RiPlayListAddLine } from 'react-icons/ri';
import Preview from './components/Preview';

export default {
  title: 'Link List',
  name: 'linkList',
  type: 'object',
  icon: RiPlayListAddLine,
  fields: [
    {
      title: 'List Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'listItem',
        },
      ],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare: ({ items }) => {
      return {
        title: 'Link List',
        media: () => <RiPlayListAddLine />,
        extendedPreview: <Preview items={items} />,
      };
    },
  },
};
