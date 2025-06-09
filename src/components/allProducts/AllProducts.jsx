import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import Loader from "../layouts/Loader";


const AllProducts = () => {
   const { products,loading } = useSelector((state) => state.products);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);

   

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">All Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {loading?<Loader/>: products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
