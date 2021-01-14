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
  background: url('${({ coverImage }) => coverImage}') center;
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
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: auto / margin3-start / auto / margin4-end;
  }

  div {
    position: fixed;
    bottom: 70px;
    transform: translateY(200%);
    background: ${({ theme }) => theme.colors.black};

    @media screen and (max-width: 1023px) {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-between;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
    }
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    transition: border-color 300ms ease-out;
    border: 1px solid ${({ theme }) => theme.colors.greys[0]};

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -10;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-out;
      background: ${({ theme }) => theme.colors.white};
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: 1024px) {
      width: 60px;
      height: 60px;
      border-color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
