import React from "react";
import ProductItem from "../UI/ProductItem";
import { Link } from "react-router-dom";
import getSodaImage from "../../helper/getSodaImage";

const SodaItem = (props) => {
  let image = getSodaImage(props.name);

  //Scroll to the top of the screen when we navigate away
  const scrollToTop = () => {
    if (props.id === "custom") {
      window.scrollTo(0, 0);
    } else {
      return;
    }
  };

  return (
    <ProductItem>
      <Link to={props.id} onClick={scrollToTop}>
        <img src={image} alt={props.name + " Drink Picture"}></img>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </Link>
    </ProductItem>
  );
};

export default SodaItem;
