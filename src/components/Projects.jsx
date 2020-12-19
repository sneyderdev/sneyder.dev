import React from 'react';

import Project from './Project/Project';

import { Container, ProjectsContainer } from '../shared';

const Projects = ({ projects }) => {
  return (
    <main>
      <Container>
        <ProjectsContainer projects>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectsContainer>
      </Container>
    </main>
  );
};

export default Projects;
