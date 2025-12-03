import classes from "./Thankyou.module.css"
import PropTypes from "prop-types" // Import PropTypes

const ThankYouPage = ({ title, message }) => {
  return (
    <div>
      <h1 className="pageBanner">{title}</h1>
      <div className={classes.thankyou}>
        <p>{message}</p>
      </div>
    </div>
  )
}

// Define the expected prop types
ThankYouPage.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  message: PropTypes.string.isRequired, // message must be a string and is required
}

export default ThankYouPage
