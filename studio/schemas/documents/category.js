import { BsTag } from 'react-icons/bs';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BsTag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
