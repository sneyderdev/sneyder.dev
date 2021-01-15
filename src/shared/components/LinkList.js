import styled from 'styled-components';

import Icon from './Icon';

const LinkList = styled.ul`
  img {
    margin-left: 0;
    transition: all 300ms ease-out;
  }

  span {
    margin-left: 20px;
  }

  && ${Icon} {
    margin-left: 0;
  }
`;

export default LinkList;
