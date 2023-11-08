import LoginForm from "../../components/LoginForm/LoginForm";
import {
  // AccountCreateStyled,
  // ButtonStyled,
  // FormStyled,
  // LinkStyled,
  LoginContainer,
  TitleFormStyled,
} from "./LoginStyled";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <TitleFormStyled>Bienvenido de nuevo 😁</TitleFormStyled>
        <LoginForm></LoginForm>
      </LoginContainer>
      ;
    </>
  );
};

export default Login;
