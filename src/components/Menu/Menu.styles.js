import styled from 'styled-components';

import { setFont } from '../../shared';

export const MenuContainer = styled.ul`
  ${({ theme }) => setFont(theme.sizes.l, 600)}

  a {
    color: ${({ theme }) => theme.colors.white};

    img {
      margin-left: 10px;
      opacity: 0.4;
    }

    &:hover img {
      opacity: 1;
    }
  }

  img {
    transition: opacity 300ms ease-out;
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 15px;
  overflow: hidden;
`;
