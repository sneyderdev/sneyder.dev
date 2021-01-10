import React from 'react';
import { BsCardChecklist } from 'react-icons/bs';
import Preview from './components/Preview';

export default {
  title: 'Link List',
  name: 'linkList',
  type: 'object',
  icon: BsCardChecklist,
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
        media: () => <BsCardChecklist />,
        extendedPreview: <Preview items={items} />,
      };
    },
  },
};
