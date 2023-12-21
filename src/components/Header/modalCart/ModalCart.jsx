import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden, clearCart } from "../../../redux/cart/cartSlice";
import {
  ButtonOrderStyled,
  CloseButtonStyled,
  ContainerStyled,
  ModalOverlayStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
} from "./ModalCartStyles";
import ModalCartCard from "./ModalCartCard";
import { AnimatePresence } from "framer-motion";
import { formatPrice } from "../../../utils/formatPrice";

import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

const ModalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const hiddenCart = useSelector((state) => state.cart.hidden);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleCartHidden())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
          >
            <CloseButtonStyled
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(toggleCartHidden())}
            >
              <IoIosCloseCircle />
            </CloseButtonStyled>
            <TitleStyled>
              <h1>Tus productos</h1>
              <FaTrashAlt
                onClick={() => dispatch(clearCart())}
                disabled={!cartItems.length}
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              />
            </TitleStyled>

            <ProductsWrapperStyled>
              {cartItems.length ? (
                cartItems.map((item) => {
                  return (
                    <ModalCartCard key={item.id} {...item}></ModalCartCard>
                  );
                })
              ) : (
                <h4 style={{ fontSize: "1rem", marginTop: "6rem" }}>
                  Tu carrito está vacío
                </h4>
              )}
            </ProductsWrapperStyled>

            <SubtotalStyled>
              <div>
                <p>Subtotal: </p>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div>
                <p>Envio: </p>
                <span>{formatPrice(shippingCost)}</span>
              </div>
              <div>
                <p>Total: </p>
                <span>{formatPrice(totalPrice + shippingCost)}</span>
              </div>
              <ButtonOrderStyled
                type="submit"
                onClick={() => {
                  navigate("/checkout");
                  dispatch(toggleCartHidden());
                }}
                disabled={!cartItems.length}
              >
                Iniciar pedido
              </ButtonOrderStyled>
            </SubtotalStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};
export default ModalCart;
