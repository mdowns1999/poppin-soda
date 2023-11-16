import React, { useRef, useState } from "react";
import classes from "./SodaDetail.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";
import { useLoaderData, useNavigate } from "react-router-dom";
import fetchHttp from "../../helper/fetchHttp";
import priceBySize from "../../helper/priceBySize";
import getSodaImage from "../../helper/getSodaImage";

const SodaDetail = () => {
  let navigate = useNavigate();
  const data = useLoaderData();
  const sodaItem = data[0];
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();
  const [size, setSize] = useState("");

  const addtoCartHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: sodaItem.id + size,
      name: sodaItem.name,
      amount: +quantityRef.current.value,
      price: sodaItem.price,
      ingredients: sodaItem.ingredients,
      size: size,
    });

    quantityRef.current.value = "";
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        event.target[i].checked = null;
      }
    }

    //Navigate away to Products page
    navigate("/products");
  };

  let price = "Choose a size to see price.";
  if (size !== "") {
    price = `$${priceBySize(sodaItem.price, size).toFixed(
      2
    )} per ${size}oz drink`;
  }

  const image = getSodaImage(sodaItem.name);

  let ingredientsList = (
    <ul className={classes.ingredients}>
      {sodaItem.ingredients.ingredients.map((item, index) => (
        <li key={index}>
          <span>-</span> {item}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      {data[0].id === "pm1" && (
        <div className={classes.productOfMonthBanner}>
          <h1>Item of the Month</h1>
        </div>
      )}
      <section className={classes.productDetailSection}>
        <img src={image} alt={sodaItem.description}></img>
        <form className={classes.details} onSubmit={addtoCartHandler}>
          <h2>{sodaItem.name}</h2>
          <span>{price}</span>
          <p>{sodaItem.description}</p>
          <div>
            <h3>Ingredients:</h3>
            {ingredientsList}
          </div>
          <QuantitySelect quantityRef={quantityRef} />

          <fieldset className={classes.sizeBox}>
            <SizeSelect setSize={setSize} />
          </fieldset>

          <Button>Add to Cart</Button>
        </form>
      </section>
    </>
  );
};

export default SodaDetail;

export async function loader({ request, params }) {
  const id = params.id;
  let error = {
    message: "Could not get soda item!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/sodas/" + id,
    error,
  });
}
