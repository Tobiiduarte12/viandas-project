import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardCategoryStyled } from "./CategoriesContainerStyles";
import { selectCategory } from "../../redux/categories/categoriesSlice.js";

const Categoria = ({ img, title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  return (
    <CardCategoryStyled
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
    </CardCategoryStyled>
  );
};

export default Categoria;
