import styled from 'styled-components';

import {
  setFlex,
  setFont,
  WindowScreen,
  ProjectsContainer,
} from '../../shared';

export const ArrowBack = styled.div`
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

export const Carousel = styled(ProjectsContainer)`
  margin-bottom: 30px;

  ${WindowScreen} {
    position: relative;
  }

  ${ArrowBack} {
    width: 15px;

    &:before,
    &:after {
      height: 2px;
      box-shadow: none;
      background: hsl(3deg, 0%, 70%);
    }
  }
`;

export const CarouselControl = styled.button`
  display: flex;
  width: 30%;
  height: 100%;
  padding: 0 10px;
  align-items: center;
  position: absolute;
  top: 0;
  opacity: 0.2;
  transition: opacity 300ms ease-out;
  cursor: pointer;

  &.prev {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.blacks[3]},
      transparent
    );
  }

  &.next {
    justify-content: flex-end;
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.blacks[3]},
      transparent
    );

    ${ArrowBack} {
      transform: rotateY(180deg);
    }
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${ArrowBack}::before {
    transform: rotateZ(-60deg);
  }

  &:hover ${ArrowBack}::after {
    transform: rotateZ(60deg);
  }
`;

export const CarouselBullets = styled.div`
  display: grid;
  grid-template: 15px / repeat(3, 15px);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  justify-items: center;

  span {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: hsl(280deg, 0%, 20%);

    transition: all 100ms ease-in;
    cursor: pointer;

    &:hover {
      height: 12px;
      width: 12px;
      background: hsl(280deg, 0%, 50%);
    }

    &.active {
      height: 15px;
      width: 15px;
      background: hsl(280deg, 0%, 80%);
    }
  }
`;
