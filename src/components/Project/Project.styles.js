import styled from 'styled-components';

import { setFont, setFlex } from '../../shared';

const ProjectOptions = styled.div`
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

export default ProjectOptions;
