import React from 'react';
import ReviewItem from "./ReviewItem";
import classes from "./ReviewList.module.css";
import PropTypes from 'prop-types'; // Import PropTypes

const ReviewList = ({ reviews }) => {
  let reviewItems = reviews
    .map((review) => (
      <ReviewItem
        key={review._id}
        name={review.name}
        rating={review.rating}
        message={review.message}
        date={review.date}
      />
    ))
    .reverse();
    
  return <ul className={classes.reviewList}>{reviewItems}</ul>;
};

// Define the expected prop types
ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, // Assuming _id is a string and is required
      name: PropTypes.string.isRequired, // name must be a string and is required
      rating: PropTypes.number.isRequired, // rating must be a number and is required
      message: PropTypes.string.isRequired, // message must be a string and is required
      date: PropTypes.string.isRequired, // date must be a string and is required
    })
  ).isRequired, // reviews must be an array and is required
};

export default ReviewList;
