import React from "react";
import { ProductsContainerStyled } from "./productsContainerStyles";
// import { Products } from "../../data/Products";
import CardProduct from "./Product";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  let { products } = useSelector((state) => state.products);

  //   console.log(products);

  return (
    <>
      <ProductsContainerStyled>
        {Object.entries(products).map(([, foods]) => {
          return foods.map((food) => {
            return <CardProduct {...food} key={food.id} />;
          });
        })}
      </ProductsContainerStyled>
    </>
  );
};

export default ProductsContainer;
