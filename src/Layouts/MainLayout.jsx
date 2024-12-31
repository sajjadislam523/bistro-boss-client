import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;