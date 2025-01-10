import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth.jsx";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import useCart from "./../../Hooks/useCart";

const CheckoutForm = () => {
    // Hooks
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();

    // custom hooks
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useAuth();

    // Calculate total price of cart items
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure
                .post("/create-payment-intent", {
                    price: totalPrice,
                })
                .then((res) => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            setError("Payment details are missing.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("Payment error", error);
            setError(error.message);
        } else {
            console.log("Payment method", paymentMethod);
            setError("");
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "Unknown Email",
                        name: user?.displayName || "Anonymous",
                    },
                },
            });
        if (confirmError) {
            setError("Payment confirmation failed");
        } else {
            console.log("payment intent:", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction Id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map((item) => item._id),
                    menuItemId: cart.map((item) => item.menuId),
                    status: "pending",
                };
                const res = await axiosSecure.post("/payments", payment);
                console.log("Payment er description", res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire(
                        "Payment Successful",
                        "Thank you for your payment.",
                        "success"
                    );

                    navigate("/dashboard/paymentHistory");
                }
            }
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                className="my-4 btn btn-sm btn-primary"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && (
                <p className="text-green-600">
                    Your transaction id is: {transactionId}
                </p>
            )}
        </form>
    );
};

export default CheckoutForm;
