import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/AppRoutes";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions/loadUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/common/Loader";
import ButtonLoader from "./components/common/ButtonLoader";

const App = () => {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            dispatch(loadUser());
        }
    }, [dispatch]);

    if (loading) {
        return  <ButtonLoader size={6} color="#fff" message="Loading Deal-Spot" /> ;
    } else {
        return (
            <div>
                
                <>
                    <RouterProvider router={router} />
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                        theme="light"
                    />
                </>
                
            </div>
        );
    }
};
export default App;
