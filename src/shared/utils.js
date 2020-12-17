import styled from 'styled-components';

import setPosition from './mixins/setPosition';

export const Background = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary},
    transparent
  );
  ${setPosition('absolute', -100)};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 850px;
  padding: 0 20px;
  margin: 0 auto;
`;