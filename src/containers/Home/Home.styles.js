import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setFont } from '../../shared';

export const MainSection = styled.main`
  align-self: center;

  @media screen and (min-width: 1024px) {
    padding: 25px 0 0;
    grid-area: 2 / main-start / 3 / main-end;
  }
`;

export const Hero = styled.div`
  text-align: center;

  & > img {
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;

    & > img {
      width: 200px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;

    & > img {
      width: 250px;
    }
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

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 3 / main-start / -1 / main-end;
    font-size: 20px;
  }
`;
