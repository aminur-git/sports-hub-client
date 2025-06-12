import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import AddProducts from "./Components/AddProducts.jsx";
import Error from "./Components/Error.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "shop",
    element: <Shop></Shop>,
    loader: () => fetch("http://localhost:5000/products").then(res => res.json()),
  },
  {
    path: "add-product",
    element: <AddProducts></AddProducts>,
  },
  {
    path: "pages",
    element: <AboutUs></AboutUs>,
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
