import styled from 'styled-components';

import setFont from '../mixins/setFont';
import { MenuItem } from './Menu';

export const SocialMenu = styled.ul`
  ${(props) => setFont(props.theme.sizes.m, 600)}

  span {
    overflow: hidden;
  }
`;

export const SocialMenuItem = styled(MenuItem)`
  &:first-child a {
    color: ${(props) => props.theme.colors.twitter};
  }

  &:nth-child(2) a {
    color: ${(props) => props.theme.colors.white};
  }

  &:last-child a {
    color: ${(props) => props.theme.colors.linkedin};
  }

  a:hover {
    transition: color 200ms;
    color: ${(props) => props.theme.colors.white};
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
  overflow: hidden;

  img {
    transform: translateX(-30px);
  }
`;
