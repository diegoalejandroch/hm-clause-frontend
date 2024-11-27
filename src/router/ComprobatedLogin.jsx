import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import contextDataAuth from "../Context/Auth/ContextDataAuth";

function ComprobatedLogin() {
  const { userLogged } = useContext(contextDataAuth);
  if (userLogged) return <Navigate to="/home" />;
  return <Outlet />;
}

export default ComprobatedLogin;
