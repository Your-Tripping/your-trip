import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();

  return user? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
