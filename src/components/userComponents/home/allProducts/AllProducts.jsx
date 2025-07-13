import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../../utils/toastUtils";
import PaginatedProductGrid from "../../../common/paginationGrid/PaginatedProductGrid";
import { getProducts } from "../../../../redux/actions/productActions/productsActions";
import { getSlides } from "../../../../redux/actions/productActions/slidesAction";
import { getCategories } from "../../../../redux/actions/productActions/categoriesActions";
import { getCart } from "../../../../redux/actions/productActions/cartActions";

const AllProducts = () => {
    const { products, error, loading } = useSelector((state) => state.products);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            return showToast(`${error}`, "error", "api-error");
        }

        dispatch(getCategories);
        dispatch(getProducts(null));
        dispatch(getSlides);

        if (isAuthenticated) {
            dispatch(getCart);
        }
    }, [dispatch, error, isAuthenticated]);

    return (
        <div className="bg-gray-50 min-h-screen  dark:bg-gray-900  ">
            {!loading && products && (
                <section className="max-w-7xl mx-auto px-4 py-12">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                            Explore All Products
                        </h2>
                        <p className=" dark:text-gray-400 mt-2 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                            Discover top quality products across all categories. Enjoy amazing deals, latest arrivals, and
                            exclusive offers handpicked just for you.
                        </p>
                        <div className="mt-4 w-20 h-1 bg-pink-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Product Grid with Pagination */}
                    <PaginatedProductGrid products={products} />
                </section>
            )}
        </div>
    );
};

export default AllProducts;
