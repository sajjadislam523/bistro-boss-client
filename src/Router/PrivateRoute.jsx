import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading.jsx";
import useAuth from "../Hooks/useAuth.jsx";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login " state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
