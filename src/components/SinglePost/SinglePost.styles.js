import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  background: url('${({ image }) => image}') center;
  background-size: cover;
  transition: transform 300ms ease-out;
`;

export const Post = styled(Link)`
  display: block;
  height: 250px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.greys[0]};

  &:hover ${PostBackground} {
    transform: scale(1.05);
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
    font-size: ${({ theme }) => theme.sizes.l};
  }

  span {
    font-size: ${({ theme }) => theme.sizes.s};
  }

  p {
    margin: 10px 0 0;
    font-size: ${({ theme }) => theme.sizes.n};
    color: ${({ theme }) => theme.colors.whites[1]};
  }

  div {
    margin-top: auto;
    font-size: ${({ theme }) => theme.sizes.n};
  }
`;
