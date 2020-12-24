import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/icons/arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import twitterLogo from '../../assets/icons/twitter-logo.svg';
import githubLogo from '../../assets/icons/github-logo.svg';
import linkedinLogo from '../../assets/icons/linkedin-logo.svg';
import heartIcon from '../../assets/icons/heart.svg';

import {
  FooterContainer,
  FooterOptions,
  FooterCopyright,
} from './Footer.styles';
import {
  Menu,
  MenuItem,
  SocialMenu,
  SocialMenuItem,
  SocialMenuIcon,
  Container,
} from '../../shared';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterOptions>
          <Menu>
            <MenuItem>
              <Link to='/portfolio' className='slideUp delay-6'>
                Portfolio <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/about' className='slideUp delay-6'>
                About <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                className='slideUp delay-6'
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
              >
                Contact <img src={arrowIcon} alt='Menu Arrow' />
              </a>
            </MenuItem>
          </Menu>
          <SocialMenu>
            <SocialMenuItem>
              <a
                className='slideUp delay-6'
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
                className='slideUp delay-6'
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
                className='slideUp delay-6'
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
        </FooterOptions>
        <FooterCopyright>
          <span className='slideUp delay-6'>
            Made with <img src={heartIcon} alt='heart' />
          </span>
          <span className='slideUp delay-6'>© 2020 Sneyder Barreto.</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
