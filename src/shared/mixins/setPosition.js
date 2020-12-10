import { css } from 'styled-components';

const setPosition = (position, index) => {
  return css`
    position: ${position};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${index};
  `;
};

export default setPosition;
