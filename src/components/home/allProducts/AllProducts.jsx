import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productActions/productsActions";
import { getSlides } from "../../../redux/actions/productActions/slidesAction";
import { getCategories } from "../../../redux/actions/productActions/categoriesActions";
import { showToast } from "../../../utils/toastUtils";
import { getCart } from "../../../redux/actions/productActions/cartActions";

const AllProducts = () => {
    const { products, error, loading } = useSelector((state) => state.products);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            return showToast(` ${error}`, "error", "api-error");
        }
        dispatch(getProducts(null));
        dispatch(getSlides);
        dispatch(getCategories);
        if (isAuthenticated) {
            dispatch(getCart);
        }
    }, [dispatch, error, isAuthenticated]);

    return (
        <div>
            {!loading && products && (
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">All Products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {products?.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default AllProducts;
