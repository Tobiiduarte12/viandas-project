import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "../../components/checkOut/CheckOut";
import ProductsCheckout from "../../components/checkOut/productsCheckout/ProductsCheckout";
import { LocalCheckOutContainer } from "../../components/checkOut/CheckOutStyles";

const LocalCheckOut = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <LocalCheckOutContainer style={{ display: "flex" }}>
      <CheckOut
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
      <ProductsCheckout
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
    </LocalCheckOutContainer>
  );
};

export default LocalCheckOut;
