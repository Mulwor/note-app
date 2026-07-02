import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";

import { SinglePage } from "./pages/data-transfer/Singlepage";

import { Editpost } from "./pages/another/EditPost";
import { Createpost } from "./pages/another/CreatePost";

import { LoginPage } from "./autorization/Loginpage";
import RequireAuth from "./autorization/hoc/RequireAuth";
import { AuthProvider } from "./autorization/hoc/AuthProvider";


export function Collection_6() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          {/* Если мы хотим переадресировать на страницу about, то можно заюзать это */}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<LoginPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
