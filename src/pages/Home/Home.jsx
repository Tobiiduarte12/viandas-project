import React from "react";
import {
  HomeContainer,
  HomeContent,
  HomeTitleContainer,
  StyleButton,
  StyleImg,
} from "./HomeStyled";
import RecomendadosWrapper from "../../components/Recomendados/RecomendadosWrapper";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTitleContainer>
            <h1>Comida rica y saludable,</h1>
            <span>en la comodidad de tu hogar 🤯</span>
            <p style={{ marginTop: "10px" }}>
              Puedes elegir entre tus viandas favoritas❤️
            </p>
            <StyleButton>Ver más</StyleButton>
          </HomeTitleContainer>
          <StyleImg src="https://i.imgur.com/2RKe6s6.png" alt="" />
        </HomeContent>
        <RecomendadosWrapper />
      </HomeContainer>
    </>
  );
};

export default Home;
