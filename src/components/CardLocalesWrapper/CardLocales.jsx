import styled from "styled-components";

const CardLocalesStyled = styled.div`
  width: 300px;
  height: 300px;
  background-color: #202020ce;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
    transform: scale(1.02);
  }
`;

// eslint-disable-next-line react/prop-types
const CardLocales = ({ nombre, Image, description }) => {
  return (
    <CardLocalesStyled>
      <img src={Image} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{description}</p>
    </CardLocalesStyled>
  );
};

export default CardLocales;
