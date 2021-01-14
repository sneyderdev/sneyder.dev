import { GoFileMedia } from 'react-icons/go';

export default {
  title: 'Asset',
  name: 'asset',
  type: 'document',
  icon: GoFileMedia,
  fields: [
    {
      title: 'Assets Type',
      name: 'type',
      description: 'Type of assets you wanna upload to the Studio.',
      type: 'string',
    },
    {
      title: 'Import Assets',
      name: 'assets',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              title: 'Alternative Text',
              name: 'alt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
