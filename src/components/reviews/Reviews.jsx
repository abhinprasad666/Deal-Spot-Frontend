import React from "react";
import ReviewCard from "./ReviewCard";

const sampleReviews = [
  {
    _id: "1",
    name: "Abhinprasad",
    rating: 5,
    comment: "Excellent product! Fast delivery and top quality.",
    createdAt: "2025-06-01T10:15:00Z",
  },
  {
    _id: "2",
    name: "Shailaja",
    rating: 4,
    comment: "Very good but packaging could be better.",
    createdAt: "2025-06-10T12:40:00Z",
  },
  {
    _id: "3",
    name: "Sivaprasad",
    rating: 3,
    comment: "Average quality for the price.",
    createdAt: "2025-06-12T09:30:00Z",
  },
];

const Reviews = () => {
  return (
    <div className="my-6 max-w-3xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
      <div className="space-y-4">
        {sampleReviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
