import styled from 'styled-components';

import setFont from '../mixins/setFont';

export const Menu = styled.ul`
  ${(props) => setFont(props.theme.sizes.l, 600)}

  a {
    color: ${(props) => props.theme.colors.white};

    img {
      margin-left: 10px;
      opacity: 0.4;
    }

    &:hover img {
      opacity: 1;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 15px;
  overflow: hidden;
`;
