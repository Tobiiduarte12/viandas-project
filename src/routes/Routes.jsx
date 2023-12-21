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
import Error404 from "../components/error/Error404";
import Register from "../pages/register/Register";
import LocalCheckOut from "../pages/localCheckOut/LocalCheckOut";
import OrderSuccess from "../pages/orderSuccess/OrderSuccess";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/locales">
            <Route index element={<LocalesWrapper />} />
            <Route path=":local" element={<LocalWrapper />} />
          </Route>

          <Route
            path="/checkout"
            element={
              <ProtectedRoute redirectTo="/login">
                <LocalCheckOut />;
              </ProtectedRoute>
            }
          />

          <Route path="/ordersuccess" element={<OrderSuccess />}></Route>

          <Route path="*" element={<Error404 />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
