import styled, { css } from 'styled-components';

const MainSection = styled.main`
  ${({ isHome }) =>
    isHome
      ? css`
          grid-area: 1 / auto / 2 / auto;
          align-self: center;

          @media screen and (min-width: 1024px) {
            grid-area: 1 / main-start / 2 / main-end;
          }
        `
      : css`
          grid-area: 3 / auto / 4 / auto;

          @media screen and (min-width: 1024px) {
            grid-area: 3 / main-start / 4 / main-end;
          }
        `}
`;

export default MainSection;
