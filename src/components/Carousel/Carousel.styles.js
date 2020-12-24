import styled from 'styled-components';

import ProjectsContainer from '../Projects/Projects.styles';
import { Arrow } from '../../shared';

export const CarouselContainer = styled(ProjectsContainer)`
  margin-bottom: 30px;

  ${Arrow} {
    width: 15px;

    &:before,
    &:after {
      height: 2px;
      box-shadow: none;
      background: hsl(3deg, 0%, 70%);
    }

    @media screen and (min-width: 768px) {
      width: 25px;
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

    ${Arrow} {
      transform: rotateY(180deg);
    }
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${Arrow}::before {
    transform: rotateZ(-60deg);
  }

  &:hover ${Arrow}::after {
    transform: rotateZ(60deg);
  }

  @media screen and (min-width: 850px) {
    padding: 0 20px;
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
