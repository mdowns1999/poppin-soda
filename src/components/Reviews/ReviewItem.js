import Star from "../UI/Star";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <li>
      <section className={classes.ReviewHeader}>
        <div>
          <Star value={+props.rating} readOnly={true} />
        </div>
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </section>
      <section className={classes.ReviewTextBox}>
        <p>{props.message}</p>
      </section>
    </li>
  );
};

export default ReviewItem;
