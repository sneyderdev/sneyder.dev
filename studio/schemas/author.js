import { BsPerson } from 'react-icons/bs';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: BsPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
