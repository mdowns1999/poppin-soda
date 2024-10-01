import { useNavigate } from "react-router";
import { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddReviewForm.module.css";
import RatingStars from "./RatingStars";
import fetchHttp from "../../helper/fetchHttp";
import PropTypes from 'prop-types';

const hasOrder = (orders, orderNum) => {
  //Filter the array to just the order numberwe need.
  return orders.find((order) => order.order_num === orderNum);
};

const getName = (orders, orderNum) => {
  return orders.filter((order) => order.order_num === orderNum);
};

const getDate = () => {
  let date = new Date();
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

const postReview = (orderNum, message, name, rating, date) => {
  let error = {
    message: "Could not send soda order!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/reviews",
    error,
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json", // this shows the expected content type
    },
    body: {
      id: orderNum,
      name: name,
      rating: rating,
      message: message,
      date: date,
    },
  });
};

const AddReviewForm = ({orders}) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const submitReviewHandler = (event) => {
    event.preventDefault();
    if (hasOrder(orders, +event.target.orderNum.value)) {
      //Get the name of the order
      let order = getName(orders, +event.target.orderNum.value);
      //get the current date
      let date = getDate();

      //SEND POST REQUEST
      let promise = postReview(
        +event.target.orderNum.value,
        event.target.comments.value,
        order[0].name,
        rating,
        date
      );
      promise.then((result) => {
        if (result.ok) {
          //Reset the form values then navigate away.
          event.target.orderNum.value = "";
          event.target.comments.value = "";
          window.scrollTo(0, 0);
          navigate("/reviews");
        }
      });
    } else {
      alert(
        "That is not a valid Order Number! Please Check your number or make an order."
      );
    }
  };

  return (
    <form className={classes.reviewForm} onSubmit={submitReviewHandler}>
      <div className={classes.reviewWrapper}>
        <div className={classes.inputBox}>
          <label htmlFor="orderNum">Order Number:</label>
          <input
            name="orderNum"
            id="orderNum"
            type="number"
            min="1"
            max="10000"
            placeholder="1000"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="comments">Review:</label>
          <textarea
            name="comments"
            id="comments"
            type="text"
            placeholder="How did you like your order?"
          ></textarea>
        </div>
      </div>

      <RatingStars setRating={setRating} />

      <Button>Submit</Button>
    </form>
  );
};

// Define the expected prop types
AddReviewForm.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,      // Assuming each order has an id
      name: PropTypes.string.isRequired,     // Assuming each order has a name
    })
  ).isRequired,  // orders prop is required and must be an array of objects
};

export default AddReviewForm;
