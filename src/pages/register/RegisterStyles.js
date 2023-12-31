import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 100px;
  padding: 50px;
`;

export const AccountExists = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
