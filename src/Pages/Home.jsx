import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner.jsx";
import Category from "../Components/Home/Category.jsx";
import Featured from "../Components/Home/Featured.jsx";
import PopularMenu from "../Components/Home/PopularMenu.jsx";
import Testimonials from "../Components/Home/Testimonials.jsx";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Bistro Boss</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
