import priceBySize from "../../helper/priceBySize";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${priceBySize(props.price, props.size).toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div className={classes.summary}>
        <h2>
          {props.name} ({props.size} OZ)
        </h2>
      </div>

      <span className={classes.price}>{price}</span>
      <div className={classes.actions}>
        <div>
          {" "}
          <button onClick={props.onRemove}>−</button>
          <span className={classes.amount}>{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
        <div className={classes.deleteBtn} onClick={props.onDelete}>
          <i className="material-icons deleteIcon">delete</i>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
