import React from "react";
import {
  CardCategoryStyled,
  CategoriesContainerStyled,
} from "./CategoriesContainerStyles";
// import { Categories } from "../../data/categories";
import { useSelector } from "react-redux";
import Categoria from "./Categoria";

const CategoriesContainer = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <CategoriesContainerStyled>
      {categories.map((category) => {
        return <Categoria {...category} key={category.id}></Categoria>;
      })}
    </CategoriesContainerStyled>
  );
};

export default CategoriesContainer;
