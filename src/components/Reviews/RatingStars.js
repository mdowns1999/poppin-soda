import Star from "../UI/Star";
import classes from "./RatingStars.module.css";

const RatingStars = (props) => {
  return (
    <div className={classes.ratingBox}>
      <fieldset className={classes.rating}>
        <legend>How was your experience with Poppin Sodas?</legend>
        <div className={classes.stars}>
          <Star value={1} readOnly={false} setRating={props.setRating} />
        </div>
      </fieldset>
    </div>
  );
};

export default RatingStars;
