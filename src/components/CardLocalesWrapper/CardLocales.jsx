import { Link } from "react-router-dom";
import styled from "styled-components";
import { LocalCard } from "../Recomendados/RecomendadosStyles";

const CardLocalesStyled = styled.div`
  width: 300px;
  height: 500px;
  background-color: #202020ce;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  border: 1px solid #ffff;
  padding-bottom: 25px;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: cyan;
    padding: 10px;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #ffff;
    padding: 10px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffff;
  font-weight: 600;
  background-color: var(--color-ut-orange);
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
    background-color: #ffff;
  }
`;

// eslint-disable-next-line react/prop-types
const CardLocales = ({ nombre, Image, description }) => {
  return (
    <CardLocalesStyled>
      <img src={Image} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{description}</p>
      <LinkItem to={nombre}>Ver más</LinkItem>
    </CardLocalesStyled>
  );
};

export default CardLocales;
