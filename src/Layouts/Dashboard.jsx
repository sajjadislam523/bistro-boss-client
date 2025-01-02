import { BsCart4 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { FaCalendarDays, FaMessage, FaShop } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                        <NavLink to="/menu">
                            <FaMessage />
                            Contact
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
