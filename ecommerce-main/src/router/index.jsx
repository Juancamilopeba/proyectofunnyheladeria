import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../container/Home";
import Navbar from "../components/Navbar";
import Admin from "../container/Admin";
import Login from "../container/Login";
import Register from "../container/Register";
import Basket from "../container/Basket";
import { Checkout } from "../container/Checkout";
import CreateProduct from "../components/CreateProduct";
import DeleteProduct from "../components/deleteProduct";
import Orders from "../components/Orders";
import EditProduct from "../components/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/dashboard",
    element: <Admin />,
    children: [
      {
        path: "create",
        element: <CreateProduct />,
      },
      {
        path: "delete",
        element: <DeleteProduct />,
      },
      {
        path: "edit",
        element: <EditProduct />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

const Router = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} fallbackElement={<p>loading ...</p>} />
    </>
  );
};

export default Router;
