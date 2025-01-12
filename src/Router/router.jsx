import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import AddItems from "../Pages/Dashboard/AddItems.jsx";
import AllUsers from "../Pages/Dashboard/AllUsers.jsx";
import Cart from "../Pages/Dashboard/Cart.jsx";
import AdminHome from "../Pages/Dashboard/Home/AdminHome.jsx";
import UserHome from "../Pages/Dashboard/Home/UserHome.jsx";
import ManageItems from "../Pages/Dashboard/ManageItems.jsx";
import UpdateItem from "../Pages/Dashboard/UpdateItem.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Menu from "../Pages/Menu.jsx";
import Order from "../Pages/Order.jsx";
import Payment from "../Pages/Payment/Payment.jsx";
import PaymentHistory from "../Pages/Payment/PaymentHistory.jsx";
import Register from "../Pages/Register.jsx";
import AdminRoute from "./AdminRoute.jsx";
import PrivateRoute from "./PrivateRoute";

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
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "userHome",
                element: <UserHome />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />,
            },

            // Admin routes
            {
                path: "adminHome",
                element: (
                    <AdminRoute>
                        <AdminHome />
                    </AdminRoute>
                ),
            },
            {
                path: "addItems",
                element: (
                    <AdminRoute>
                        <AddItems />
                    </AdminRoute>
                ),
            },
            {
                path: "manageItems",
                element: (
                    <AdminRoute>
                        <ManageItems />
                    </AdminRoute>
                ),
            },
            {
                path: `updateItem/:id`,
                element: (
                    <AdminRoute>
                        <UpdateItem />
                    </AdminRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://bistrobossserver-three.vercel.app/menu/${params.id}`
                    ),
            },
            {
                path: "users",

                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
        ],
    },
]);

export default router;
