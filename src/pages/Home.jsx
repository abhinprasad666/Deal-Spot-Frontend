import React, { useEffect } from "react";
import Slider from "../components/Slider";
import PayButton from "../components/PayButton";
import CategoryScroll from "../components/categories/CategoryScroll";
import CategoryHighlights from "../components/categories/CategoryHighlights";
import AllProducts from "../components/allProducts/AllProducts";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

const Home = () => {

    const dispatch= useDispatch()

    useEffect(() => {
   dispatch(getProducts)

},[dispatch]);

    return (
        <div>
            <CategoryScroll />
            <Slider />
            <CategoryHighlights />
            <AllProducts/>
            <PayButton />
        </div>
    );
};

export default Home;
