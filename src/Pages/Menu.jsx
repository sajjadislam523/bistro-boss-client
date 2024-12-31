import { Helmet } from "react-helmet-async";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import menuImg from "../assets/menu/menu-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import Cover from "../Components/Cover.jsx";
import MenuCategory from "../Components/Menu/MenuCategory.jsx";
import SectionTitle from "../Components/SectionTitle.jsx";
import useMenu from "../Hooks/useMenu.jsx";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Menu - Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} />
            <SectionTitle subHeading={"Don't miss"} heading={"Todays Offer"} />
            <MenuCategory items={offered} />
            {/* dessert category */}
            <MenuCategory items={dessert} title={"dessert"} img={dessertImg} />
            {/* soup category */}
            <MenuCategory items={soup} title={"soup"} img={soupImg} />
            {/* pizza category */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
            {/* salad category */}
            <MenuCategory items={salad} title={"salad"} img={saladImg} />
        </div>
    );
};

export default Menu;
