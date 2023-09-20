import React from "react";

import styled from "styled-components";

const CardLocalesStyled = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    padding: 10px;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    padding: 10px;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
    transform: scale(1.02);
  }
`;

const CardLocales = () => {
  return (
    <CardLocalesStyled>
      <img src="./public/locales-imgs/plato-1.jpg" alt="" />
      <h3>Nombre del local</h3>
      <p>Descripción del local</p>
    </CardLocalesStyled>
  );
};

export default CardLocales;
