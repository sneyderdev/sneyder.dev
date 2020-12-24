import React, { useContext, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuContext from '../../context/MenuContext';

import arrowIcon from '../../assets/icons/arrow.svg';
import linkIcon from '../../assets/icons/link.svg';
import twitterLogo from '../../assets/icons/twitter-logo.svg';
import githubLogo from '../../assets/icons/github-logo.svg';
import linkedinLogo from '../../assets/icons/linkedin-logo.svg';

import {
  HeaderContainer,
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

  return (
    <HeaderContainer>
      <Navbar>
        <LogoContainer>
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
        <NavbarButton>
          <BurgerButton
            onClick={handleClick}
            className={`fadeIn ${menu ? 'active' : ''}`}
          >
            <i />
            <i />
            <i />
          </BurgerButton>
        </NavbarButton>
        <NavbarMenu css={menu ? `display: block;` : `display: none;`}>
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
            </Menu>
            <SocialMenu>
              <SocialMenuItem>
                <a
                  href='https://twitter.com/sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                  className='slideUp duration-3 delay-3'
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
                  className='slideUp duration-3 delay-4'
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
                  className='slideUp duration-3 delay-5'
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
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
