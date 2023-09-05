import { Navigate, Outlet, useLocation } from "react-router-dom";
import CustomAuth from './../hooks/useAuth';

export const PrivateRoute = () => {

  const { isAuthenticated } = CustomAuth()

  const location = useLocation()

  return (
    isAuthenticated === true ?
      <Outlet />
      :
      <Navigate to="/" state={{ from: location }} replace />
  )
};