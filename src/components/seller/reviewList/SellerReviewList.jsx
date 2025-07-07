import React, { useEffect, useState } from "react";
import { FaTrash, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteReviewModal from "./DeleteReviewModal";
import { useDispatch, useSelector } from "react-redux";
import { getSellerReviewsList } from "../../../redux/actions/seller/sellerReviewsActions";
import Loader from "../../common/Loader";

const SellerReviewList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { sellerReviews, loading, error } = useSelector(
    (state) => state.sellerReviews
  );

  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [locallyDeletedIds, setLocallyDeletedIds] = useState([]);

  const handleDeleteClick = (reviewId) => {
    setSelectedReviewId(reviewId);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedReviewId(null);
  };

  const handleModalSubmit = (reviewId, reason) => {
    setLocallyDeletedIds((prev) => [...prev, reviewId]);
    setShowModal(false);
    console.log("Deleted Review:", reviewId);
    console.log("Reason:", reason);
  };

  const handleShowAllReviews = (productId) => {
    navigate(`/seller/product/${productId}/reviews`);
  };

  useEffect(() => {
    dispatch(getSellerReviewsList);
  }, [dispatch]);

  const filteredReviews = Array.isArray(sellerReviews)
    ? sellerReviews.filter((review) => !locallyDeletedIds.includes(review._id))
    : [];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        My Reviews ({filteredReviews.length})
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          <Loader message={"Loading reviews..."}/>
        </p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredReviews.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300 py-16">
          <p className="text-lg font-semibold">
            You haven't added any reviews yet.
          </p>
          <p className="text-sm">
            They'll appear here once you leave some feedback.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Table for md and up */}
          <div className="hidden md:block overflow-x-auto rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <table className="min-w-full bg-white dark:bg-gray-900 text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Comment</th>
                  <th className="px-4 py-3">Rating</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((review) => (
                  <tr
                    key={review._id}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={review.product.image}
                          alt={review.product.title}
                          className="w-12 h-12 object-contain rounded"
                        />
                        <div>
                          <div>{review.product.title}</div>
                          <button
                            onClick={() =>
                              handleShowAllReviews(review.product._id)
                            }
                            className="text-blue-600 hover:underline text-xs mt-1"
                          >
                            Show all reviews
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 max-w-xs">{review.comment}</td>
                    <td className="px-4 py-3 flex items-center gap-1 text-yellow-500">
                      <FaStar className="text-xs" /> {review.rating}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDeleteClick(review._id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete Review"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {filteredReviews.map((review) => (
              <div
                key={review._id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={review.product.image}
                    alt={review.product.title}
                    className="w-12 h-12 object-contain rounded"
                  />
                  <div>
                    <div className="font-medium">{review.product.title}</div>
                    <button
                      onClick={() => handleShowAllReviews(review.product._id)}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      Show all reviews
                    </button>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Comment: </span>
                  {review.comment}
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar className="text-xs" />
                  <span className="text-sm">{review.rating}</span>
                </div>

                <div>
                  <span className="font-semibold">Date: </span>
                  {new Date(review.createdAt).toLocaleDateString()}
                </div>

                <button
                  onClick={() => handleDeleteClick(review._id)}
                  className="text-red-600 hover:text-red-800 transition text-sm flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <DeleteReviewModal
          orderId={selectedReviewId}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
};

export default SellerReviewList;
