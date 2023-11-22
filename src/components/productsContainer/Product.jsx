import React from "react";
import {
	ProductCardStyled,
	CardPrice,
	ContainerPrice,
	CardButton,
} from "./ProductsContainerStyles";
import { useDispatch } from "react-redux";

const CardProduct = ({ img, title, desc, price, id }) => {
	const dispatch = useDispatch();

	return (
		<ProductCardStyled>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<p>{desc}</p>
			<ContainerPrice>
				<CardPrice>{/* {formatPrice(price)} */}</CardPrice>
				<CardButton>Agregar</CardButton>
			</ContainerPrice>
		</ProductCardStyled>
	);
};

export default CardProduct;
