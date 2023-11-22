import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalUserContainer = styled(motion.div)`
	position: absolute;
	top: 100px;
	right: 0;
	width: 400px;
	height: 200px;
	background-color: #000000d7;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	border-radius: 5px;
	border: 1px solid var(--color-ut-orange);

	@media (max-width: 768px) {
		left: 0;
	}
`;

export const ModalUserContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--color-ut-orange);
	width: 100%;

	&& p {
		cursor: pointer;
		font-size: 1.2rem;
	}

	&& p:hover {
		color: var(--color-ut-orange);
	}
`;

export const StyledName = styled.h2`
	color: #ffffff;
	font-size: 2rem;
	margin-bottom: 1rem;
	text-transform: capitalize;
`;
