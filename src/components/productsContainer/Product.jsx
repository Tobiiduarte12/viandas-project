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
import { ToastContainer, toast } from "react-toastify";

const CardProduct = ({ img, title, desc, id, price }) => {
  const dispatch = useDispatch();

  const notify = () => toast("Producto agregado al carrito");

  return (
    <ProductCardStyled>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <CardButton
          onClick={() =>
            dispatch(addToCart({ img, title, desc, id, price })) && notify
          }
        >
          Agregar
        </CardButton>
      </ContainerPrice>
      <ToastContainer />
    </ProductCardStyled>
  );
};

export default CardProduct;
