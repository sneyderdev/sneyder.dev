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
      description: 'Page where you wanna show this message.',
      type: 'string',
    },
    {
      title: 'Message',
      name: 'message',
      description: 'Content of the message.',
      type: 'text',
    },
  ],
};
