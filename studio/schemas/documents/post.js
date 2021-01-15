import { BsFilePost } from 'react-icons/bs';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BsFilePost,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the post.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug for the URL. Just click "Generate".',
      type: 'slug',
      options: {
        source: 'title',
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
      name: 'author',
      title: 'Author',
      description: 'Author of the post.',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'cover',
      title: 'Cover Image',
      description:
        'Cover image of the post (make sure to upload an image 800x400px).',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'Tags related to the post.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'Date when you are publishing this post.',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Body of the post.',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'cover',
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author && `by ${author}`,
      };
    },
  },
};
