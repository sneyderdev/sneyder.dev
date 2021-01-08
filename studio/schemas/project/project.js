import { AiOutlineProject } from 'react-icons/ai';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: AiOutlineProject,
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
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'codeUrl',
      title: 'Code URL',
      type: 'url',
    },
    {
      name: 'previewUrl',
      title: 'Preview URL',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{ type: 'technology' }],
    },
    {
      name: 'about',
      title: 'About',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
};
