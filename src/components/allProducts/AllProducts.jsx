import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";


const AllProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);

 const{products}=useSelector((state)=>state.products)
 console.log("myyy products",products)

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">All Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
