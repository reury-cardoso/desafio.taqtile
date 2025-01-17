import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/auth" replace />;

  try {
    const jwt = token.split(' ')[1];
    const { exp } = JSON.parse(atob(jwt.split('.')[1]));
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('token');
      return <Navigate to="/auth" replace />;
    }
  } catch (error) {
    localStorage.removeItem('token');
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}
