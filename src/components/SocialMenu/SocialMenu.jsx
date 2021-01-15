import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import { SocialMenuContainer, SocialMenuItem } from './SocialMenu.styles';
import { Icon } from '../../shared';

const SocialMenu = ({ isFooter }) => {
  const { state } = useContext(AppContext);
  const { icons } = state;

  const linkIcon = icons.find((icon) => icon.alt === 'External Link');
  const twitterLogo = icons.find((icon) => icon.alt === 'Twitter');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');
  const linkedinLogo = icons.find((icon) => icon.alt === 'LinkedIn');

  return (
    <SocialMenuContainer>
      <SocialMenuItem>
        <a
          href='https://twitter.com/sneyderdev'
          target='_blank'
          rel='noreferrer'
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3 delay-5'}`}
        >
          <span>Twitter</span>
          <Icon>
            <img src={linkIcon.url} alt={linkIcon.alt} />
            <img src={twitterLogo.url} alt={twitterLogo.alt} />
          </Icon>
        </a>
      </SocialMenuItem>
      <SocialMenuItem>
        <a
          href='https://github.com/sneyderdev'
          target='_blank'
          rel='noreferrer'
          className={`slideUp ${isFooter ? '' : 'duration-3'} delay-6`}
        >
          <span>GitHub</span>
          <Icon>
            <img src={linkIcon.url} alt={linkIcon.alt} />
            <img src={githubLogo.url} alt={githubLogo.alt} />
          </Icon>
        </a>
      </SocialMenuItem>
      <SocialMenuItem>
        <a
          href='https://www.linkedin.com/in/sneyderdev'
          target='_blank'
          rel='noreferrer'
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3 delay-7'}`}
        >
          <span>LinkedIn</span>
          <Icon>
            <img src={linkIcon.url} alt={linkIcon.alt} />
            <img src={linkedinLogo.url} alt={linkedinLogo.alt} />
          </Icon>
        </a>
      </SocialMenuItem>
    </SocialMenuContainer>
  );
};

export default SocialMenu;
