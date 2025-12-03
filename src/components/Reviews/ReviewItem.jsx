import Star from "../UI/Star"
import classes from "./ReviewItem.module.css"
import PropTypes from "prop-types" // Import PropTypes

const ReviewItem = ({ rating, name, date, message }) => {
  return (
    <li>
      <section className={classes.ReviewHeader}>
        <div>
          <Star value={+rating} readOnly={true} />
        </div>
        <h2>{name}</h2>
        <p>{date}</p>
      </section>
      <section className={classes.ReviewTextBox}>
        <p>{message}</p>
      </section>
    </li>
  )
}

// Define the expected prop types
ReviewItem.propTypes = {
  rating: PropTypes.number.isRequired, // rating must be a number and is required
  name: PropTypes.string.isRequired, // name must be a string and is required
  date: PropTypes.string.isRequired, // date must be a string and is required
  message: PropTypes.string.isRequired, // message must be a string and is required
}

export default ReviewItem
