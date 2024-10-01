import Star from "../UI/Star";
import classes from "./RatingStars.module.css";
import PropTypes from 'prop-types'; // Import PropTypes

const RatingStars = ({ setRating }) => {
  return (
    <div className={classes.ratingBox}>
      <fieldset className={classes.rating}>
        <legend>How was your experience with Poppin Sodas?</legend>
        <div className={classes.stars}>
          <Star value={1} readOnly={false} setRating={setRating} />
        </div>
      </fieldset>
    </div>
  );
};

// Define the expected prop types
RatingStars.propTypes = {
  setRating: PropTypes.func.isRequired, // setRating prop is required and must be a function
};

export default RatingStars;
