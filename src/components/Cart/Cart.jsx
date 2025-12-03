import React, { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import { Link, useLocation } from "react-router-dom"
import CartList from "./CartList"
import PropTypes from 'prop-types' // Import PropTypes

const Cart = ({ onClose }) => {
  // Variables
  let location = useLocation()
  const [toOrder, setOrderRoute] = useState("")
  const [cartHasOrders, setCarthasOrders] = useState(false)
  const btnClasses = `${cartHasOrders ? classes.cartBtn : classes.disabledBtn}`
  const cartCtx = useContext(CartContext)
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`

  // This useEffect is for the check on if the cart has orders or not.
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setOrderRoute(location)
      setCarthasOrders(false)
    } else {
      setOrderRoute("order")
      setCarthasOrders(true)
    }
  }, [cartCtx.items.length, location, cartCtx.items])

  return (
    <Modal onClose={onClose}>
      <div className={classes.cart}>
        <h1>Shopping Cart</h1>
        <CartList cartCtx={cartCtx} />
        <div className={classes.cartBottom}>
          <div>
            <h2>Total: ${totalAmount}</h2>
          </div>
          <div className={classes.cartBtns}>
            <button className={classes.cartBtn} onClick={onClose}>
              Close
            </button>
            <Link
              className={btnClasses}
              to={toOrder}
              onClick={cartHasOrders ? onClose : null}
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}

// Define PropTypes for Cart
Cart.propTypes = {
  onClose: PropTypes.func,
}

export default Cart
