import styled, { css } from 'styled-components';

import setFont from '../mixins/setFont';

export const TitleContainer = styled.section`
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: auto / margin2-start / auto / margin3-end;
    font-size: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  ${({ aboutTitleContainer }) =>
    aboutTitleContainer &&
    css`
      @media screen and (min-width: 1024px) {
        grid-area: auto / main-start / auto / main-end;
        border: none;
      }
    `}
`;

export const Title = styled.div`
  margin: 25px 0 40px;
  overflow-y: hidden;

  h1 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    transform: translateY(200%);
    ${setFont(({ theme }) => theme.sizes.xl, 500)};
  }

  h3 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    transform: translateY(200%);
    ${setFont(({ theme }) => theme.sizes.l, 500)};
  }

  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }

  ${({ aboutTitle }) =>
    aboutTitle &&
    css`
      @media screen and (min-width: 1024px) {
        padding: 0;
        margin: 40px 0 10px;
      }
    `}
`;
