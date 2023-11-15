import { LocalesContainer, RecomendadosContainer } from "./RecomendadosStyles";

import { LocalesRecomendados } from "../../data/DataLocalesRecomendados";
import LocalCardsRecomendadas from "../CardsRecomendadas/LocalCardsRecomendadas";

const RecomendadosWrapper = () => {
  return (
    <RecomendadosContainer>
      <h1 style={{ borderBottom: "1px solid white", paddingBottom: "5px" }}>
        Locales Recomendados
      </h1>
      <LocalesContainer>
        {LocalesRecomendados.map((local) => {
          return <LocalCardsRecomendadas key={local.id} {...local} />;
        })}
      </LocalesContainer>
    </RecomendadosContainer>
  );
};

export default RecomendadosWrapper;
