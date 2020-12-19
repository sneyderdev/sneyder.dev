import styled, { css } from 'styled-components';

const ProjectsContainer = styled.section`
  display: grid;
  gap: 20px;
  justify-content: center;
  ${'' /* opacity: 0; */}

  ${(props) =>
    props.projects &&
    css`
      @media screen and (min-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
      }
    `}
`;

export default ProjectsContainer;
