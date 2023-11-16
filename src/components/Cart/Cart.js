import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CartList from "./CartList";

const Cart = (props) => {
  //Vairables
  let location = useLocation();
  const [toOrder, setOrderRoute] = useState("");
  const [cartHasOrders, setCarthasOrders] = useState(false);
  const btnClasses = `${cartHasOrders ? classes.cartBtn : classes.disabledBtn}`;
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  // This useEffect is for the check on if the cart has orders or not.
  // This will allow us to disable the button so they cannot order when their is 0 orders.
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setOrderRoute(location);
      setCarthasOrders(false);
    } else {
      setOrderRoute("order");
      setCarthasOrders(true);
    }
  }, [cartCtx.items.length, location, cartCtx.items]);

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <h1>Shopping Cart</h1>
        <CartList cartCtx={cartCtx} />
        <div className={classes.cartBottom}>
          <div>
            <h2>Total: ${totalAmount}</h2>
          </div>
          <div className={classes.cartBtns}>
            <button className={classes.cartBtn} onClick={props.onClose}>
              Close
            </button>
            {/* {From the useEffect hook and our state, we will check if the cart has orders.  If not, do not let them continue} */}
            <Link
              className={btnClasses}
              to={toOrder}
              onClick={cartHasOrders ? props.onClose : null}
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
