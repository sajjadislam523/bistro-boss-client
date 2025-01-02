import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth.jsx";
import useAxiosSecure from "../Hooks/useAxiosSecure.jsx";
import useCart from "../Hooks/useCart.jsx";

const Card = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // TODO: send the cart items to the database
            const cartItems = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };

            axiosSecure.post("/cart", cartItems).then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: `${name} added to cart`,
                        text: "Item added to cart successfully",
                        icon: "success",
                    });
                    refetch();
                }
            });
        } else {
            Swal.fire({
                title: "Please login",
                text: "You need to be logged in to add items to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Login",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

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
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 border-0 border-b-4 btn btn-outline"
                    >
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
