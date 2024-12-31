import PropTypes from "prop-types";
import Card from "../Card.jsx";

const OrderTabs = ({ items }) => {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => (
                <Card item={item} key={item._id} />
            ))}
        </div>
    );
};

OrderTabs.propTypes = {
    items: PropTypes.array,
};

export default OrderTabs;
