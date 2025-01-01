import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes("/login") ||
        location.pathname.includes("/register");
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;
