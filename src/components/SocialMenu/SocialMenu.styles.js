import styled from 'styled-components';

import { MenuItem } from '../Menu/Menu.styles';

import { setFont } from '../../shared';

export const SocialMenuContainer = styled.ul`
  ${({ theme }) => setFont(theme.sizes.m, 600)}

  span {
    overflow-x: hidden;
  }
`;

export const SocialMenuItem = styled(MenuItem)`
  a {
    transition: color 300ms ease-out;
  }

  &:first-child a {
    color: ${({ theme }) => theme.colors.twitter};
  }

  &:nth-child(2) a {
    color: ${({ theme }) => theme.colors.white};
  }

  &:last-child a {
    color: ${({ theme }) => theme.colors.linkedin};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  a:hover img {
    transform: translateX(0);
  }
`;
