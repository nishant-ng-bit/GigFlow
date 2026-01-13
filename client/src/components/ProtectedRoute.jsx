import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, loading, navigate]);

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoute;
