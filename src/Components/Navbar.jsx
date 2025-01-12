import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin.jsx";
import useAuth from "../Hooks/useAuth.jsx";
import useCart from "../Hooks/useCart.jsx";
const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((err) => console.log(err));
    };

    const links = (
        <>
            <Link to="/" className="px-3 text-yellow-400 hover:text-white">
                Home
            </Link>
            <Link to="/contact" className="px-3 hover:text-yellow-400">
                Contact Us
            </Link>
            <Link to="/menu" className="px-3 hover:text-yellow-400">
                Our Menu
            </Link>
            <Link to="/shop/salad" className="px-3 hover:text-yellow-400">
                Our Shop
            </Link>
            {user ? (
                isAdmin ? (
                    <Link to="/dashboard/adminHome">Dashboard</Link>
                ) : (
                    <Link to="/dashboard/userHome">Dashboard</Link>
                )
            ) : null}
        </>
    );

    return (
        <nav className="fixed top-0 left-0 z-10 w-full text-white">
            <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto bg-black bg-opacity-30">
                {/* Logo Section */}
                <div>
                    <Link to="/">
                        <h1 className="text-xl font-extrabold font-cinzel">
                            BISTRO BOSS
                        </h1>
                        <p className="text-base font-bold font-cinzel">
                            RESTAURANT
                        </p>
                    </Link>
                </div>

                {/* Links and Actions */}
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-4">{links}</div>
                    {/* Cart Icon */}
                    <div className="relative">
                        <Link to="/dashboard/cart" className="relative">
                            <BsCart4 />
                            <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                                {cart.length}
                            </span>
                        </Link>
                    </div>

                    {user ? (
                        <>
                            {" "}
                            <button onClick={handleLogout}>Logout</button>{" "}
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-3 hover:text-yellow-400"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
