import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import Window from '../Window/Window';

import ProjectOptions from './SingleProject.styles';
import { Icon } from '../../shared';

const SingleProject = ({ project }) => {
  const {
    state: { icons },
  } = useContext(AppContext);

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');
  const purpleArrowIcon = icons.find((icon) => icon.alt === 'Purple Arrow');
  const linkIcon = icons.find((icon) => icon.alt === 'External Link');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');

  const { codeUrl, previewUrl, slug } = project;

  return (
    <Window project={project}>
      <ProjectOptions>
        <div>
          <a href={codeUrl} target='_blank' rel='noreferrer'>
            <span>Code</span>
            <Icon>
              <img src={linkIcon.url} alt={linkIcon.alt} />
              <img src={githubLogo.url} alt={githubLogo.alt} />
            </Icon>
          </a>
          <a href={previewUrl} target='_blank' rel='noreferrer'>
            Live Preview
            <img src={arrowIcon.url} alt={arrowIcon.alt} />
          </a>
          <Link to={`portfolio/${slug}`}>
            Learn more...{' '}
            <img src={purpleArrowIcon.url} alt={purpleArrowIcon.alt} />
          </Link>
        </div>
      </ProjectOptions>
    </Window>
  );
};

export default SingleProject;
