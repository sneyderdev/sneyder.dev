import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import Message from './PinnedMessage.styles';
import { Container } from '../../shared';

const PinnedMessage = ({ message, isAbout }) => {
  const serializer = {
    types: {
      block: ({ children }) => (
        <p className={`slideUp ${isAbout ? 'delay-4' : 'delay-2'}`}>
          {children}
        </p>
      ),
    },
  };

  return (
    <Message>
      <Container>
        <PortableText blocks={message} serializers={serializer} />
      </Container>
    </Message>
  );
};

export default PinnedMessage;
