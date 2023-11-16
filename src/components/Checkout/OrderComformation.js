import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import { useLoaderData, useNavigate } from "react-router-dom";
import fetchHttp from "../../helper/fetchHttp";
import ThankYouPage from "../Layout/Thankyou";
import classes from "./OrderConformation.module.css";
import Button from "../UI/Button";

const OrderConformation = () => {
  //Variables
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const data = useLoaderData();
  let orderNum = data[0].order_num;
  let orderName = data[0].name;
  let message = `${orderName}, thank you for your order! We will call you
  when you order is ready for pick-up. If you have any questions or
  changes to your order, please call us at (555) 555-555 with your name
  and confirmation number. Thank you for shopping at Poppin Sodas! We hope to see you again soon!`;

  //Clear the cart since the order is submitted.
  useEffect(() => {
    if (cartCtx.items.length !== 0) {
      cartCtx.clearCart();
    }
  });

  const navigateToAddReview = () => {
    navigate("../reviews/add");
  };

  return (
    <>
      <ThankYouPage title={"Order Conformation"} message={message} />
      <div>
        <p className={classes.orderNum}>
          Your order number is: <span>{orderNum}</span>.
        </p>
      </div>
      <div className={classes.review}>
        <h2>Want to leave a review?</h2>
        <p>
          If you would like to leave a review, click the button down below and
          simply enter your order number and a comment. We love to hear from
          you!
        </p>
        <Button onClick={navigateToAddReview}>Add a Review</Button>
      </div>
    </>
  );
};

export default OrderConformation;

export async function loader({ request, params }) {
  const id = params.id;
  let error = {
    message: "Could not get order item!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders/" + id,
    error,
  });
}
