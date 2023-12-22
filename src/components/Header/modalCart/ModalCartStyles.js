import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: calc(100vh - 80px);

  padding: 2rem;
  background-color: black;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: red;
  color: white;
  cursor: pointer;
  border: 1px solid;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 800px) {
    & h1 {
      font-size: 1.2rem;
    }
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;

  gap: 10px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
  background-color: #29262b;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 250px;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  background: var(--btn-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PriceContainerStyled = styled.div`
  & p {
    text-align: center;
    margin-bottom: 0;
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityContainerProductStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `};

  @media (max-width: 560px) {
    width: calc(100vw - 300px);
  }
`;

export const ButtonOrderStyled = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: red;
  cursor: pointer;
  margin: 20px;
  padding: 0.5rem;
  @media (max-width: 560px) {
    width: 200px;
    height: 40px;
  }
`;
