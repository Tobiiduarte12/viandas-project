import React, { useState } from "react";
import { BurguerLinks, BurguerMenuContainer } from "./BurguerMenuStyles";
import { motion } from "framer-motion";

import Overlay from "../overlay/Overlay.jsx";

import { HiMenuAlt3 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import { NavLinkStyled, SpanUser } from "../Header/HeaderStyled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalUser from "../Header/modalUser/ModalUser.jsx";
import { toggleHiddenMenu } from "../../redux/user/userSlice.js";
import CartIcon from "../Header/cartIcon/CartIcon.jsx";
import ModalCart from "../Header/modalCart/ModalCart.jsx";

const BurguerMenu = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, hiddenMenu } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <BurguerMenuContainer>
        <CartIcon></CartIcon>
        <ModalCart />
        <HiMenuAlt3 style={{ cursor: "pointer" }} onClick={toggleMenu} />
        {open && (
          <>
            <div onClick={toggleMenu}>
              <Overlay />
            </div>
            <motion.div
              animate={{ x: [200, 30], y: [-20] }}
              exit={{ translateX: 200 }}
              transition={{ duration: 0.5 }}
            >
              <BurguerLinks>
                {currentUser ? (
                  <SpanUser>{currentUser.nombre}</SpanUser>
                ) : (
                  <NavLinkStyled to="/login">iniciar sesion</NavLinkStyled>
                )}

                <NavLinkStyled to="/">
                  <AiFillHome />
                  Home
                </NavLinkStyled>
                <NavLinkStyled to="/locales">
                  <MdLocalDining />
                  Locales
                </NavLinkStyled>

                <FaUser
                  onClick={() => {
                    currentUser
                      ? dispatch(toggleHiddenMenu())
                      : navigate("/register");
                  }}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                />
              </BurguerLinks>
            </motion.div>
            <ModalUser />
          </>
        )}
      </BurguerMenuContainer>
    </>
  );
};

export default BurguerMenu;
