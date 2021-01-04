import styled from 'styled-components';

import { Blur, load } from '../../shared';

export const LoaderContainer = styled(Blur)`
  display: grid;
  place-items: center;
  z-index: 30;
  background: ${({ theme }) => theme.colors.black};
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
