import React from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <main>
      <div>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
