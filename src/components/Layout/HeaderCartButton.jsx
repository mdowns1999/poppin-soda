import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import PropTypes from 'prop-types'; // Import PropTypes

const HeaderCartButton = ({ onClick }) => {
  // Variables
  const [btnIsBumped, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // Determine the number of items in our cart.
  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  // Determine what CSS classes to use for the animation
  const btnClasses = `${classes.cartBtn} ${btnIsBumped ? classes.bump : ""}`;

  // This effect will help us with the bump animation. React will help with the cleanup of our timer automatically.
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

// Define the expected prop types
HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick must be a function and is required
};

export default HeaderCartButton;
