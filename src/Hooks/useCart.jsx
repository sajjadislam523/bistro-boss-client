import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`);
            return res.data;
        },
    });
    return [cart, refetch];
};

export default useCart;
