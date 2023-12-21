import { Form } from "formik";
import styled from "styled-components";

export const LocalCheckOutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    height: auto;
    flex-direction: column;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;

  @media (max-width: 650px) {
    margin-top: 120px;
    align-items: center;
  }
`;

export const CheckOutForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
