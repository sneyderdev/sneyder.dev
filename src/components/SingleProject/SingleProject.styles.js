import styled from 'styled-components';

import { setFlex, setFont, Icon } from '../../shared';

const ProjectOptions = styled.div`
  width: 100%;
  height: 200px;
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: all 300ms ease-out;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.blacks[1]};
  ${setFlex('justify-content')};

  & > div {
    ${setFlex('flex-direction', 'column')};
  }

  a {
    margin-bottom: 20px;
    ${setFont(
      ({ theme }) => theme.sizes.n,
      600,
      ({ theme }) => theme.colors.white
    )};
    ${setFlex()};

    span {
      overflow-x: hidden;
    }

    & > img {
      opacity: 0.5;
      margin-left: 10px;
      transition: opacity 300ms;
    }

    &:last-child {
      margin: 30px 0 0;
      ${setFont(
        ({ theme }) => theme.sizes.s,
        400,
        ({ theme }) => theme.colors.primary
      )};

      img {
        width: 12px;
        margin-left: 5px;
      }
    }

    &:hover ${Icon} img {
      transform: translateX(0);
    }

    &:hover > img {
      opacity: 1;
    }
  }

  @media screen and (min-width: 400px) {
    height: 270px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;

    ${Icon} {
      width: 20px;
      height: 20px;
      column-gap: 20px;

      img {
        transform: translateX(-40px);
      }
    }

    img {
      width: 20px;
    }

    a:last-child img {
      width: 15px;
    }
  }
`;

export default ProjectOptions;
