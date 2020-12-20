import styled, { css } from 'styled-components';

import setFlex from '../mixins/setFlex';
import setFont from '../mixins/setFont';

import ProjectOptions from '../../components/Project/Project.styles';

export const WindowContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 225px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${ProjectOptions} {
    transform: translateY(-200px);
  }

  @media screen and (min-width: 400px) {
    height: 295px;

    &:hover ${ProjectOptions} {
      transform: translateY(-270px);
    }
  }

  ${(props) =>
    props.carousel &&
    css`
      @media screen and (min-width: 600px) {
        height: 395px;
        max-width: unset;
      }

      @media screen and (min-width: 768px) {
        height: 495px;
      }

      @media screen and (min-width: 850px) {
        height: 560px;
      }

      @media screen and (min-width: 1024px) {
        height: 395px;
        max-width: unset;
      }

      @media screen and (min-width: 1100px) {
        height: 495px;
      }

      @media screen and (min-width: 1240px) {
        height: 560px;
      }
    `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const WindowBar = styled.div`
  height: 25px;
  position: relative;
  background: ${(props) => props.theme.colors.grey};
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
    ${setFont((props) => props.theme.sizes.xs, 500)};
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

  ${(props) =>
    props.carousel &&
    css`
      @media screen and (min-width: 600px) {
        height: 380px;
      }

      @media screen and (min-width: 768px) {
        height: 470px;
      }

      @media screen and (min-width: 850px) {
        height: 545px;
      }

      @media screen and (min-width: 1024px) {
        height: 370px;
      }

      @media screen and (min-width: 1100px) {
        height: 470px;
      }

      @media screen and (min-width: 1240px) {
        height: 545px;
      }
    `}
`;
