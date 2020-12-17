import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { setFlex, setFont } from '../../shared';

export const ArrowBack = styled(Link)`
  display: block;
  width: 25px;
  height: 30px;
  position: relative;

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

  &.go::before,
  &.go::after {
    transform: translate(-200%);
    opacity: 0;
  }
`;

export const ButtonOptions = styled.div`
  display: grid;
  margin-bottom: 40px;
  gap: 10px;
  ${'' /* opacity: 0; */}
`;

export const CodeButton = styled.a`
  height: 50px;
  width: 100%;
  border-radius: 20px;
  transform: rotateX(15deg);
  transition: all 200ms;
  background: hsl(280deg, 0%, 10%);
  border-bottom: 6px solid hsl(280deg, 0%, 15%);
  ${setFlex('justify-content')};
  ${setFont(
    ({ theme }) => theme.sizes.n,
    500,
    ({ theme }) => theme.colors.white
  )};

  img {
    margin-left: 5px;
  }

  &:hover {
    border-width: 3px;
    transform: rotateX(20deg);
  }

  &:active {
    border-width: 0;
    transform: rotateX(25deg);
  }
`;

export const PreviewButton = styled(CodeButton)`
  background: hsl(280deg, 80%, 31%);
  border-bottom: 6px solid hsl(280deg, 80%, 21%);
`;
