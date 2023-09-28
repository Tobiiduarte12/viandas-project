import {
  AccountCreateStyled,
  ButtonStyled,
  FormStyled,
  LinkStyled,
  LoginContainer,
  TitleFormStyled,
} from "./LoginStyled";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <TitleFormStyled>Bienvenido de nuevo 😁</TitleFormStyled>
        <FormStyled action="">
          <input type="gmail" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <ButtonStyled>Ingresar</ButtonStyled>
          <AccountCreateStyled>
            ¿No tienes una cuenta?{" "}
            <LinkStyled to="/signin"> Registrate</LinkStyled>
          </AccountCreateStyled>
        </FormStyled>
      </LoginContainer>
      ;
    </>
  );
};

export default Login;
