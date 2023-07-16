import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error.jsx";
import Budget from "./Pages/Budget.jsx";
import App from "./App.jsx";
import Galeria from "./Pages/Galeria.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Galeria />,
    errorElement: <Error />,
  },
  {
    path: "/Gestion",
    element: <Budget />,
    errorElement: <Error />,
  },
  {
    path: "/Galeria",
    element: <Budget />,
    errorElement: <Error />,
  },
  {
    path: "/Servicios",
    element: <Budget />,
    errorElement: <Error />,
  },
  {
    path: "/Sobremi",
    element: <Budget />,
    errorElement: <Error />,
  },
  {
    path: "/Contacto",
    element: <Budget />,
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
