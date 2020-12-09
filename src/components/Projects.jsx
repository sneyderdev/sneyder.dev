import React from 'react';
import styled from 'styled-components';

import Project from './Project/Project';

const ProjectsContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  ${'' /* opacity: 0; */}
`;

const Projects = ({ projects }) => {
  return (
    <main>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ProjectsContainer>
    </main>
  );
};

export default Projects;
