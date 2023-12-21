import styled from "styled-components";

export const ProductsCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 100px;
`;

export const ProductsWrapped = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-height: 400px;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const cardProductCheckout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  height: 100px;
  border-radius: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const SubtotalCheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 650px) {
    width: 200px;
  }
`;

export const SubtotalCheckout = styled.div``;

export const TitleProductsCheckout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
