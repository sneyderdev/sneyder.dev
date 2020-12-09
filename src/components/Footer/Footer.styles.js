import styled from 'styled-components';

import {
  setFlex,
  Menu,
  MenuItem,
  SocialMenu,
  SocialMenuIcon,
} from '../../shared';

export const StyledFooter = styled.footer`
  padding: 50px 0 20px;

  ${Menu} {
    font-size: ${(props) => props.theme.sizes.s};

    img {
      margin-left: 5px;
    }
  }

  ${MenuItem}:last-child {
    margin-bottom: 0;
  }

  ${SocialMenu} {
    text-align: right;
    font-size: ${(props) => props.theme.sizes.s};
  }

  ${SocialMenuIcon} {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    column-gap: 10px;

    img {
      transform: translateX(-20px);
    }
  }

  img {
    width: 10px;
    transition: all 200ms;
  }
`;

export const FooterOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  column-gap: 50px;

  a {
    display: inline-flex;
    align-items: center;
    ${'' /* transform: translateY(200%); */}
  }
`;

export const FooterCopyright = styled.div`
  display: grid;
  margin-top: 40px;
  text-align: center;
  overflow-y: hidden;
  color: ${(props) => props.theme.colors.whites[1]};

  span:first-child {
    ${'' /* transform: translateY(200%); */};
    font-size: ${(props) => props.theme.sizes.xs};
    ${setFlex('justify-content')};
  }

  span:last-child {
    ${'' /* transform: translateY(200%); */}
    font-size: ${(props) => props.theme.sizes.xxs};
  }

  img {
    margin-left: 5px;
  }
`;