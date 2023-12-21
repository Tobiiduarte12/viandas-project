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
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../axios/axios-orders";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cart/cartSlice";

const CheckOut = ({ cartItems, shippingCost, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { cartItems } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ContainerForm>
      <h2>Ingrese sus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };
          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate("/ordersuccess");
            dispatch(clearCart());
          } catch (error) {
            alert("Error al crear la orden");
          }
        }}
      >
        <CheckOutForm>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="cellPhone" type="text" placeholder="Celular" />
          <LoginInput name="location" type="text" placeholder="Localidad" />
          <LoginInput name="address" type="text" placeholder="Direccion" />
          <Submit disable={!cartItems.length}>Pedilooo</Submit>
        </CheckOutForm>
      </Formik>
    </ContainerForm>
  );
};

export default CheckOut;
