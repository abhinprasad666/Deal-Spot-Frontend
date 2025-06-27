import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import Navbar from "../components/header/Navbar";



const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

     

    if (loading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return(<div> 
       
        <Outlet />;
    </div>) 
};

export default ProtectedRoute;
