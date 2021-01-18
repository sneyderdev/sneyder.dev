import styled from 'styled-components';

import { setFlex, setFont } from '../../shared';

export const ErrorContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 0 20px;
  place-items: center;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  opacity: 0;

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.sizes.xl};
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.sizes.l};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.sizes.n};
  }

  a {
    height: 50px;
    width: 250px;
    margin: 40px auto 0;
    border-radius: 20px;
    transform: rotateX(15deg);
    transition: all 200ms;
    background: ${({ theme }) => theme.colors.purples[3]};
    border-bottom: 6px solid ${({ theme }) => theme.colors.purples[4]};
    ${setFlex('justify-content')};
    ${setFont(
      ({ theme }) => theme.sizes.n,
      500,
      ({ theme }) => theme.colors.white
    )};

    img {
      margin-left: 5px;
    }

    &:hover {
      border-width: 3px;
      transform: rotateX(20deg);
    }

    &:active {
      border-width: 0;
      transform: rotateX(25deg);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
