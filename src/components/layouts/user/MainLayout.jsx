
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../header/Navbar";


export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <main className="min-h-[80vh]">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <Footer />
    </>
  );
}