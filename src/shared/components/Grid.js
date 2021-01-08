import styled, { css } from 'styled-components';

import setPosition from '../mixins/setPosition';

export const Grid = styled.div`
  @media screen and (max-width: 1023px) {
    padding-top: 70px;
  }

  ${({ isHome }) =>
    isHome
      ? css`
          display: grid;
          height: 100vh;
          grid-template-rows: auto 1fr auto;

          @media screen and (min-width: 1024px) {
            max-width: 1900px;
            margin: 0 auto;
            position: relative;
            grid-template-columns:
              [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
                auto,
                850px
              )
              [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
            justify-content: center;
            ${setPosition('fixed')};
          }
        `
      : css`
          display: grid;
          width: 100%;
          min-height: 100vh;
          grid-template-rows: repeat(3, auto) 1fr auto;

          @media screen and (min-width: 1024px) {
            max-width: 1900px;
            margin: 0 auto;
            position: relative;
            grid-template-columns:
              [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
                auto,
                850px
              )
              [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
            justify-content: center;
          }
        `}
`;

export const GridBoundaries = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    grid-column: margin2-start / margin3-end;
    border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
    ${setPosition('absolute', -10)};
  }
`;
