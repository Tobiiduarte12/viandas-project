import { Form } from "formik";
import { styled } from "styled-components";

export const ErrorMessageStyled = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
  background-color: #000;
  padding: 2px;
  border-radius: 15px;
  margin-top: 2px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;

export const FormStyled = styled(Form)`
  display: flex;
  background-color: #ffffff81;
  border-radius: 8px;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 400px;

  @media (max-width: 768px) {
    width: 70%;
    padding: 5px;
    & input {
      width: 95%;
    }
  }
`;
