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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>
  },
  {
    path: "shop",
    element: <Shop></Shop>,
    loader: ()=> fetch('http://localhost:5000/products')
  },
  {
    path: "add-product",
    element: <AddProducts></AddProducts>,
  },
  {
    path: "pages",
    element: <AboutUs></AboutUs>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
