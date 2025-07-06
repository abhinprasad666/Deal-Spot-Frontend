import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReviewsAction } from "../../../redux/actions/reviewsActions/getReviewAction";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const offerPrice = product?.price - product?.discount;

    return (
        <div
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer flex flex-col"
            onClick={() => navigate(`/product/${product?._id}`)}
        >
            {/* Product Image */}
            <div className="overflow-hidden rounded-t-xl flex justify-center items-center h-40 p-3 bg-gray-50">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="max-h-full object-contain"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between flex-1 px-3 pt-3 pb-4 text-center">
                {/* Content Block */}
                <div>
                    {/* Title */}
                    <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 h-[2.5rem]">
                        {product?.title}
                    </h3>

                    {/* Price & Discount */}
                    <div className="mt-2">
                        <span className="text-green-600 font-bold text-sm">₹{offerPrice}</span>
                        <span className="text-xs text-gray-500 line-through ml-2">₹{product?.price}</span>
                        {Number(product?.discount) > 0 && (
                            <span className="ml-1 text-xs text-red-500 font-semibold">
                                ({product?.discount} OFF)
                            </span>
                        )}
                    </div>

                    {/* Rating */}
                    <p className="text-yellow-500 text-xs mt-1">
                        ⭐ {product?.rating || 0} / 5
                    </p>

                    {/* Review Count */}
                    <p className="text-gray-600 text-xs mt-1">
                        ({product?.numOfReviews || 0} Reviews)
                    </p>
                </div>

                {/* View Details Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product?._id}`);
                        dispatch(getReviewsAction(product?._id));
                    }}
                    className="mt-4 w-full bg-gradient-to-r from-pink-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white text-sm font-medium py-1.5 rounded-md transition-all duration-300"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
