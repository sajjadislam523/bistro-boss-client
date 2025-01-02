import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Cover from "../Cover.jsx";
import MenuItem from "../Home/MenuItem.jsx";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <Link to={`/shop/${title}`}>
                <button className="mt-4 border-0 border-b-4 btn btn-outline">
                    Order Now
                </button>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.string,
};

export default MenuCategory;
