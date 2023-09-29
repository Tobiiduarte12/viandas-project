import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
`;

export const TitleFormStyled = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const AccountCreateStyled = styled.div`
  display: flex;
  text-align: center;
  gap: 5px;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  color: steelblue;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;
