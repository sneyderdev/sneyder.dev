import styled from 'styled-components';

import setFlex from '../mixins/setFlex';
import setFont from '../mixins/setFont';

import ProjectOptions from '../../components/Project/Project.styles';

export const WindowContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 225px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${ProjectOptions} {
    transform: translateY(-200px);
  }
`;

export const WindowBar = styled.div`
  height: 25px;
  position: relative;
  background: ${(props) => props.theme.colors.grey};
  ${setFlex('justify-content')};

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    position: absolute;
    left: 5px;
  }

  h4 {
    display: inline;
    ${setFont((props) => props.theme.sizes.xs, 500)};
  }
`;

export const WindowScreen = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
