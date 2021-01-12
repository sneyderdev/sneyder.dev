import styled from 'styled-components';

import Message from '../../components/PinnedMessage/PinnedMessage.styles';

import { Title } from '../../shared';

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

  @media screen and (min-width: 1024px) {
    grid-area: 1 / main-start / 2 / main-end;
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

  a {
    transform: translateY(200%);
  }

  & > span {
    transform: translateY(300%);
  }

  span {
    font-size: ${({ theme }) => theme.sizes.xs};
  }
`;
