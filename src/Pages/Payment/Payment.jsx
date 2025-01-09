import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import CheckoutForm from "./CheckoutForm.jsx";

// TODO: Add pulishable key.
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="px-8">
            <SectionTitle heading="Payment" subHeading="Please pay to eat" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
