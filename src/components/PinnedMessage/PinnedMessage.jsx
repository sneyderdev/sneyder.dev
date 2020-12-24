import React from 'react';

import Message from './PinnedMessage.styles';
import { Container } from '../../shared';

const PinnedMessage = ({ message }) => {
  return (
    <Message>
      <Container>
        <p className='slideUp delay-2'>{message}</p>
      </Container>
    </Message>
  );
};

export default PinnedMessage;
