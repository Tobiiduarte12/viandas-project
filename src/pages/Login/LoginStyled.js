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

export const FormStyled = styled.form`
  height: 400px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  & input {
    color: #fff;
    background-color: #202020;
    padding: 10px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    transition: 0.5s;
  }
  & input:focus {
    background-color: #303030;
    box-shadow: 0 0 0 2px #00ffff;
  }
`;

export const TitleFormStyled = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 100px;
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
