import { BiLinkExternal } from 'react-icons/bi';
import { GoLink } from 'react-icons/go';

import IconLinkRenderer from './components/IconLinkRenderer';

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Icon Link',
            name: 'iconLink',
            type: 'object',
            blockEditor: {
              icon: BiLinkExternal,
              render: IconLinkRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Icon',
                name: 'icon',
                type: 'image',
              },
            ],
          },
          {
            title: 'Internal URL',
            name: 'internalUrl',
            type: 'object',
            blockEditor: {
              icon: GoLink,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    {
      type: 'linkList',
    },
    {
      type: 'iconList',
    },
  ],
};
