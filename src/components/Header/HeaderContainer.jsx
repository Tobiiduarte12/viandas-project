import {
  HeaderStyled,
  LinksContainer,
  LogoIcon,
  NavLinkStyled,
  SpanUser,
} from "./HeaderStyled";

import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import BurguerMenu from "../burguer-menu/BurguerMenu";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalUser from "./modalUser/ModalUser";
import CartIcon from "./cartIcon/CartIcon";
import ModalCart from "./modalCart/ModalCart";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, hiddenMenu } = useSelector((state) => state.user);

  return (
    <>
      {" "}
      <HeaderStyled>
        <LogoIcon onClick={() => navigate("/")}>
          <img src="https://i.imgur.com/AQB6iib.png" alt="icon" />
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

          {currentUser ? (
            <SpanUser>{currentUser.nombre}</SpanUser>
          ) : (
            <NavLinkStyled to="/login">iniciar sesion</NavLinkStyled>
          )}
          <FaUser
            onClick={() => {
              currentUser
                ? dispatch(toggleHiddenMenu())
                : navigate("/register");
            }}
            style={{ cursor: "pointer" }}
          />

          <ModalUser />

          <CartIcon></CartIcon>
          <ModalCart />
        </LinksContainer>
        <BurguerMenu />
      </HeaderStyled>
    </>
  );
};

export default HeaderContainer;
