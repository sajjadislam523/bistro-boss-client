import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading.jsx";
import useAdmin from "../Hooks/useAdmin.jsx";
import useAuth from "../Hooks/useAuth.jsx";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading />;
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login " state={{ from: location }} replace />;
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoute;
