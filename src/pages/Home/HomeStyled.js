import { styled } from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const HomeContent = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

export const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  text-align: flex-start;

  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  & span {
    font-size: 1.6rem;
  }
`;

export const StyleButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  background-color: #ffff;
  color: #000;
  font-size: 1.2rem;
  font-family: "irish-grower", cursive;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;
  font-weight: 700;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyleImg = styled.img`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
