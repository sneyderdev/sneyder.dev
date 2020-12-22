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
