import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const LoginInputStyled = styled.input`
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  outline: none;
  margin-bottom: 0.5rem;
  background-color: ${({ isError }) => (isError ? "red" : "#000")};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ErrorMsgStyled = styled.p`
  color: white;
  background-color: #000;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  padding: 2px 0;
`;
