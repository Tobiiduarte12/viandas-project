import React from "react";
import {
  ProductCardStyled,
  CardPrice,
  ContainerPrice,
  CardButton,
} from "./ProductsContainerStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

const CardProduct = ({ img, title, desc, id, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductCardStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <CardButton
          onClick={() => dispatch(addToCart({ img, title, desc, id, price }))}
        >
          Agregar
        </CardButton>
      </ContainerPrice>
    </ProductCardStyled>
  );
};

export default CardProduct;
