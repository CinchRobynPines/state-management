import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotHome from "./pages/NotHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "not-home",
    element: <NotHome />,
  },
]);

export default () => {
  if (module.hot) {
    module.hot.accept();
  }
  return <RouterProvider router={router} />;
};
