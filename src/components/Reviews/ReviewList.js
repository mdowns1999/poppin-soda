import ReviewItem from "./ReviewItem";
import classes from "./ReviewList.module.css";

const ReviewList = (props) => {
  let reviewItems = props.reviews
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

export default ReviewList;
