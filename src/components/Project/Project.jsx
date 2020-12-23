import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/icons/arrow.svg';
import purpleArrowIcon from '../../assets/icons/purple-arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import githubLogo from '../../assets/icons/github-logo.svg';

import { WindowContainer, WindowBar, WindowScreen } from '../../shared';
import ProjectOptions from './Project.styles';

const Project = ({ project }) => {
  const projectURL = `/portfolio/${project.name
    .replace(/(\.|\s)/, '-')
    .toLowerCase()}`;

  return (
    <WindowContainer>
      <WindowBar>
        <div>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FF5F57' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FFBD2E' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#28CA41' />
          </svg>
        </div>
        <h4>{project.name}</h4>
      </WindowBar>
      <WindowScreen>
        <img src={project.images[0].src} alt={project.name} />
      </WindowScreen>
      <ProjectOptions>
        <div>
          <a href={project.codeURL} target='_blank' rel='noreferrer'>
            <span>Code</span>
            <div>
              <img src={linkIcon} alt='Link' />
              <img src={githubLogo} alt='GitHub Logo' />
            </div>
          </a>
          <a href={project.previewURL} target='_blank' rel='noreferrer'>
            Live Preview
            <img src={arrowIcon} alt='Preview arrow' />
          </a>
          <Link to={projectURL}>
            Learn more... <img src={purpleArrowIcon} alt='Learn more arrow' />
          </Link>
        </div>
      </ProjectOptions>
    </WindowContainer>
  );
};

export default Project;
