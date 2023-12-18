import { Formik, useFormik } from "formik";
import { loginInitialValues } from "../../Formik/InitialValues";
import { loginValidationSchema } from "../../Formik/ValidationSchema";
import { FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";
import { LinkStyled } from "../../pages/Login/LoginStyled";
import { useNavigate } from "react-router-dom";
import Submit from "../submit/Submit";
import { loginUser } from "../../axios/axios-users";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../hooks/useRedirect";
import LoginInput from "../loginInput/LoginInput";

const LoginForm = () => {
  const dispatch = useDispatch();

  useRedirect("/");

  return (
    <>
      {" "}
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <FormStyled>
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Contraseña" type="password" />
          <Submit>Entrar</Submit>
        </FormStyled>
      </Formik>
      <p>
        ¿No tienes cuenta? <LinkStyled to="/register">Registrate</LinkStyled>
      </p>
    </>
  );
};

export default LoginForm;
