import { styled } from "styled-components";

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
