import { css } from 'styled-components';

const setFlex = (property, value = 'center') => {
  return css`
    display: flex;
    align-items: center;
    ${property}: ${value};
  `;
};

export default setFlex;
