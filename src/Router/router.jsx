import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import Menu from "../Pages/Menu.jsx";
import Order from "../Pages/Order.jsx";

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
        ],
    },
]);

export default router;
