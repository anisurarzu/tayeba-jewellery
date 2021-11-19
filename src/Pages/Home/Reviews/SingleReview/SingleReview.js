import React from "react";
import Rating from "react-rating";

const SingleReview = ({ review }) => {
  console.log("review", review);
  return (
    <div className=" border-r-2 border-gray p-4">
      <h1 className="text-xl">{review.name}</h1>
      <p>{review.details}</p>
      <Rating
        readonly
        initialRating={review.rating}
        fullSymbol={
          <img
            src="https://dictionary.cambridge.org/es-LA/images/thumb/star_noun_001_16391.jpg?version=5.0.196"
            className="icon"
          />
        }
      />
    </div>
  );
};

export default SingleReview;
