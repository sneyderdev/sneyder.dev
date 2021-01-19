import styled, { css } from 'styled-components';

import { MenuContainer, MenuItem } from '../Menu/Menu.styles';
import {
  SocialMenuContainer,
  SocialMenuItem,
} from '../SocialMenu/SocialMenu.styles';
import { setFlex, Icon } from '../../shared';

export const FooterContainer = styled.footer`
  padding: 50px 0 20px;
  grid-area: 4 / auto / -1 / auto;

  ${MenuContainer} {
    font-size: ${({ theme }) => theme.sizes.s};

    img {
      margin-left: 5px;
    }

    @media screen and (min-width: 850px) {
      display: flex;

      ${MenuItem} {
        margin: 0 20px 0 0;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  ${SocialMenuContainer} {
    text-align: right;
    font-size: ${({ theme }) => theme.sizes.s};

    @media screen and (min-width: 850px) {
      display: flex;

      ${SocialMenuItem} {
        margin: 0 0 0 20px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  ${Icon} {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    column-gap: 10px;

    img {
      transform: translateX(-20px);
    }
  }

  img {
    width: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 4 / main-start / -1 / main-end;
    font-size: 18px;

    img {
      width: 12px;
    }

    ${Icon} {
      width: 12px;
      height: 12px;
      column-gap: 12px;

      img {
        transform: translateX(-24px);
      }
    }
  }

  ${({ isPost }) =>
    isPost &&
    css`
      @media screen and (max-width: 1023px) {
        margin-bottom: 60px;
      }
    `}
`;

export const FooterOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  a {
    display: inline-flex;
    align-items: center;
    transform: translateY(200%);
  }
`;

export const FooterCopyright = styled.div`
  display: grid;
  margin-top: 40px;
  text-align: center;
  overflow-y: hidden;
  color: ${({ theme }) => theme.colors.whites[1]};

  span:first-child {
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.xs};
    ${setFlex('justify-content')};
  }

  span:last-child {
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.xxs};
  }

  img {
    margin-left: 5px;
  }
`;
