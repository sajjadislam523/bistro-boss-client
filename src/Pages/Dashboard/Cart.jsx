import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";
import useCart from "../../Hooks/useCart.jsx";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };
    return (
        <div className="min-h-screen px-6 py-8 bg-gray-300">
            <div className="flex items-center py-8 bg-white justify-evenly font-cinzel">
                <h2 className="text-3xl font-bold">
                    Total Orders: {cart.length}
                </h2>
                <h2 className="text-3xl font-bold">
                    Total Price: {totalPrice.toFixed(2)}
                </h2>
                <Link
                    to={cart.length ? "/dashboard/payment" : "#"}
                    className={`bg-[#D1A054] rounded-md px-4 py-2 text-white ${
                        !cart.length ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Pay
                </Link>
            </div>
            <div className="bg-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrash />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
