import {
  MobileNavbarBackground,
  LogoContainer,
  Logo,
  NavbarContainer,
  BurgerButton,
} from "./Navbar.styles";

const Navbar = () => (
  <>
    <MobileNavbarBackground />
    <LogoContainer>
      <Logo to="/">sneyder.dev</Logo>
    </LogoContainer>
    <NavbarContainer>
      <BurgerButton type="button">
        <i />
        <i />
        <i />
      </BurgerButton>
    </NavbarContainer>
  </>
);

export default Navbar;
