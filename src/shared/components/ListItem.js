import styled from 'styled-components';

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 15px 1fr;
  align-items: center;
  column-gap: 20px;

  img {
    width: 15px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 20px 1fr;

    img {
      width: 20px;
    }
  }
`;

export default ListItem;
