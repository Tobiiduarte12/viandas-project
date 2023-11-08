import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
} from "./HeaderStyled";

import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";
import BurguerMenu from "../burguer-menu/BurguerMenu";

const HeaderContainer = () => {
  const Navigate = useNavigate();

  return (
    <HeaderStyled>
      <LogoIcon onClick={() => Navigate("/")}>
        <img
          src="https://i.imgur.com/AQB6iib.png"
          alt="icon"
          whileTap={{ scale: 0.95 }}
        />
      </LogoIcon>
      <LinksContainer>
        <NavLinkStyled to="/">
          <AiFillHome />
          Home
        </NavLinkStyled>

        <NavLinkStyled to="/locales">
          <MdLocalDining />
          Locales
        </NavLinkStyled>

        <NavLinkStyled to="/login">Iniciar sesión</NavLinkStyled>
      </LinksContainer>
      <BurguerMenu />
    </HeaderStyled>
  );
};

export default HeaderContainer;
