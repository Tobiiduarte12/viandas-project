import React from "react";
import {
  ProductsCheckoutContainer,
  ProductsWrapped,
  SubtotalCheckout,
  SubtotalCheckoutContainer,
  TitleProductsCheckout,
  cardProductCheckout,
} from "./ProductsCheckoutStyles";
import { formatPrice } from "../../../utils/formatPrice";
import { SubtotalStyled } from "../../Header/modalCart/ModalCartStyles";
import CardProductCheckout from "./CardProductCheckout";

import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/cart/cartSlice";

const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductsCheckoutContainer>
      <TitleProductsCheckout>
        <h2>Tu pedido</h2>
        <FaTrashAlt
          onClick={() => dispatch(clearCart())}
          style={{ cursor: "pointer" }}
        />
      </TitleProductsCheckout>

      <ProductsWrapped>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CardProductCheckout key={item.id} {...item} />;
          })
        ) : (
          <p>No tienes pedidos pendientes</p>
        )}
      </ProductsWrapped>
      <SubtotalCheckoutContainer>
        <div>
          <p>Subtotal:</p>
          <span>{formatPrice(price)}</span>
        </div>
        <div>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </div>
        <div>
          <p>Total:</p>
          <span>{formatPrice(price + shippingCost)}</span>
        </div>
      </SubtotalCheckoutContainer>
    </ProductsCheckoutContainer>
  );
};

export default ProductsCheckout;
