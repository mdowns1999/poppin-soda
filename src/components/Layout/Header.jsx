import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../../store/cart-context";
import logo from "../../images/sodaLogo.png";
import PropTypes from 'prop-types'; // Import PropTypes

const Header = ({ onShowCart }) => {
  //Variables
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  let header = "";

  //Check what page we are on.  If we are on the home we we display a different header than the rest of the site.
  if (location.pathname === "/") {
    header = (
      <section className={classes.headerHome}>
        <Link to="/">
          <img
            src={logo}
            alt="Poppin Soda Shop Logo"
          ></img>
        </Link>
        <div className={classes.cartBox}>
          {cartCtx.items.length !== 0 && (
            <HeaderCartButton onClick={onShowCart} />
          )}
        </div>
        <div className={classes.navBox}>
          <Navigation />
        </div>
      </section>
    );
  } else {
    header = (
      <>
        <section className={classes.header}>
          <Link to="/">
            <img
              src={logo}
              alt="Poppin Soda Shop Logo"
            ></img>
          </Link>
          <div>
            <HeaderCartButton onClick={onShowCart} />
          </div>
        </section>
        <Navigation />
      </>
    );
  }

  return <header>{header}</header>;
};

// Define the expected prop types
Header.propTypes = {
  onShowCart: PropTypes.func.isRequired, // onShowCart must be a function and is required
};

export default Header;
