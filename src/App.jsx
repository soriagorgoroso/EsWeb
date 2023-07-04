import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Budget from "./Pages/Budget";
import Error from "./Pages/Error";
import AppRouter from "./Routes/AppRoutes";

function App() {
  return <AppRouter />;
}

export default App;
