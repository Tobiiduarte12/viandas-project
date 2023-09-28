import { styled } from "styled-components";

export const LocalWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  padding: 50px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  text-align: start;
`;

export const TitleLocal = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

export const DescriptionLocal = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  width: 500px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;
`;
