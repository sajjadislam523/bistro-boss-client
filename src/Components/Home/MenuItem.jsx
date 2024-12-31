import { PropTypes } from "prop-types";
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex items-center gap-4">
            <img
                style={{ borderRadius: "0 200px 200px 200px" }}
                className="w-[104px] h-[104px]"
                src={image}
                alt={name}
            />
            <div>
                <h3 className="uppercase font-cinzel text-[#151515] text-xl">
                    {name}----------------
                </h3>
                <p className="text-[#737373] font-inter">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter text-xl">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        recipe: PropTypes.string.isRequired,
    }).isRequired,
};

export default MenuItem;
