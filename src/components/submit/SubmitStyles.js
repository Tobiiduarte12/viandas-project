import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  outline: none;
  margin-bottom: 0.5rem;
  background-color: #000;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.3s;
  width: 200px;
  &:hover {
    background-color: #202020;
  }

  @media (max-width: 400px) {
    width: 120px;
  }
`;
