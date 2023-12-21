import React from "react";
import {
  CardTitleStyled,
  PriceContainerStyled,
  ProductContainerStyled,
  QuantityContainerProductStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "../../Header/modalCart/ModalCartStyles";

import { MdAddCircleOutline } from "react-icons/md";
import { FaTrashAlt, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../../utils/formatPrice";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";

const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceContainerStyled>{formatPrice(price)}</PriceContainerStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <QuantityContainerProductStyled>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeFromCart(id))}
          >
            {quantity === 1 ? <FaTrashAlt /> : <FaMinus />}
          </div>

          <div>{quantity}</div>
          <MdAddCircleOutline
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={() =>
              dispatch(addToCart({ img, title, desc, price, quantity, id }))
            }
          ></MdAddCircleOutline>
        </QuantityContainerProductStyled>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default CardProductCheckout;
