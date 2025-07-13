import { Outlet } from "react-router-dom";
import Footer from "../../components/userComponents/footer/Footer";
import Navbar from "../../components/userComponents/header/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-[80vh]">
                <Outlet /> {/* This renders the nested routes */}
            </main>
            <Footer />
        </>
    );
}
