import PropTypes from "prop-types";

const Card = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="shadow-xl card bg-base-100 w-96">
            <figure>
                <img src={image} alt="Food" />
            </figure>
            <p className="absolute right-0 px-4 py-2 mt-4 mr-4 text-sm text-white font-inter bg-slate-900">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="justify-end card-actions">
                    <button className="mt-4 border-0 border-b-4 btn btn-outline">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object,
};

export default Card;
