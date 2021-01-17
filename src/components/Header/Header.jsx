import React, { useContext, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import MenuContext from '../../context/MenuContext';
import useScroll from '../../hooks/useScroll';

import Menu from '../Menu/Menu';
import SocialMenu from '../SocialMenu/SocialMenu';

import {
  HeaderBackground,
  LogoContainer,
  LogoText,
  Navbar,
  NavbarButton,
  NavbarMenu,
  MenuContainer,
  BurgerButton,
} from './Header.styles';
import { MenuItem } from '../Menu/Menu.styles';
import { Arrow } from '../../shared';

const Header = ({ hasArrow }) => {
  const { menu, setMenu } = useContext(MenuContext);
  const { state } = useContext(AppContext);
  const {
    author: { cv },
    icons,
  } = state;

  const [arrowState, setArrowState] = useState(false);
  const arrowRef = useRef(arrowState);
  arrowRef.current = arrowState;

  const [goState, setGoState] = useState(false);
  const goRef = useRef(goState);
  goRef.current = goState;

  const history = useHistory();
  const { pathname } = useLocation();

  const { header, background } = useScroll();

  const handleClick = () => {
    setMenu(!menu);
    document.getElementById('body').classList.toggle('overflow--hidden');
  };

  const handleGoBack = () => {
    setArrowState(!arrowState);

    setTimeout(() => {
      if (arrowRef.current) {
        setGoState(!goRef.current);
      }
    }, 300);
    setTimeout(() => {
      const isPortfolio = pathname.includes('/portfolio');

      if (isPortfolio) {
        history.push('/portfolio');
      } else {
        history.push('/blog');
      }
    }, 600);
    setTimeout(() => {
      setArrowState(!arrowRef.current);
      setGoState(!goRef.current);
    }, 700);
  };

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');

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
            role='button'
            tabIndex='0'
            aria-label='Go Back'
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
            role='button'
            tabIndex='0'
            aria-label='Toggle Menu'
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
          <Menu handleClick={handleClick}>
            <MenuItem>
              <a href={`${cv}?dl`} className='slideUp duration-3 delay-4'>
                Download CV <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </a>
            </MenuItem>
          </Menu>
          <SocialMenu />
        </MenuContainer>
      </NavbarMenu>
    </>
  );
};

export default Header;
