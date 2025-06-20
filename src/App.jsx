import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/AppRoutes";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions/loadUser";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser()); 
    }, [dispatch]);

    return (
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
    );
};

export default App;
