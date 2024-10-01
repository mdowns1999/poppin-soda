import React from "react";
import PropTypes from 'prop-types';
import priceBySize from "../../helper/priceBySize";
import classes from "./CartItem.module.css";

const CartItem = ({price, size, name, amount, onRemove, onAdd, onDelete}) => {
  const sizePrice = `$${priceBySize(price, size).toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div className={classes.summary}>
        <h2>
          {name} ({size} OZ)
        </h2>
      </div>

      <span className={classes.price}>{sizePrice}</span>
      <div className={classes.actions}>
        <div>
          <button onClick={onRemove} data-testid="remove-button">−</button>
          <span className={classes.amount} data-testid="item-amount">{amount}</span>
          <button onClick={onAdd} data-testid="add-button">+</button>
        </div>
        <div className={classes.deleteBtn} onClick={onDelete}>
          <i className="material-icons deleteIcon">delete</i>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  price: PropTypes.number.isRequired,
  size: PropTypes.oneOf([8, 16, 32]).isRequired,  // Only allow these values
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;
