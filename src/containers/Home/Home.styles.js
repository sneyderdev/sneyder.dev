import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { setFont } from '../../shared';

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
    transform: translateY(200%);
    ${setFont(({ theme }) => theme.sizes.xl, 500)}
  }
`;

export const HeroDescription = styled.div`
  margin: 0 0 30px;

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.m};
  }
`;

export const HeroLink = styled(Link)`
  display: inline-block;
  transform: translateY(200%);
  font-size: ${({ theme }) => theme.sizes.s};
  color: ${({ theme }) => theme.colors.primary};

  img {
    margin-left: 5px;
    vertical-align: middle;
    opacity: 0.4;
    transition: opacity 300ms ease-out;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const StyledFooter = styled.footer`
  padding: 40px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.whites[1]};

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.s};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 3 / main-start / -1 / main-end;
    font-size: 20px;
  }
`;
