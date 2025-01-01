import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;
