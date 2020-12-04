import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__options'>
          <ul className='menu'>
            <li className='menu__item'>
              <a href='portfolio.html' className='slideUp delay-6'>
                Portfolio{' '}
                <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
              </a>
            </li>
            <li className='menu__item'>
              <a href='about.html' className='slideUp delay-6'>
                About <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
              </a>
            </li>
            <li className='menu__item'>
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
                className='slideUp delay-6'
              >
                Contact{' '}
                <img src='assets/icons/menu-arrow.svg' alt='Menu Arrow' />
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
                  <img src='assets/icons/link.svg' alt='Link' />
                  <img src='assets/icons/twitter-logo.svg' alt='Twitter Logo' />
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
                  <img src='assets/icons/link.svg' alt='Link' />
                  <img src='assets/icons/github-logo.svg' alt='GitHub Logo' />
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
        <div className='footer__copyright'>
          <span className='made-with slideUp delay-6'>
            Made with <img src='assets/icons/heart.svg' alt='heart' />
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
