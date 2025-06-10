import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
//Import Font Awesome CSS properly here:
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './routes/AppRoutes.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(
    <StrictMode>
 <Provider store={store}>
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
</Provider>
  </StrictMode>
)
