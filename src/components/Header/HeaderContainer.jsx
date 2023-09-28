import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
} from "./HeaderStyled";

import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";

const HeaderContainer = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <LogoIcon onClick={() => navigate("/")}>
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
