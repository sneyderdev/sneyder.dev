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
      description: 'Name of the project.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug for the URL. Just click "Generate".',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Little description of the project. (This is used as a Pinned Message).',
      type: 'text',
    },
    {
      name: 'codeUrl',
      title: 'Code URL',
      description: `Link of the project's repository.`,
      type: 'url',
    },
    {
      name: 'previewUrl',
      title: 'Preview URL',
      description: 'Link of the deployed project.',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Images',
      description: 'Images showing the project.',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'stack',
      title: 'Stack',
      description: 'Technologies used in the project.',
      type: 'array',
      of: [{ type: 'technology' }],
    },
    {
      name: 'about',
      title: 'About',
      description:
        'Whatever you wanna say about the project. (Story, challenges, etc).',
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
