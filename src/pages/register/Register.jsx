import React from "react";
import { AccountExists, RegisterSection } from "./RegisterStyles";
import { Form, Formik } from "formik";
import { registerInitialValues } from "../../Formik/InitialValues";
import { registerValidationSchema } from "../../Formik/ValidationSchema";
import LoginInput from "../../components/loginInput/LoginInput";
import Submit from "../../components/submit/Submit";
import { createUser } from "../../axios/axios-users";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../components/hooks/useRedirect";

const Register = () => {
  const dispatch = useDispatch();

  useRedirect("/");

  return (
    <RegisterSection>
      <h1>Crea tu cuenta!</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
              })
            );
          } else {
            console.log("Error al crear usuario");
          }
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="nombre" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />

          <AccountExists to="/login">
            <p>Ya tienes cuenta? Inicia Sesion!</p>
          </AccountExists>

          <Submit>Crear Cuenta</Submit>
        </Form>
      </Formik>
    </RegisterSection>
  );
};

export default Register;
