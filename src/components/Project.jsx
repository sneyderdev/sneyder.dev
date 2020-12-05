import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../assets/icons/arrow.svg';
import purpleArrowIcon from '../assets/icons/purple-arrow.svg';
import linkIcon from '../assets/icons/link.svg';
import githubLogo from '../assets/icons/github-logo.svg';

const Project = ({ project }) => {
  return (
    <div className='project'>
      <div className='screen-bar'>
        <span className='screen-bar__options'>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FF5F57' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FFBD2E' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#28CA41' />
          </svg>
        </span>
        <h4 className='screen-bar__title'>{project.name}</h4>
      </div>
      <div className='main-screen'>
        <img src={project.image} alt={project.name} />
      </div>
      <div className='project__options'>
        <div className='options'>
          <a href={project.codeURL} target='_blank' rel='noreferrer'>
            <span>Code</span>
            <div className='options__github'>
              <img src={linkIcon} alt='Link' />
              <img src={githubLogo} alt='GitHub Logo' />
            </div>
          </a>
          <a href={project.previewURL} target='_blank' rel='noreferrer'>
            Live Preview
            <img
              src={arrowIcon}
              alt='Preview arrow'
              className='options__icon'
            />
          </a>
          <Link to={`/portfolio/${project.name}`}>
            Learn more...{' '}
            <img
              src={purpleArrowIcon}
              alt='Learn more arrow'
              className='options__icon'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
