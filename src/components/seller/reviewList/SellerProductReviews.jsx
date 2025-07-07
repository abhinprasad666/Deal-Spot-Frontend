import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviewsAction } from "../../../redux/actions/reviewsActions/getReviewAction";
import Loader from "../../common/Loader";

const SellerProductReviews = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const { reviews, loading, error } = useSelector((state) => state.review);

    useEffect(() => {
        if (productId) {
            dispatch(getReviewsAction(productId));
        }
    }, [dispatch, productId]);

    const product = reviews[0]?.product;

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {loading ? (
                <Loader message={"Loading product reviews..."} />
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* LEFT: Product Info */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 w-full lg:w-1/3 flex flex-col items-center">
                        {product ? (
                            <>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-72 h-72 object-cover rounded-2xl border border-gray-300 dark:border-gray-600 mb-6"
                                />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-400 mt-2 text-center break-all">
                                    <span className="font-semibold">Product ID: </span> {product._id}
                                </p>
                            </>
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400">No product data</p>
                        )}
                    </div>

                    {/* RIGHT: Reviews */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            Customer Reviews ({reviews.length})
                        </h2>

                        {loading ? (
                            <p className="text-gray-500 dark:text-gray-400">
                                <Loader message={"Loading product reviews..."} />
                            </p>
                        ) : error ? (
                            <p className="text-red-500 font-semibold">{error}</p>
                        ) : reviews.length === 0 ? (
                            <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 p-4 rounded-md">
                                No reviews found for this product.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {reviews.map((review) => (
                                    <div
                                        key={review._id}
                                        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`text-sm ${
                                                            i < review.rating
                                                                ? "text-yellow-500"
                                                                : "text-gray-300 dark:text-gray-600"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 mb-1">{review.comment}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            — {review.user.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellerProductReviews;
