import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setFont } from '../../shared';

export const Navbar = styled.nav`
  display: flex;
  height: 70px;
  padding: 10px 25px;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  user-select: none;
`;

export const LogoText = styled(Link)`
  ${(props) => setFont(props.theme.sizes.m, 600, props.theme.colors.white)}
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
    background: ${(props) => props.theme.colors.white};

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

  .active {
    i {
      background: ${(props) => props.theme.colors.primary};

      &:first-child {
        top: 25px;
        transform: rotateZ(-45deg);
        box-shadow: none;
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
        box-shadow: 0 0 2px ${(props) => props.theme.colors.black};
      }
    }
  }
`;

export const MenuContainer = styled.div`
  padding-right: 25px;
  position: fixed;
  right: 10px;
  top: 70px;
  bottom: 0;
  z-index: 30;
  text-align: right;
  overflow-y: auto;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    transform: translateY(200%);
    will-change: transform;
  }

  img {
    transition: all 200ms;
  }
`;

export const Menu = styled.ul`
  ${(props) => setFont(props.theme.sizes.l, 600)}

  a {
    color: ${(props) => props.theme.colors.white};

    img {
      margin-left: 10px;
      opacity: 0.4;
    }

    &:hover img {
      opacity: 1;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 15px;
  overflow: hidden;
`;

export const SocialMenuIcon = styled.div`
  display: grid;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;

  img {
    transform: translateX(-30px);
  }
`;

export const SocialMenu = styled.ul`
  ${(props) => setFont(props.theme.sizes.m, 600)}

  span, ${SocialMenuIcon} {
    overflow: hidden;
  }

  a:hover img {
    transform: translateX(0);
  }

  a:hover {
    transition: color 200ms;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SocialMenuItem = styled(MenuItem)``;
