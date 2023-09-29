import { Form } from "formik";
import { styled } from "styled-components";

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;

  & p {
    margin: 0;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 50px;
  margin: 0 auto;
`;

export const ButtonStyled = styled.button`
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  color: black;

  &:hover {
    background-color: #e2e2e2;
  }
`;
