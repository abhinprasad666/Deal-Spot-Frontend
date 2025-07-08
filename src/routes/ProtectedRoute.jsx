import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import Navbar from "../components/header/Navbar";

const ProtectedRoute = ({ isSeller }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
console.log("User",user)
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
