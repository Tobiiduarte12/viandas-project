import Home from "../../pages/Home/Home";
import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
} from "./HeaderStyled";

const HeaderContainer = () => {
  return (
    <HeaderStyled>
      <LogoIcon src="https://i.imgur.com/AQB6iib.png" alt="" />
      <LinksContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
        <NavLinkStyled to="/locales">Locales</NavLinkStyled>
      </LinksContainer>
    </HeaderStyled>
  );
};

export default HeaderContainer;
