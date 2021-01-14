import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { setFont } from '../../shared';

export const PostBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  background: url('${({ coverImage }) => coverImage}') center;
  background-size: cover;
  transition: transform 300ms ease-out;
`;

export const Post = styled.div`
  min-height: 250px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.greys[0]};

  &:hover ${PostBackground} {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    height: 300px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const PostContent = styled.div`
  display: flex;
  height: 100%;
  padding: 15px;
  flex-direction: column;
  backdrop-filter: blur(3px);
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blacks[1]};

  h2 {
    margin: 0;
    ${({ theme }) => setFont(theme.sizes.l, 600)};
  }

  span {
    font-size: ${({ theme }) => theme.sizes.xs};
  }

  p {
    margin: 10px 0;
    ${({ theme }) => setFont(theme.sizes.n, null, theme.colors.whites[1])};
  }

  div {
    margin-top: auto;
  }
`;

export const PostTitle = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;
