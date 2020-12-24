import styled from 'styled-components';

import setFlex from '../../shared/mixins/setFlex';
import setFont from '../../shared/mixins/setFont';

const ProjectOptions = styled.div`
  width: 100%;
  height: 200px;
  transition: transform 300ms;
  backdrop-filter: blur(3px);
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

  @media screen and (min-width: 400px) {
    height: 270px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;

    span + div {
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
