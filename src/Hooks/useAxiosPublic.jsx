import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistrobossserver-three.vercel.app",
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
