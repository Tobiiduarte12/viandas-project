import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyled";
import HeaderContainer from "../Header/HeaderContainer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<LayoutWrapper>
			<HeaderContainer />
			{children}
		</LayoutWrapper>
	);
};

export default Layout;
