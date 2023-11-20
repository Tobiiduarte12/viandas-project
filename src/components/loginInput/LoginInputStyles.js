import styled from "styled-components";

export const InputContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

export const LoginInputStyled = styled.input`
	padding: 0.5rem 0.8rem;
	border-radius: 0.5rem;
	border: 1px solid #ccc;
	outline: none;
	margin-bottom: 0.5rem;
	background-color: #000;
	background-color: ${({ isError }) => (isError ? "red" : "#000")};
`;

export const ErrorMsgStyled = styled.p`
	color: white;
	background-color: red;
	border-radius: 0.5rem;
	font-size: 0.8rem;
`;
