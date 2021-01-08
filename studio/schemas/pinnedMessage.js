import { RiPushpinLine } from 'react-icons/ri';

export default {
  title: 'Pinned Message',
  name: 'pinnedMessage',
  type: 'document',
  icon: RiPushpinLine,
  fields: [
    {
      title: 'Page',
      name: 'page',
      type: 'string',
    },
    {
      title: 'Message',
      name: 'message',
      type: 'blockContent',
    },
  ],
};
