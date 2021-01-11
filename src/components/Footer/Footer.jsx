import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

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
  const {
    state: { icons },
  } = useContext(AppContext);

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');
  const linkIcon = icons.find((icon) => icon.alt === 'External Link');
  const twitterLogo = icons.find((icon) => icon.alt === 'Twitter');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');
  const linkedinLogo = icons.find((icon) => icon.alt === 'LinkedIn');
  const heartIcon = icons.find((icon) => icon.alt === 'Heart');

  return (
    <FooterContainer>
      <Container>
        <FooterOptions>
          <Menu>
            <MenuItem>
              <Link to='/portfolio' className='slideUp delay-6'>
                Portfolio <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/about' className='slideUp delay-6'>
                About <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                className='slideUp delay-6'
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
              >
                Contact <img src={arrowIcon.url} alt={arrowIcon.alt} />
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
                  <img src={linkIcon.url} alt={linkIcon.alt} />
                  <img src={twitterLogo.url} alt={twitterLogo.alt} />
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
                  <img src={linkIcon.url} alt={linkIcon.alt} />
                  <img src={githubLogo.url} alt={githubLogo.alt} />
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
                  <img src={linkIcon.url} alt={linkIcon.alt} />
                  <img src={linkedinLogo.url} alt={linkedinLogo.alt} />
                </SocialMenuIcon>
              </a>
            </SocialMenuItem>
          </SocialMenu>
        </FooterOptions>
        <FooterCopyright>
          <span className='slideUp delay-6'>
            Made with <img src={heartIcon.url} alt={heartIcon.alt} />
          </span>
          <span className='slideUp delay-6'>© 2020 Sneyder Barreto.</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
