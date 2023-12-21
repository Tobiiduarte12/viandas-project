import { useSelector } from "react-redux/es/hooks/useSelector";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? children : window.location.replace(redirectTo);
};

export default ProtectedRoute;
