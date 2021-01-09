import styled, { css } from 'styled-components';

const MainSection = styled.main`
  ${({ isHome }) =>
    isHome
      ? css`
          align-self: center;

          @media screen and (min-width: 1024px) {
            grid-area: 1 / main-start / 2 / main-end;
          }
        `
      : css`
          @media screen and (min-width: 1024px) {
            grid-area: 3 / main-start / 4 / main-end;
          }
        `}
`;

export default MainSection;
