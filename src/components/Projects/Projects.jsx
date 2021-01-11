import React from 'react';

import SingleProject from '../SingleProject/SingleProject';

import ProjectsContainer from './Projects.styles';
import { Container, MainSection } from '../../shared';

const Projects = ({ projects }) => {
  return (
    <MainSection>
      <Container>
        <ProjectsContainer className='fadeIn delay-6'>
          {projects &&
            projects.map((project) => (
              <SingleProject project={project} key={project._id} />
            ))}
        </ProjectsContainer>
      </Container>
    </MainSection>
  );
};

export default Projects;
