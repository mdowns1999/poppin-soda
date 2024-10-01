import PropTypes from "prop-types"; // Import PropTypes
import classes from "./Card.module.css";

const Card = ({className, children}) => {
  return (
    <section
      className={`${classes.card} ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

// Define the expected prop types
Card.propTypes = {
  className: PropTypes.string,  // className is optional and must be a string
  children: PropTypes.node.isRequired, // children is required and can be any renderable content (string, JSX, etc.)
};

export default Card;