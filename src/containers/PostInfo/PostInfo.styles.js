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

export const PostShare = styled.aside`
  display: flex;
  height: 60px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.black};

  a {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
