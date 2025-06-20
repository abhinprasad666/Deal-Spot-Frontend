import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import { showToast } from "../../utils/toastUtils";




const Reviews = () => {

  const {reviews,loading,error}=useSelector((state)=>state.review)

      useEffect(() => {
          if (error) {
              return showToast(` ${error}`, "error", "api-error");
          }
      }, [error]);
  return (

 <>
 {  loading?<Loader/>: 
    <div className="my-6 max-w-3xl mx-auto px-4 mt-[-4em]">
    {!reviews.length==0?<h2 className="text-xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
    :<h2 className="text-xl font-bold mb-4 text-gray-800"> No reviews yet. Be the first to review this product!</h2>}
      <div className="space-y-4">
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
}
    </>
  );
};

export default Reviews;
