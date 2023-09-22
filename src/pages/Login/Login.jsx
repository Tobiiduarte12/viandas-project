import { ButtonStyled, FormStyled, LoginContainer } from "./LoginStyled";

const Login = () => {
	return (
		<>
			<LoginContainer>
				<h1 style={{ marginBottom: "20px", color: "white" }}>
					Bienvenidos al login
				</h1>
				<FormStyled action="">
					<input type="gmail" placeholder="Usuario" />
					<input type="password" placeholder="Contraseña" />
					<ButtonStyled>Ingresar</ButtonStyled>
				</FormStyled>
			</LoginContainer>
			;
		</>
	);
};

export default Login;
