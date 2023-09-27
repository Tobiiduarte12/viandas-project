import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LocalCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  background-color: #141516;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #ffff;
  gap: 10px;
  text-align: center;
  padding-bottom: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & img {
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid #ffff;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.02);
  }
`;

// eslint-disable-next-line react/prop-types
const LocalCards = ({ Image, nombre }) => {
  return (
    <LocalCard to={nombre}>
      <img src={Image} alt={nombre} />
      <h3>{nombre}</h3>
    </LocalCard>
  );
};

export default LocalCards;
