import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    fetch("http://localhost:5000/checktoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(data.valid);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [token]); 

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
