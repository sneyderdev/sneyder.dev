import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: grid;
  gap: 20px;
  justify-content: center;
  opacity: 0;

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
`;

export default ProjectsContainer;
