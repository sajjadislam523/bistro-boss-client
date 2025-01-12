import { BsCart4 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import {
    FaBook,
    FaCalendarDays,
    FaList,
    FaMessage,
    FaShop,
    FaUsers,
    FaUtensils,
} from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin.jsx";

const Dashboard = () => {
    // TODO: get admin value from the database.
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <div className="w-full py-8 text-center">
                    <h1 className="text-2xl font-black font-cinzel">
                        Bistro Boss
                    </h1>
                    <p className="text-xl font-bold font-cinzel">Restaurant</p>
                </div>
                <ul className="p-4 font-medium menu font-cinzel">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <IoMdHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils /> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings">
                                    <FaBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <IoMdHome /> User Home
                                </NavLink>{" "}
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendarDays /> Reservation
                                </NavLink>{" "}
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory">
                                    <GiWallet /> Payment History
                                </NavLink>{" "}
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <BsCart4 /> My Cart
                                </NavLink>{" "}
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <MdOutlineReviews /> Add Review
                                </NavLink>{" "}
                            </li>
                            <li>
                                <NavLink to="/dashboard/myBooking">
                                    <BsCart4 /> My Booking
                                </NavLink>{" "}
                            </li>
                        </>
                    )}

                    {/* Shared things */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <IoMdHome />
                            Home
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <CiMenuBurger />
                            Menu
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/shop/salad">
                            <FaShop />
                            Shop
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/shop/contact">
                            <FaMessage />
                            Contact
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
