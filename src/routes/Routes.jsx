import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LocalesWrapper from "../pages/Locales/LocalesWrapper";
import LocalWrapper from "../pages/LocalWrapper/LocalWrapper";
import SignIn from "../pages/signin/SignIn";
import Error404 from "../components/error/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":local" element={<LocalWrapper />}></Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signin" element={<SignIn />} />

          <Route path="locales">
            <Route index element={<LocalesWrapper />} />
            <Route path=":local" element={<LocalWrapper />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
