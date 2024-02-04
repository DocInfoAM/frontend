import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/UserProvider";

export const PrivateRoute = () => {
  const { id } = useUser();

  const location = useLocation();

  return id !== "" ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};
