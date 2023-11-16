import React, { Fragment } from "react";
import SodaItem from "./SodaItem";
import classes from "./SodaProducts.module.css";
import Button from "../UI/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import fetchHttp from "../../helper/fetchHttp";

const SodaProducts = () => {
  const navigate = useNavigate();
  const SODAS = useLoaderData();
  const sodaList = (
    <>
      {SODAS.map((item) => (
        <SodaItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
        />
      ))}

      <SodaItem
        key={"custom-1"}
        id={"custom"}
        name={"Custom Drink"}
        description={"Build your own delicious soda!"}
      />
    </>
  );

  const navigateToDrinkHandler = () => {
    navigate("pm1");
  };

  return (
    <Fragment>
      <section className={classes.productOfMonth}>
        <img src={require("../../images/root.jpg")} alt="Custom Soda"></img>
        <div>
          <h1>Try our Item of the Month!</h1>
          <p>
            Try our new Carmel Root beer Froth! This drink is a limited-time
            drink for this fall only! Try sipping on a delicious root beer mixed
            with creamy caramel and soothing vanilla flavoring. Try this tasty
            new drink while supplies last. Order now!
          </p>
          <Button onClick={navigateToDrinkHandler}>Order Drink</Button>
        </div>
      </section>
      <section className="pageBanner">
        <h1>Products</h1>
      </section>
      <ul className={classes.products}>{sodaList} </ul>
    </Fragment>
  );
};

export default SodaProducts;

export async function loader() {
  let error = {
    message:
      "Oh no! Looks like we have a mess on our end.  We are getting it cleaned up as fast as we can.  Please try again later!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/sodas",
    error,
  });
}
