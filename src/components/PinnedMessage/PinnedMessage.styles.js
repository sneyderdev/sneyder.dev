import styled from 'styled-components';

const Message = styled.section`
  margin-bottom: 40px;
  overflow-y: hidden;

  p {
    margin: 0;
    transform: translateY(200%);
    font-size: ${({ theme }) => theme.sizes.n};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    margin: 30px 0 40px;
    grid-area: auto / main-start / auto / main-end;
    font-size: 20px;
  }
`;

export default Message;
