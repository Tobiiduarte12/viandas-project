import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";

import { MdAddCircleOutline } from "react-icons/md";
import { FaMinus, FaTrashAlt } from "react-icons/fa";
import {
  CardTitleStyled,
  PriceContainerStyled,
  ProductContainerStyled,
  QuantityContainerProductStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";
import { formatPrice } from "../../../utils/formatPrice";

const ModalCartCard = ({ img, title, desc, price, quantity, id }) => {
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
        {/* <div
          onClick={() =>
            dispatch(addToCart({ img, title, desc, price, quantity, id }))
          }
        ></div> */}
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
