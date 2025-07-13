import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/common/loaders/Loader";

const ProtectedRoute = ({ isSeller }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />;
    }

    if (isAuthenticated) {
        if (isSeller === true && user.role !== "seller") {
            return <Navigate to="/login" replace />;
        }
        return (
            <div>
                <Outlet />;
            </div>
        );
    }

    if (loading) {
        return <Loader />;
    }
};

export default ProtectedRoute;
