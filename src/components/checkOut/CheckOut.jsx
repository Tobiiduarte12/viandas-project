import React from "react";
import {
  CheckOutForm,
  ContainerForm,
  LocalCheckOutContainer,
} from "./CheckOutStyles";
import LoginInput from "../loginInput/LoginInput";
import { Formik } from "formik";
import Submit from "../submit/Submit";
import { checkoutInitialValues } from "../../Formik/InitialValues";
import { checkoutValidationSchema } from "../../Formik/ValidationSchema";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <ContainerForm>
      <h2>Ingrese sus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <CheckOutForm>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="phone" type="number" placeholder="Celular" />
          <LoginInput name="localidad" type="text" placeholder="Localidad" />
          <LoginInput name="direccion" type="text" placeholder="Direccion" />
          <Submit disable={!cartItems.length}>Pedilooo</Submit>
        </CheckOutForm>
      </Formik>
    </ContainerForm>
  );
};

export default CheckOut;
