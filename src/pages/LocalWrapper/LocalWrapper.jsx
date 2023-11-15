import React from "react";

import { useParams } from "react-router-dom";

import {
  DescriptionContainer,
  // DescriptionLocal,
  LocalWrapperSection,
  NameSpan,
  TitleLocal,
} from "./LocalWrapperStyles";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import ProductsContainer from "../../components/productsContainer/ProductsContainer.jsx";

const LocalWrapper = () => {
  const { local } = useParams();

  return (
    <LocalWrapperSection>
      <DescriptionContainer>
        <TitleLocal>{local}</TitleLocal>
      </DescriptionContainer>
      <CategoriesContainer></CategoriesContainer>
      <ProductsContainer></ProductsContainer>
    </LocalWrapperSection>
  );
};

export default LocalWrapper;
