import React from "react";

import { Formik } from "formik";
import { FormContainer, FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";
import {
	InitialValues,
	registerInitialValues,
} from "../../Formik/InitialValues";
import {
	ValidationSchema,
	registerValidationSchema,
} from "../../Formik/ValidationSchema";
import { ButtonStyled } from "../buttonSubmit/SubmitStyles";

const SignInForm = () => {
	return (
		<>
			<Formik
				initialValues={registerInitialValues}
				validationSchema={registerValidationSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					actions.resetForm();
				}}>
				<FormContainer>
					<FormStyled>
						<FormInput name="name" label="Nombre" type="text" />
						<FormInput name="email" label="Email" type="email" />
						<FormInput name="password" label="Contraseña" type="password" />
					</FormStyled>
					<ButtonStyled type="button">Registrare</ButtonStyled>
				</FormContainer>
			</Formik>
		</>
	);
};

export default SignInForm;
