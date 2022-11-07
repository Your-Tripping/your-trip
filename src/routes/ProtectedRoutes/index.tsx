import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { useUserContext } from "../../contexts/UserContext";


export const ProtectedRoutes = () => {
  const location = useLocation();
  const { user, loading } = useUserContext();

  if (loading) {
    return <Loading />
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};


