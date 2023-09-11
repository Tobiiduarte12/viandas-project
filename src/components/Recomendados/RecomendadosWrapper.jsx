import React from "react";
import { LocalesContainer, RecomendadosContainer } from "./RecomendadosStyles";

import { LocalesRecomendados } from "../../data/DataLocalesRecomendados";
import LocalCards from "../LocalCards/LocalCards";

const RecomendadosWrapper = () => {
  return (
    <RecomendadosContainer>
      <h1>Viandas Recomendadas</h1>
      <LocalesContainer>
        {LocalesRecomendados.map((local) => {
          return <LocalCards key={local.id} {...local} />;
        })}
      </LocalesContainer>
    </RecomendadosContainer>
  );
};

export default RecomendadosWrapper;
