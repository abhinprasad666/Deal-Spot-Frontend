import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../redux/actions/reviewsActions/createReviewActions";
import { showToast } from "../../../utils/toastUtils";
import { getMyOrders } from "../../../redux/actions/ordersActions";
import { clearReviewState } from "../../../redux/slices/reviewsSlice";

const ProductReview = ({ isOpen, onClose, product }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const { error, uploadReview } = useSelector((state) => state.review);

  const handleSubmit = () => {
    if (rating < 1 || !comment.trim()) return;
    dispatch(createReview({ rating, comment }, product._id));
    setRating(0);
    setComment("");
    onClose();
  };

  useEffect(() => {
    if (error) {
      showToast(`${error}`, "error", "api-error");
    }
    if (uploadReview) {
      showToast("Review added successfully", "success", "add review");
      dispatch(getMyOrders);
      setInterval(()=>{
     dispatch(clearReviewState())
      },1000)
    }
  }, [error, uploadReview, dispatch]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Dialog.Panel className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-fadeIn">
        <Dialog.Title className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Rate & Review
        </Dialog.Title>

        {product && (
          <div className="flex items-center gap-4 mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="text-base font-medium text-gray-700">{product.title}</p>
            </div>
          </div>
        )}

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 transition-colors duration-200 cursor-pointer ${
                (hovered || rating) >= star ? "text-yellow-400 scale-110" : "text-gray-300"
              }`}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(star)}
              fill={(hovered || rating) >= star ? "#facc15" : "none"}
            />
          ))}
        </div>

        {/* Comment */}
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4 resize-none"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={rating < 1 || !comment.trim()}
            className="px-4 py-2 text-sm rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Review
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ProductReview;
