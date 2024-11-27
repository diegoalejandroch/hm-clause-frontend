import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import contextDataAuth from '../Context/Auth/ContextDataAuth';

function ProtectedRoute() {
  const { userLogged } = useContext(contextDataAuth)
  if (!userLogged) return <Navigate to="/login" />
  return (
    <Outlet />
  )
}

export default ProtectedRoute