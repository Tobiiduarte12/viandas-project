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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae odit amet rerum aspernatur cumque quaerat quis magnam animi eius!
          Nostrum adipisci culpa, velit incidunt obcaecati labore quia in
          reiciendis!
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
