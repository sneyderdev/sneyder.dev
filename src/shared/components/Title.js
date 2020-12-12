import styled from 'styled-components';

import setFont from '../mixins/setFont';

export const TitleContainer = styled.section`
  text-align: center;
`;

export const Title = styled.div`
  margin: 25px 0 40px;
  overflow-y: hidden;

  h1 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    ${'' /* transform: translateY(200%); */}
    ${setFont(({ theme }) => theme.sizes.xl, 500)};
  }
`;
