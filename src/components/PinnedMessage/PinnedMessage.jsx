import React from 'react';

import Message from './PinnedMessage.styles';
import { Container } from '../../shared';

const PinnedMessage = ({ message, isAbout }) => {
  return (
    <Message>
      <Container>
        <p className={`slideUp ${isAbout ? 'delay-4' : 'delay-2'}`}>
          {message}
        </p>
      </Container>
    </Message>
  );
};

export default PinnedMessage;
