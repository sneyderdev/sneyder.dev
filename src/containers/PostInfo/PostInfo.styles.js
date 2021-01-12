import styled from 'styled-components';

import Message from '../../components/PinnedMessage/PinnedMessage.styles';

import { Title, setFont } from '../../shared';

export const PostHeader = styled.div`
  margin-bottom: 40px;

  & ${Title} {
    margin-bottom: 0;
  }

  & ${Message} {
    margin: 10px 0 20px;

    div {
      padding: 0;
    }
  }
`;

export const PostImage = styled.div`
  padding-top: 50%;
  background: url('${({ image }) => image}') center;
  background-size: cover;
  opacity: 0;
`;

export const PostMeta = styled.div`
  display: grid;
  row-gap: 5px;
  overflow-y: hidden;

  span {
    transform: translateY(300%);
    ${({ theme }) => setFont(theme.sizes.s, 500)};
  }

  div {
    transform: translateY(200%);
    ${({ theme }) => setFont(theme.sizes.n, 500)};
  }
`;
