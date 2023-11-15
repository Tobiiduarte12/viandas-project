import { styled } from "styled-components";

export const LocalWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 100px;
  padding: 50px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: start;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleLocal = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-decoration: underline;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(
    90deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const NameSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
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
  background-color: rgba(255, 255, 255, 0.2);
`;
