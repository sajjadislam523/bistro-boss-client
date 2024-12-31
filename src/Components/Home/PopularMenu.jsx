import useMenu from "../../Hooks/useMenu.jsx";
import SectionTitle from "../SectionTitle.jsx";
import MenuItem from "./MenuItem.jsx";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter((item) => item.category === "popular");

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Check it out"}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {popularMenu.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
