import React from "react";
import {
  ProductCardStyled,
  CardPrice,
  ContainerPrice,
  CardButton,
} from "./ProductsContainerStyles";
import { useDispatch } from "react-redux";

const CardProduct = ({ img, title, desc, id, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductCardStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        {/* <CardPrice>{formatPrice(price)}</CardPrice> */}
        <CardButton
          onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
        >
          Agregar
        </CardButton>
      </ContainerPrice>
    </ProductCardStyled>
  );
};

export default CardProduct;
