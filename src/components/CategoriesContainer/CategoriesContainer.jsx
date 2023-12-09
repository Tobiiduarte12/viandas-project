import React from "react";
import {
  CategoriesContainerStyled,
  PCategorias,
} from "./CategoriesContainerStyles";
import { Categories } from "../../data/Categories";
import { useSelector } from "react-redux";
import Categoria from "./Categoria";

const CategoriesContainer = () => {
  const { Categories } = useSelector((state) => state.categories);

  return (
    <>
      <PCategorias>Categorias</PCategorias>
      <CategoriesContainerStyled>
        {Categories.map((category) => {
          return <Categoria {...category} key={category.id}></Categoria>;
        })}
      </CategoriesContainerStyled>
    </>
  );
};

export default CategoriesContainer;
