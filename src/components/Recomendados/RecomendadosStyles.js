import { styled } from "styled-components";

export const RecomendadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  margin-top: 10px;
`;

export const LocalesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LocalCard = styled.div`
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

  & img {
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid #ffff;
  }
`;
