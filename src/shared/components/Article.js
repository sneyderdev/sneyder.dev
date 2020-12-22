import styled from 'styled-components';

import { SocialMenuIcon } from './SocialMenu';

export const ArticleContainer = styled.section`
  display: grid;
  row-gap: 40px;
  opacity: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Article = styled.article`
  display: grid;
  row-gap: 20px;
  color: ${({ theme }) => theme.colors.whites[1]};

  h2 {
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    margin: 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.whites[2]};
    color: ${({ theme }) => theme.colors.white};

    img {
      width: 15px;
      height: 15px;
      transition: all 200ms;
    }

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.white};
    }

    &:hover img {
      transform: translateX(0);
    }

    & ${SocialMenuIcon} {
      margin-left: 5px;
    }

    & > img {
      opacity: 0.4;
    }

    &:hover > img {
      opacity: 1;
    }
  }
`;
