import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/icons/arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import twitterLogo from '../../assets/icons/twitter-logo.svg';
import githubLogo from '../../assets/icons/github-logo.svg';
import linkedinLogo from '../../assets/icons/linkedin-logo.svg';

import {
  Menu,
  MenuItem,
  SocialMenu,
  SocialMenuItem,
  SocialMenuIcon,
} from '../../shared';
import { Navbar, LogoText, BurgerButton, MenuContainer } from './Header.styles';
import { ArrowBack } from '../../containers/ProjectInfo/ProjectInfo.styles';

const Header = ({ hasArrow }) => {
  return (
    <header>
      <Navbar>
        <div className='logo'>
          {hasArrow ? (
            <ArrowBack to='/portfolio' />
          ) : (
            <LogoText to='/'>sneyder.dev</LogoText>
          )}
        </div>
        <div
          css={`
            order: 3;
          `}
        >
          <BurgerButton id='burger-btn'>
            <i />
            <i />
            <i />
          </BurgerButton>
        </div>
        <div
          css={`
            display: none;
          `}
          id='menu'
        >
          <MenuContainer>
            <Menu>
              <MenuItem>
                <Link to='/portfolio'>
                  Portfolio <img src={arrowIcon} alt='Menu Arrow' />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/about'>
                  About <img src={arrowIcon} alt='Menu Arrow' />
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  href='mailto:hello@sneyder.dev'
                  target='_blank'
                  rel='noreferrer'
                  className='slideUp delay-2 duration-3'
                >
                  Contact <img src={arrowIcon} alt='Menu Arrow' />
                </a>
              </MenuItem>
            </Menu>
            <SocialMenu>
              <SocialMenuItem>
                <a
                  href='https://twitter.com/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Twitter</span>
                  <SocialMenuIcon>
                    <img src={linkIcon} alt='Link' />
                    <img src={twitterLogo} alt='Twitter Logo' />
                  </SocialMenuIcon>
                </a>
              </SocialMenuItem>
              <SocialMenuItem>
                <a
                  className='github slideUp delay-4 duration-3'
                  href='https://github.com/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>GitHub</span>
                  <SocialMenuIcon>
                    <img src={linkIcon} alt='Link' />
                    <img src={githubLogo} alt='GitHub Logo' />
                  </SocialMenuIcon>
                </a>
              </SocialMenuItem>
              <SocialMenuItem>
                <a
                  className='linkedin slideUp delay-5 duration-3'
                  href='https://www.linkedin.com/in/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>LinkedIn</span>
                  <SocialMenuIcon>
                    <img src={linkIcon} alt='Link' />
                    <img src={linkedinLogo} alt='LinkedIn Logo' />
                  </SocialMenuIcon>
                </a>
              </SocialMenuItem>
            </SocialMenu>
          </MenuContainer>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
