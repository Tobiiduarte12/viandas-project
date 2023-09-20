import Home from "../../pages/Home/Home";
import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
} from "./HeaderStyled";

import {AiFillHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {MdLocalDining} from "react-icons/md";

const HeaderContainer = () => {
  return (
    <HeaderStyled>
      <LogoIcon src="https://i.imgur.com/AQB6iib.png" alt="" />
      <LinksContainer>
        <NavLinkStyled to="/"><AiFillHome/>Home</NavLinkStyled>
        <NavLinkStyled to="/login"><AiOutlineUser/>Login</NavLinkStyled>
        <NavLinkStyled to="/locales"><MdLocalDining/>Locales</NavLinkStyled>
      </LinksContainer>
    </HeaderStyled>
  );
};

export default HeaderContainer;
