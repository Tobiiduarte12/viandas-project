import styled from "styled-components";

export const BurguerMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	z-index: 200;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const BurguerLinks = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	align-items: center;
	top: 70px;
	justify-content: space-around;
	right: 0;
	width: 200px;
	background-color: #000000d7;
	border: 1px solid var(--color-ut-orange);
	padding-bottom: 40px;
	height: calc(100vh - 70px);
`;

export const Overlay = styled.div`
	position: fixed;
	top: 100px;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 1;
	background: rgba(255, 255, 255, 0.05);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(5px);
	display: none;
`;
