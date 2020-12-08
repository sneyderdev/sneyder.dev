import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setFont } from '../../shared';

export const MainSection = styled.main`
  align-self: center;
`;

export const Hero = styled.div`
  text-align: center;

  & > img {
    width: 150px;
  }
`;
export const HeroTitle = styled.div`
  margin: 25px 0 10px;

  h1 {
    margin: 0;
    line-height: 1.2em;
    ${'' /* transform: translateY(200%); */}
    ${setFont((props) => props.theme.sizes.xl, 500)}
  }
`;

export const HeroDescription = styled.div`
  margin: 0 0 30px;

  p {
    margin: 0;
    ${'' /* transform: translateY(200%); */}
    font-size: ${(props) => props.theme.sizes.m};
  }
`;

export const HeroLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  ${'' /* transform: translateY(200%); */}
  font-size: ${(props) => props.theme.sizes.s};
  color: ${(props) => props.theme.colors.primary};

  img {
    margin-left: 5px;
    vertical-align: middle;
    opacity: 0.4;
    transition: all 200ms;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const StyledFooter = styled.footer`
  padding: 40px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.whites[1]};

  p {
    margin: 0;
    ${'' /* transform: translateY(200%); */}
    font-size: ${(props) => props.theme.sizes.s};
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.whites[2]};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      text-decoration-color: ${(props) => props.theme.colors.white};
    }
  }
`;
