import React from "react";
import { SignInSection } from "./SignInStyles";
import { TitleFormStyled } from "../Login/LoginStyled";
import LoginForm from "../../components/LoginForm/LoginForm";

const SignIn = () => {
  return (
    <SignInSection>
      <TitleFormStyled>Bienvenido 😁</TitleFormStyled>
      <LoginForm />
    </SignInSection>
  );
};

export default SignIn;
