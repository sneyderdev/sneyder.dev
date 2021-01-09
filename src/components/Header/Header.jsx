import React, { useContext, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import useScroll from '../../hooks/useScroll';

import arrowIcon from '../../assets/icons/arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import twitterLogo from '../../assets/icons/twitter-logo.svg';
import githubLogo from '../../assets/icons/github-logo.svg';
import linkedinLogo from '../../assets/icons/linkedin-logo.svg';

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
  const { state, setState } = useContext(AppContext);
  const {
    menu,
    author: { cv },
  } = state;

  const handleClick = () => {
    setState({
      ...state,
      menu: !menu,
    });
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
                Portfolio <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to='/about'
                onClick={handleClick}
                className='slideUp duration-3 delay-1'
              >
                About <img src={arrowIcon} alt='Menu Arrow' />
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
                className='slideUp duration-3 delay-2'
              >
                Contact <img src={arrowIcon} alt='Menu Arrow' />
              </a>
            </MenuItem>
            <MenuItem>
              <a href={`${cv}?dl`} className='slideUp duration-3 delay-3'>
                Download CV <img src={arrowIcon} alt='Menu Arrow' />
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
                  <img src={linkIcon} alt='Link' />
                  <img src={twitterLogo} alt='Twitter Logo' />
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
                  <img src={linkIcon} alt='Link' />
                  <img src={githubLogo} alt='GitHub Logo' />
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
                  <img src={linkIcon} alt='Link' />
                  <img src={linkedinLogo} alt='LinkedIn Logo' />
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
