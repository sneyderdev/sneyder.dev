import styled from 'styled-components';

import { SocialMenuIcon } from './SocialMenu';

const LinkList = styled.ul`
  img {
    margin-left: 0;
  }

  span {
    margin-left: 20px;
  }

  && ${SocialMenuIcon} {
    margin-left: 0;
  }
`;

export default LinkList;