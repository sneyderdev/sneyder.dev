import React, { useContext, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import MenuContext from '../../context/MenuContext';
import useScroll from '../../hooks/useScroll';

import {
  HeaderBackground,
  Navbar,
  NavbarButton,
  NavbarMenu,
  LogoContainer,
  LogoText,
  BurgerButton,
} from './Header.styles';
import {
  Arrow,
  MenuContainer,
  Menu,
  MenuItem,
  SocialMenu,
  SocialMenuItem,
  SocialMenuIcon,
} from '../../shared';

const Header = ({ hasArrow }) => {
  const { menu, setMenu } = useContext(MenuContext);

  const { state } = useContext(AppContext);
  const {
    author: { cv },
    icons,
  } = state;

  const handleClick = () => {
    setMenu(!menu);
    document.getElementById('body').classList.toggle('overflow--hidden');
  };

  const [arrowState, setArrowState] = useState(false);
  const arrowRef = useRef(arrowState);
  arrowRef.current = arrowState;

  const [goState, setGoState] = useState(false);
  const goRef = useRef(goState);
  goRef.current = goState;

  const history = useHistory();

  const handleGoBack = () => {
    setArrowState(!arrowState);

    setTimeout(() => {
      if (arrowRef.current) {
        setGoState(!goRef.current);
      }
    }, 300);
    setTimeout(() => {
      history.goBack();
    }, 600);
    setTimeout(() => {
      setArrowState(!arrowRef.current);
      setGoState(!goRef.current);
    }, 700);
  };

  const { header, background } = useScroll();

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');
  const linkIcon = icons.find((icon) => icon.alt === 'External Link');
  const twitterLogo = icons.find((icon) => icon.alt === 'Twitter');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');
  const linkedinLogo = icons.find((icon) => icon.alt === 'LinkedIn');

  return (
    <>
      <HeaderBackground
        className={header ? 'header--visible' : ''}
        isBlack={background}
      />
      <LogoContainer className={header ? 'header--visible' : ''}>
        {hasArrow ? (
          <Arrow
            onClick={handleGoBack}
            className={`fadeIn ${arrowState ? 'active' : ''} ${
              goState ? 'go-back' : ''
            }`}
          />
        ) : (
          <LogoText to='/' className='fadeIn'>
            sneyder.dev
          </LogoText>
        )}
      </LogoContainer>
      <Navbar>
        <NavbarButton className={header ? 'header--visible' : ''}>
          <BurgerButton
            onClick={handleClick}
            className={`fadeIn ${menu ? 'active' : ''}`}
          >
            <i />
            <i />
            <i />
          </BurgerButton>
        </NavbarButton>
      </Navbar>
      <NavbarMenu menu={menu}>
        <MenuContainer>
          <Menu>
            <MenuItem>
              <Link
                to='/portfolio'
                onClick={handleClick}
                className='slideUp duration-3'
              >
                Portfolio <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to='/blog'
                onClick={handleClick}
                className='slideUp duration-3 delay-1'
              >
                Blog <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to='/about'
                onClick={handleClick}
                className='slideUp duration-3 delay-2'
              >
                About <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
                className='slideUp duration-3 delay-3'
              >
                Contact <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </a>
            </MenuItem>
            <MenuItem>
              <a href={`${cv}?dl`} className='slideUp duration-3 delay-3'>
                Download CV <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </a>
            </MenuItem>
          </Menu>
          <SocialMenu>
            <SocialMenuItem>
              <a
                href='https://twitter.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='slideUp duration-3 delay-4'
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
                href='https://github.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='slideUp duration-3 delay-5'
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
                href='https://www.linkedin.com/in/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='slideUp duration-3 delay-6'
              >
                <span>LinkedIn</span>
                <SocialMenuIcon>
                  <img src={linkIcon.url} alt={linkIcon.alt} />
                  <img src={linkedinLogo.url} alt={linkedinLogo.alt} />
                </SocialMenuIcon>
              </a>
            </SocialMenuItem>
          </SocialMenu>
        </MenuContainer>
      </NavbarMenu>
    </>
  );
};

export default Header;
