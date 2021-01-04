import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(200%);
  }

  100% {
    transform: translateY(0);
  }
`;

export const load = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 36px;
    left: 36px;
    opacity: 1;
  }

  100% {
    width: 72px;
    height: 72px;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;
