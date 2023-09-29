import React from "react";

import { Formik } from "formik";
import { ButtonStyled, FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";
import { InitialValues } from "../../Formik/InitialValues";
import { ValidationSchema } from "../../Formik/ValidationSchema";

const SignInForm = () => {
  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <FormStyled>
        <FormInput name="name" label="Nombre" type="text" />
        <FormInput name="surname" label="Apellido" type="text" />
        <FormInput name="age" label="Edad" type="number" />
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="password" label="Contrasenia" type="password" />
        <ButtonStyled type="submit">Registrarse</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};

export default SignInForm;
