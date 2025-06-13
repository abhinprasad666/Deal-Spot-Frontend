import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/AppRoutes";

const App = () => {
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
