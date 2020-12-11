import styled from 'styled-components';

import setPosition from './mixins/setPosition';

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary},
    transparent
  );
  ${setPosition('absolute', -100)};
`;

export default Background;
