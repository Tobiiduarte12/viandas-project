import React from "react";
import { StyledFooterContainer, StyledLinksFooter } from "./FooterStyles";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLinksFooter>
        <h1>Viandas Now</h1>
        <p>+54 3777201788</p>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h1>Enlaces</h1>
        <NavLink to="/">
          {" "}
          <p>Inicio</p>
        </NavLink>
        <NavLink to="/login">
          {" "}
          <p>Iniciar Sesion</p>
        </NavLink>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h1>Redes sociales</h1>
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <BsFillTelephoneFill />
        </a>
      </StyledLinksFooter>

      <StyledLinksFooter>
        <h1
          style={{
            fontSize: "20px",
            textAlign: "center",
            borderBottom: "1px solid #000",
            width: "200px",
          }}
        >
          Desarrollado por:{" "}
          <a
            href="https://github.com/Tobiiduarte12"
            target="_blanck"
            style={{
              color: "red",
              fontSize: "1.3rem",
            }}
          >
            Tobias Duarte⚜️
          </a>
        </h1>
      </StyledLinksFooter>
    </StyledFooterContainer>
  );
};

export default Footer;
