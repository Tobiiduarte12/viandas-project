import React from "react";
import { SignInSection } from "./SignInStyles";
import {
  ButtonStyled,
  FormStyled,
  TitleFormStyled,
} from "../Login/LoginStyled";

const SignIn = () => {
  return (
    <SignInSection>
      <TitleFormStyled>Bienvenido 😁</TitleFormStyled>
      <FormStyled>
        <input type="gmail" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <ButtonStyled>Registrarse</ButtonStyled>
      </FormStyled>
    </SignInSection>
  );
};

export default SignIn;
