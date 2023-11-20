import { styled } from "styled-components";

export const ErrorSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Error404 = () => {
	return <ErrorSection>Error vuelva al INICIO</ErrorSection>;
};

export default Error404;
