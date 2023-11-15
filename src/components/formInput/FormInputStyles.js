import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const InputLabelStyled = styled.label`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  display: block;
  width: 100%;
  text-align: left;
`;

export const InputStyled = styled.input`
  color: #fff;
  background-color: #202020;
  padding: 10px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: 0.5s;

  :focus {
    background-color: #303030;
    box-shadow: 0 0 0 2px #00ffff;
    border: 1px solid #fff;
  }
`;
