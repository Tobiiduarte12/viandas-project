import React from "react";
import {
  InputContainer,
  InputLabelStyled,
  InputStyled,
} from "./FormInputStyles";
import { ErrorMessageStyled } from "../formStyles/FormStyles";
import { ErrorMessage, Field } from "formik";

const FormInput = ({ name, label, type, isError }) => {
  return (
    <InputContainer>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field
        as={InputStyled}
        name={name}
        type={type}
        error={isError}
        id={label}
      />
      <ErrorMessage name={name} component={ErrorMessageStyled} />
    </InputContainer>
  );
};

export default FormInput;
