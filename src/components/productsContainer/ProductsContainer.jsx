import React from "react";
import { ProductsContainerStyled } from "./ProductsContainerStyles";
import { products } from "../../data/Products";
import CardProduct from "./Product";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  let { products } = useSelector((state) => state.products);

  const { selectedCategory } = useSelector((state) => state.categories);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  return (
    <ProductsContainerStyled>
      {Object.entries(products).map(([, foods]) => {
        return foods.map((food) => <CardProduct {...food} key={food.id} />);
      })}
    </ProductsContainerStyled>
  );
};

export default ProductsContainer;
