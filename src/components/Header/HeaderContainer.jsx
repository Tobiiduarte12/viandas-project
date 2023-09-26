import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
} from "./HeaderStyled";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";
// https://i.imgur.com/AQB6iib.png
const HeaderContainer = () => {
  return (
    <HeaderStyled>
      <LogoIcon to="/">
        <img src="https://i.imgur.com/AQB6iib.png" alt="icon" />
      </LogoIcon>
      <LinksContainer>
        <NavLinkStyled to="/">
          <AiFillHome />
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/login">
          <AiOutlineUser />
          Login
        </NavLinkStyled>
        <NavLinkStyled to="/locales">
          <MdLocalDining />
          Locales
        </NavLinkStyled>
      </LinksContainer>
    </HeaderStyled>
  );
};

export default HeaderContainer;
