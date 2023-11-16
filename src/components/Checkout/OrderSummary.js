import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import fetchHttp from "../../helper/fetchHttp";

const postOrder = (event, orderNumber, cart) => {
  let error = {
    message: "Could not send soda order!",
    status: 500,
  };

  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders",
    error,
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json", // this shows the expected content type
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
  let num = 0;
  const cartCtx = useContext(CartContext);
  const ORDERS = useLoaderData();

  //Check if any orders are in the cart incase they make it to this page.  Navigate away if they don't!
  let navigate = useNavigate();
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      navigate("/products");
    }
  }, [cartCtx.items.length, navigate]);

  //Generate an order number and make sure that number is not in the database already!
  const generateOrderNumber = () => {
    let done = false;

    while (!done) {
      let randNum = Math.floor(Math.random() * 1000) + 1;

      //Check if Number is in database already
      if (!ORDERS.some((order) => order.order_id === randNum)) {
        num = randNum;
        done = true;
      }
    }
  };

  //Set the total Amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const submitOrderHandler = (event) => {
    event.preventDefault();

    //Get Order number
    generateOrderNumber();

    //SEND POST REQUEST
    let promise = postOrder(event, num, cartCtx.items);

    //Go to conformation page
    promise.then((result) => {
      if (result.ok) {
        navigate("/confirm/" + num);
      }
    });
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
            Please Enter your name and number for the order. Please include any
            additional thigns we need to be aware about. Also, please verify
            your order one last time before sending it.
          </p>
        </div>
        <div className={classes.orderInputBox}>
          <div className={classes.inputBox}>
            <label htmlFor="orderName"><span>*</span>Name:</label>
            <input type="text" name="orderName" id="orderName" required></input>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="orderPhone"><span>*</span>Phone:</label>
            <input
              type="tel"
              name="orderPhone"
              id="orderPhone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            ></input>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="orderNotes">Notes:</label>
            <textarea type="text" name="orderNotes" id="orderNotes"></textarea>
          </div>
        </div>
        <CartList cartCtx={cartCtx} />
        <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
        <Button>Place Order</Button>
      </form>
    </div>
  );
};

export default OrderSummary;

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
