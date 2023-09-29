import { Formik } from "formik";
import { InitialValues } from "../../Formik/InitialValues";
import { ValidationSchema } from "../../Formik/ValidationSchema";
import { ButtonStyled, FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";
import { LinkStyled } from "../../pages/Login/LoginStyled";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <FormStyled>
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Contraseña" type="password" />
          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </FormStyled>
      </Formik>
      <p>
        ¿No tienes cuenta?{" "}
        <LinkStyled onClick={() => navigate(`/signin`)}>Registrate</LinkStyled>
      </p>
    </>
  );
};

export default LoginForm;
