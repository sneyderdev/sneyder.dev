import styled from 'styled-components';

import { SocialMenuIcon, setFlex, setFont } from '../../shared';

const ProjectOptions = styled.div`
  width: 100%;
  height: 200px;
  backdrop-filter: blur(3px);
  transition: transform 300ms;
  background: ${({ theme }) => theme.colors.blacks[1]};
  ${setFlex('justify-content')};

  & > div {
    ${setFlex('flex-direction', 'column')};
  }

  a {
    margin-bottom: 20px;
    text-decoration: none;
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
      transition: all 200ms;
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

    &:hover ${SocialMenuIcon} img {
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

    ${SocialMenuIcon} {
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
