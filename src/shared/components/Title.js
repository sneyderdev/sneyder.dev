import styled, { css } from 'styled-components';

import setFont from '../mixins/setFont';

export const TitleContainer = styled.section`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
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

  h3 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    ${'' /* transform: translateY(200%); */}
    ${setFont(({ theme }) => theme.sizes.l, 500)};
  }
`;
