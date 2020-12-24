import styled from 'styled-components';

import { setFlex, setFont } from '../../shared';

export const ButtonOptions = styled.div`
  display: grid;
  margin-bottom: 40px;
  gap: 10px;
  opacity: 0;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const CodeButton = styled.a`
  height: 50px;
  width: 100%;
  border-radius: 20px;
  transform: rotateX(15deg);
  transition: all 200ms;
  background: hsl(280deg, 0%, 10%);
  border-bottom: 6px solid hsl(280deg, 0%, 15%);
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
`;

export const PreviewButton = styled(CodeButton)`
  background: hsl(288deg, 80%, 31%);
  border-bottom: 6px solid hsl(288deg, 80%, 21%);
`;
