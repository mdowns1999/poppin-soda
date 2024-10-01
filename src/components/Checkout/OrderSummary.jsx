import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import fetchHttp from "../../helper/fetchHttp";

const postOrder = async (event, orderNumber, cart) => {
  const error = {
    message: "Could not send soda order!",
    status: 500,
  };

  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders",
    error,
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: {
      order_id: +orderNumber,
      order_num: +orderNumber,
      name: event.target.orderName.value.toString(),
      phone: event.target.orderPhone.value.toString(),
      notes: event.target.orderNotes.value.toString(),
      cart: cart,
    },
  });
};

const OrderSummary = () => {
  const [error, setError] = useState(null);
  const cartCtx = useContext(CartContext);
  const ORDERS = useLoaderData();
  const navigate = useNavigate();

  // Check if any orders are in the cart, navigate away if they don't
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      navigate("/products");
    }
  }, [cartCtx.items.length, navigate]);

  // Generate a random order number
  const generateOrderNumber = () => {
    let randNum;
    let done = false;

    while (!done) {
      randNum = Math.floor(Math.random() * 1000) + 1;

      // Check if the number is already in the database
      if (!ORDERS.some((order) => order.order_id === randNum)) {
        done = true; // Valid order number found
      }
    }
    return randNum; // Return the valid order number
  };

  // Set the total Amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const submitOrderHandler = async (event) => {
    event.preventDefault();

    // Generate a new order number
    const num = generateOrderNumber();

    // Send POST request
    try {
      const result = await postOrder(event, num, cartCtx.items);

      // Check if the response is ok
      if (result.ok) {
        navigate("/confirm/" + num); // Navigate with the correct order number
      } else {
        // Handle server error responses
        const errorMessage = await result.text(); // Get error message from response body
        setError(`Order submission failed: ${errorMessage || 'Something went wrong. Please try again later!'}`);
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.log(error)
      setError(`Network error. Something is wrong on our end.  Please Try back later!`);
    }
  };

  return (
    <div>
      <h1 className="pageBanner">Order Summary</h1>
      <form
        className={classes.orderDetailSection}
        onSubmit={submitOrderHandler}
      >
        <div>
          <p>
            Please enter your name and number for the order. Please include any
            additional things we need to be aware of. Also, please verify
            your order one last time before sending it.
          </p>
        </div>
        <div className={classes.orderInputBox}>
          <div className={classes.inputBox}>
            <label htmlFor="orderName"><span>*</span>Name:</label>
            <input type="text" name="orderName" id="orderName" required />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="orderPhone"><span>*</span>Phone: (ex 555-555-5555)</label>
            <input
              type="tel"
              name="orderPhone"
              id="orderPhone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="500-555-5555"
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="orderNotes">Notes:</label>
            <textarea name="orderNotes" id="orderNotes" />
          </div>
        </div>
        <CartList cartCtx={cartCtx} />
        <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
        <Button>Place Order</Button>
        {error && (
  <div className={classes.error}>
    <i className="material-icons">error_outline</i> {/* Optional icon */}
    {error}
  </div>
)}
      </form>
    </div>
  );
};

export default OrderSummary;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  let error = {
    message: "Could not get orders!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders",
    error,
  });
}
