import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import Cart from "../Pages/Dashboard/Cart.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Menu from "../Pages/Menu.jsx";
import Order from "../Pages/Order.jsx";
import Register from "../Pages/Register.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "shop/:category",
                element: <Order />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);

export default router;
