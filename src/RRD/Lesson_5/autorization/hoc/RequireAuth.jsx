import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../hook/useAuth'

function RequireAuth( {children} ) {
  const location = useLocation();
  const {user} = useAuth()

  // * Если у нас нет авторизации, то
  if (!user) {

    // * state={{ from: location }} - откуда мы пришли сюда
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>RequireAuth</div>;
}

export default RequireAuth;
