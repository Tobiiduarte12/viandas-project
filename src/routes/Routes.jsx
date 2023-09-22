import {
	BrowserRouter,
	Routes as ReactDomRoutes,
	Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LocalesWrapper from "../pages/Locales/LocalesWrapper";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<ReactDomRoutes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/locales" element={<LocalesWrapper />} />
				</ReactDomRoutes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
