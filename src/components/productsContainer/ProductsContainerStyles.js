import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  border-radius: 15px;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background: black;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      rgba(252, 176, 69, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    border-radius: 1rem;
  }
`;

export const ProductCardStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid white;
  width: 200px;
  border-radius: 15px;
  padding: 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  img {
    width: 100%;
    height: 50%;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #666;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardButton = styled.button`
  background: linear-gradient(83deg, #ffa100, #fb103d);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
