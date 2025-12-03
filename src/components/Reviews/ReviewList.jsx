import ReviewItem from "./ReviewItem"
import classes from "./ReviewList.module.css"
import PropTypes from "prop-types" // Import PropTypes

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
    .reverse()

  return <ul className={classes.reviewList}>{reviewItems}</ul>
}

// Define the expected prop types
ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      rating: PropTypes.number.isRequired, 
      message: PropTypes.string.isRequired, 
      date: PropTypes.string.isRequired, 
    })
  ).isRequired, 
}

export default ReviewList
