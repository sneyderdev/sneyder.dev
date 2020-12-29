import styled from 'styled-components';
import { Link } from 'react-router-dom';

import setFont from '../../shared/mixins/setFont';

export const HeaderContainer = styled.header`
  @media screen and (min-width: 1024px) {
    grid-area: auto / margin1-start / auto / margin4-end;
`;

export const Navbar = styled.nav`
  display: flex;
  height: 70px;
  padding: 10px 25px;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  user-select: none;

  @media screen and (min-width: 1024px) {
    display: grid;
    height: auto;
    padding: 0;
    grid-template-columns:
      [margin1-start] 100px [margin1-end margin2-start] 100px [margin2-end main-start] minmax(
        auto,
        850px
      )
      [main-end margin3-start] 100px [margin3-end margin4-start] 100px [margin4-end];
  }
`;

export const NavbarButton = styled.div`
  order: 3;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: auto / margin3-start / auto / margin4-end;
  }
`;

export const NavbarMenu = styled.div`
  display: ${({ menu }) => (menu ? 'block' : 'none')};

  @media screen and (min-width: 1024px) {
    grid-area: auto / margin3-start / auto / margin4-end;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: auto / margin1-start / auto / margin2-end;
  }
`;

export const LogoText = styled(Link)`
  ${({ theme }) => setFont(theme.sizes.m, 600, theme.colors.white)}

  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 55px;
    z-index: 10;
  }
`;

export const BurgerButton = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  position: relative;
  z-index: 30;
  cursor: pointer;

  i {
    display: inline-block;
    width: 100%;
    height: 3px;
    position: absolute;
    transition: all 500ms;
    background: ${({ theme }) => theme.colors.white};

    &:first-child {
      top: 15px;
    }

    &:nth-child(2) {
      width: 37.5px;
      top: 23.5px;
      left: 6.25px;
    }

    &:last-child {
      width: 25px;
      bottom: 15px;
      left: 12.5px;
    }
  }

  &.active {
    i {
      background: ${({ theme }) => theme.colors.primary};

      &:first-child {
        top: 25px;
        transform: rotateZ(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
        transform: translateX(100px);
      }

      &:last-child {
        width: 100%;
        bottom: 22px;
        left: 0;
        transform: rotateZ(45deg);
        box-shadow: 0 0 2px ${({ theme }) => theme.colors.black};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 40px;

    i {
      width: 100%;

      &:first-child {
        top: 20px;
      }

      &:nth-child(2) {
        width: 45px;
        top: 28.5px;
        left: 7.5px;
      }

      &:last-child {
        width: 30px;
        bottom: 20px;
        left: 15px;
      }
    }

    &.active {
      i {
        &:first-child {
          top: 30px;
        }

        &:last-child {
          width: 100%;
          bottom: 27px;
          left: 0;
        }
      }
    }
  }
`;
