import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReviewsAction } from "../../../redux/actions/reviewsActions/getReviewAction";

// Capitalize component name (React recommends this)
const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    //  Discount Price Calculation
    const offerPrice = product?.price - product?.discount;
        const dispatch=useDispatch()

    return (
        <div
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer"
            onClick={() => navigate(`/product/${product?._id}`)} // Removed extra '?'
        >
            {/* Product Image */}
            <div className="overflow-hidden rounded-t-xl flex justify-center items-center h-48 p-4 bg-gray-50">
                <img src={product?.image} alt={product?.title} className="max-h-full object-contain" />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
                {/* Title */}
                <h3 className="font-semibold text-base md:text-lg text-gray-800 text-center break-words max-w-full min-h-[3rem]">
                    {product?.title}
                </h3>

                {/* Price & Discount */}
                <div className="mt-2">
                    <span className="text-green-600 font-bold text-md">₹{offerPrice}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{product?.price}</span>
                    <span className="ml-2 text-sm text-red-500 font-semibold">({product?.discount} OFF)</span>
                </div>

                {/* Rating + Reviews */}
                <p className="text-yellow-500 text-sm mt-1">
                    ⭐ {product?.rating || 0} / 5
                    <span className="text-gray-600 ml-2">({product?.numOfReviews || 0}Reviews)</span>
                </p>

                {/* View Details Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent parent click
                        navigate(`/product/${product?._id}`);
                        dispatch(getReviewsAction(product?._id))
                        
                    }}
                    className="mt-4 w-full bg-gradient-to-r from-pink-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-medium py-2 rounded-lg transition-all duration-300"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
