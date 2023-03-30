import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth() {
  const location = useLocation();

  // * Атворизации
  const auth = false;

  // * Если у нас нет авторизации, то
  if (!auth) {

    // * state={{ from: location }} - откуда мы пришли сюда
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>RequireAuth</div>;
}

export default RequireAuth;
