import useAuth from '../hooks/useAuth';
import type { Role } from '../constant/nav';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  allowedRoles?: Role[];
  children: React.ReactNode;
}
const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  
  //public route
  if (allowedRoles === undefined) {
    return <>{children}</>;
  }
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role === 'admin') {
    return <>{children}</>;
  }
  if (allowedRoles.length === 0) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/sign-in" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
