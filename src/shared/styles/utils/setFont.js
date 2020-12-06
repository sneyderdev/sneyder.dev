import { css } from 'styled-components';

const setFont = (size, weight, color) => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
  `;
};

export default setFont;
