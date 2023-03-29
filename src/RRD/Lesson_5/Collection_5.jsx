import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";

import { SinglePage } from "./pages/data-transfer/Singlepage";

import { Editpost } from "./pages/another/EditPost";
import { Createpost } from "./pages/another/CreatePost";

export function Collection_5() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Blogpage />} />
        <Route path="posts/:id" element={<SinglePage />} />
        <Route path="posts/:id/edit" element={<Editpost />} />
        <Route path="posts/new" element={<Createpost />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}
