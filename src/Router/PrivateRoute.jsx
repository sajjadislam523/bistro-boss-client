import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user) {
        return children;
    }

    return <Navigate to="/login " state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
