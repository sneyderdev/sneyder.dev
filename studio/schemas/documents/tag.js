import { BsTag } from 'react-icons/bs';

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: BsTag,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Name of the tag to add to your posts.',
      type: 'string',
    },
  ],
};
