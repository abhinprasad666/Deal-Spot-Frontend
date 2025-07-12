import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showToast } from "../../utils/toastUtils";
import { getSingleCategoryProducts } from "../../redux/actions/productActions/categoryProductsActions";
import { clearCategoryProducts } from "../../redux/slices/productSlices/categoryProductsSlice";
import ButtonLoader from "../../components/common/ButtonLoader";
import PaginatedProductGrid from "../../PaginatedProductGrid";

const CategoryProductsPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const {
    categoryProductsLoading,
    categoryProductsError,
    categoryProducts,
  } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    if (categoryProductsError) {
      showToast(` ${categoryProductsError}`, "error", "api-error");
      dispatch(clearCategoryProducts());
    }
    dispatch(getSingleCategoryProducts(categoryId));
  }, [dispatch, categoryProductsError, categoryId]);

  const products = categoryProducts?.products || [];
  const category = categoryProducts?.category;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10 pt-24">
      {categoryProductsLoading ? (
        <ButtonLoader
          message="Fetching category-wise products for you!"
          bottomMessage="Please wait while we load exciting deals and items."
          fullPage={true}
          size={10}
          color="#EC4899"
        />
      ) : (
        <div className="max-w-6xl mx-auto">
          {/* Category Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            {category?.name}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            {category?.description}
          </p>

          <div className="my-10 border-b border-gray-200"></div>

          {/* Product Grid With Pagination */}
          <PaginatedProductGrid products={products} />
        </div>
      )}
    </div>
  );
};

export default CategoryProductsPage;
