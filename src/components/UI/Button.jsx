import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = ({onClick, children}) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

// Define the expected prop types
Button.propTypes = {
  onClick: PropTypes.func, // onClick must be a function
  children: PropTypes.node.isRequired // children is required and can be any renderable content (string, JSX, etc.)
};

export default Button;
