import styled from 'styled-components';

import { setFont, setFlex } from '../../shared';

export const ProjectOptions = styled.div`
  width: 100%;
  height: 200px;
  transition: transform 300ms;
  backdrop-filter: blur(3px);
  background: ${(props) => props.theme.colors.blacks[1]};
  ${setFlex('justify-content')};

  & > div {
    ${setFlex('flex-direction', 'column')};
  }

  a {
    margin-bottom: 20px;
    text-decoration: none;
    ${setFont(
      (props) => props.theme.sizes.n,
      600,
      (props) => props.theme.colors.white
    )};
    ${setFlex()};

    &:last-child {
      margin: 30px 0 0;
      ${setFont(
        (props) => props.theme.sizes.s,
        400,
        (props) => props.theme.colors.primary
      )};

      img {
        width: 12px;
        margin-left: 5px;
      }
    }

    &:hover div img {
      transform: translateX(0);
    }

    &:hover > img {
      opacity: 1;
    }
  }

  span,
  span + div {
    overflow: hidden;
  }

  span + div {
    display: grid;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;

    img {
      opacity: 1;
      margin-left: 0;
      transform: translateX(-30px);
      transition: all 200ms;
    }
  }

  a > img {
    opacity: 0.5;
    margin-left: 10px;
    transition: all 200ms;
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 225px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${ProjectOptions} {
    transform: translateY(-200px);
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
`;
