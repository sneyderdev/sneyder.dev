import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ hasArrow }) => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>
          {hasArrow ? (
            <Link to='/portfolio'>Arrow</Link>
          ) : (
            <Link to='/'>sneyder.dev</Link>
          )}
        </div>
        <div className='navbar__btn'>
          <div className='burger-btn fadeIn' id='burger-btn'>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className='navbar__menu' id='menu'>
          <div className='menu-container'>
            <ul className='menu'>
              <li className='menu__item'>
                <Link to='/portfolio'>
                  Portfolio{' '}
                  <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
                </Link>
              </li>
              <li className='menu__item'>
                <Link to='/about'>
                  About{' '}
                  <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
                </Link>
              </li>
              <li className='menu__item'>
                <a
                  href='mailto:hello@sneyder.dev'
                  target='_blank'
                  rel='noreferrer'
                  className='slideUp delay-2 duration-3'
                >
                  Contact{' '}
                  <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
                </a>
              </li>
            </ul>
            <ul className='social-menu'>
              <li className='social-menu__item'>
                <a
                  className='twitter slideUp delay-3 duration-3'
                  href='https://twitter.com/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Twitter</span>
                  <div className='social-menu__icon'>
                    <img src='assets/icons/link.svg' alt='Link' />
                    <img
                      src='assets/icons/twitter-logo.svg'
                      alt='Twitter Logo'
                    />
                  </div>
                </a>
              </li>
              <li className='social-menu__item'>
                <a
                  className='github slideUp delay-4 duration-3'
                  href='https://github.com/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>GitHub</span>
                  <div className='social-menu__icon'>
                    <img src='assets/icons/link.svg' alt='Link' />
                    <img src='assets/icons/github-logo.svg' alt='GitHub Logo' />
                  </div>
                </a>
              </li>
              <li className='social-menu__item'>
                <a
                  className='linkedin slideUp delay-5 duration-3'
                  href='https://www.linkedin.com/in/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>LinkedIn</span>
                  <div className='social-menu__icon'>
                    <img src='assets/icons/link.svg' alt='Link' />
                    <img
                      src='assets/icons/linkedin-logo.svg'
                      alt='LinkedIn Logo'
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
