import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cartSlice";

import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const BubbleTotalCartItems = styled.span`
  position: absolute;
  top: 30px;
  right: 10px;
  background-color: black;
  color: white;
  padding: 0.2rem;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: bold;

  @media (max-width: 760px) {
    right: 100px;
  }
`;

const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toggleCartHidden())}
      style={{ cursor: "pointer", fontSize: "1.5rem" }}
    >
      <FaShoppingCart />
      <BubbleTotalCartItems>{totalCartItems}</BubbleTotalCartItems>
    </div>
  );
};

export default CartIcon;
