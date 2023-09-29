import React from "react";
import { SignInSection } from "./SignInStyles";
import { TitleFormStyled } from "../Login/LoginStyled";
import SignInForm from "../../components/signInForm/SignInForm";

const SignIn = () => {
  return (
    <SignInSection>
      <TitleFormStyled>Bienvenido 😁</TitleFormStyled>
      <SignInForm />
    </SignInSection>
  );
};

export default SignIn;
