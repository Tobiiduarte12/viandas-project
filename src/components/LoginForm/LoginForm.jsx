import { Formik, useFormik } from "formik";
import { loginInitialValues } from "../../Formik/InitialValues";
import { loginValidationSchema } from "../../Formik/ValidationSchema";
import { FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";
import { LinkStyled } from "../../pages/Login/LoginStyled";
import { useNavigate } from "react-router-dom";
import Submit from "../buttonSubmit/Submit";

const LoginForm = () => {
	const navigate = useNavigate();

	return (
		<>
			{" "}
			<Formik
				initialValues={loginInitialValues}
				validationSchema={loginValidationSchema}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}>
				<FormStyled>
					<FormInput name="email" label="Email" type="email" />
					<FormInput name="password" label="Contraseña" type="password" />
					<Submit>Entrar</Submit>
				</FormStyled>
			</Formik>
			<p onClick={() => navigate("/register")}>
				¿No tienes cuenta? <LinkStyled>Registrate</LinkStyled>
			</p>
		</>
	);
};

export default LoginForm;
