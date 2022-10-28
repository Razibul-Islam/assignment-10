import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(user);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  
};

export default PrivateRouter;
