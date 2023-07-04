import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Budget from "../Pages/Budget";
import Servicios from "../Pages/Servicios";
import Galeria from "../Pages/Galeria";
import SobreMi from "../Pages/SobreMi";
import Error from "../Pages/Error";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Budget />,
      errorElement: <Error />,
    },
    {
      path: "/Gestion",
      element: <Budget />,
      errorElement: <Error />,
    },
    {
      path: "/Galeria",
      element: <Galeria />,
      errorElement: <Error />,
    },
    {
      path: "/Servicios",
      element: <Servicios />,
      errorElement: <Error />,
    },
    {
      path: "/Sobremi",
      element: <SobreMi />,
      errorElement: <Error />,
    },
    {
      path: "/Contacto",
      element: <Budget />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRouter;
