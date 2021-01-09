import styled from 'styled-components';

import setFont from '../mixins/setFont';

export const MenuContainer = styled.div`
  padding-right: 30px;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  z-index: 30;
  text-align: right;
  overflow-y: auto;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateY(200%);
  }

  @media screen and (min-width: 1024px) {
    padding-right: 80px;
    top: 120px;
    right: unset;
  }
`;

export const Menu = styled.ul`
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
