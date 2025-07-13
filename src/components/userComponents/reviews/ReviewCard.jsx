import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
    ));

    return (
        <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition dark:bg-gray-900 ">
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">{review.name}</h4>
                <div className="flex">{stars}</div>
            </div>
            <p className="text-sm text-gray-600 ">{review.comment}</p>
            <p className="text-xs text-gray-400 mt-2">Reviewed on {new Date(review.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default ReviewCard;
