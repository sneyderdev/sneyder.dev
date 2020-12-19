import React from 'react';
import styled from 'styled-components';

import { Container } from '../shared';

const Message = styled.section`
  margin-bottom: 40px;
  overflow-y: hidden;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.sizes.n};
    ${'' /* transform: translateY(200%); */}
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const PinnedMessage = ({ message }) => {
  return (
    <Message className='pinned-message'>
      <Container>
        <p className='pinned-message__text slideUp delay-2'>{message}</p>
      </Container>
    </Message>
  );
};

export default PinnedMessage;
