import styled from 'styled-components';

import { MenuItem } from './Menu';

import setFont from '../mixins/setFont';

export const SocialMenu = styled.ul`
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

export const SocialMenuIcon = styled.span`
  display: grid;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  overflow-x: hidden;

  img {
    transform: translateX(-30px);
    transition: transform 300ms ease-out;
  }
`;
