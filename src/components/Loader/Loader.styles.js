import styled, { css } from 'styled-components';

import { load } from '../../shared';

export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;

  ${({ fullScreen }) =>
    fullScreen
      ? css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 30;
          background: ${({ theme }) => theme.colors.black};
        `
      : css`
          @media screen and (min-width: 1024px) {
            grid-area: auto / main-start / auto / main-end;
          }
        `}
`;

export const LoaderContent = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${load} 1000ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  &::after {
    animation-delay: -500ms;
  }
`;
