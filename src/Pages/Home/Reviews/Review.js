import React from "react";

import { useEffect, useState } from "react";
import SingleReview from "./SingleReview/SingleReview";
const Review = () => {
  const [review, setReview] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold my-4 pb-8 gap-4">Customer Reviews</h1>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 ">
        {review?.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
