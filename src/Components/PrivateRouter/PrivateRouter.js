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
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (user) {
    return children;
  }
  else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  
};

export default PrivateRouter;
