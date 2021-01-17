import styled from 'styled-components';

import { setPosition, sleepScreen } from '../../shared';

const SleepScreenContainer = styled.div`
  display: none;
  place-items: center;
  text-align: center;
  font-weight: 500;
  user-select: none;
  opacity: 0;
  backdrop-filter: blur(20px);
  background: ${({ theme }) => theme.colors.blacks[2]};
  ${setPosition('fixed', 40)};

  span {
    display: inline-block;
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.xl};
  }

  &.active {
    display: grid;
    animation: ${sleepScreen} 2400ms forwards;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export default SleepScreenContainer;
