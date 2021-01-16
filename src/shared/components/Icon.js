import styled from 'styled-components';

const Icon = styled.span`
  display: grid;
  width: 15px;
  margin-left: 10px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  overflow-x: hidden;

  img {
    transform: translateX(-30px);
    transition: transform 300ms ease-out;
  }
`;

export default Icon;
