import styled, { css } from 'styled-components';

const MainSection = styled.main`
  ${({ isHome }) =>
    isHome &&
    css`
      align-self: center;

      @media screen and (min-width: 1024px) {
        padding: 25px 0 0;
        grid-area: 2 / main-start / 3 / main-end;
      }
    `}

  @media screen and (min-width: 1024px) {
    grid-area: auto / main-start / auto / main-end;
  }
`;

export default MainSection;
