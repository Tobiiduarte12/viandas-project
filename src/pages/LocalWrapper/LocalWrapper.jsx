import React from "react";

import { useParams } from "react-router-dom";

import {
  DescriptionLocal,
  LocalWrapperSection,
  TitleLocal,
} from "./LocalWrapperStyles";

const LocalWrapper = () => {
  const { local } = useParams();

  return (
    <LocalWrapperSection>
      <div>
        <TitleLocal>{local}</TitleLocal>
      </div>
      <div>
        <DescriptionLocal>que vamos a poner aca</DescriptionLocal>
      </div>
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
