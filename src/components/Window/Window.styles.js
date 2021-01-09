import styled, { css } from 'styled-components';

import ProjectOptions from '../Project/Project.styles';
import { setFlex, setFont } from '../../shared';

export const WindowContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 225px;
  overflow-y: hidden;

  &:hover ${ProjectOptions} {
    opacity: 1;
    transform: translateY(-200px);
  }

  @media screen and (min-width: 400px) {
    height: 295px;

    &:hover ${ProjectOptions} {
      transform: translateY(-270px);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    max-width: unset;
  }

  ${({ isCarousel }) =>
    isCarousel &&
    css`
      height: 260px;
      margin: 0 auto;
      margin-bottom: 40px;
      opacity: 0;

      @media screen and (min-width: 400px) {
        height: 330px;
      }

      @media screen and (min-width: 600px) {
        height: 440px;
        max-width: unset;
      }

      @media screen and (min-width: 768px) {
        height: 540px;
      }

      @media screen and (min-width: 850px) {
        height: 595px;
      }

      @media screen and (min-width: 1024px) {
        height: 440px;
      }

      @media screen and (min-width: 1100px) {
        height: 540px;
      }

      @media screen and (min-width: 1240px) {
        height: 595px;
      }
    `}
`;

export const WindowBar = styled.div`
  height: 25px;
  position: relative;
  background: ${({ theme }) => theme.colors.greys[0]};
  ${setFlex('justify-content')};

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    position: absolute;
    left: 5px;
  }

  h4 {
    display: inline;
    ${setFont(({ theme }) => theme.sizes.xs, 500)};
  }
`;

export const WindowScreen = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 400px) {
    height: 270px;
  }

  ${({ isCarousel }) =>
    isCarousel &&
    css`
      position: relative;

      @media screen and (min-width: 600px) {
        height: 380px;
      }

      @media screen and (min-width: 768px) {
        height: 470px;
      }

      @media screen and (min-width: 850px) {
        height: 535px;
      }

      @media screen and (min-width: 1024px) {
        height: 370px;
      }

      @media screen and (min-width: 1100px) {
        height: 470px;
      }

      @media screen and (min-width: 1240px) {
        height: 535px;
      }
    `}
`;
