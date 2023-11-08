import React from "react";

import { useParams } from "react-router-dom";

import {
  DescriptionContainer,
  DescriptionLocal,
  LocalWrapperSection,
  NameSpan,
  TitleLocal,
} from "./LocalWrapperStyles";

const LocalWrapper = () => {
  const { local } = useParams();

  const { imgLocal } = useParams();

  return (
    <LocalWrapperSection>
      <DescriptionContainer>
        <TitleLocal>{local}</TitleLocal>
        <DescriptionLocal>
          En <NameSpan>"{local}"</NameSpan> nos centramos en llevarte la mejor
          comida a tu casa, con la mejor calidad y el mejor servicio.
        </DescriptionLocal>
      </DescriptionContainer>
    </LocalWrapperSection>
  );
};

export default LocalWrapper;
