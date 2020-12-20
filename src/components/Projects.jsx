import React from 'react';

import Project from './Project/Project';

import { Container, ProjectsContainer, MainSection } from '../shared';

const Projects = ({ projects }) => {
  return (
    <MainSection>
      <Container>
        <ProjectsContainer projects>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectsContainer>
      </Container>
    </MainSection>
  );
};

export default Projects;
