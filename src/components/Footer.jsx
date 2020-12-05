import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../assets/icons/arrow.svg';
import linkIcon from '../assets/icons/link.svg';
import twitterLogo from '../assets/icons/twitter-logo.svg';
import githubLogo from '../assets/icons/github-logo.svg';
import linkedinLogo from '../assets/icons/linkedin-logo.svg';
import heartIcon from '../assets/icons/heart.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__options'>
          <ul className='menu'>
            <li className='menu__item'>
              <Link to='/portfolio'>
                Portfolio <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </li>
            <li className='menu__item'>
              <Link to='/about'>
                About <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </li>
            <li className='menu__item'>
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
                className='slideUp delay-6'
              >
                Contact <img src={arrowIcon} alt='Menu Arrow' />
              </a>
            </li>
          </ul>
          <ul className='social-menu'>
            <li className='social-menu__item'>
              <a
                className='twitter slideUp delay-6'
                href='https://twitter.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                <span>Twitter</span>
                <div className='social-menu__icon'>
                  <img src={linkIcon} alt='Link' />
                  <img src={twitterLogo} alt='Twitter Logo' />
                </div>
              </a>
            </li>
            <li className='social-menu__item'>
              <a
                className='github slideUp delay-6'
                href='https://github.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                <span>GitHub</span>
                <div className='social-menu__icon'>
                  <img src={linkIcon} alt='Link' />
                  <img src={githubLogo} alt='GitHub Logo' />
                </div>
              </a>
            </li>
            <li className='social-menu__item'>
              <a
                className='linkedin slideUp delay-6'
                href='https://www.linkedin.com/in/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                <span>LinkedIn</span>
                <div className='social-menu__icon'>
                  <img src={linkIcon} alt='Link' />
                  <img src={linkedinLogo} alt='LinkedIn Logo' />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__copyright'>
          <span className='made-with slideUp delay-6'>
            Made with <img src={heartIcon} alt='heart' />
          </span>
          <span className='copyright slideUp delay-6'>
            © 2020 Sneyder Barreto.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
