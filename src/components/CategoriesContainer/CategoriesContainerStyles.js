import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriesContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	padding: 10px;
	border-radius: 15px;
	gap: 10px;

	@media (max-width: 1050px) {
		justify-content: center;
	}
`;

export const CardCategoryStyled = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	text-align: center;
	border: 1px solid white;

	width: 150px;
	height: 150px;

	background-color: ${({ selected }) => (selected ? "blue" : "red")};
	border-radius: 15px;
	cursor: pointer;

	h2 {
		font-size: 1rem;
	}

	img {
		width: 100px;

		@media (max-width: 600px) {
			width: 80px;
		}
	}

	:first-child {
		img {
			padding-top: 7px;
			padding-bottom: 7px;
		}
	}
`;

export const PCategorias = styled.p`
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	display: flex;
	position: relative;
	align-items: center;
	margin-top: 20px;
	width: 100%;
	border-bottom: 1px solid white;
	padding-bottom: 5px;
	@media (max-width: 500px) {
		justify-content: center;
	}
`;
