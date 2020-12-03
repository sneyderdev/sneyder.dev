import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>
          <a href='https://sneyder.dev' className='logo__text fadeIn'>
            sneyder.dev
          </a>
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
                <a href='portfolio.html' className='slideUp duration-3'>
                  Portfolio{' '}
                  <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
                </a>
              </li>
              <li className='menu__item'>
                <a href='about.html' className='slideUp delay-1 duration-3'>
                  About{' '}
                  <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
                </a>
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
