import React from 'react';

import Project from '../Project/Project';

import ProjectsContainer from './Projects.styles';
import { Container, MainSection } from '../../shared';

const Projects = ({ projects }) => {
  return (
    <MainSection>
      <Container>
        <ProjectsContainer className='fadeIn delay-6'>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectsContainer>
      </Container>
    </MainSection>
  );
};

export default Projects;
