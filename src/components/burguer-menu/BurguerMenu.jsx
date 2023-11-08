import React, { useState } from "react";
import { BurguerLinks, BurguerMenuContainer } from "./BurguerMenuStyles";

import { HiMenuAlt3 } from "react-icons/hi";
import { NavLinkStyled } from "../Header/HeaderStyled";
import { AiFillHome } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";

const BurguerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <BurguerMenuContainer>
      <HiMenuAlt3 onClick={toggleMenu} />
      {open && (
        <BurguerLinks>
          <NavLinkStyled to="/">
            <AiFillHome />
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/locales">
            <MdLocalDining />
            Locales
          </NavLinkStyled>
          <NavLinkStyled>Iniciar sesión</NavLinkStyled>
        </BurguerLinks>
      )}
    </BurguerMenuContainer>
  );
};

export default BurguerMenu;
