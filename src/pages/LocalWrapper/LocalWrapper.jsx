import React from "react";

import { useParams } from "react-router-dom";

import {
  DescriptionContainer,
  DescriptionLocal,
  LocalWrapperSection,
  TitleLocal,
} from "./LocalWrapperStyles";

const LocalWrapper = () => {
  const { local } = useParams();

  return (
    <LocalWrapperSection>
      <DescriptionContainer>
        <TitleLocal>{local}</TitleLocal>
        <DescriptionLocal>
          En {local} nos centramos en llevarte la mejor comida a tu casa, con la
          mejor calidad y el mejor servicio.
        </DescriptionLocal>
      </DescriptionContainer>
      <div>
        <h2>Platos principales:</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>slider de distintos platos</span>
          <span>slider de distintos platos</span>
          <span>slider de distintos platos</span>
        </div>
      </div>
    </LocalWrapperSection>
  );
};

export default LocalWrapper;
