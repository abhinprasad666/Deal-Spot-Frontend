import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/layouts/Loader";


const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

     

    if (loading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
