import React from 'react';
import { Link } from 'react-router-dom';

import Window from '../Window/Window';

import arrowIcon from '../../assets/icons/arrow.svg';
import purpleArrowIcon from '../../assets/icons/purple-arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import githubLogo from '../../assets/icons/github-logo.svg';

import ProjectOptions from './Project.styles';
import { SocialMenuIcon } from '../../shared';

const Project = ({ project }) => {
  const { codeURL, previewURL, slug } = project;

  return (
    <Window project={project}>
      <ProjectOptions>
        <div>
          <a href={codeURL} target='_blank' rel='noreferrer'>
            <span>Code</span>
            <SocialMenuIcon>
              <img src={linkIcon} alt='Link' />
              <img src={githubLogo} alt='GitHub Logo' />
            </SocialMenuIcon>
          </a>
          <a href={previewURL} target='_blank' rel='noreferrer'>
            Live Preview
            <img src={arrowIcon} alt='Preview arrow' />
          </a>
          <Link to={`portfolio/${slug}`}>
            Learn more... <img src={purpleArrowIcon} alt='Learn more arrow' />
          </Link>
        </div>
      </ProjectOptions>
    </Window>
  );
};

export default Project;
