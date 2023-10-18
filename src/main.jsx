import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import Error from "./pages/error/Error";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
