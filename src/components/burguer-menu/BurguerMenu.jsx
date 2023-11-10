import React, { useState } from "react";
import {
  BurguerLinks,
  BurguerMenuContainer,
  Overlay,
} from "./BurguerMenuStyles";
import { motion } from "framer-motion";

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
      <HiMenuAlt3 style={{ cursor: "pointer" }} onClick={toggleMenu} />
      {open && (
        <motion.div
          animate={{ x: [200, 30], y: [-20] }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <BurguerLinks>
            <NavLinkStyled to="/login">Iniciar sesión</NavLinkStyled>
            <NavLinkStyled to="/">
              <AiFillHome />
              Home
            </NavLinkStyled>
            <NavLinkStyled to="/locales">
              <MdLocalDining />
              Locales
            </NavLinkStyled>
          </BurguerLinks>
        </motion.div>
      )}
    </BurguerMenuContainer>
  );
};

export default BurguerMenu;
