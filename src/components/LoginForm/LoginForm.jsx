import { Formik } from "formik";
import { InitialValues } from "../../Formik/InitialValues";
import { ValidationSchema } from "../../Formik/ValidationSchema";
import { ButtonStyled, FormStyled } from "../formStyles/FormStyles";
import FormInput from "../formInput/FormInput";

const LoginForm = () => {
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
        <ButtonStyled>Enviar</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};

export default LoginForm;
