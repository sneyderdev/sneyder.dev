import styled from 'styled-components';

import { Navbar } from '../../components/Header/Header.styles';

const Arrow = styled.div`
  display: block;
  width: 25px;
  height: 30px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    transform-origin: left;
    transition: all 300ms;
    background: ${({ theme }) => theme.colors.white};
  }

  &::before {
    top: 15px;
    transform: rotateZ(-45deg);
  }

  &::after {
    bottom: 14px;
    transform: rotateZ(45deg);
  }

  &:hover::before {
    transform: rotateZ(-60deg);
  }

  &:hover::after {
    transform: rotateZ(60deg);
  }

  &.active::before,
  &.active::after {
    transform: rotateZ(0deg);
  }

  &.go-back::before,
  &.go-back::after {
    transform: translate(-200%);
    opacity: 0;
  }

  @media screen and (min-width: 1024px) {
    ${Navbar} & {
      width: 35px;
      position: fixed;
      top: 55px;
      z-index: 10;
    }
  }
`;

export default Arrow;
