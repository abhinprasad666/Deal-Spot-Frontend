import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
//Import Font Awesome CSS properly here:
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './routes/AppRoutes.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>
)
